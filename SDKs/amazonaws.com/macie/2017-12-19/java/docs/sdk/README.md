# SDK

## Overview

<fullname>Amazon Macie Classic</fullname> <p>Amazon Macie Classic has been discontinued and is no longer available.</p> <p>A new Amazon Macie is now available with significant design improvements and additional features, at a lower price and in most Amazon Web Services Regions. We encourage you to take advantage of the new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Macie, see <a href="http://aws.amazon.com/macie/">Amazon Macie</a>. To learn how to use the new Macie, see the <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html">Amazon Macie User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/macie/>
### Available Operations

* [associateMemberAccount](#associatememberaccount) - (Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.
* [associateS3Resources](#associates3resources) - (Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
* [disassociateMemberAccount](#disassociatememberaccount) - (Discontinued) Removes the specified member account from Amazon Macie Classic.
* [disassociateS3Resources](#disassociates3resources) - (Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
* [listMemberAccounts](#listmemberaccounts) - (Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
* [listS3Resources](#lists3resources) - (Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 
* [updateS3Resources](#updates3resources) - (Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.

## associateMemberAccount

(Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateMemberAccountRequest;
import org.openapis.openapi.models.operations.AssociateMemberAccountResponse;
import org.openapis.openapi.models.operations.AssociateMemberAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateMemberAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateMemberAccountRequest req = new AssociateMemberAccountRequest(                new AssociateMemberAccountRequest("deserunt");, AssociateMemberAccountXAmzTargetEnum.MACIE_SERVICE_ASSOCIATE_MEMBER_ACCOUNT) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AssociateMemberAccountResponse res = sdk.sdk.associateMemberAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateS3Resources

(Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateS3ResourcesRequest;
import org.openapis.openapi.models.operations.AssociateS3ResourcesResponse;
import org.openapis.openapi.models.operations.AssociateS3ResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateS3ResourcesRequest;
import org.openapis.openapi.models.shared.ClassificationType;
import org.openapis.openapi.models.shared.S3ContinuousClassificationTypeEnum;
import org.openapis.openapi.models.shared.S3OneTimeClassificationTypeEnum;
import org.openapis.openapi.models.shared.S3ResourceClassification;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateS3ResourcesRequest req = new AssociateS3ResourcesRequest(                new AssociateS3ResourcesRequest(                new org.openapis.openapi.models.shared.S3ResourceClassification[]{{
                                                add(new S3ResourceClassification("excepturi",                 new ClassificationType(S3ContinuousClassificationTypeEnum.FULL, S3OneTimeClassificationTypeEnum.FULL);) {{
                                                    bucketName = "minus";
                                                    classificationType = new ClassificationType(S3ContinuousClassificationTypeEnum.FULL, S3OneTimeClassificationTypeEnum.NONE) {{
                                                        continuous = S3ContinuousClassificationTypeEnum.FULL;
                                                        oneTime = S3OneTimeClassificationTypeEnum.NONE;
                                                    }};
                                                    prefix = "iusto";
                                                }}),
                                                add(new S3ResourceClassification("veritatis",                 new ClassificationType(S3ContinuousClassificationTypeEnum.FULL, S3OneTimeClassificationTypeEnum.NONE);) {{
                                                    bucketName = "recusandae";
                                                    classificationType = new ClassificationType(S3ContinuousClassificationTypeEnum.FULL, S3OneTimeClassificationTypeEnum.FULL) {{
                                                        continuous = S3ContinuousClassificationTypeEnum.FULL;
                                                        oneTime = S3OneTimeClassificationTypeEnum.NONE;
                                                    }};
                                                    prefix = "quis";
                                                }}),
                                            }}) {{
                                memberAccountId = "perferendis";
                            }};, AssociateS3ResourcesXAmzTargetEnum.MACIE_SERVICE_ASSOCIATE_S3_RESOURCES) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            AssociateS3ResourcesResponse res = sdk.sdk.associateS3Resources(req);

            if (res.associateS3ResourcesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateMemberAccount

(Discontinued) Removes the specified member account from Amazon Macie Classic.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateMemberAccountRequest;
import org.openapis.openapi.models.operations.DisassociateMemberAccountResponse;
import org.openapis.openapi.models.operations.DisassociateMemberAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateMemberAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateMemberAccountRequest req = new DisassociateMemberAccountRequest(                new DisassociateMemberAccountRequest("molestiae");, DisassociateMemberAccountXAmzTargetEnum.MACIE_SERVICE_DISASSOCIATE_MEMBER_ACCOUNT) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "quod";
                xAmzCredential = "esse";
                xAmzDate = "totam";
                xAmzSecurityToken = "porro";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "dicta";
            }};            

            DisassociateMemberAccountResponse res = sdk.sdk.disassociateMemberAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateS3Resources

(Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateS3ResourcesRequest;
import org.openapis.openapi.models.operations.DisassociateS3ResourcesResponse;
import org.openapis.openapi.models.operations.DisassociateS3ResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateS3ResourcesRequest;
import org.openapis.openapi.models.shared.S3Resource;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateS3ResourcesRequest req = new DisassociateS3ResourcesRequest(                new DisassociateS3ResourcesRequest(                new org.openapis.openapi.models.shared.S3Resource[]{{
                                                add(new S3Resource("deleniti") {{
                                                    bucketName = "occaecati";
                                                    prefix = "fugit";
                                                }}),
                                                add(new S3Resource("totam") {{
                                                    bucketName = "hic";
                                                    prefix = "optio";
                                                }}),
                                                add(new S3Resource("molestiae") {{
                                                    bucketName = "beatae";
                                                    prefix = "commodi";
                                                }}),
                                            }}) {{
                                memberAccountId = "modi";
                            }};, DisassociateS3ResourcesXAmzTargetEnum.MACIE_SERVICE_DISASSOCIATE_S3_RESOURCES) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DisassociateS3ResourcesResponse res = sdk.sdk.disassociateS3Resources(req);

            if (res.disassociateS3ResourcesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMemberAccounts

(Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMemberAccountsRequest;
import org.openapis.openapi.models.operations.ListMemberAccountsResponse;
import org.openapis.openapi.models.operations.ListMemberAccountsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMemberAccountsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMemberAccountsRequest req = new ListMemberAccountsRequest(                new ListMemberAccountsRequest() {{
                                maxResults = 324141L;
                                nextToken = "natus";
                            }};, ListMemberAccountsXAmzTargetEnum.MACIE_SERVICE_LIST_MEMBER_ACCOUNTS) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
                maxResults = "fuga";
                nextToken = "in";
            }};            

            ListMemberAccountsResponse res = sdk.sdk.listMemberAccounts(req);

            if (res.listMemberAccountsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listS3Resources

(Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListS3ResourcesRequest;
import org.openapis.openapi.models.operations.ListS3ResourcesResponse;
import org.openapis.openapi.models.operations.ListS3ResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListS3ResourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListS3ResourcesRequest req = new ListS3ResourcesRequest(                new ListS3ResourcesRequest() {{
                                maxResults = 613064L;
                                memberAccountId = "iure";
                                nextToken = "saepe";
                            }};, ListS3ResourcesXAmzTargetEnum.MACIE_SERVICE_LIST_S3_RESOURCES) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
                maxResults = "dolores";
                nextToken = "dolorem";
            }};            

            ListS3ResourcesResponse res = sdk.sdk.listS3Resources(req);

            if (res.listS3ResourcesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateS3Resources

(Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateS3ResourcesRequest;
import org.openapis.openapi.models.operations.UpdateS3ResourcesResponse;
import org.openapis.openapi.models.operations.UpdateS3ResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClassificationTypeUpdate;
import org.openapis.openapi.models.shared.S3ContinuousClassificationTypeEnum;
import org.openapis.openapi.models.shared.S3OneTimeClassificationTypeEnum;
import org.openapis.openapi.models.shared.S3ResourceClassificationUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateS3ResourcesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateS3ResourcesRequest req = new UpdateS3ResourcesRequest(                new UpdateS3ResourcesRequest(                new org.openapis.openapi.models.shared.S3ResourceClassificationUpdate[]{{
                                                add(new S3ResourceClassificationUpdate("nemo",                 new ClassificationTypeUpdate() {{
                                                                    continuous = S3ContinuousClassificationTypeEnum.FULL;
                                                                    oneTime = S3OneTimeClassificationTypeEnum.FULL;
                                                                }};) {{
                                                    bucketName = "nobis";
                                                    classificationTypeUpdate = new ClassificationTypeUpdate() {{
                                                        continuous = S3ContinuousClassificationTypeEnum.FULL;
                                                        oneTime = S3OneTimeClassificationTypeEnum.FULL;
                                                    }};
                                                    prefix = "omnis";
                                                }}),
                                            }}) {{
                                memberAccountId = "excepturi";
                            }};, UpdateS3ResourcesXAmzTargetEnum.MACIE_SERVICE_UPDATE_S3_RESOURCES) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            UpdateS3ResourcesResponse res = sdk.sdk.updateS3Resources(req);

            if (res.updateS3ResourcesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
