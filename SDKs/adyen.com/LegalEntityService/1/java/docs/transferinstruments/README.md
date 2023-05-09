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

            DeleteTransferInstrumentsIdRequest req = new DeleteTransferInstrumentsIdRequest("quaerat");            

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

            GetTransferInstrumentsIdRequest req = new GetTransferInstrumentsIdRequest("quos");            

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

            PatchTransferInstrumentsIdRequest req = new PatchTransferInstrumentsIdRequest("aliquid") {{
                transferInstrumentInfo = new TransferInstrumentInfo(                new BankAccountInfo("dolorem") {{
                                    accountNumber = "dolorem";
                                    accountType = "dolor";
                                    bankBicSwift = "qui";
                                    bankCity = "ipsum";
                                    bankCode = "hic";
                                    bankName = "excepturi";
                                    branchCode = "cum";
                                    checkCode = "voluptate";
                                    countryCode = "KW";
                                    iban = "reiciendis";
                                }};, "amet", TransferInstrumentInfoTypeEnum.RECURRING_DETAIL);;
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

            org.openapis.openapi.models.shared.TransferInstrumentInfo req = new TransferInstrumentInfo(                new BankAccountInfo("numquam") {{
                                accountNumber = "veritatis";
                                accountType = "ipsa";
                                bankBicSwift = "ipsa";
                                bankCity = "iure";
                                bankCode = "odio";
                                bankName = "quaerat";
                                branchCode = "accusamus";
                                checkCode = "quidem";
                                countryCode = "WS";
                                iban = "voluptas";
                            }};, "natus", TransferInstrumentInfoTypeEnum.BANK_ACCOUNT);            

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
