# vatCategories

### Available Operations

* [vatCategoriesGet](#vatcategoriesget) - Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* [vatCategoriesProcessVatRates](#vatcategoriesprocessvatrates) - Process Vat Rates

## vatCategoriesGet

Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VatCategoriesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VatCategoriesGetResponse res = sdk.vatCategories.vatCategoriesGet();

            if (res.pageResultVatCategoryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vatCategoriesProcessVatRates

Process Vat Rates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VatCategoriesProcessVatRatesResponse;
import org.openapis.openapi.models.shared.VatRateDto;
import org.openapis.openapi.models.shared.VatRatesByVatCategoryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.VatRatesByVatCategoryDto[]{{
                add(new VatRatesByVatCategoryDto() {{
                    vatCategoryId = 281135L;
                    vatRates = new org.openapis.openapi.models.shared.VatRateDto[]{{
                        add(new VatRateDto() {{
                            id = 66756L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 843591;
                            percentage = 3843.54;
                            timestamp = "quidem";
                            vatCategoryId = 964093L;
                        }}),
                    }};
                }}),
                add(new VatRatesByVatCategoryDto() {{
                    vatCategoryId = 366324L;
                    vatRates = new org.openapis.openapi.models.shared.VatRateDto[]{{
                        add(new VatRateDto() {{
                            id = 529174L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 196892;
                            percentage = 5428.07;
                            timestamp = "maiores";
                            vatCategoryId = 714054L;
                        }}),
                        add(new VatRateDto() {{
                            id = 702418L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 516556;
                            percentage = 7992.36;
                            timestamp = "aspernatur";
                            vatCategoryId = 53869L;
                        }}),
                        add(new VatRateDto() {{
                            id = 773455L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 722658;
                            percentage = 4062.72;
                            timestamp = "odio";
                            vatCategoryId = 963094L;
                        }}),
                        add(new VatRateDto() {{
                            id = 794927L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 283514;
                            percentage = 7160.58;
                            timestamp = "eius";
                            vatCategoryId = 176418L;
                        }}),
                    }};
                }}),
                add(new VatRatesByVatCategoryDto() {{
                    vatCategoryId = 333507L;
                    vatRates = new org.openapis.openapi.models.shared.VatRateDto[]{{
                        add(new VatRateDto() {{
                            id = 572317L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 577707;
                            percentage = 8948.7;
                            timestamp = "laboriosam";
                            vatCategoryId = 176281L;
                        }}),
                        add(new VatRateDto() {{
                            id = 227706L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 279679;
                            percentage = 7835.39;
                            timestamp = "occaecati";
                            vatCategoryId = 970703L;
                        }}),
                        add(new VatRateDto() {{
                            id = 454334L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 735521;
                            percentage = 4473.23;
                            timestamp = "omnis";
                            vatCategoryId = 820735L;
                        }}),
                        add(new VatRateDto() {{
                            id = 950337L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 923879;
                            percentage = 7115.72;
                            timestamp = "iusto";
                            vatCategoryId = 456473L;
                        }}),
                    }};
                }}),
                add(new VatRatesByVatCategoryDto() {{
                    vatCategoryId = 687352L;
                    vatRates = new org.openapis.openapi.models.shared.VatRateDto[]{{
                        add(new VatRateDto() {{
                            id = 801059L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 188705;
                            percentage = 5183.66;
                            timestamp = "vero";
                            vatCategoryId = 294316L;
                        }}),
                        add(new VatRateDto() {{
                            id = 722889L;
                            isActive = false;
                            isDefault = false;
                            orderIndex = 638085;
                            percentage = 9780.79;
                            timestamp = "cupiditate";
                            vatCategoryId = 75203L;
                        }}),
                    }};
                }}),
            }}            

            VatCategoriesProcessVatRatesResponse res = sdk.vatCategories.vatCategoriesProcessVatRates(req);

            if (res.vatCategoriesProcessVatRates200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
