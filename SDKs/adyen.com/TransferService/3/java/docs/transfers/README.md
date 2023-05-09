# transfers

### Available Operations

* [postTransfers](#posttransfers) - Transfer funds

## postTransfers

Starts a request to transfer funds to [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts), [transfer instruments](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments), or third-party bank accounts. Adyen sends the outcome of the transfer request through webhooks.

To use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransfersResponse;
import org.openapis.openapi.models.operations.PostTransfersSecurity;
import org.openapis.openapi.models.shared.AULocalAccountIdentification;
import org.openapis.openapi.models.shared.AULocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.AdditionalBankIdentification;
import org.openapis.openapi.models.shared.AdditionalBankIdentificationTypeEnum;
import org.openapis.openapi.models.shared.Address2;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.BRLocalAccountIdentification;
import org.openapis.openapi.models.shared.BRLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.BankAccountV3;
import org.openapis.openapi.models.shared.CALocalAccountIdentification;
import org.openapis.openapi.models.shared.CALocalAccountIdentificationAccountTypeEnum;
import org.openapis.openapi.models.shared.CALocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.CZLocalAccountIdentification;
import org.openapis.openapi.models.shared.CZLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.CounterpartyInfoV3;
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
import org.openapis.openapi.models.shared.PartyIdentification2;
import org.openapis.openapi.models.shared.PartyIdentification2TypeEnum;
import org.openapis.openapi.models.shared.SELocalAccountIdentification;
import org.openapis.openapi.models.shared.SELocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.SGLocalAccountIdentification;
import org.openapis.openapi.models.shared.SGLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.TransferInfo;
import org.openapis.openapi.models.shared.TransferInfoCategoryEnum;
import org.openapis.openapi.models.shared.TransferInfoPriorityEnum;
import org.openapis.openapi.models.shared.UKLocalAccountIdentification;
import org.openapis.openapi.models.shared.UKLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.USLocalAccountIdentification;
import org.openapis.openapi.models.shared.USLocalAccountIdentificationAccountTypeEnum;
import org.openapis.openapi.models.shared.USLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.UltimatePartyIdentification;
import org.openapis.openapi.models.shared.UltimatePartyIdentificationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferInfo req = new TransferInfo(                new Amount("excepturi", 392785L);, TransferInfoCategoryEnum.PLATFORM_PAYMENT,                 new CounterpartyInfoV3() {{
                                balanceAccountId = "temporibus";
                                bankAccount = new BankAccountV3(                new PartyIdentification2("ab") {{
                                                    address = new Address2("quis") {{
                                                        city = "Lake Aiyanabury";
                                                        line1 = "repellendus";
                                                        line2 = "sapiente";
                                                        postalCode = "18894-7845";
                                                        stateOrProvince = "porro";
                                                    }};;
                                                    dateOfBirth = LocalDate.parse("2022-10-06");
                                                    firstName = "Minerva";
                                                    lastName = "Nikolaus";
                                                    reference = "occaecati";
                                                    type = PartyIdentification2TypeEnum.INDIVIDUAL;
                                                }};,                 new NOLocalAccountIdentification("optio", NOLocalAccountIdentificationTypeEnum.NO_LOCAL) {{
                                                    accountNumber = "hic";
                                                    type = NOLocalAccountIdentificationTypeEnum.NO_LOCAL;
                                                }});;
                                transferInstrumentId = "totam";
                            }};) {{
                balanceAccountId = "beatae";
                description = "commodi";
                id = "742cb739-2059-4293-96fe-a7596eb10faa";
                paymentInstrumentId = "laborum";
                priority = TransferInfoPriorityEnum.DIRECT_DEBIT;
                reference = "dolorem";
                referenceForBeneficiary = "corporis";
                ultimateParty = new UltimatePartyIdentification("explicabo") {{
                    address = new Address2("nobis") {{
                        city = "New Franco";
                        line1 = "minima";
                        line2 = "excepturi";
                        postalCode = "46991";
                        stateOrProvince = "mollitia";
                    }};;
                    dateOfBirth = LocalDate.parse("2022-05-14");
                    firstName = "Caroline";
                    lastName = "Ziemann";
                    reference = "mollitia";
                    type = UltimatePartyIdentificationTypeEnum.ORGANIZATION;
                }};;
            }};            

            PostTransfersResponse res = sdk.transfers.postTransfers(req, new PostTransfersSecurity("numquam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transfer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
