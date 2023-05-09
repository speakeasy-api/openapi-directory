# configuration

## Overview

Companies sync configuration.

### Available Operations

* [getCompanyConfiguration](#getcompanyconfiguration) - Get company configuration
* [saveCompanyConfiguration](#savecompanyconfiguration) - Set company configuration

## getCompanyConfiguration

Gets a companies expense sync configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyConfigurationRequest;
import org.openapis.openapi.models.operations.GetCompanyConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCompanyConfigurationRequest req = new GetCompanyConfigurationRequest("8a210b68-6988-11ed-a1eb-0242ac120002");            

            GetCompanyConfigurationResponse res = sdk.configuration.getCompanyConfiguration(req);

            if (res.companyConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveCompanyConfiguration

Sets a companies expense sync configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveCompanyConfigurationRequest;
import org.openapis.openapi.models.operations.SaveCompanyConfigurationResponse;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.CompanyConfiguration;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Supplier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveCompanyConfigurationRequest req = new SaveCompanyConfigurationRequest("8a210b68-6988-11ed-a1eb-0242ac120002") {{
                companyConfiguration = new CompanyConfiguration() {{
                    bankAccount = new BankAccount() {{
                        id = "32";
                    }};;
                    customer = new Customer() {{
                        id = "142";
                    }};;
                    supplier = new Supplier() {{
                        id = "124";
                    }};;
                }};;
            }};            

            SaveCompanyConfigurationResponse res = sdk.configuration.saveCompanyConfiguration(req);

            if (res.companyConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
