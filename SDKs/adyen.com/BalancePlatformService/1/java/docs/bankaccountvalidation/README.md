# bankAccountValidation

### Available Operations

* [postValidateBankAccountIdentification](#postvalidatebankaccountidentification) - Validate a bank account

## postValidateBankAccountIdentification

Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostValidateBankAccountIdentificationResponse;
import org.openapis.openapi.models.operations.PostValidateBankAccountIdentificationSecurity;
import org.openapis.openapi.models.shared.AULocalAccountIdentification;
import org.openapis.openapi.models.shared.AULocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.AdditionalBankIdentification;
import org.openapis.openapi.models.shared.AdditionalBankIdentificationTypeEnum;
import org.openapis.openapi.models.shared.BankAccountIdentificationValidationRequest;
import org.openapis.openapi.models.shared.CALocalAccountIdentification;
import org.openapis.openapi.models.shared.CALocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.CZLocalAccountIdentification;
import org.openapis.openapi.models.shared.CZLocalAccountIdentificationTypeEnum;
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
import org.openapis.openapi.models.shared.SGLocalAccountIdentification;
import org.openapis.openapi.models.shared.SGLocalAccountIdentificationTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
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

            org.openapis.openapi.models.shared.BankAccountIdentificationValidationRequest req = new BankAccountIdentificationValidationRequest(                new NOLocalAccountIdentification("distinctio", NOLocalAccountIdentificationTypeEnum.NO_LOCAL) {{
                                accountNumber = "magnam";
                                type = NOLocalAccountIdentificationTypeEnum.NO_LOCAL;
                            }});            

            PostValidateBankAccountIdentificationResponse res = sdk.bankAccountValidation.postValidateBankAccountIdentification(req, new PostValidateBankAccountIdentificationSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.void_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
