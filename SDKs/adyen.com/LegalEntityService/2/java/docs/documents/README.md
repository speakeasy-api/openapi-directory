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

            DeleteDocumentsIdRequest req = new DeleteDocumentsIdRequest("veritatis");            

            DeleteDocumentsIdResponse res = sdk.documents.deleteDocumentsId(req, new DeleteDocumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.void_ != null) {
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

            GetDocumentsIdRequest req = new GetDocumentsIdRequest("deserunt");            

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

            PatchDocumentsIdRequest req = new PatchDocumentsIdRequest("perferendis") {{
                documentInput = new DocumentInput(                new org.openapis.openapi.models.shared.Attachment[]{{
                                    add(new Attachment("at") {{
                                        content = "repellendus";
                                        contentType = "sapiente";
                                        filename = "quo";
                                        pageName = "odit";
                                        pageType = "at";
                                    }}),
                                    add(new Attachment("totam") {{
                                        content = "maiores";
                                        contentType = "molestiae";
                                        filename = "quod";
                                        pageName = "quod";
                                        pageType = "esse";
                                    }}),
                                }}, "porro",                 new OwnerEntity("dolorum", "dicta");, DocumentTypeEnum.VAT_DOCUMENT) {{
                    attachment = new Attachment("officia") {{
                        contentType = "occaecati";
                        filename = "fugit";
                        pageName = "deleniti";
                        pageType = "hic";
                    }};;
                    expiryDate = "optio";
                    fileName = "totam";
                    issuerCountry = "beatae";
                    issuerState = "commodi";
                    number = "molestiae";
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
                                add(new Attachment("excepturi") {{
                                    content = "qui";
                                    contentType = "impedit";
                                    filename = "cum";
                                    pageName = "esse";
                                    pageType = "ipsum";
                                }}),
                                add(new Attachment("iste") {{
                                    content = "aspernatur";
                                    contentType = "perferendis";
                                    filename = "ad";
                                    pageName = "natus";
                                    pageType = "sed";
                                }}),
                            }}, "dolor",                 new OwnerEntity("natus", "laboriosam");, DocumentTypeEnum.CONSTITUTIONAL_DOCUMENT) {{
                attachment = new Attachment("saepe") {{
                    contentType = "fuga";
                    filename = "in";
                    pageName = "corporis";
                    pageType = "iste";
                }};;
                expiryDate = "iure";
                fileName = "saepe";
                issuerCountry = "quidem";
                issuerState = "architecto";
                number = "ipsa";
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
