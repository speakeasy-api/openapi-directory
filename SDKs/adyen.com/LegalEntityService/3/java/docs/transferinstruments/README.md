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

            DeleteTransferInstrumentsIdRequest req = new DeleteTransferInstrumentsIdRequest("aut");            

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

            GetTransferInstrumentsIdRequest req = new GetTransferInstrumentsIdRequest("quas");            

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
import org.openapis.openapi.models.shared.AULocalAccountIdentification;
import org.openapis.openapi.models.shared.AULocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.AdditionalBankIdentification;
import org.openapis.openapi.models.shared.AdditionalBankIdentificationTypeEnum;
import org.openapis.openapi.models.shared.BankAccountInfo;
import org.openapis.openapi.models.shared.CALocalAccountIdentification;
import org.openapis.openapi.models.shared.CALocalAccountIdentificationAccountTypeEnum;
import org.openapis.openapi.models.shared.CALocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.CZLocalAccountIdentification;
import org.openapis.openapi.models.shared.CZLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.DKLocalAccountIdentification;
import org.openapis.openapi.models.shared.DKLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.HULocalAccountIdentification;
import org.openapis.openapi.models.shared.HULocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.IbanAccountIdentification;
import org.openapis.openapi.models.shared.IbanAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.NOLocalAccountIdentification;
import org.openapis.openapi.models.shared.NOLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.NumberAndBicAccountIdentification;
import org.openapis.openapi.models.shared.NumberAndBicAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.PLLocalAccountIdentification;
import org.openapis.openapi.models.shared.PLLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.SELocalAccountIdentification;
import org.openapis.openapi.models.shared.SELocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TransferInstrumentInfo;
import org.openapis.openapi.models.shared.TransferInstrumentInfoTypeEnum;
import org.openapis.openapi.models.shared.UKLocalAccountIdentification;
import org.openapis.openapi.models.shared.UKLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.USLocalAccountIdentification;
import org.openapis.openapi.models.shared.USLocalAccountIdentificationAccountTypeEnum;
import org.openapis.openapi.models.shared.USLocalAccountIdentificationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchTransferInstrumentsIdRequest req = new PatchTransferInstrumentsIdRequest("itaque") {{
                transferInstrumentInfo = new TransferInstrumentInfo(                new BankAccountInfo() {{
                                    accountIdentification = new AULocalAccountIdentification("est", "repellendus", AULocalAccountIdentificationTypeEnum.AU_LOCAL);;
                                    accountType = "porro";
                                    countryCode = "YT";
                                }};, "ut", TransferInstrumentInfoTypeEnum.RECURRING_DETAIL);;
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
import org.openapis.openapi.models.shared.AULocalAccountIdentification;
import org.openapis.openapi.models.shared.AULocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.AdditionalBankIdentification;
import org.openapis.openapi.models.shared.AdditionalBankIdentificationTypeEnum;
import org.openapis.openapi.models.shared.BankAccountInfo;
import org.openapis.openapi.models.shared.CALocalAccountIdentification;
import org.openapis.openapi.models.shared.CALocalAccountIdentificationAccountTypeEnum;
import org.openapis.openapi.models.shared.CALocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.CZLocalAccountIdentification;
import org.openapis.openapi.models.shared.CZLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.DKLocalAccountIdentification;
import org.openapis.openapi.models.shared.DKLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.HULocalAccountIdentification;
import org.openapis.openapi.models.shared.HULocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.IbanAccountIdentification;
import org.openapis.openapi.models.shared.IbanAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.NOLocalAccountIdentification;
import org.openapis.openapi.models.shared.NOLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.NumberAndBicAccountIdentification;
import org.openapis.openapi.models.shared.NumberAndBicAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.PLLocalAccountIdentification;
import org.openapis.openapi.models.shared.PLLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.SELocalAccountIdentification;
import org.openapis.openapi.models.shared.SELocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TransferInstrumentInfo;
import org.openapis.openapi.models.shared.TransferInstrumentInfoTypeEnum;
import org.openapis.openapi.models.shared.UKLocalAccountIdentification;
import org.openapis.openapi.models.shared.UKLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.USLocalAccountIdentification;
import org.openapis.openapi.models.shared.USLocalAccountIdentificationAccountTypeEnum;
import org.openapis.openapi.models.shared.USLocalAccountIdentificationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferInstrumentInfo req = new TransferInstrumentInfo(                new BankAccountInfo() {{
                                accountIdentification = new NumberAndBicAccountIdentification("qui", "quae", NumberAndBicAccountIdentificationTypeEnum.NUMBER_AND_BIC) {{
                                    additionalBankIdentification = new AdditionalBankIdentification() {{
                                        code = "laudantium";
                                        type = AdditionalBankIdentificationTypeEnum.GB_SORT_CODE;
                                    }};;
                                }};;
                                accountType = "occaecati";
                                countryCode = "WS";
                            }};, "quisquam", TransferInstrumentInfoTypeEnum.RECURRING_DETAIL);            

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
