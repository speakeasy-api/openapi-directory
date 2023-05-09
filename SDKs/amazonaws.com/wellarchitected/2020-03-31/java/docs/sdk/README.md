# SDK

## Overview

<fullname>Well-Architected Tool</fullname> <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information about the Well-Architected Tool, see the <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/wellarchitected/>
### Available Operations

* [associateLenses](#associatelenses) - <p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>
* [createLensShare](#createlensshare) - <p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [createLensVersion](#createlensversion) - <p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>
* [createMilestone](#createmilestone) - Create a milestone for an existing workload.
* [createWorkload](#createworkload) - <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>
* [createWorkloadShare](#createworkloadshare) - <p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
* [deleteLens](#deletelens) - <p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [deleteLensShare](#deletelensshare) - <p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [deleteWorkload](#deleteworkload) - Delete an existing workload.
* [deleteWorkloadShare](#deleteworkloadshare) - Delete a workload share.
* [disassociateLenses](#disassociatelenses) - <p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
* [exportLens](#exportlens) - <p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* [getAnswer](#getanswer) - Get the answer to a specific question in a workload review.
* [getConsolidatedReport](#getconsolidatedreport) - <p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>
* [getLens](#getlens) - Get an existing lens.
* [getLensReview](#getlensreview) - Get lens review.
* [getLensReviewReport](#getlensreviewreport) - Get lens review report.
* [getLensVersionDifference](#getlensversiondifference) - Get lens version differences.
* [getMilestone](#getmilestone) - Get a milestone for an existing workload.
* [getWorkload](#getworkload) - Get an existing workload.
* [importLens](#importlens) - <p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* [listAnswers](#listanswers) - List of answers for a particular workload and lens.
* [listCheckDetails](#listcheckdetails) - List of Trusted Advisor check details by account related to the workload.
* [listCheckSummaries](#listchecksummaries) - List of Trusted Advisor checks summarized for all accounts related to the workload.
* [listLensReviewImprovements](#listlensreviewimprovements) - List lens review improvements.
* [listLensReviews](#listlensreviews) - List lens reviews for a particular workload.
* [listLensShares](#listlensshares) - List the lens shares associated with the lens.
* [listLenses](#listlenses) - List the available lenses.
* [listMilestones](#listmilestones) - List all milestones for an existing workload.
* [listNotifications](#listnotifications) - List lens notifications.
* [listShareInvitations](#listshareinvitations) - List the workload invitations.
* [listTagsForResource](#listtagsforresource) - <p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* [listWorkloadShares](#listworkloadshares) - List the workload shares associated with the workload.
* [listWorkloads](#listworkloads) - Paginated list of workloads.
* [tagResource](#tagresource) - <p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* [untagResource](#untagresource) - <p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
* [updateAnswer](#updateanswer) - Update the answer to a specific question in a workload review.
* [updateGlobalSettings](#updateglobalsettings) - Updates whether the Amazon Web Services account is opted into organization sharing features.
* [updateLensReview](#updatelensreview) - Update lens review for a particular workload.
* [updateShareInvitation](#updateshareinvitation) - <p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>
* [updateWorkload](#updateworkload) - Update an existing workload.
* [updateWorkloadShare](#updateworkloadshare) - Update a workload share.
* [upgradeLensReview](#upgradelensreview) - Upgrade lens review for a particular workload.

## associateLenses

<p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateLensesRequest;
import org.openapis.openapi.models.operations.AssociateLensesRequestBody;
import org.openapis.openapi.models.operations.AssociateLensesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateLensesRequest req = new AssociateLensesRequest(                new AssociateLensesRequestBody(                new String[]{{
                                                add("ipsa"),
                                                add("delectus"),
                                                add("tempora"),
                                                add("suscipit"),
                                            }});, "molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            AssociateLensesResponse res = sdk.sdk.associateLenses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLensShare

<p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLensShareRequest;
import org.openapis.openapi.models.operations.CreateLensShareRequestBody;
import org.openapis.openapi.models.operations.CreateLensShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLensShareRequest req = new CreateLensShareRequest("ab",                 new CreateLensShareRequestBody("quis", "veritatis");) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            CreateLensShareResponse res = sdk.sdk.createLensShare(req);

            if (res.createLensShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLensVersion

<p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLensVersionRequest;
import org.openapis.openapi.models.operations.CreateLensVersionRequestBody;
import org.openapis.openapi.models.operations.CreateLensVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLensVersionRequest req = new CreateLensVersionRequest("at",                 new CreateLensVersionRequestBody("maiores", "molestiae") {{
                                isMajorVersion = false;
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "quod";
                xAmzCredential = "esse";
                xAmzDate = "totam";
                xAmzSecurityToken = "porro";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateLensVersionResponse res = sdk.sdk.createLensVersion(req);

            if (res.createLensVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMilestone

Create a milestone for an existing workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMilestoneRequest;
import org.openapis.openapi.models.operations.CreateMilestoneRequestBody;
import org.openapis.openapi.models.operations.CreateMilestoneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMilestoneRequest req = new CreateMilestoneRequest(                new CreateMilestoneRequestBody("officia", "occaecati");, "fugit") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateMilestoneResponse res = sdk.sdk.createMilestone(req);

            if (res.createMilestoneOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkload

<p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkloadRequest;
import org.openapis.openapi.models.operations.CreateWorkloadRequestBody;
import org.openapis.openapi.models.operations.CreateWorkloadRequestBodyDiscoveryConfig;
import org.openapis.openapi.models.operations.CreateWorkloadRequestBodyEnvironmentEnum;
import org.openapis.openapi.models.operations.CreateWorkloadResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrustedAdvisorIntegrationStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkloadRequest req = new CreateWorkloadRequest(                new CreateWorkloadRequestBody("qui", "impedit", CreateWorkloadRequestBodyEnvironmentEnum.PREPRODUCTION,                 new String[]{{
                                                add("ipsum"),
                                                add("excepturi"),
                                            }}, "aspernatur") {{
                                accountIds = new String[]{{
                                    add("ad"),
                                }};
                                applications = new String[]{{
                                    add("sed"),
                                    add("iste"),
                                    add("dolor"),
                                }};
                                architecturalDesign = "natus";
                                awsRegions = new String[]{{
                                    add("hic"),
                                    add("saepe"),
                                }};
                                discoveryConfig = new CreateWorkloadRequestBodyDiscoveryConfig() {{
                                    trustedAdvisorIntegrationStatus = TrustedAdvisorIntegrationStatusEnum.DISABLED;
                                }};;
                                industry = "in";
                                industryType = "corporis";
                                nonAwsRegions = new String[]{{
                                    add("iure"),
                                    add("saepe"),
                                    add("quidem"),
                                }};
                                notes = "architecto";
                                pillarPriorities = new String[]{{
                                    add("reiciendis"),
                                }};
                                reviewOwner = "est";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("laborum", "dolores");
                                    put("dolorem", "corporis");
                                    put("explicabo", "nobis");
                                }};
                            }};) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
            }};            

            CreateWorkloadResponse res = sdk.sdk.createWorkload(req);

            if (res.createWorkloadOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkloadShare

<p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkloadShareRequest;
import org.openapis.openapi.models.operations.CreateWorkloadShareRequestBody;
import org.openapis.openapi.models.operations.CreateWorkloadShareRequestBodyPermissionTypeEnum;
import org.openapis.openapi.models.operations.CreateWorkloadShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkloadShareRequest req = new CreateWorkloadShareRequest(                new CreateWorkloadShareRequestBody("doloribus", CreateWorkloadShareRequestBodyPermissionTypeEnum.CONTRIBUTOR, "architecto");, "mollitia") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            CreateWorkloadShareResponse res = sdk.sdk.createWorkloadShare(req);

            if (res.createWorkloadShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLens

<p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLensLensStatusEnum;
import org.openapis.openapi.models.operations.DeleteLensRequest;
import org.openapis.openapi.models.operations.DeleteLensResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLensRequest req = new DeleteLensRequest("quam", "molestiae", DeleteLensLensStatusEnum.ALL) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "quia";
                xAmzCredential = "quis";
                xAmzDate = "vitae";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "enim";
            }};            

            DeleteLensResponse res = sdk.sdk.deleteLens(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLensShare

<p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLensShareRequest;
import org.openapis.openapi.models.operations.DeleteLensShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLensShareRequest req = new DeleteLensShareRequest("quo", "sequi", "tenetur") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "id";
                xAmzCredential = "possimus";
                xAmzDate = "aut";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "error";
                xAmzSignedHeaders = "temporibus";
            }};            

            DeleteLensShareResponse res = sdk.sdk.deleteLensShare(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkload

Delete an existing workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkloadRequest;
import org.openapis.openapi.models.operations.DeleteWorkloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkloadRequest req = new DeleteWorkloadRequest("quasi", "reiciendis") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteWorkloadResponse res = sdk.sdk.deleteWorkload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkloadShare

Delete a workload share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkloadShareRequest;
import org.openapis.openapi.models.operations.DeleteWorkloadShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkloadShareRequest req = new DeleteWorkloadShareRequest("cum", "perferendis", "doloremque") {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            DeleteWorkloadShareResponse res = sdk.sdk.deleteWorkloadShare(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateLenses

<p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateLensesRequest;
import org.openapis.openapi.models.operations.DisassociateLensesRequestBody;
import org.openapis.openapi.models.operations.DisassociateLensesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateLensesRequest req = new DisassociateLensesRequest(                new DisassociateLensesRequestBody(                new String[]{{
                                                add("enim"),
                                                add("accusamus"),
                                                add("commodi"),
                                            }});, "repudiandae") {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            DisassociateLensesResponse res = sdk.sdk.disassociateLenses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportLens

<p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportLensRequest;
import org.openapis.openapi.models.operations.ExportLensResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportLensRequest req = new ExportLensRequest("rem") {{
                lensVersion = "voluptates";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "sint";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "enim";
            }};            

            ExportLensResponse res = sdk.sdk.exportLens(req);

            if (res.exportLensOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnswer

Get the answer to a specific question in a workload review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnswerRequest;
import org.openapis.openapi.models.operations.GetAnswerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnswerRequest req = new GetAnswerRequest("est", "quibusdam", "explicabo") {{
                milestoneNumber = 647174L;
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GetAnswerResponse res = sdk.sdk.getAnswer(req);

            if (res.getAnswerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsolidatedReport

<p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsolidatedReportFormatEnum;
import org.openapis.openapi.models.operations.GetConsolidatedReportRequest;
import org.openapis.openapi.models.operations.GetConsolidatedReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConsolidatedReportRequest req = new GetConsolidatedReportRequest(GetConsolidatedReportFormatEnum.PDF) {{
                includeSharedResources = false;
                maxResults = 164940L;
                nextToken = "assumenda";
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
            }};            

            GetConsolidatedReportResponse res = sdk.sdk.getConsolidatedReport(req);

            if (res.getConsolidatedReportOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLens

Get an existing lens.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLensRequest;
import org.openapis.openapi.models.operations.GetLensResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLensRequest req = new GetLensRequest("labore") {{
                lensVersion = "delectus";
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GetLensResponse res = sdk.sdk.getLens(req);

            if (res.getLensOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLensReview

Get lens review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLensReviewRequest;
import org.openapis.openapi.models.operations.GetLensReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLensReviewRequest req = new GetLensReviewRequest("officia", "dolor") {{
                milestoneNumber = 891555L;
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            GetLensReviewResponse res = sdk.sdk.getLensReview(req);

            if (res.getLensReviewOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLensReviewReport

Get lens review report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLensReviewReportRequest;
import org.openapis.openapi.models.operations.GetLensReviewReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLensReviewReportRequest req = new GetLensReviewReportRequest("magnam", "cumque") {{
                milestoneNumber = 813798L;
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            GetLensReviewReportResponse res = sdk.sdk.getLensReviewReport(req);

            if (res.getLensReviewReportOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLensVersionDifference

Get lens version differences.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLensVersionDifferenceRequest;
import org.openapis.openapi.models.operations.GetLensVersionDifferenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLensVersionDifferenceRequest req = new GetLensVersionDifferenceRequest("delectus") {{
                baseLensVersion = "quidem";
                targetLensVersion = "provident";
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "id";
                xAmzCredential = "blanditiis";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "deserunt";
            }};            

            GetLensVersionDifferenceResponse res = sdk.sdk.getLensVersionDifference(req);

            if (res.getLensVersionDifferenceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMilestone

Get a milestone for an existing workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMilestoneRequest;
import org.openapis.openapi.models.operations.GetMilestoneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMilestoneRequest req = new GetMilestoneRequest(423855L, "natus") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            GetMilestoneResponse res = sdk.sdk.getMilestone(req);

            if (res.getMilestoneOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkload

Get an existing workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkloadRequest;
import org.openapis.openapi.models.operations.GetWorkloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkloadRequest req = new GetWorkloadRequest("labore") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            GetWorkloadResponse res = sdk.sdk.getWorkload(req);

            if (res.getWorkloadOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importLens

<p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportLensRequest;
import org.openapis.openapi.models.operations.ImportLensRequestBody;
import org.openapis.openapi.models.operations.ImportLensResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportLensRequest req = new ImportLensRequest(                new ImportLensRequestBody("et", "excepturi") {{
                                lensAlias = "ullam";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quos", "sint");
                                    put("accusantium", "mollitia");
                                    put("reiciendis", "mollitia");
                                }};
                            }};) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            ImportLensResponse res = sdk.sdk.importLens(req);

            if (res.importLensOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnswers

List of answers for a particular workload and lens.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnswersRequest;
import org.openapis.openapi.models.operations.ListAnswersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnswersRequest req = new ListAnswersRequest("doloribus", "debitis") {{
                maxResults = 260341L;
                milestoneNumber = 806194L;
                nextToken = "deleniti";
                pillarId = "facilis";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "nihil";
            }};            

            ListAnswersResponse res = sdk.sdk.listAnswers(req);

            if (res.listAnswersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCheckDetails

List of Trusted Advisor check details by account related to the workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCheckDetailsRequest;
import org.openapis.openapi.models.operations.ListCheckDetailsRequestBody;
import org.openapis.openapi.models.operations.ListCheckDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCheckDetailsRequest req = new ListCheckDetailsRequest(                new ListCheckDetailsRequestBody("quibusdam", "sed", "saepe", "pariatur") {{
                                maxResults = 37559L;
                                nextToken = "consequuntur";
                            }};, "praesentium") {{
                maxResults = "natus";
                nextToken = "magni";
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListCheckDetailsResponse res = sdk.sdk.listCheckDetails(req);

            if (res.listCheckDetailsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCheckSummaries

List of Trusted Advisor checks summarized for all accounts related to the workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCheckSummariesRequest;
import org.openapis.openapi.models.operations.ListCheckSummariesRequestBody;
import org.openapis.openapi.models.operations.ListCheckSummariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCheckSummariesRequest req = new ListCheckSummariesRequest(                new ListCheckSummariesRequestBody("ea", "accusantium", "ab", "maiores") {{
                                maxResults = 697429L;
                                nextToken = "ipsam";
                            }};, "voluptate") {{
                maxResults = "autem";
                nextToken = "nam";
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "nemo";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "amet";
            }};            

            ListCheckSummariesResponse res = sdk.sdk.listCheckSummaries(req);

            if (res.listCheckSummariesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLensReviewImprovements

List lens review improvements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLensReviewImprovementsRequest;
import org.openapis.openapi.models.operations.ListLensReviewImprovementsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLensReviewImprovementsRequest req = new ListLensReviewImprovementsRequest("cumque", "corporis") {{
                maxResults = 944124L;
                milestoneNumber = 729991L;
                nextToken = "nobis";
                pillarId = "dolores";
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
            }};            

            ListLensReviewImprovementsResponse res = sdk.sdk.listLensReviewImprovements(req);

            if (res.listLensReviewImprovementsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLensReviews

List lens reviews for a particular workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLensReviewsRequest;
import org.openapis.openapi.models.operations.ListLensReviewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLensReviewsRequest req = new ListLensReviewsRequest("dolores") {{
                maxResults = 793698L;
                milestoneNumber = 463451L;
                nextToken = "dolor";
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            ListLensReviewsResponse res = sdk.sdk.listLensReviews(req);

            if (res.listLensReviewsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLensShares

List the lens shares associated with the lens.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLensSharesRequest;
import org.openapis.openapi.models.operations.ListLensSharesResponse;
import org.openapis.openapi.models.operations.ListLensSharesStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLensSharesRequest req = new ListLensSharesRequest("porro") {{
                maxResults = 164694L;
                nextToken = "blanditiis";
                sharedWithPrefix = "error";
                status = ListLensSharesStatusEnum.ACCEPTED;
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            ListLensSharesResponse res = sdk.sdk.listLensShares(req);

            if (res.listLensSharesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLenses

List the available lenses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLensesLensStatusEnum;
import org.openapis.openapi.models.operations.ListLensesLensTypeEnum;
import org.openapis.openapi.models.operations.ListLensesRequest;
import org.openapis.openapi.models.operations.ListLensesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLensesRequest req = new ListLensesRequest() {{
                lensName = "deleniti";
                lensStatus = ListLensesLensStatusEnum.PUBLISHED;
                lensType = ListLensesLensTypeEnum.CUSTOM_SHARED;
                maxResults = 750844L;
                nextToken = "libero";
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            ListLensesResponse res = sdk.sdk.listLenses(req);

            if (res.listLensesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMilestones

List all milestones for an existing workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMilestonesRequest;
import org.openapis.openapi.models.operations.ListMilestonesRequestBody;
import org.openapis.openapi.models.operations.ListMilestonesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMilestonesRequest req = new ListMilestonesRequest(                new ListMilestonesRequestBody() {{
                                maxResults = 218749L;
                                nextToken = "hic";
                            }};, "excepturi") {{
                maxResults = "cum";
                nextToken = "voluptate";
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            ListMilestonesResponse res = sdk.sdk.listMilestones(req);

            if (res.listMilestonesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNotifications

List lens notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNotificationsRequest;
import org.openapis.openapi.models.operations.ListNotificationsRequestBody;
import org.openapis.openapi.models.operations.ListNotificationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNotificationsRequest req = new ListNotificationsRequest(                new ListNotificationsRequestBody() {{
                                maxResults = 434417L;
                                nextToken = "odio";
                                workloadId = "quaerat";
                            }};) {{
                maxResults = "accusamus";
                nextToken = "quidem";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "natus";
                xAmzDate = "eos";
                xAmzSecurityToken = "atque";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "fugiat";
            }};            

            ListNotificationsResponse res = sdk.sdk.listNotifications(req);

            if (res.listNotificationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listShareInvitations

List the workload invitations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListShareInvitationsRequest;
import org.openapis.openapi.models.operations.ListShareInvitationsResponse;
import org.openapis.openapi.models.operations.ListShareInvitationsShareResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListShareInvitationsRequest req = new ListShareInvitationsRequest() {{
                lensNamePrefix = "soluta";
                maxResults = 679393L;
                nextToken = "iusto";
                shareResourceType = ListShareInvitationsShareResourceTypeEnum.WORKLOAD;
                workloadNamePrefix = "dolorum";
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ipsum";
            }};            

            ListShareInvitationsResponse res = sdk.sdk.listShareInvitations(req);

            if (res.listShareInvitationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>

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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("id") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkloadShares

List the workload shares associated with the workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkloadSharesRequest;
import org.openapis.openapi.models.operations.ListWorkloadSharesResponse;
import org.openapis.openapi.models.operations.ListWorkloadSharesStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkloadSharesRequest req = new ListWorkloadSharesRequest("saepe") {{
                maxResults = 383464L;
                nextToken = "deserunt";
                sharedWithPrefix = "provident";
                status = ListWorkloadSharesStatusEnum.PENDING;
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
            }};            

            ListWorkloadSharesResponse res = sdk.sdk.listWorkloadShares(req);

            if (res.listWorkloadSharesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkloads

Paginated list of workloads.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkloadsRequest;
import org.openapis.openapi.models.operations.ListWorkloadsRequestBody;
import org.openapis.openapi.models.operations.ListWorkloadsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkloadsRequest req = new ListWorkloadsRequest(                new ListWorkloadsRequestBody() {{
                                maxResults = 798047L;
                                nextToken = "officiis";
                                workloadNamePrefix = "qui";
                            }};) {{
                maxResults = "dolorum";
                nextToken = "a";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "harum";
                xAmzCredential = "iusto";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "amet";
            }};            

            ListWorkloadsResponse res = sdk.sdk.listWorkloads(req);

            if (res.listWorkloadsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>

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
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("numquam", "enim");
                                                put("dolorem", "sapiente");
                                                put("totam", "nihil");
                                                put("sit", "expedita");
                                            }});, "neque") {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "vel";
                xAmzCredential = "libero";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "ipsum";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>

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
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("qui",                 new String[]{{
                                add("maxime"),
                                add("pariatur"),
                                add("soluta"),
                            }}) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAnswer

Update the answer to a specific question in a workload review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnswerRequest;
import org.openapis.openapi.models.operations.UpdateAnswerRequestBody;
import org.openapis.openapi.models.operations.UpdateAnswerRequestBodyReasonEnum;
import org.openapis.openapi.models.operations.UpdateAnswerResponse;
import org.openapis.openapi.models.shared.ChoiceReasonEnum;
import org.openapis.openapi.models.shared.ChoiceStatusEnum;
import org.openapis.openapi.models.shared.ChoiceUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAnswerRequest req = new UpdateAnswerRequest("aliquid", "quam",                 new UpdateAnswerRequestBody() {{
                                choiceUpdates = new java.util.HashMap<String, org.openapis.openapi.models.shared.ChoiceUpdate>() {{
                                    put("temporibus", new ChoiceUpdate(ChoiceStatusEnum.SELECTED) {{
                                        notes = "qui";
                                        reason = ChoiceReasonEnum.BUSINESS_PRIORITIES;
                                        status = ChoiceStatusEnum.SELECTED;
                                    }});
                                    put("odio", new ChoiceUpdate(ChoiceStatusEnum.UNSELECTED) {{
                                        notes = "sunt";
                                        reason = ChoiceReasonEnum.BUSINESS_PRIORITIES;
                                        status = ChoiceStatusEnum.UNSELECTED;
                                    }});
                                    put("voluptatem", new ChoiceUpdate(ChoiceStatusEnum.SELECTED) {{
                                        notes = "cumque";
                                        reason = ChoiceReasonEnum.OTHER;
                                        status = ChoiceStatusEnum.UNSELECTED;
                                    }});
                                }};
                                isApplicable = false;
                                notes = "saepe";
                                reason = UpdateAnswerRequestBodyReasonEnum.BUSINESS_PRIORITIES;
                                selectedChoices = new String[]{{
                                    add("nobis"),
                                }};
                            }};, "quos") {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "aperiam";
                xAmzDate = "delectus";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "labore";
            }};            

            UpdateAnswerResponse res = sdk.sdk.updateAnswer(req);

            if (res.updateAnswerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalSettings

Updates whether the Amazon Web Services account is opted into organization sharing features.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalSettingsRequest;
import org.openapis.openapi.models.operations.UpdateGlobalSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateGlobalSettingsRequestBodyOrganizationSharingStatusEnum;
import org.openapis.openapi.models.operations.UpdateGlobalSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGlobalSettingsRequest req = new UpdateGlobalSettingsRequest(                new UpdateGlobalSettingsRequestBody() {{
                                organizationSharingStatus = UpdateGlobalSettingsRequestBodyOrganizationSharingStatusEnum.DISABLED;
                            }};) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "quae";
                xAmzCredential = "aut";
                xAmzDate = "quas";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            UpdateGlobalSettingsResponse res = sdk.sdk.updateGlobalSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLensReview

Update lens review for a particular workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLensReviewRequest;
import org.openapis.openapi.models.operations.UpdateLensReviewRequestBody;
import org.openapis.openapi.models.operations.UpdateLensReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLensReviewRequest req = new UpdateLensReviewRequest("porro",                 new UpdateLensReviewRequestBody() {{
                                lensNotes = "doloribus";
                                pillarNotes = new java.util.HashMap<String, String>() {{
                                    put("facilis", "cupiditate");
                                    put("qui", "quae");
                                }};
                            }};, "laudantium") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quis";
            }};            

            UpdateLensReviewResponse res = sdk.sdk.updateLensReview(req);

            if (res.updateLensReviewOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateShareInvitation

<p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateShareInvitationRequest;
import org.openapis.openapi.models.operations.UpdateShareInvitationRequestBody;
import org.openapis.openapi.models.operations.UpdateShareInvitationRequestBodyShareInvitationActionEnum;
import org.openapis.openapi.models.operations.UpdateShareInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateShareInvitationRequest req = new UpdateShareInvitationRequest(                new UpdateShareInvitationRequestBody(UpdateShareInvitationRequestBodyShareInvitationActionEnum.REJECT);, "voluptate") {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "vero";
                xAmzCredential = "tenetur";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "hic";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            UpdateShareInvitationResponse res = sdk.sdk.updateShareInvitation(req);

            if (res.updateShareInvitationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkload

Update an existing workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkloadRequest;
import org.openapis.openapi.models.operations.UpdateWorkloadRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkloadRequestBodyDiscoveryConfig;
import org.openapis.openapi.models.operations.UpdateWorkloadRequestBodyEnvironmentEnum;
import org.openapis.openapi.models.operations.UpdateWorkloadRequestBodyImprovementStatusEnum;
import org.openapis.openapi.models.operations.UpdateWorkloadResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrustedAdvisorIntegrationStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkloadRequest req = new UpdateWorkloadRequest(                new UpdateWorkloadRequestBody() {{
                                accountIds = new String[]{{
                                    add("facilis"),
                                    add("vero"),
                                    add("ducimus"),
                                }};
                                applications = new String[]{{
                                    add("quibusdam"),
                                    add("illum"),
                                }};
                                architecturalDesign = "sequi";
                                awsRegions = new String[]{{
                                    add("impedit"),
                                    add("aut"),
                                    add("voluptatibus"),
                                }};
                                description = "exercitationem";
                                discoveryConfig = new UpdateWorkloadRequestBodyDiscoveryConfig() {{
                                    trustedAdvisorIntegrationStatus = TrustedAdvisorIntegrationStatusEnum.DISABLED;
                                }};;
                                environment = UpdateWorkloadRequestBodyEnvironmentEnum.PRODUCTION;
                                improvementStatus = UpdateWorkloadRequestBodyImprovementStatusEnum.COMPLETE;
                                industry = "maiores";
                                industryType = "doloribus";
                                isReviewOwnerUpdateAcknowledged = false;
                                nonAwsRegions = new String[]{{
                                    add("eligendi"),
                                    add("ducimus"),
                                }};
                                notes = "alias";
                                pillarPriorities = new String[]{{
                                    add("tempora"),
                                    add("ipsam"),
                                    add("ea"),
                                }};
                                reviewOwner = "aspernatur";
                                workloadName = "vel";
                            }};, "possimus") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            UpdateWorkloadResponse res = sdk.sdk.updateWorkload(req);

            if (res.updateWorkloadOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkloadShare

Update a workload share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkloadShareRequest;
import org.openapis.openapi.models.operations.UpdateWorkloadShareRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkloadShareRequestBodyPermissionTypeEnum;
import org.openapis.openapi.models.operations.UpdateWorkloadShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkloadShareRequest req = new UpdateWorkloadShareRequest(                new UpdateWorkloadShareRequestBody(UpdateWorkloadShareRequestBodyPermissionTypeEnum.READONLY);, "nulla", "excepturi") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "sapiente";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateWorkloadShareResponse res = sdk.sdk.updateWorkloadShare(req);

            if (res.updateWorkloadShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upgradeLensReview

Upgrade lens review for a particular workload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpgradeLensReviewRequest;
import org.openapis.openapi.models.operations.UpgradeLensReviewRequestBody;
import org.openapis.openapi.models.operations.UpgradeLensReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpgradeLensReviewRequest req = new UpgradeLensReviewRequest("veniam",                 new UpgradeLensReviewRequestBody("aliquid") {{
                                clientRequestToken = "inventore";
                            }};, "magnam") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quo";
                xAmzCredential = "consectetur";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "eaque";
            }};            

            UpgradeLensReviewResponse res = sdk.sdk.upgradeLensReview(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
