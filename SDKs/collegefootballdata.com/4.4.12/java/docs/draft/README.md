# draft

## Overview

NFL Draft data

### Available Operations

* [getDraftPicks](#getdraftpicks) - List of NFL Draft picks
* [getNFLPositions](#getnflpositions) - List of NFL positions
* [getNFLTeams](#getnflteams) - List of NFL teams

## getDraftPicks

List of NFL Draft picks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDraftPicksRequest;
import org.openapis.openapi.models.operations.GetDraftPicksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDraftPicksRequest req = new GetDraftPicksRequest() {{
                college = "temporibus";
                conference = "ab";
                nflTeam = "quis";
                position = "veritatis";
                year = 648172L;
            }};            

            GetDraftPicksResponse res = sdk.draft.getDraftPicks(req);

            if (res.draftPicks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNFLPositions

List of NFL positions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNFLPositionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNFLPositionsResponse res = sdk.draft.getNFLPositions();

            if (res.draftPositions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNFLTeams

List of NFL teams

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNFLTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNFLTeamsResponse res = sdk.draft.getNFLTeams();

            if (res.draftTeams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
