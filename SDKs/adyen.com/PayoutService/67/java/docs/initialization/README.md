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

            org.openapis.openapi.models.shared.StoreDetailRequest req = new StoreDetailRequest(LocalDate.parse("2022-10-06"), StoreDetailRequestEntityTypeEnum.COMPANY, "officia", "occaecati",                 new Recurring() {{
                                contract = RecurringContractEnum.ONECLICK;
                                recurringDetailName = "deleniti";
                                recurringExpiry = OffsetDateTime.parse("2020-09-22T07:34:53.140Z");
                                recurringFrequency = "totam";
                                tokenService = RecurringTokenServiceEnum.VISATOKENSERVICE;
                            }};, "commodi", "molestiae") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("qui", "impedit");
                    put("cum", "esse");
                }};
                bank = new BankAccount() {{
                    bankAccountNumber = "ipsum";
                    bankCity = "excepturi";
                    bankLocationId = "aspernatur";
                    bankName = "perferendis";
                    bic = "ad";
                    countryCode = "MU";
                    iban = "sed";
                    ownerName = "iste";
                    taxId = "dolor";
                }};;
                billingAddress = new Address("natus", "laboriosam", "hic", "saepe", "fuga") {{
                    stateOrProvince = "in";
                }};;
                card = new Card() {{
                    cvc = "corporis";
                    expiryMonth = "iste";
                    expiryYear = "iure";
                    holderName = "saepe";
                    issueNumber = "quidem";
                    number = "architecto";
                    startMonth = "ipsa";
                    startYear = "reiciendis";
                }};;
                fraudOffset = 666767;
                selectedBrand = "mollitia";
                shopperName = new Name("laborum", "dolores");;
                socialSecurityNumber = "dolorem";
                telephoneNumber = "corporis";
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

            org.openapis.openapi.models.shared.StoreDetailAndSubmitRequest req = new StoreDetailAndSubmitRequest(                new Amount("explicabo", 750686L);, LocalDate.parse("2022-05-24"), StoreDetailAndSubmitRequestEntityTypeEnum.NATURAL_PERSON, "minima", "excepturi",                 new Recurring() {{
                                contract = RecurringContractEnum.ONECLICK;
                                recurringDetailName = "iure";
                                recurringExpiry = OffsetDateTime.parse("2021-01-09T11:41:25.666Z");
                                recurringFrequency = "sapiente";
                                tokenService = RecurringTokenServiceEnum.VISATOKENSERVICE;
                            }};, "mollitia", "dolorem", "culpa") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("repellat", "mollitia");
                }};
                bank = new BankAccount() {{
                    bankAccountNumber = "occaecati";
                    bankCity = "numquam";
                    bankLocationId = "commodi";
                    bankName = "quam";
                    bic = "molestiae";
                    countryCode = "DO";
                    iban = "error";
                    ownerName = "quia";
                    taxId = "quis";
                }};;
                billingAddress = new Address("vitae", "laborum", "animi", "enim", "odit") {{
                    stateOrProvince = "quo";
                }};;
                card = new Card() {{
                    cvc = "sequi";
                    expiryMonth = "tenetur";
                    expiryYear = "ipsam";
                    holderName = "id";
                    issueNumber = "possimus";
                    number = "aut";
                    startMonth = "quasi";
                    startYear = "error";
                }};;
                fraudOffset = 837945;
                selectedBrand = "laborum";
                shopperName = new Name("quasi", "reiciendis");;
                shopperStatement = "voluptatibus";
                socialSecurityNumber = "vero";
                telephoneNumber = "nihil";
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

            org.openapis.openapi.models.shared.SubmitRequest req = new SubmitRequest(                new Amount("praesentium", 976762L);, "ipsa",                 new Recurring() {{
                                contract = RecurringContractEnum.RECURRING;
                                recurringDetailName = "voluptate";
                                recurringExpiry = OffsetDateTime.parse("2022-12-17T09:48:56.551Z");
                                recurringFrequency = "doloremque";
                                tokenService = RecurringTokenServiceEnum.VISATOKENSERVICE;
                            }};, "ut", "maiores", "dicta", "corporis") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("iusto", "dicta");
                    put("harum", "enim");
                }};
                dateOfBirth = LocalDate.parse("2021-10-04");
                entityType = SubmitRequestEntityTypeEnum.COMPANY;
                fraudOffset = 64147;
                nationality = "ipsum";
                shopperName = new Name("quidem", "molestias");;
                shopperStatement = "excepturi";
                socialSecurityNumber = "pariatur";
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
