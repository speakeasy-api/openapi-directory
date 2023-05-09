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
import org.openapis.openapi.models.operations.CreateTemplateDesignerTemplatesPostResponse;
import org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest;
import org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequestMargin;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.OrientationEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest req = new CreateOrUpdateTemplateRequest(                new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quibusdam", "unde");
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("tempora", "suscipit");
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                    put("iusto", "excepturi");
                                }}),
                            }}, "nisi", FormatEnum.A6, "temporibus", OrientationEnum.LANDSCAPE,                 new java.util.HashMap<String, Object>() {{
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                            }}, "repellendus") {{
                footerHtml = "sapiente";
                headerHtml = "quo";
                margin = new CreateOrUpdateTemplateRequestMargin() {{
                    bottom = 140350L;
                    left = 870013L;
                    right = 870088L;
                    top = 978619L;
                }};;
            }};            

            CreateTemplateDesignerTemplatesPostResponse res = sdk.createTemplateDesignerTemplatesPost(req);

            if (res.responseOkDesignerTemplate != null) {
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

* [createTemplateDesignerTemplatesPost](docs/sdk/README.md#createtemplatedesignertemplatespost) - Create Template
* [deleteDesignerTemplatesIdDelete](docs/sdk/README.md#deletedesignertemplatesiddelete) - Delete
* [generatePdfDesignerTemplatesIdGeneratePost](docs/sdk/README.md#generatepdfdesignertemplatesidgeneratepost) - Generate Pdf
* [listTemplatesDesignerTemplatesIdGet](docs/sdk/README.md#listtemplatesdesignertemplatesidget) - List Templates
* [listTemplatesDesignerTemplatesGet](docs/sdk/README.md#listtemplatesdesignertemplatesget) - List Templates
* [previewDesignerTemplatesPreviewPost](docs/sdk/README.md#previewdesignertemplatespreviewpost) - Preview
* [updateTemplateDesignerTemplatesIdPut](docs/sdk/README.md#updatetemplatedesignertemplatesidput) - Update Template

### [templates](docs/templates/README.md)

* [create](docs/templates/README.md#create) - Create
* [deleteTemplatesIdDelete](docs/templates/README.md#deletetemplatesiddelete) - Delete 
* [fill](docs/templates/README.md#fill) - Fill
* [get](docs/templates/README.md#get) - Get Template
* [getFileTemplatesIdFileGet](docs/templates/README.md#getfiletemplatesidfileget) - Get File
* [list](docs/templates/README.md#list) - List 
* [update](docs/templates/README.md#update) - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
