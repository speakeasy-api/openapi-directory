# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStoreDetailResponse;
import org.openapis.openapi.models.operations.PostStoreDetailSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.Recurring;
import org.openapis.openapi.models.shared.RecurringContractEnum;
import org.openapis.openapi.models.shared.RecurringTokenServiceEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoreDetailRequest;
import org.openapis.openapi.models.shared.StoreDetailRequestEntityTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoreDetailRequest req = new StoreDetailRequest(LocalDate.parse("2021-10-25"), StoreDetailRequestEntityTypeEnum.COMPANY, "quibusdam", "unde",                 new Recurring() {{
                                contract = RecurringContractEnum.PAYOUT;
                                recurringDetailName = "corrupti";
                                recurringExpiry = OffsetDateTime.parse("2021-09-24T02:21:06.409Z");
                                recurringFrequency = "error";
                                tokenService = RecurringTokenServiceEnum.MCTOKENSERVICE;
                            }};, "suscipit", "iure") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("debitis", "ipsa");
                    put("delectus", "tempora");
                }};
                bank = new BankAccount() {{
                    bankAccountNumber = "suscipit";
                    bankCity = "molestiae";
                    bankLocationId = "minus";
                    bankName = "placeat";
                    bic = "voluptatum";
                    countryCode = "KN";
                    iban = "excepturi";
                    ownerName = "nisi";
                    taxId = "recusandae";
                }};;
                billingAddress = new Address("temporibus", "ab", "quis", "veritatis", "deserunt") {{
                    stateOrProvince = "perferendis";
                }};;
                card = new Card() {{
                    cvc = "ipsam";
                    expiryMonth = "repellendus";
                    expiryYear = "sapiente";
                    holderName = "quo";
                    issueNumber = "odit";
                    number = "at";
                    startMonth = "at";
                    startYear = "maiores";
                }};;
                fraudOffset = 473608;
                selectedBrand = "quod";
                shopperName = new Name("quod", "esse");;
                socialSecurityNumber = "totam";
            }};            

            PostStoreDetailResponse res = sdk.initialization.postStoreDetail(req, new PostStoreDetailSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storeDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [initialization](docs/initialization/README.md)

* [postStoreDetail](docs/initialization/README.md#poststoredetail) - Store payout details
* [postStoreDetailAndSubmitThirdParty](docs/initialization/README.md#poststoredetailandsubmitthirdparty) - Store details and submit a payout
* [postSubmitThirdParty](docs/initialization/README.md#postsubmitthirdparty) - Submit a payout

### [instantPayouts](docs/instantpayouts/README.md)

* [postPayout](docs/instantpayouts/README.md#postpayout) - Make an instant card payout

### [reviewing](docs/reviewing/README.md)

* [postConfirmThirdParty](docs/reviewing/README.md#postconfirmthirdparty) - Confirm a payout
* [postDeclineThirdParty](docs/reviewing/README.md#postdeclinethirdparty) - Cancel a payout
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
