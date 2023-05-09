# games

### Available Operations

* [allGamesExampleParameters](#allgamesexampleparameters) - all games (example parameters)
* [specificGame](#specificgame) - specific game

## allGamesExampleParameters

all games (example parameters)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllGamesExampleParametersRequest;
import org.openapis.openapi.models.operations.AllGamesExampleParametersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllGamesExampleParametersRequest req = new AllGamesExampleParametersRequest() {{
                seasons = "2018";
                teamIds = "1";
            }};            

            AllGamesExampleParametersResponse res = sdk.games.allGamesExampleParameters(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## specificGame

specific game

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpecificGameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpecificGameResponse res = sdk.games.specificGame();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
