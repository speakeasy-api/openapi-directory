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

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostStoreDetailSecurity;
import org.openapis.openapi.models.operations.PostStoreDetailRequest;
import org.openapis.openapi.models.operations.PostStoreDetailResponse;
import org.openapis.openapi.models.shared.StoreDetailRequestEntityTypeEnum;
import org.openapis.openapi.models.shared.StoreDetailRequest;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.RecurringContractEnum;
import org.openapis.openapi.models.shared.RecurringTokenServiceEnum;
import org.openapis.openapi.models.shared.Recurring;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostStoreDetailRequest req = new PostStoreDetailRequest() {{
                security = new PostStoreDetailSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new StoreDetailRequest() {{
                    additionalData = new java.util.HashMap<String, String>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    bank = new BankAccount() {{
                        bankAccountNumber = "illum";
                        bankCity = "vel";
                        bankLocationId = "error";
                        bankName = "deserunt";
                        bic = "suscipit";
                        countryCode = "iure";
                        iban = "magnam";
                        ownerName = "debitis";
                        taxId = "ipsa";
                    }};
                    billingAddress = new Address() {{
                        city = "Edinburg";
                        country = "Holy See (Vatican City State)";
                        houseNumberOrName = "molestiae";
                        postalCode = "85453-9803";
                        stateOrProvince = "veritatis";
                        street = "0389 Connelly Trace";
                    }};
                    card = new Card() {{
                        cvc = "at";
                        expiryMonth = "maiores";
                        expiryYear = "molestiae";
                        holderName = "quod";
                        issueNumber = "quod";
                        number = "esse";
                        startMonth = "totam";
                        startYear = "porro";
                    }};
                    dateOfBirth = "2022-10-06T15:49:54.663Z";
                    entityType = "Company";
                    fraudOffset = 639921;
                    merchantAccount = "occaecati";
                    nationality = "fugit";
                    recurring = new Recurring() {{
                        contract = "RECURRING";
                        recurringDetailName = "hic";
                        tokenService = "MCTOKENSERVICE";
                    }};
                    selectedBrand = "totam";
                    shopperEmail = "beatae";
                    shopperName = new Name() {{
                        firstName = "Haskell";
                        lastName = "Krajcik";
                    }};
                    shopperReference = "modi";
                    socialSecurityNumber = "qui";
                }};
            }};            

            PostStoreDetailResponse res = sdk.initialization.postStoreDetail(req);

            if (res.storeDetailResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### initialization

* `postStoreDetail` - Store payout details
* `postStoreDetailAndSubmitThirdParty` - Store details and submit a payout
* `postSubmitThirdParty` - Submit a payout

### instantPayouts

* `postPayout` - Make an instant card payout

### reviewing

* `postConfirmThirdParty` - Confirm a payout
* `postDeclineThirdParty` - Cancel a payout
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
