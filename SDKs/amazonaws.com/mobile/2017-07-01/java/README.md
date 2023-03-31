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
import org.openapis.openapi.models.operations.CreateProjectQueryParams;
import org.openapis.openapi.models.operations.CreateProjectHeaders;
import org.openapis.openapi.models.operations.CreateProjectRequestBody;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest() {{
                queryParams = new CreateProjectQueryParams() {{
                    name = "corrupti";
                    region = "provident";
                    snapshotId = "distinctio";
                }};
                headers = new CreateProjectHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                }};
                request = new CreateProjectRequestBody() {{
                    contents = "deserunt";
                }};
            }};            

            CreateProjectResponse res = sdk.createProject(req);

            if (res.createProjectResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createProject` -  Creates an AWS Mobile Hub project. 
* `deleteProject` -  Delets a project in AWS Mobile Hub. 
* `describeBundle` -  Get the bundle details for the requested bundle id. 
* `describeProject` -  Gets details about a project in AWS Mobile Hub. 
* `exportBundle` -  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 
* `exportProject` -  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 
* `listBundles` -  List all available bundles. 
* `listProjects` -  Lists projects in AWS Mobile Hub. 
* `updateProject` -  Update an existing project. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
