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

            DeleteDocumentsIdRequest req = new DeleteDocumentsIdRequest("perferendis");            

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

            GetDocumentsIdRequest req = new GetDocumentsIdRequest("ipsam");            

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

            PatchDocumentsIdRequest req = new PatchDocumentsIdRequest("repellendus") {{
                documentInput = new DocumentInput(                new org.openapis.openapi.models.shared.Attachment[]{{
                                    add(new Attachment("molestiae") {{
                                        content = "quo";
                                        contentType = "odit";
                                        filename = "at";
                                        pageName = "at";
                                        pageType = "maiores";
                                    }}),
                                    add(new Attachment("dolorum") {{
                                        content = "quod";
                                        contentType = "quod";
                                        filename = "esse";
                                        pageName = "totam";
                                        pageType = "porro";
                                    }}),
                                    add(new Attachment("deleniti") {{
                                        content = "dicta";
                                        contentType = "nam";
                                        filename = "officia";
                                        pageName = "occaecati";
                                        pageType = "fugit";
                                    }}),
                                    add(new Attachment("molestiae") {{
                                        content = "hic";
                                        contentType = "optio";
                                        filename = "totam";
                                        pageName = "beatae";
                                        pageType = "commodi";
                                    }}),
                                }}, "modi",                 new OwnerEntity("qui", "impedit");, DocumentTypeEnum.VAT_DOCUMENT) {{
                    attachment = new Attachment("esse") {{
                        contentType = "ipsum";
                        filename = "excepturi";
                        pageName = "aspernatur";
                        pageType = "perferendis";
                    }};;
                    expiryDate = "ad";
                    fileName = "natus";
                    issuerCountry = "sed";
                    issuerState = "iste";
                    number = "dolor";
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
                                add(new Attachment("corporis") {{
                                    content = "laboriosam";
                                    contentType = "hic";
                                    filename = "saepe";
                                    pageName = "fuga";
                                    pageType = "in";
                                }}),
                                add(new Attachment("ipsa") {{
                                    content = "iste";
                                    contentType = "iure";
                                    filename = "saepe";
                                    pageName = "quidem";
                                    pageType = "architecto";
                                }}),
                                add(new Attachment("dolorem") {{
                                    content = "reiciendis";
                                    contentType = "est";
                                    filename = "mollitia";
                                    pageName = "laborum";
                                    pageType = "dolores";
                                }}),
                            }}, "corporis",                 new OwnerEntity("explicabo", "nobis");, DocumentTypeEnum.PASSPORT) {{
                attachment = new Attachment("omnis") {{
                    contentType = "nemo";
                    filename = "minima";
                    pageName = "excepturi";
                    pageType = "accusantium";
                }};;
                expiryDate = "iure";
                fileName = "culpa";
                issuerCountry = "doloribus";
                issuerState = "sapiente";
                number = "architecto";
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
