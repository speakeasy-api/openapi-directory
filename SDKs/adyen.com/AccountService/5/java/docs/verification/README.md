# verification

### Available Operations

* [postCheckAccountHolder](#postcheckaccountholder) - Trigger verification
* [postDeleteBankAccounts](#postdeletebankaccounts) - Delete bank accounts
* [postDeleteLegalArrangements](#postdeletelegalarrangements) - Delete legal arrangements
* [postDeletePayoutMethods](#postdeletepayoutmethods) - Delete payout methods
* [postDeleteShareholders](#postdeleteshareholders) - Delete shareholders
* [postDeleteSignatories](#postdeletesignatories) - Delete signatories
* [postGetUploadedDocuments](#postgetuploadeddocuments) - Get documents
* [postUploadDocument](#postuploaddocument) - Upload a document

## postCheckAccountHolder

Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCheckAccountHolderResponse;
import org.openapis.openapi.models.operations.PostCheckAccountHolderSecurity;
import org.openapis.openapi.models.shared.PerformVerificationRequest;
import org.openapis.openapi.models.shared.PerformVerificationRequestAccountStateTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PerformVerificationRequest req = new PerformVerificationRequest("occaecati", PerformVerificationRequestAccountStateTypeEnum.LIMITLESS_PROCESSING, 170099);            

            PostCheckAccountHolderResponse res = sdk.verification.postCheckAccountHolder(req, new PostCheckAccountHolderSecurity() {{
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

            org.openapis.openapi.models.shared.DeleteBankAccountRequest req = new DeleteBankAccountRequest("inventore",                 new String[]{{
                                add("accusamus"),
                                add("voluptatibus"),
                                add("distinctio"),
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
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeleteLegalArrangementRequest req = new DeleteLegalArrangementRequest("omnis",                 new org.openapis.openapi.models.shared.LegalArrangementRequest[]{{
                                add(new LegalArrangementRequest("quos") {{
                                    legalArrangementCode = "minima";
                                    legalArrangementEntityCodes = new String[]{{
                                        add("maxime"),
                                        add("magnam"),
                                        add("temporibus"),
                                    }};
                                }}),
                                add(new LegalArrangementRequest("nam") {{
                                    legalArrangementCode = "commodi";
                                    legalArrangementEntityCodes = new String[]{{
                                        add("commodi"),
                                        add("totam"),
                                        add("earum"),
                                        add("modi"),
                                    }};
                                }}),
                                add(new LegalArrangementRequest("vel") {{
                                    legalArrangementCode = "vero";
                                    legalArrangementEntityCodes = new String[]{{
                                        add("ipsam"),
                                    }};
                                }}),
                                add(new LegalArrangementRequest("maiores") {{
                                    legalArrangementCode = "alias";
                                    legalArrangementEntityCodes = new String[]{{
                                        add("non"),
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

## postDeletePayoutMethods

Deletes payout methods associated with an account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDeletePayoutMethodsResponse;
import org.openapis.openapi.models.operations.PostDeletePayoutMethodsSecurity;
import org.openapis.openapi.models.shared.DeletePayoutMethodRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeletePayoutMethodRequest req = new DeletePayoutMethodRequest("enim",                 new String[]{{
                                add("nulla"),
                                add("deserunt"),
                                add("esse"),
                            }});            

            PostDeletePayoutMethodsResponse res = sdk.verification.postDeletePayoutMethods(req, new PostDeletePayoutMethodsSecurity() {{
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

            org.openapis.openapi.models.shared.DeleteShareholderRequest req = new DeleteShareholderRequest("nemo",                 new String[]{{
                                add("est"),
                                add("quis"),
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

            org.openapis.openapi.models.shared.DeleteSignatoriesRequest req = new DeleteSignatoriesRequest("sint",                 new String[]{{
                                add("impedit"),
                                add("hic"),
                                add("necessitatibus"),
                                add("asperiores"),
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

            org.openapis.openapi.models.shared.GetUploadedDocumentsRequest req = new GetUploadedDocumentsRequest("ex") {{
                bankAccountUUID = "voluptas";
                shareholderCode = "debitis";
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

            org.openapis.openapi.models.shared.UploadDocumentRequest req = new UploadDocumentRequest("delectus",                 new DocumentDetail(DocumentDetailDocumentTypeEnum.BANK_STATEMENT) {{
                                accountHolderCode = "minus";
                                bankAccountUUID = "fuga";
                                description = "laborum";
                                filename = "consectetur";
                                shareholderCode = "velit";
                                signatoryCode = "atque";
                            }};);            

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
