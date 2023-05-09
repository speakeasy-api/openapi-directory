# company

### Available Operations

* [companySearchRead](#companysearchread) - Return company search result

## companySearchRead

Return company search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search companies,

For more details on how companies are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanySearchReadRequest;
import org.openapis.openapi.models.operations.CompanySearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanySearchReadRequest req = new CompanySearchReadRequest("illum");            

            CompanySearchReadResponse res = sdk.company.companySearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
