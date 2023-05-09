# templates

### Available Operations

* [create](#create) - Create
* [deleteTemplatesIdDelete](#deletetemplatesiddelete) - Delete 
* [fill](#fill) - Fill
* [get](#get) - Get Template
* [getFileTemplatesIdFileGet](#getfiletemplatesidfileget) - Get File
* [list](#list) - List 
* [update](#update) - Update

## create

Create

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResponse;
import org.openapis.openapi.models.shared.BodyCreate;
import org.openapis.openapi.models.shared.BodyCreateFile;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BodyCreate req = new BodyCreate(                new BodyCreateFile("possimus", "aut".getBytes()););            

            CreateResponse res = sdk.templates.create(req);

            if (res.responseOkTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTemplatesIdDelete

Delete 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTemplatesIdDeleteRequest;
import org.openapis.openapi.models.operations.DeleteTemplatesIdDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTemplatesIdDeleteRequest req = new DeleteTemplatesIdDeleteRequest("error");            

            DeleteTemplatesIdDeleteResponse res = sdk.templates.deleteTemplatesIdDelete(req);

            if (res.responseOkNoneType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fill

Fill

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FillRequest;
import org.openapis.openapi.models.operations.FillResponse;
import org.openapis.openapi.models.shared.FillTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            FillRequest req = new FillRequest(                new FillTemplateRequest() {{
                                data = new java.util.HashMap<String, Object>() {{
                                    put("quasi", "reiciendis");
                                    put("voluptatibus", "vero");
                                    put("nihil", "praesentium");
                                }};
                            }};, "voluptatibus");            

            FillResponse res = sdk.templates.fill(req);

            if (res.fill200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## get

Get Template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRequest req = new GetRequest("omnis");            

            GetResponse res = sdk.templates.get(req);

            if (res.responseOkTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileTemplatesIdFileGet

Get File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileTemplatesIdFileGetRequest;
import org.openapis.openapi.models.operations.GetFileTemplatesIdFileGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileTemplatesIdFileGetRequest req = new GetFileTemplatesIdFileGetRequest("cum");            

            GetFileTemplatesIdFileGetResponse res = sdk.templates.getFileTemplatesIdFileGet(req);

            if (res.responseOkHttpUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## list

List 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRequest;
import org.openapis.openapi.models.operations.ListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRequest req = new ListRequest() {{
                limit = 39187L;
                offset = 441711L;
            }};            

            ListResponse res = sdk.templates.list(req);

            if (res.responseOkListAppsApiRoutesTemplatesTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## update

Update

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRequest;
import org.openapis.openapi.models.operations.UpdateResponse;
import org.openapis.openapi.models.shared.BoundingBox;
import org.openapis.openapi.models.shared.CheckBoxField;
import org.openapis.openapi.models.shared.CheckBoxFieldTypeEnum;
import org.openapis.openapi.models.shared.DateField;
import org.openapis.openapi.models.shared.DateFieldFontEnum;
import org.openapis.openapi.models.shared.DateFieldHorizontalAlignEnum;
import org.openapis.openapi.models.shared.DateFieldTypeEnum;
import org.openapis.openapi.models.shared.DateFieldVerticalAlignEnum;
import org.openapis.openapi.models.shared.ImageField;
import org.openapis.openapi.models.shared.ImageFieldImageAnchorEnum;
import org.openapis.openapi.models.shared.ImageFieldTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TextField;
import org.openapis.openapi.models.shared.TextFieldFontEnum;
import org.openapis.openapi.models.shared.TextFieldHorizontalAlignEnum;
import org.openapis.openapi.models.shared.TextFieldTypeEnum;
import org.openapis.openapi.models.shared.TextFieldVerticalAlignEnum;
import org.openapis.openapi.models.shared.UpdateTemplateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRequest req = new UpdateRequest(                new UpdateTemplateRequest(                new Object[]{{
                                                add(new DateField(                new BoundingBox(2777.18, 3185.69, 93.56, 6674.11);, "quibusdam", "explicabo", 647174L, DateFieldTypeEnum.DATE) {{
                                                    bbox = new BoundingBox(6886.61, 3179.83, 8804.76, 4142.63) {{
                                                        height = 3594.44;
                                                        width = 2961.4;
                                                        x = 4808.94;
                                                        y = 1187.27;
                                                    }};
                                                    cellCount = 918236L;
                                                    cellOffset = 64147L;
                                                    cells = false;
                                                    color = "ipsum";
                                                    font = DateFieldFontEnum.TIMES_ROMAN;
                                                    fontSize = 565189L;
                                                    format = "excepturi";
                                                    hAlign = DateFieldHorizontalAlignEnum.R;
                                                    locale = "modi";
                                                    name = "Dr. Jordan Von";
                                                    page = 83112L;
                                                    required = false;
                                                    type = DateFieldTypeEnum.DATE;
                                                    vAlign = DateFieldVerticalAlignEnum.B;
                                                }}),
                                                add(new ImageField(                new BoundingBox(2700.08, 7037.37, 7351.94, 2884.76);, "delectus", 433288L) {{
                                                    anchor = ImageFieldImageAnchorEnum.SW;
                                                    bbox = new BoundingBox(5865.13, 5528.22, 201.07, 1649.4) {{
                                                        height = 2894.06;
                                                        width = 2647.3;
                                                        x = 1831.91;
                                                        y = 3978.21;
                                                    }};
                                                    name = "Vernon Abshire";
                                                    page = 569618L;
                                                    required = false;
                                                    type = ImageFieldTypeEnum.IMAGE;
                                                }}),
                                                add(new DateField(                new BoundingBox(8811.04, 2497.96, 5812.73, 3132.18);, "accusamus", "delectus", 692532L, DateFieldTypeEnum.DATE) {{
                                                    bbox = new BoundingBox(8960.39, 5722.52, 6389.21, 2230.81) {{
                                                        height = 7561.07;
                                                        width = 5761.57;
                                                        x = 3960.98;
                                                        y = 5920.42;
                                                    }};
                                                    cellCount = 891555L;
                                                    cellOffset = 952749L;
                                                    cells = false;
                                                    color = "dolorum";
                                                    font = DateFieldFontEnum.HELVETICA;
                                                    fontSize = 449198L;
                                                    format = "illum";
                                                    hAlign = DateFieldHorizontalAlignEnum.R;
                                                    locale = "rerum";
                                                    name = "Valerie Runolfsson";
                                                    page = 396506L;
                                                    required = false;
                                                    type = DateFieldTypeEnum.DATE;
                                                    vAlign = DateFieldVerticalAlignEnum.B;
                                                }}),
                                                add(new ImageField(                new BoundingBox(6601.74, 2879.91, 2900.77, 3834.62);, "natus", 749170L) {{
                                                    anchor = ImageFieldImageAnchorEnum.E;
                                                    bbox = new BoundingBox(2305.33, 6439.9, 3948.69, 4238.55) {{
                                                        height = 6596.69;
                                                        width = 5013.24;
                                                        x = 5332.06;
                                                        y = 9560.84;
                                                    }};
                                                    name = "Ms. Arturo Krajcik";
                                                    page = 716075L;
                                                    required = false;
                                                    type = ImageFieldTypeEnum.IMAGE;
                                                }}),
                                            }}) {{
                                name = "Mrs. Meghan Collins V";
                            }};, "ullam");            

            UpdateResponse res = sdk.templates.update(req);

            if (res.responseOkTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
