# companySetupConfig

### Available Operations

* [companySetupConfigGet](#companysetupconfigget) - Returns the company configuration settings.
* [companySetupConfigGetCompanyOptions](#companysetupconfiggetcompanyoptions) - Returns the company option setting.
* [companySetupConfigGetFinancialYear](#companysetupconfiggetfinancialyear) - Returns the financial year.

## companySetupConfigGet

Returns the company configuration settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanySetupConfigGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanySetupConfigGetResponse res = sdk.companySetupConfig.companySetupConfigGet();

            if (res.companySetupConfigViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companySetupConfigGetCompanyOptions

Returns the company option setting.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanySetupConfigGetCompanyOptionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanySetupConfigGetCompanyOptionsResponse res = sdk.companySetupConfig.companySetupConfigGetCompanyOptions();

            if (res.companyOptionDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companySetupConfigGetFinancialYear

Returns the financial year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanySetupConfigGetFinancialYearResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanySetupConfigGetFinancialYearResponse res = sdk.companySetupConfig.companySetupConfigGetFinancialYear();

            if (res.financialYearDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
