# SDK

## Overview

<p>Detective uses machine learning and purpose-built visualizations to help you to analyze and investigate security issues across your Amazon Web Services (Amazon Web Services) workloads. Detective automatically extracts time-based events such as login attempts, API calls, and network traffic from CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by Amazon GuardDuty.</p> <p>The Detective API primarily supports the creation and management of behavior graphs. A behavior graph contains the extracted data from a set of member accounts, and is created and managed by an administrator account.</p> <p>To add a member account to the behavior graph, the administrator account sends an invitation to the account. When the account accepts the invitation, it becomes a member account in the behavior graph.</p> <p>Detective is also integrated with Organizations. The organization management account designates the Detective administrator account for the organization. That account becomes the administrator account for the organization behavior graph. The Detective administrator account is also the delegated administrator account for Detective in Organizations.</p> <p>The Detective administrator account can enable any organization account as a member account in the organization behavior graph. The organization accounts do not receive invitations. The Detective administrator account can also invite other accounts to the organization behavior graph.</p> <p>Every behavior graph is specific to a Region. You can only use the API to manage behavior graphs that belong to the Region that is associated with the currently selected endpoint.</p> <p>The administrator account for a behavior graph can use the Detective API to do the following:</p> <ul> <li> <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p> </li> <li> <p>View the list of member accounts in a behavior graph.</p> </li> <li> <p>Add member accounts to a behavior graph.</p> </li> <li> <p>Remove member accounts from a behavior graph.</p> </li> <li> <p>Apply tags to a behavior graph.</p> </li> </ul> <p>The organization management account can use the Detective API to select the delegated administrator for Detective.</p> <p>The Detective administrator account for an organization can use the Detective API to do the following:</p> <ul> <li> <p>Perform all of the functions of an administrator account.</p> </li> <li> <p>Determine whether to automatically enable new organization accounts as member accounts in the organization behavior graph.</p> </li> </ul> <p>An invited member account can use the Detective API to do the following:</p> <ul> <li> <p>View the list of behavior graphs that they are invited to.</p> </li> <li> <p>Accept an invitation to contribute to a behavior graph.</p> </li> <li> <p>Decline an invitation to contribute to a behavior graph.</p> </li> <li> <p>Remove their account from a behavior graph.</p> </li> </ul> <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p> <note> <p>We replaced the term "master account" with the term "administrator account." An administrator account is used to centrally manage multiple accounts. In the case of Detective, the administrator account manages the accounts in their behavior graph.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/detective/>
### Available Operations

* [acceptInvitation](#acceptinvitation) - <p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>
* [batchGetGraphMemberDatasources](#batchgetgraphmemberdatasources) - Gets data source package information for the behavior graph.
* [batchGetMembershipDatasources](#batchgetmembershipdatasources) - Gets information on the data source package history for an account.
* [createGraph](#creategraph) - <p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
* [createMembers](#createmembers) - <p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>
* [deleteGraph](#deletegraph) - <p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>
* [deleteMembers](#deletemembers) - <p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>
* [describeOrganizationConfiguration](#describeorganizationconfiguration) - <p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>
* [disableOrganizationAdminAccount](#disableorganizationadminaccount) - <p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>
* [disassociateMembership](#disassociatemembership) - <p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>
* [enableOrganizationAdminAccount](#enableorganizationadminaccount) - <p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>
* [getMembers](#getmembers) - Returns the membership details for specified member accounts for a behavior graph.
* [listDatasourcePackages](#listdatasourcepackages) - Lists data source packages in the behavior graph.
* [listGraphs](#listgraphs) - <p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>
* [listInvitations](#listinvitations) - <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
* [listMembers](#listmembers) - <p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>
* [listOrganizationAdminAccounts](#listorganizationadminaccounts) - Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.
* [listTagsForResource](#listtagsforresource) - Returns the tag values that are assigned to a behavior graph.
* [rejectInvitation](#rejectinvitation) - <p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>
* [startMonitoringMember](#startmonitoringmember) - <p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>
* [tagResource](#tagresource) - Applies tag values to a behavior graph.
* [untagResource](#untagresource) - Removes tags from a behavior graph.
* [updateDatasourcePackages](#updatedatasourcepackages) - Starts a data source packages for the behavior graph.
* [updateOrganizationConfiguration](#updateorganizationconfiguration) - Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.

## acceptInvitation

<p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptInvitationRequest;
import org.openapis.openapi.models.operations.AcceptInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptInvitationRequest req = new AcceptInvitationRequest(                new AcceptInvitationRequestBody("deserunt");) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AcceptInvitationResponse res = sdk.sdk.acceptInvitation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetGraphMemberDatasources

Gets data source package information for the behavior graph.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetGraphMemberDatasourcesRequest;
import org.openapis.openapi.models.operations.BatchGetGraphMemberDatasourcesRequestBody;
import org.openapis.openapi.models.operations.BatchGetGraphMemberDatasourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetGraphMemberDatasourcesRequest req = new BatchGetGraphMemberDatasourcesRequest(                new BatchGetGraphMemberDatasourcesRequestBody(                new String[]{{
                                                add("minus"),
                                                add("placeat"),
                                            }}, "voluptatum");) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            BatchGetGraphMemberDatasourcesResponse res = sdk.sdk.batchGetGraphMemberDatasources(req);

            if (res.batchGetGraphMemberDatasourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetMembershipDatasources

Gets information on the data source package history for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetMembershipDatasourcesRequest;
import org.openapis.openapi.models.operations.BatchGetMembershipDatasourcesRequestBody;
import org.openapis.openapi.models.operations.BatchGetMembershipDatasourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetMembershipDatasourcesRequest req = new BatchGetMembershipDatasourcesRequest(                new BatchGetMembershipDatasourcesRequestBody(                new String[]{{
                                                add("perferendis"),
                                                add("ipsam"),
                                                add("repellendus"),
                                            }});) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            BatchGetMembershipDatasourcesResponse res = sdk.sdk.batchGetMembershipDatasources(req);

            if (res.batchGetMembershipDatasourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGraph

<p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGraphRequest;
import org.openapis.openapi.models.operations.CreateGraphRequestBody;
import org.openapis.openapi.models.operations.CreateGraphResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGraphRequest req = new CreateGraphRequest(                new CreateGraphRequestBody() {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("esse", "totam");
                                    put("porro", "dolorum");
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                }};
                            }};) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            CreateGraphResponse res = sdk.sdk.createGraph(req);

            if (res.createGraphResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMembers

<p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMembersRequest;
import org.openapis.openapi.models.operations.CreateMembersRequestBody;
import org.openapis.openapi.models.operations.CreateMembersResponse;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMembersRequest req = new CreateMembersRequest(                new CreateMembersRequestBody(                new org.openapis.openapi.models.shared.Account[]{{
                                                add(new Account("cum", "esse") {{
                                                    accountId = "qui";
                                                    emailAddress = "impedit";
                                                }}),
                                                add(new Account("aspernatur", "perferendis") {{
                                                    accountId = "ipsum";
                                                    emailAddress = "excepturi";
                                                }}),
                                            }}, "ad") {{
                                disableEmailNotification = false;
                                message = "natus";
                            }};) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateMembersResponse res = sdk.sdk.createMembers(req);

            if (res.createMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGraph

<p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGraphRequest;
import org.openapis.openapi.models.operations.DeleteGraphRequestBody;
import org.openapis.openapi.models.operations.DeleteGraphResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGraphRequest req = new DeleteGraphRequest(                new DeleteGraphRequestBody("in");) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeleteGraphResponse res = sdk.sdk.deleteGraph(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMembers

<p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMembersRequest;
import org.openapis.openapi.models.operations.DeleteMembersRequestBody;
import org.openapis.openapi.models.operations.DeleteMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMembersRequest req = new DeleteMembersRequest(                new DeleteMembersRequestBody(                new String[]{{
                                                add("mollitia"),
                                                add("laborum"),
                                                add("dolores"),
                                            }}, "dolorem");) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            DeleteMembersResponse res = sdk.sdk.deleteMembers(req);

            if (res.deleteMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationConfiguration

<p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationConfigurationRequest req = new DescribeOrganizationConfigurationRequest(                new DescribeOrganizationConfigurationRequestBody("accusantium");) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
            }};            

            DescribeOrganizationConfigurationResponse res = sdk.sdk.describeOrganizationConfiguration(req);

            if (res.describeOrganizationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableOrganizationAdminAccount

<p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableOrganizationAdminAccountRequest;
import org.openapis.openapi.models.operations.DisableOrganizationAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableOrganizationAdminAccountRequest req = new DisableOrganizationAdminAccountRequest() {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "mollitia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quam";
            }};            

            DisableOrganizationAdminAccountResponse res = sdk.sdk.disableOrganizationAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateMembership

<p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateMembershipRequest;
import org.openapis.openapi.models.operations.DisassociateMembershipRequestBody;
import org.openapis.openapi.models.operations.DisassociateMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateMembershipRequest req = new DisassociateMembershipRequest(                new DisassociateMembershipRequestBody("velit");) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "quia";
                xAmzCredential = "quis";
                xAmzDate = "vitae";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "enim";
            }};            

            DisassociateMembershipResponse res = sdk.sdk.disassociateMembership(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableOrganizationAdminAccount

<p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableOrganizationAdminAccountRequest;
import org.openapis.openapi.models.operations.EnableOrganizationAdminAccountRequestBody;
import org.openapis.openapi.models.operations.EnableOrganizationAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableOrganizationAdminAccountRequest req = new EnableOrganizationAdminAccountRequest(                new EnableOrganizationAdminAccountRequestBody("quo");) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
            }};            

            EnableOrganizationAdminAccountResponse res = sdk.sdk.enableOrganizationAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMembers

Returns the membership details for specified member accounts for a behavior graph.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMembersRequest;
import org.openapis.openapi.models.operations.GetMembersRequestBody;
import org.openapis.openapi.models.operations.GetMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMembersRequest req = new GetMembersRequest(                new GetMembersRequestBody(                new String[]{{
                                                add("laborum"),
                                                add("quasi"),
                                                add("reiciendis"),
                                                add("voluptatibus"),
                                            }}, "vero");) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            GetMembersResponse res = sdk.sdk.getMembers(req);

            if (res.getMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasourcePackages

Lists data source packages in the behavior graph.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasourcePackagesRequest;
import org.openapis.openapi.models.operations.ListDatasourcePackagesRequestBody;
import org.openapis.openapi.models.operations.ListDatasourcePackagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasourcePackagesRequest req = new ListDatasourcePackagesRequest(                new ListDatasourcePackagesRequestBody("doloremque") {{
                                maxResults = 441711L;
                                nextToken = "ut";
                            }};) {{
                maxResults = "maiores";
                nextToken = "dicta";
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "iusto";
                xAmzDate = "dicta";
                xAmzSecurityToken = "harum";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            ListDatasourcePackagesResponse res = sdk.sdk.listDatasourcePackages(req);

            if (res.listDatasourcePackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGraphs

<p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGraphsRequest;
import org.openapis.openapi.models.operations.ListGraphsRequestBody;
import org.openapis.openapi.models.operations.ListGraphsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGraphsRequest req = new ListGraphsRequest(                new ListGraphsRequestBody() {{
                                maxResults = 918236L;
                                nextToken = "quae";
                            }};) {{
                maxResults = "ipsum";
                nextToken = "quidem";
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
            }};            

            ListGraphsResponse res = sdk.sdk.listGraphs(req);

            if (res.listGraphsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInvitations

<p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInvitationsRequest;
import org.openapis.openapi.models.operations.ListInvitationsRequestBody;
import org.openapis.openapi.models.operations.ListInvitationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInvitationsRequest req = new ListInvitationsRequest(                new ListInvitationsRequestBody() {{
                                maxResults = 921158L;
                                nextToken = "sint";
                            }};) {{
                maxResults = "veritatis";
                nextToken = "itaque";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            ListInvitationsResponse res = sdk.sdk.listInvitations(req);

            if (res.listInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMembers

<p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMembersRequest;
import org.openapis.openapi.models.operations.ListMembersRequestBody;
import org.openapis.openapi.models.operations.ListMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMembersRequest req = new ListMembersRequest(                new ListMembersRequestBody("quibusdam") {{
                                maxResults = 289406L;
                                nextToken = "modi";
                            }};) {{
                maxResults = "qui";
                nextToken = "aliquid";
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            ListMembersResponse res = sdk.sdk.listMembers(req);

            if (res.listMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrganizationAdminAccounts

Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrganizationAdminAccountsRequest;
import org.openapis.openapi.models.operations.ListOrganizationAdminAccountsRequestBody;
import org.openapis.openapi.models.operations.ListOrganizationAdminAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOrganizationAdminAccountsRequest req = new ListOrganizationAdminAccountsRequest(                new ListOrganizationAdminAccountsRequestBody() {{
                                maxResults = 677817L;
                                nextToken = "excepturi";
                            }};) {{
                maxResults = "tempora";
                nextToken = "facilis";
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "delectus";
                xAmzDate = "eum";
                xAmzSecurityToken = "non";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sint";
            }};            

            ListOrganizationAdminAccountsResponse res = sdk.sdk.listOrganizationAdminAccounts(req);

            if (res.listOrganizationAdminAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns the tag values that are assigned to a behavior graph.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("provident") {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectInvitation

<p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectInvitationRequest;
import org.openapis.openapi.models.operations.RejectInvitationRequestBody;
import org.openapis.openapi.models.operations.RejectInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectInvitationRequest req = new RejectInvitationRequest(                new RejectInvitationRequestBody("in");) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            RejectInvitationResponse res = sdk.sdk.rejectInvitation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startMonitoringMember

<p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartMonitoringMemberRequest;
import org.openapis.openapi.models.operations.StartMonitoringMemberRequestBody;
import org.openapis.openapi.models.operations.StartMonitoringMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartMonitoringMemberRequest req = new StartMonitoringMemberRequest(                new StartMonitoringMemberRequestBody("aliquid", "laborum");) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            StartMonitoringMemberResponse res = sdk.sdk.startMonitoringMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Applies tag values to a behavior graph.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("id", "blanditiis");
                                                put("deleniti", "sapiente");
                                                put("amet", "deserunt");
                                            }});, "nisi") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from a behavior graph.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("id",                 new String[]{{
                                add("labore"),
                                add("suscipit"),
                            }}) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDatasourcePackages

Starts a data source packages for the behavior graph.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatasourcePackagesRequest;
import org.openapis.openapi.models.operations.UpdateDatasourcePackagesRequestBody;
import org.openapis.openapi.models.operations.UpdateDatasourcePackagesResponse;
import org.openapis.openapi.models.shared.DatasourcePackageEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatasourcePackagesRequest req = new UpdateDatasourcePackagesRequest(                new UpdateDatasourcePackagesRequestBody(                new org.openapis.openapi.models.shared.DatasourcePackageEnum[]{{
                                                add(DatasourcePackageEnum.DETECTIVE_CORE),
                                                add(DatasourcePackageEnum.EKS_AUDIT),
                                                add(DatasourcePackageEnum.EKS_AUDIT),
                                            }}, "sint");) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            UpdateDatasourcePackagesResponse res = sdk.sdk.updateDatasourcePackages(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationConfiguration

Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationConfigurationRequest req = new UpdateOrganizationConfigurationRequest(                new UpdateOrganizationConfigurationRequestBody("odit") {{
                                autoEnable = false;
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "iure";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "maxime";
            }};            

            UpdateOrganizationConfigurationResponse res = sdk.sdk.updateOrganizationConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
