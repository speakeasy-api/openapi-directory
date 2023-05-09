<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.LocalDate;
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
                                tokenService = RecurringTokenServiceEnum.MCTOKENSERVICE;
                            }};, "vel", "error") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("suscipit", "iure");
                    put("magnam", "debitis");
                    put("ipsa", "delectus");
                }};
                bank = new BankAccount() {{
                    bankAccountNumber = "tempora";
                    bankCity = "suscipit";
                    bankLocationId = "molestiae";
                    bankName = "minus";
                    bic = "placeat";
                    countryCode = "LS";
                    iban = "iusto";
                    ownerName = "excepturi";
                    taxId = "nisi";
                }};;
                billingAddress = new Address("recusandae", "temporibus", "ab", "quis", "veritatis") {{
                    stateOrProvince = "deserunt";
                }};;
                card = new Card() {{
                    cvc = "perferendis";
                    expiryMonth = "ipsam";
                    expiryYear = "repellendus";
                    holderName = "sapiente";
                    issueNumber = "quo";
                    number = "odit";
                    startMonth = "at";
                    startYear = "at";
                }};;
                fraudOffset = 978619;
                selectedBrand = "molestiae";
                shopperName = new Name("quod", "quod");;
                socialSecurityNumber = "esse";
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