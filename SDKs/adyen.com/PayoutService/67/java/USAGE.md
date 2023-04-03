<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostStoreDetailSecurity;
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
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoreDetailRequest req = new StoreDetailRequest() {{
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
                    recurringExpiry = "2021-06-08T13:49:32.889Z";
                    recurringFrequency = "beatae";
                    tokenService = "VISATOKENSERVICE";
                }};
                selectedBrand = "molestiae";
                shopperEmail = "modi";
                shopperName = new Name() {{
                    firstName = "Christy";
                    lastName = "Ryan";
                }};
                shopperReference = "cum";
                socialSecurityNumber = "esse";
                telephoneNumber = "ipsum";
            }}            

            PostStoreDetailResponse res = sdk.initialization.postStoreDetail(req, new PostStoreDetailSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storeDetailResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->