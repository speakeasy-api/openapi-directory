# people

### Available Operations

* [peopleSearchRead](#peoplesearchread) - Return cast search result

## peopleSearchRead

Return cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast are listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleSearchReadRequest;
import org.openapis.openapi.models.operations.PeopleSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleSearchReadRequest req = new PeopleSearchReadRequest("excepturi");            

            PeopleSearchReadResponse res = sdk.people.peopleSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
