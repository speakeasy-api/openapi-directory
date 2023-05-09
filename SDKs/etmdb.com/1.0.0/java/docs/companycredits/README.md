# companyCredits

### Available Operations

* [companyCreditsSearchRead](#companycreditssearchread) - Return company credits search result
* [companyCreditsSearchallRead](#companycreditssearchallread) - Return company credits search result

## companyCreditsSearchRead

Return company credits search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search company credits for the movie
* You can use both Amharic or English charset/font to search

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyCreditsSearchReadRequest;
import org.openapis.openapi.models.operations.CompanyCreditsSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyCreditsSearchReadRequest req = new CompanyCreditsSearchReadRequest("vel");            

            CompanyCreditsSearchReadResponse res = sdk.companyCredits.companyCreditsSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyCreditsSearchallRead

Return company credits search result

### Response Class (Status 200)
__{param}__ argument can be
* company name
* movie title or
* company credit description (such as production, cinematography, etc)

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/company_name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyCreditsSearchallReadRequest;
import org.openapis.openapi.models.operations.CompanyCreditsSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyCreditsSearchallReadRequest req = new CompanyCreditsSearchallReadRequest("error");            

            CompanyCreditsSearchallReadResponse res = sdk.companyCredits.companyCreditsSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
