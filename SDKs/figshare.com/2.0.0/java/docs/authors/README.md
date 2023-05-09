# authors

### Available Operations

* [privateAuthorDetails](#privateauthordetails) - Author details
* [privateAuthorsSearch](#privateauthorssearch) - Search Authors

## privateAuthorDetails

View author details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateAuthorDetailsRequest;
import org.openapis.openapi.models.operations.PrivateAuthorDetailsResponse;
import org.openapis.openapi.models.operations.PrivateAuthorDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateAuthorDetailsRequest req = new PrivateAuthorDetailsRequest(864282L);            

            PrivateAuthorDetailsResponse res = sdk.authors.privateAuthorDetails(req, new PrivateAuthorDetailsSecurity("provident") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authorComplete != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateAuthorsSearch

Search for authors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateAuthorsSearchResponse;
import org.openapis.openapi.models.operations.PrivateAuthorsSearchSecurity;
import org.openapis.openapi.models.shared.PrivateAuthorsSearch;
import org.openapis.openapi.models.shared.PrivateAuthorsSearchOrderDirectionEnum;
import org.openapis.openapi.models.shared.PrivateAuthorsSearchOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PrivateAuthorsSearch req = new PrivateAuthorsSearch() {{
                groupId = 750844L;
                institutionId = 1L;
                isActive = false;
                isPublic = false;
                limit = 10L;
                offset = 730122L;
                orcid = "delectus";
                order = PrivateAuthorsSearchOrderEnum.PUBLISHED_DATE;
                orderDirection = PrivateAuthorsSearchOrderDirectionEnum.DESC;
                page = 1L;
                pageSize = 10L;
                searchFor = "figshare";
            }};            

            PrivateAuthorsSearchResponse res = sdk.authors.privateAuthorsSearch(req, new PrivateAuthorsSearchSecurity("quaerat") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
