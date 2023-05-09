# players

### Available Operations

* [allPlayersSearch](#allplayerssearch) - all players (search)
* [specificPlayer](#specificplayer) - specific player

## allPlayersSearch

all players (search)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllPlayersSearchRequest;
import org.openapis.openapi.models.operations.AllPlayersSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllPlayersSearchRequest req = new AllPlayersSearchRequest() {{
                search = "lebron";
            }};            

            AllPlayersSearchResponse res = sdk.players.allPlayersSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## specificPlayer

specific player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpecificPlayerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpecificPlayerResponse res = sdk.players.specificPlayer();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
