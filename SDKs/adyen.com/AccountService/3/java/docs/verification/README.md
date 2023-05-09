# verification

### Available Operations

* [postDeleteBankAccounts](#postdeletebankaccounts) - Delete bank accounts
* [postDeleteLegalArrangements](#postdeletelegalarrangements) - Delete legal arrangements
* [postDeleteShareholders](#postdeleteshareholders) - Delete shareholders
* [postDeleteSignatories](#postdeletesignatories) - Delete signatories
* [postGetUploadedDocuments](#postgetuploadeddocuments) - Get documents
* [postUploadDocument](#postuploaddocument) - Upload a document

## postDeleteBankAccounts

Deletes bank accounts associated with an account holder. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDeleteBankAccountsResponse;
import org.openapis.openapi.models.operations.PostDeleteBankAccountsSecurity;
import org.openapis.openapi.models.shared.DeleteBankAccountRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeleteBankAccountRequest req = new DeleteBankAccountRequest("voluptatibus",                 new String[]{{
                                add("asperiores"),
                                add("aperiam"),
                            }});            

            PostDeleteBankAccountsResponse res = sdk.verification.postDeleteBankAccounts(req, new PostDeleteBankAccountsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.genericResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteLegalArrangements

Deletes legal arrangements and/or legal arrangement entities associated with an account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDeleteLegalArrangementsResponse;
import org.openapis.openapi.models.operations.PostDeleteLegalArrangementsSecurity;
import org.openapis.openapi.models.shared.DeleteLegalArrangementRequest;
import org.openapis.openapi.models.shared.LegalArrangementRequest;
import org.openapis.openapi.models.shared.LegalArrangementRequestWrapper;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeleteLegalArrangementRequest req = new DeleteLegalArrangementRequest("ea",                 new org.openapis.openapi.models.shared.LegalArrangementRequestWrapper[]{{
                                add(new LegalArrangementRequestWrapper() {{
                                    legalArrangementRequest = new LegalArrangementRequest("asperiores") {{
                                        legalArrangementCode = "consequuntur";
                                        legalArrangementEntityCodes = new String[]{{
                                            add("officia"),
                                            add("maxime"),
                                            add("dignissimos"),
                                            add("officia"),
                                        }};
                                    }};
                                }}),
                                add(new LegalArrangementRequestWrapper() {{
                                    legalArrangementRequest = new LegalArrangementRequest("porro") {{
                                        legalArrangementCode = "nemo";
                                        legalArrangementEntityCodes = new String[]{{
                                            add("quaerat"),
                                        }};
                                    }};
                                }}),
                            }});            

            PostDeleteLegalArrangementsResponse res = sdk.verification.postDeleteLegalArrangements(req, new PostDeleteLegalArrangementsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.genericResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteShareholders

Deletes shareholders associated with an account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDeleteShareholdersResponse;
import org.openapis.openapi.models.operations.PostDeleteShareholdersSecurity;
import org.openapis.openapi.models.shared.DeleteShareholderRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeleteShareholderRequest req = new DeleteShareholderRequest("quod",                 new String[]{{
                                add("ab"),
                                add("adipisci"),
                            }});            

            PostDeleteShareholdersResponse res = sdk.verification.postDeleteShareholders(req, new PostDeleteShareholdersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.genericResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteSignatories

Deletes signatories associated with an account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDeleteSignatoriesResponse;
import org.openapis.openapi.models.operations.PostDeleteSignatoriesSecurity;
import org.openapis.openapi.models.shared.DeleteSignatoriesRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeleteSignatoriesRequest req = new DeleteSignatoriesRequest("fuga",                 new String[]{{
                                add("suscipit"),
                                add("velit"),
                                add("culpa"),
                            }});            

            PostDeleteSignatoriesResponse res = sdk.verification.postDeleteSignatories(req, new PostDeleteSignatoriesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.genericResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetUploadedDocuments

Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetUploadedDocumentsResponse;
import org.openapis.openapi.models.operations.PostGetUploadedDocumentsSecurity;
import org.openapis.openapi.models.shared.GetUploadedDocumentsRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetUploadedDocumentsRequest req = new GetUploadedDocumentsRequest("est") {{
                bankAccountUUID = "recusandae";
                shareholderCode = "totam";
            }};            

            PostGetUploadedDocumentsResponse res = sdk.verification.postGetUploadedDocuments(req, new PostGetUploadedDocumentsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getUploadedDocumentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUploadDocument

Uploads a document for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUploadDocumentResponse;
import org.openapis.openapi.models.operations.PostUploadDocumentSecurity;
import org.openapis.openapi.models.shared.DocumentDetail;
import org.openapis.openapi.models.shared.DocumentDetailDocumentTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UploadDocumentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UploadDocumentRequest req = new UploadDocumentRequest("fugiat",                 new DocumentDetail(DocumentDetailDocumentTypeEnum.DRIVING_LICENCE_FRONT) {{
                                accountHolderCode = "ducimus";
                                bankAccountUUID = "quos";
                                description = "vel";
                                filename = "labore";
                                shareholderCode = "possimus";
                                signatoryCode = "facilis";
                            }};) {{
                accountHolderCode = "cum";
                bankAccountUUID = "commodi";
                shareholderCode = "in";
            }};            

            PostUploadDocumentResponse res = sdk.verification.postUploadDocument(req, new PostUploadDocumentSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.updateAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
