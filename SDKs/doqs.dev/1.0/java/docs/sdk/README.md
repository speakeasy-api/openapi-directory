# SDK

### Available Operations

* [createTemplateDesignerTemplatesPost](#createtemplatedesignertemplatespost) - Create Template
* [deleteDesignerTemplatesIdDelete](#deletedesignertemplatesiddelete) - Delete
* [generatePdfDesignerTemplatesIdGeneratePost](#generatepdfdesignertemplatesidgeneratepost) - Generate Pdf
* [listTemplatesDesignerTemplatesIdGet](#listtemplatesdesignertemplatesidget) - List Templates
* [listTemplatesDesignerTemplatesGet](#listtemplatesdesignertemplatesget) - List Templates
* [previewDesignerTemplatesPreviewPost](#previewdesignertemplatespreviewpost) - Preview
* [updateTemplateDesignerTemplatesIdPut](#updatetemplatedesignertemplatesidput) - Update Template

## createTemplateDesignerTemplatesPost

Create Template

### Example Usage

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
                .setSecurity(new Security("molestiae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest req = new CreateOrUpdateTemplateRequest(                new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("esse", "totam");
                                    put("porro", "dolorum");
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("deleniti", "hic");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("totam", "beatae");
                                    put("commodi", "molestiae");
                                    put("modi", "qui");
                                    put("impedit", "cum");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                }}),
                            }}, "ad", FormatEnum.A4, "sed", OrientationEnum.PORTRAIT,                 new java.util.HashMap<String, Object>() {{
                                put("natus", "laboriosam");
                            }}, "hic") {{
                footerHtml = "saepe";
                headerHtml = "fuga";
                margin = new CreateOrUpdateTemplateRequestMargin() {{
                    bottom = 449950L;
                    left = 359508L;
                    right = 613064L;
                    top = 437032L;
                }};;
            }};            

            CreateTemplateDesignerTemplatesPostResponse res = sdk.sdk.createTemplateDesignerTemplatesPost(req);

            if (res.responseOkDesignerTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDesignerTemplatesIdDelete

Delete

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDesignerTemplatesIdDeleteRequest;
import org.openapis.openapi.models.operations.DeleteDesignerTemplatesIdDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDesignerTemplatesIdDeleteRequest req = new DeleteDesignerTemplatesIdDeleteRequest("quidem");            

            DeleteDesignerTemplatesIdDeleteResponse res = sdk.sdk.deleteDesignerTemplatesIdDelete(req);

            if (res.responseOkNoneType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generatePdfDesignerTemplatesIdGeneratePost

Generate Pdf

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneratePdfDesignerTemplatesIdGeneratePostRequest;
import org.openapis.openapi.models.operations.GeneratePdfDesignerTemplatesIdGeneratePostResponse;
import org.openapis.openapi.models.shared.GeneratePDFPayload;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GeneratePdfDesignerTemplatesIdGeneratePostRequest req = new GeneratePdfDesignerTemplatesIdGeneratePostRequest(                new GeneratePDFPayload(                new java.util.HashMap<String, Object>() {{
                                                put("reiciendis", "est");
                                            }});, "mollitia");            

            GeneratePdfDesignerTemplatesIdGeneratePostResponse res = sdk.sdk.generatePdfDesignerTemplatesIdGeneratePost(req);

            if (res.generatePdfDesignerTemplatesIdGeneratePost200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTemplatesDesignerTemplatesIdGet

List Templates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTemplatesDesignerTemplatesIdGetRequest;
import org.openapis.openapi.models.operations.ListTemplatesDesignerTemplatesIdGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTemplatesDesignerTemplatesIdGetRequest req = new ListTemplatesDesignerTemplatesIdGetRequest("dolores");            

            ListTemplatesDesignerTemplatesIdGetResponse res = sdk.sdk.listTemplatesDesignerTemplatesIdGet(req);

            if (res.responseOkDesignerTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTemplatesDesignerTemplatesGet

List Templates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTemplatesDesignerTemplatesGetRequest;
import org.openapis.openapi.models.operations.ListTemplatesDesignerTemplatesGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTemplatesDesignerTemplatesGetRequest req = new ListTemplatesDesignerTemplatesGetRequest() {{
                limit = 358152L;
                offset = 128926L;
            }};            

            ListTemplatesDesignerTemplatesGetResponse res = sdk.sdk.listTemplatesDesignerTemplatesGet(req);

            if (res.responseOkListFillrEntitiesDesignerTemplateDesignerTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## previewDesignerTemplatesPreviewPost

Preview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreviewDesignerTemplatesPreviewPostResponse;
import org.openapis.openapi.models.shared.PreviewModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PreviewModel req = new PreviewModel("enim",                 new java.util.HashMap<String, Object>() {{
                                put("nemo", "minima");
                                put("excepturi", "accusantium");
                                put("iure", "culpa");
                            }}, "doloribus") {{
                footerHtml = "sapiente";
                headerHtml = "architecto";
            }};            

            PreviewDesignerTemplatesPreviewPostResponse res = sdk.sdk.previewDesignerTemplatesPreviewPost(req);

            if (res.responseOkPreviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTemplateDesignerTemplatesIdPut

Update Template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTemplateDesignerTemplatesIdPutRequest;
import org.openapis.openapi.models.operations.UpdateTemplateDesignerTemplatesIdPutResponse;
import org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest;
import org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequestMargin;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.OrientationEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTemplateDesignerTemplatesIdPutRequest req = new UpdateTemplateDesignerTemplatesIdPutRequest(                new CreateOrUpdateTemplateRequest(                new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("consequuntur", "repellat");
                                                    put("mollitia", "occaecati");
                                                    put("numquam", "commodi");
                                                }}),
                                            }}, "quam", FormatEnum.A3, "velit", OrientationEnum.PORTRAIT,                 new java.util.HashMap<String, Object>() {{
                                                put("quis", "vitae");
                                            }}, "laborum") {{
                                footerHtml = "animi";
                                headerHtml = "enim";
                                margin = new CreateOrUpdateTemplateRequestMargin() {{
                                    bottom = 138183L;
                                    left = 778346L;
                                    right = 196582L;
                                    top = 949572L;
                                }};;
                            }};, "ipsam");            

            UpdateTemplateDesignerTemplatesIdPutResponse res = sdk.sdk.updateTemplateDesignerTemplatesIdPut(req);

            if (res.responseOkDesignerTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
