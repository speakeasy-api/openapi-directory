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
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectRequestBody;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequestBody() {{
                                contents = "provident";
                            }};) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                name = "Doug Hoppe";
                region = "debitis";
                snapshotId = "ipsa";
            }};            

            CreateProjectResponse res = sdk.createProject(req);

            if (res.createProjectResult != null) {
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

* [createProject](docs/sdk/README.md#createproject) -  Creates an AWS Mobile Hub project. 
* [deleteProject](docs/sdk/README.md#deleteproject) -  Delets a project in AWS Mobile Hub. 
* [describeBundle](docs/sdk/README.md#describebundle) -  Get the bundle details for the requested bundle id. 
* [describeProject](docs/sdk/README.md#describeproject) -  Gets details about a project in AWS Mobile Hub. 
* [exportBundle](docs/sdk/README.md#exportbundle) -  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 
* [exportProject](docs/sdk/README.md#exportproject) -  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 
* [listBundles](docs/sdk/README.md#listbundles) -  List all available bundles. 
* [listProjects](docs/sdk/README.md#listprojects) -  Lists projects in AWS Mobile Hub. 
* [updateProject](docs/sdk/README.md#updateproject) -  Update an existing project. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
