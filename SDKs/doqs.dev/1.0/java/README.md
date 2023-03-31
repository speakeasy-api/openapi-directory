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
import org.openapis.openapi.models.operations.CreateTemplateDesignerTemplatesPostRequest;
import org.openapis.openapi.models.operations.CreateTemplateDesignerTemplatesPostResponse;
import org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest;
import org.openapis.openapi.models.shared.OrientationEnum;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateTemplateDesignerTemplatesPostRequest req = new CreateTemplateDesignerTemplatesPostRequest() {{
                request = new CreateOrUpdateTemplateRequest() {{
                    components = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("distinctio", "quibusdam");
                            put("unde", "nulla");
                            put("corrupti", "illum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("error", "deserunt");
                            put("suscipit", "iure");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("debitis", "ipsa");
                            put("delectus", "tempora");
                        }}),
                    }};
                    css = "suscipit";
                    footerHtml = "molestiae";
                    format = "a5";
                    headerHtml = "placeat";
                    name = "voluptatum";
                    orientation = "landscape";
                    previewPayload = new java.util.HashMap<String, Object>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }};
                    templateHtml = "deserunt";
                }};
            }};            

            CreateTemplateDesignerTemplatesPostResponse res = sdk.createTemplateDesignerTemplatesPost(req);

            if (res.responseOkDesignerTemplate.isPresent()) {
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

* `createTemplateDesignerTemplatesPost` - Create Template
* `deleteDesignerTemplatesIdDelete` - Delete
* `generatePdfDesignerTemplatesIdGeneratePost` - Generate Pdf
* `listTemplatesDesignerTemplatesGet` - List Templates
* `listTemplatesDesignerTemplatesIdGet` - List Templates
* `previewDesignerTemplatesPreviewPost` - Preview
* `updateTemplateDesignerTemplatesIdPut` - Update Template

### templates

* `create` - Create
* `deleteTemplatesIdDelete` - Delete 
* `fill` - Fill
* `get` - Get Template
* `getFileTemplatesIdFileGet` - Get File
* `list` - List 
* `update` - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
