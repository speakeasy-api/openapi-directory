# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBodyActionTypeEnum;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBody;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequest;
import org.openapis.openapi.models.operations.DeleteResourcePermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePermissionRequest req = new DeleteResourcePermissionRequest() {{
                requestBody = new DeleteResourcePermissionRequestBody() {{
                    actionType = "RESTORE";
                    resourceArn = "corrupti";
                    sourceResourceArn = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }}            

            DeleteResourcePermissionResponse res = sdk.deleteResourcePermission(req);

            if (res.deleteResourcePermissionOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `deleteResourcePermission` - Removes permissions associated with the target database.
* `deregisterApplication` - Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
* `getApplication` - Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
* `getComponent` - Gets the component of an application registered with AWS Systems Manager for SAP.
* `getDatabase` - Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
* `getOperation` - Gets the details of an operation by specifying the operation ID.
* `getResourcePermission` - Gets permissions associated with the target database.
* `listApplications` - Lists all the applications registered with AWS Systems Manager for SAP.
* `listComponents` - Lists all the components registered with AWS Systems Manager for SAP.
* `listDatabases` - Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
* `listOperations` - Lists the operations performed by AWS Systems Manager for SAP.
* `listTagsForResource` - Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
* `putResourcePermission` - Adds permissions to the target database.
* `registerApplication` - <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
* `tagResource` - Creates tag for a resource by specifying the ARN.
* `untagResource` - Delete the tags for a resource.
* `updateApplicationSettings` - Updates the settings of an application registered with AWS Systems Manager for SAP.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
