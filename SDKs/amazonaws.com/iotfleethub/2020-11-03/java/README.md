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
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequestBody("provident", "distinctio") {{
                                applicationDescription = "quibusdam";
                                clientToken = "unde";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                }};
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
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

* [createApplication](docs/sdk/README.md#createapplication) - <p>Creates a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [deleteApplication](docs/sdk/README.md#deleteapplication) - <p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [describeApplication](docs/sdk/README.md#describeapplication) - <p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [listApplications](docs/sdk/README.md#listapplications) - <p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - <p>Lists the tags for the specified resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [untagResource](docs/sdk/README.md#untagresource) - <p>Removes the specified tags (metadata) from the resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [updateApplication](docs/sdk/README.md#updateapplication) - <p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
