# initialization

### Available Operations

* [postStoreDetail](#poststoredetail) - Store payout details
* [postStoreDetailAndSubmitThirdParty](#poststoredetailandsubmitthirdparty) - Store details and submit a payout
* [postSubmitThirdParty](#postsubmitthirdparty) - Submit a payout

## postStoreDetail

Stores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.

### Example Usage

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

            org.openapis.openapi.models.shared.StoreDetailRequest req = new StoreDetailRequest(LocalDate.parse("2020-12-18"), StoreDetailRequestEntityTypeEnum.NATURAL_PERSON, "nam", "officia",                 new Recurring() {{
                                contract = RecurringContractEnum.RECURRING;
                                recurringDetailName = "fugit";
                                recurringExpiry = OffsetDateTime.parse("2021-02-10T09:24:01.909Z");
                                recurringFrequency = "optio";
                                tokenService = RecurringTokenServiceEnum.MCTOKENSERVICE;
                            }};, "beatae", "commodi") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("modi", "qui");
                    put("impedit", "cum");
                }};
                bank = new BankAccount() {{
                    bankAccountNumber = "esse";
                    bankCity = "ipsum";
                    bankLocationId = "excepturi";
                    bankName = "aspernatur";
                    bic = "perferendis";
                    countryCode = "GG";
                    iban = "natus";
                    ownerName = "sed";
                    taxId = "iste";
                }};;
                billingAddress = new Address("dolor", "natus", "laboriosam", "hic", "saepe") {{
                    stateOrProvince = "fuga";
                }};;
                card = new Card() {{
                    cvc = "in";
                    expiryMonth = "corporis";
                    expiryYear = "iste";
                    holderName = "iure";
                    issueNumber = "saepe";
                    number = "quidem";
                    startMonth = "architecto";
                    startYear = "ipsa";
                }};;
                fraudOffset = 969810;
                selectedBrand = "est";
                shopperName = new Name("mollitia", "laborum");;
                socialSecurityNumber = "dolores";
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

## postStoreDetailAndSubmitThirdParty

Submits a payout and stores its details for subsequent payouts.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStoreDetailAndSubmitThirdPartyResponse;
import org.openapis.openapi.models.operations.PostStoreDetailAndSubmitThirdPartySecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.Recurring;
import org.openapis.openapi.models.shared.RecurringContractEnum;
import org.openapis.openapi.models.shared.RecurringTokenServiceEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoreDetailAndSubmitRequest;
import org.openapis.openapi.models.shared.StoreDetailAndSubmitRequestEntityTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoreDetailAndSubmitRequest req = new StoreDetailAndSubmitRequest(                new Amount("dolorem", 358152L);, LocalDate.parse("2022-04-01"), StoreDetailAndSubmitRequestEntityTypeEnum.NATURAL_PERSON, "omnis", "nemo",                 new Recurring() {{
                                contract = RecurringContractEnum.ONECLICK;
                                recurringDetailName = "excepturi";
                                recurringExpiry = OffsetDateTime.parse("2022-07-24T21:51:02.112Z");
                                recurringFrequency = "culpa";
                                tokenService = RecurringTokenServiceEnum.MCTOKENSERVICE;
                            }};, "sapiente", "architecto", "mollitia") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("culpa", "consequuntur");
                }};
                bank = new BankAccount() {{
                    bankAccountNumber = "repellat";
                    bankCity = "mollitia";
                    bankLocationId = "occaecati";
                    bankName = "numquam";
                    bic = "commodi";
                    countryCode = "KH";
                    iban = "molestiae";
                    ownerName = "velit";
                    taxId = "error";
                }};;
                billingAddress = new Address("quia", "quis", "vitae", "laborum", "animi") {{
                    stateOrProvince = "enim";
                }};;
                card = new Card() {{
                    cvc = "odit";
                    expiryMonth = "quo";
                    expiryYear = "sequi";
                    holderName = "tenetur";
                    issueNumber = "ipsam";
                    number = "id";
                    startMonth = "possimus";
                    startYear = "aut";
                }};;
                fraudOffset = 97101;
                selectedBrand = "error";
                shopperName = new Name("temporibus", "laborum");;
                shopperStatement = "quasi";
                socialSecurityNumber = "reiciendis";
            }};            

            PostStoreDetailAndSubmitThirdPartyResponse res = sdk.initialization.postStoreDetailAndSubmitThirdParty(req, new PostStoreDetailAndSubmitThirdPartySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storeDetailAndSubmitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSubmitThirdParty

Submits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSubmitThirdPartyResponse;
import org.openapis.openapi.models.operations.PostSubmitThirdPartySecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.Recurring;
import org.openapis.openapi.models.shared.RecurringContractEnum;
import org.openapis.openapi.models.shared.RecurringTokenServiceEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SubmitRequest;
import org.openapis.openapi.models.shared.SubmitRequestEntityTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubmitRequest req = new SubmitRequest(                new Amount("voluptatibus", 878194L);, "nihil",                 new Recurring() {{
                                contract = RecurringContractEnum.RECURRING;
                                recurringDetailName = "voluptatibus";
                                recurringExpiry = OffsetDateTime.parse("2022-05-25T05:33:11.349Z");
                                recurringFrequency = "voluptate";
                                tokenService = RecurringTokenServiceEnum.MCTOKENSERVICE;
                            }};, "perferendis", "doloremque", "reprehenderit", "ut") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("dicta", "corporis");
                    put("dolore", "iusto");
                    put("dicta", "harum");
                    put("enim", "accusamus");
                }};
                dateOfBirth = LocalDate.parse("2022-01-30");
                entityType = SubmitRequestEntityTypeEnum.NATURAL_PERSON;
                fraudOffset = 216822;
                nationality = "quidem";
                shopperName = new Name("molestias", "excepturi");;
                shopperStatement = "pariatur";
                socialSecurityNumber = "modi";
            }};            

            PostSubmitThirdPartyResponse res = sdk.initialization.postSubmitThirdParty(req, new PostSubmitThirdPartySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.submitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
