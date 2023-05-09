# documents

### Available Operations

* [deleteDocumentsId](#deletedocumentsid) - Delete a document
* [getDocumentsId](#getdocumentsid) - Get a document
* [patchDocumentsId](#patchdocumentsid) - Update a document
* [postDocuments](#postdocuments) - Upload a document for verification checks

## deleteDocumentsId

Deletes a document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDocumentsIdRequest;
import org.openapis.openapi.models.operations.DeleteDocumentsIdResponse;
import org.openapis.openapi.models.operations.DeleteDocumentsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDocumentsIdRequest req = new DeleteDocumentsIdRequest("id");            

            DeleteDocumentsIdResponse res = sdk.documents.deleteDocumentsId(req, new DeleteDocumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.voidResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentsId

Returns a document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentsIdRequest;
import org.openapis.openapi.models.operations.GetDocumentsIdResponse;
import org.openapis.openapi.models.operations.GetDocumentsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentsIdRequest req = new GetDocumentsIdRequest("labore");            

            GetDocumentsIdResponse res = sdk.documents.getDocumentsId(req, new GetDocumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchDocumentsId

Updates a document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchDocumentsIdRequest;
import org.openapis.openapi.models.operations.PatchDocumentsIdResponse;
import org.openapis.openapi.models.operations.PatchDocumentsIdSecurity;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.DocumentInput;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.OwnerEntity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchDocumentsIdRequest req = new PatchDocumentsIdRequest("labore") {{
                documentInput = new DocumentInput(                new org.openapis.openapi.models.shared.Attachment[]{{
                                    add(new Attachment("aspernatur") {{
                                        content = "natus";
                                        contentType = "nobis";
                                        filename = "eum";
                                        pageType = "vero";
                                    }}),
                                    add(new Attachment("ullam") {{
                                        content = "architecto";
                                        contentType = "magnam";
                                        filename = "et";
                                        pageType = "excepturi";
                                    }}),
                                }}, "provident",                 new OwnerEntity("quos", "sint");, DocumentTypeEnum.BANK_STATEMENT) {{
                    attachment = new Attachment("mollitia") {{
                        contentType = "reiciendis";
                        filename = "mollitia";
                        pageType = "ad";
                    }};;
                    expiryDate = "eum";
                    fileName = "dolor";
                    issuerCountry = "necessitatibus";
                    issuerState = "odit";
                    number = "nemo";
                }};;
            }};            

            PatchDocumentsIdResponse res = sdk.documents.patchDocumentsId(req, new PatchDocumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDocuments

Uploads a document for verification checks.

 Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

 You should only upload documents when Adyen requests additional information for the legal entity. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDocumentsResponse;
import org.openapis.openapi.models.operations.PostDocumentsSecurity;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.DocumentInput;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.OwnerEntity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DocumentInput req = new DocumentInput(                new org.openapis.openapi.models.shared.Attachment[]{{
                                add(new Attachment("maxime") {{
                                    content = "iure";
                                    contentType = "doloribus";
                                    filename = "debitis";
                                    pageType = "eius";
                                }}),
                            }}, "deleniti",                 new OwnerEntity("facilis", "in");, DocumentTypeEnum.DRIVERS_LICENSE) {{
                attachment = new Attachment("architecto") {{
                    contentType = "repudiandae";
                    filename = "ullam";
                    pageType = "expedita";
                }};;
                expiryDate = "nihil";
                fileName = "repellat";
                issuerCountry = "quibusdam";
                issuerState = "sed";
                number = "saepe";
            }};            

            PostDocumentsResponse res = sdk.documents.postDocuments(req, new PostDocumentsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
