# transferInstruments

### Available Operations

* [deleteTransferInstrumentsId](#deletetransferinstrumentsid) - Delete a transfer instrument
* [getTransferInstrumentsId](#gettransferinstrumentsid) - Get a transfer instrument
* [patchTransferInstrumentsId](#patchtransferinstrumentsid) - Update a transfer instrument
* [postTransferInstruments](#posttransferinstruments) - Create a transfer instrument

## deleteTransferInstrumentsId

Deletes a transfer instrument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTransferInstrumentsIdRequest;
import org.openapis.openapi.models.operations.DeleteTransferInstrumentsIdResponse;
import org.openapis.openapi.models.operations.DeleteTransferInstrumentsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTransferInstrumentsIdRequest req = new DeleteTransferInstrumentsIdRequest("dolorum");            

            DeleteTransferInstrumentsIdResponse res = sdk.transferInstruments.deleteTransferInstrumentsId(req, new DeleteTransferInstrumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransferInstrumentsId

Returns the details of a transfer instrument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransferInstrumentsIdRequest;
import org.openapis.openapi.models.operations.GetTransferInstrumentsIdResponse;
import org.openapis.openapi.models.operations.GetTransferInstrumentsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransferInstrumentsIdRequest req = new GetTransferInstrumentsIdRequest("architecto");            

            GetTransferInstrumentsIdResponse res = sdk.transferInstruments.getTransferInstrumentsId(req, new GetTransferInstrumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transferInstrument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchTransferInstrumentsId

Updates a transfer instrument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchTransferInstrumentsIdRequest;
import org.openapis.openapi.models.operations.PatchTransferInstrumentsIdResponse;
import org.openapis.openapi.models.operations.PatchTransferInstrumentsIdSecurity;
import org.openapis.openapi.models.shared.BankAccountInfo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TransferInstrumentInfo;
import org.openapis.openapi.models.shared.TransferInstrumentInfoTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchTransferInstrumentsIdRequest req = new PatchTransferInstrumentsIdRequest("quae") {{
                transferInstrumentInfo = new TransferInstrumentInfo(                new BankAccountInfo("aut") {{
                                    accountNumber = "quas";
                                    accountType = "itaque";
                                    bankBicSwift = "consequatur";
                                    bankCity = "est";
                                    bankCode = "repellendus";
                                    bankName = "porro";
                                    branchCode = "doloribus";
                                    checkCode = "ut";
                                    countryCode = "PG";
                                    iban = "cupiditate";
                                }};, "qui", TransferInstrumentInfoTypeEnum.BANK_ACCOUNT);;
            }};            

            PatchTransferInstrumentsIdResponse res = sdk.transferInstruments.patchTransferInstrumentsId(req, new PatchTransferInstrumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transferInstrument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransferInstruments

Creates a transfer instrument. 

A transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses.

When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransferInstrumentsResponse;
import org.openapis.openapi.models.operations.PostTransferInstrumentsSecurity;
import org.openapis.openapi.models.shared.BankAccountInfo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TransferInstrumentInfo;
import org.openapis.openapi.models.shared.TransferInstrumentInfoTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferInstrumentInfo req = new TransferInstrumentInfo(                new BankAccountInfo("laudantium") {{
                                accountNumber = "odio";
                                accountType = "occaecati";
                                bankBicSwift = "voluptatibus";
                                bankCity = "quisquam";
                                bankCode = "vero";
                                bankName = "omnis";
                                branchCode = "quis";
                                checkCode = "ipsum";
                                countryCode = "VI";
                                iban = "voluptate";
                            }};, "consectetur", TransferInstrumentInfoTypeEnum.RECURRING_DETAIL);            

            PostTransferInstrumentsResponse res = sdk.transferInstruments.postTransferInstruments(req, new PostTransferInstrumentsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transferInstrument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
