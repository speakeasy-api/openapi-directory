# taxRates

### Available Operations

* [taxRatesAdd](#taxratesadd) - Create Tax Rate
* [taxRatesAll](#taxratesall) - List Tax Rates
* [taxRatesDelete](#taxratesdelete) - Delete Tax Rate
* [taxRatesOne](#taxratesone) - Get Tax Rate
* [taxRatesUpdate](#taxratesupdate) - Update Tax Rate

## taxRatesAdd

Create Tax Rate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxRatesAddRequest;
import org.openapis.openapi.models.operations.TaxRatesAddResponse;
import org.openapis.openapi.models.operations.TaxRatesAddSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaxRateComponents;
import org.openapis.openapi.models.shared.TaxRateInput;
import org.openapis.openapi.models.shared.TaxRateTaxRateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxRatesAddRequest req = new TaxRatesAddRequest(                new TaxRateInput() {{
                                code = "ABN";
                                components = new org.openapis.openapi.models.shared.TaxRateComponents[]{{
                                    add(new TaxRateComponents() {{
                                        compound = true;
                                        id = "10";
                                        name = "GST";
                                        rate = 10;
                                    }}),
                                }};
                                description = "Reduced rate GST Purchases";
                                effectiveTaxRate = 10;
                                id = "1234";
                                name = "GST on Purchases";
                                originalTaxRateId = "12345";
                                reportTaxType = "NONE";
                                rowVersion = "1-12345";
                                status = TaxRateTaxRateStatusEnum.ACTIVE;
                                taxPayableAccountId = "123456";
                                taxRemittedAccountId = "123456";
                                totalTaxRate = 10;
                                type = "NONE";
                            }};, "dolorum", "numquam") {{
                raw = false;
                xApideckServiceId = "veritatis";
            }};            

            TaxRatesAddResponse res = sdk.taxRates.taxRatesAdd(req, new TaxRatesAddSecurity("ipsa") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createTaxRateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxRatesAll

List Tax Rates. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Connectors Affected: Quickbooks


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxRatesAllRequest;
import org.openapis.openapi.models.operations.TaxRatesAllResponse;
import org.openapis.openapi.models.operations.TaxRatesAllSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaxRatesFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxRatesAllRequest req = new TaxRatesAllRequest("ipsa", "iure") {{
                cursor = "odio";
                fields = "quaerat";
                filter = new TaxRatesFilter() {{
                    assets = true;
                    equity = true;
                    expenses = true;
                    liabilities = true;
                    revenue = true;
                }};;
                limit = 881005L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("voluptatibus", "voluptas");
                    put("natus", "eos");
                    put("atque", "sit");
                }};
                raw = false;
                xApideckServiceId = "fugiat";
            }};            

            TaxRatesAllResponse res = sdk.taxRates.taxRatesAll(req, new TaxRatesAllSecurity("ab") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTaxRatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxRatesDelete

Delete Tax Rate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxRatesDeleteRequest;
import org.openapis.openapi.models.operations.TaxRatesDeleteResponse;
import org.openapis.openapi.models.operations.TaxRatesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxRatesDeleteRequest req = new TaxRatesDeleteRequest("soluta", "dolorum", "iusto") {{
                raw = false;
                xApideckServiceId = "voluptate";
            }};            

            TaxRatesDeleteResponse res = sdk.taxRates.taxRatesDelete(req, new TaxRatesDeleteSecurity("dolorum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteTaxRateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxRatesOne

Get Tax Rate. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Support will soon be added to return the actual rate/percentage by doing additional calls in the background to provide the full view of a given tax rate. Connectors Affected: Quickbooks


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxRatesOneRequest;
import org.openapis.openapi.models.operations.TaxRatesOneResponse;
import org.openapis.openapi.models.operations.TaxRatesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxRatesOneRequest req = new TaxRatesOneRequest("deleniti", "omnis", "necessitatibus") {{
                fields = "distinctio";
                raw = false;
                xApideckServiceId = "asperiores";
            }};            

            TaxRatesOneResponse res = sdk.taxRates.taxRatesOne(req, new TaxRatesOneSecurity("nihil") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTaxRateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxRatesUpdate

Update Tax Rate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxRatesUpdateRequest;
import org.openapis.openapi.models.operations.TaxRatesUpdateResponse;
import org.openapis.openapi.models.operations.TaxRatesUpdateSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaxRateComponents;
import org.openapis.openapi.models.shared.TaxRateInput;
import org.openapis.openapi.models.shared.TaxRateTaxRateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxRatesUpdateRequest req = new TaxRatesUpdateRequest(                new TaxRateInput() {{
                                code = "ABN";
                                components = new org.openapis.openapi.models.shared.TaxRateComponents[]{{
                                    add(new TaxRateComponents() {{
                                        compound = true;
                                        id = "10";
                                        name = "GST";
                                        rate = 10;
                                    }}),
                                }};
                                description = "Reduced rate GST Purchases";
                                effectiveTaxRate = 10;
                                id = "1234";
                                name = "GST on Purchases";
                                originalTaxRateId = "12345";
                                reportTaxType = "NONE";
                                rowVersion = "1-12345";
                                status = TaxRateTaxRateStatusEnum.ACTIVE;
                                taxPayableAccountId = "123456";
                                taxRemittedAccountId = "123456";
                                totalTaxRate = 10;
                                type = "NONE";
                            }};, "voluptate", "id", "saepe") {{
                raw = false;
                xApideckServiceId = "eius";
            }};            

            TaxRatesUpdateResponse res = sdk.taxRates.taxRatesUpdate(req, new TaxRatesUpdateSecurity("aspernatur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateTaxRateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
