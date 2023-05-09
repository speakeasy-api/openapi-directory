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
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequest;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBody;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBodyActionTypeEnum;
import org.openapis.openapi.models.operations.DeleteResourcePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePermissionRequest req = new DeleteResourcePermissionRequest(                new DeleteResourcePermissionRequestBody("provident") {{
                                actionType = DeleteResourcePermissionRequestBodyActionTypeEnum.RESTORE;
                                sourceResourceArn = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            DeleteResourcePermissionResponse res = sdk.deleteResourcePermission(req);

            if (res.deleteResourcePermissionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [deleteResourcePermission](docs/sdk/README.md#deleteresourcepermission) - Removes permissions associated with the target database.
* [deregisterApplication](docs/sdk/README.md#deregisterapplication) - Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
* [getApplication](docs/sdk/README.md#getapplication) - Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
* [getComponent](docs/sdk/README.md#getcomponent) - Gets the component of an application registered with AWS Systems Manager for SAP.
* [getDatabase](docs/sdk/README.md#getdatabase) - Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
* [getOperation](docs/sdk/README.md#getoperation) - Gets the details of an operation by specifying the operation ID.
* [getResourcePermission](docs/sdk/README.md#getresourcepermission) - Gets permissions associated with the target database.
* [listApplications](docs/sdk/README.md#listapplications) - Lists all the applications registered with AWS Systems Manager for SAP.
* [listComponents](docs/sdk/README.md#listcomponents) - Lists all the components registered with AWS Systems Manager for SAP.
* [listDatabases](docs/sdk/README.md#listdatabases) - Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
* [listOperations](docs/sdk/README.md#listoperations) - Lists the operations performed by AWS Systems Manager for SAP.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
* [putResourcePermission](docs/sdk/README.md#putresourcepermission) - Adds permissions to the target database.
* [registerApplication](docs/sdk/README.md#registerapplication) - <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
* [tagResource](docs/sdk/README.md#tagresource) - Creates tag for a resource by specifying the ARN.
* [untagResource](docs/sdk/README.md#untagresource) - Delete the tags for a resource.
* [updateApplicationSettings](docs/sdk/README.md#updateapplicationsettings) - Updates the settings of an application registered with AWS Systems Manager for SAP.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
