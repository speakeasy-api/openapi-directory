# person

### Available Operations

* [getPeople](#getpeople) - Get a list of people
* [getPeopleId](#getpeopleid) - Get a specific person

## getPeople

Each series, season, and episode has a Credits section where you may add people and roles.
This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPeopleRequest;
import org.openapis.openapi.models.operations.GetPeopleResponse;
import org.openapis.openapi.models.operations.GetPeopleSecurity;
import org.openapis.openapi.models.operations.GetPeopleSortEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPeopleRequest req = new GetPeopleRequest() {{
                ids = new String[]{{
                    add("ca3aed01-1799-4631-afde-04771778ff61"),
                }};
                pageNumber = 857125L;
                pageSize = 39650L;
                q = "dicta";
                sort = new org.openapis.openapi.models.operations.GetPeopleSortEnum[]{{
                    add(GetPeopleSortEnum.FIRST_NAME),
                    add(GetPeopleSortEnum.FIRST_NAME),
                }};
            }};            

            GetPeopleResponse res = sdk.person.getPeople(req, new GetPeopleSecurity("ex") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPeople200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPeopleId

Each series, season, and episode has a Credits section where you may add people and roles.
This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPeopleIdRequest;
import org.openapis.openapi.models.operations.GetPeopleIdResponse;
import org.openapis.openapi.models.operations.GetPeopleIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPeopleIdRequest req = new GetPeopleIdRequest("360a15db-6a66-4065-9a1a-deaab5851d6c");            

            GetPeopleIdResponse res = sdk.person.getPeopleId(req, new GetPeopleIdSecurity("ex") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPeopleId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
