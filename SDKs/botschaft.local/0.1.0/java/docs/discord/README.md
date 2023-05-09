# discord

### Available Operations

* [discordGetDiscordGet](#discordgetdiscordget) - Discord Get
* [discordPostDiscordPost](#discordpostdiscordpost) - Discord Post

## discordGetDiscordGet

Discord Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscordGetDiscordGetRequest;
import org.openapis.openapi.models.operations.DiscordGetDiscordGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscordGetDiscordGetRequest req = new DiscordGetDiscordGetRequest("corrupti") {{
                authorization = "illum";
                base64Message = "vel";
                message = "error";
            }};            

            DiscordGetDiscordGetResponse res = sdk.discord.discordGetDiscordGet(req);

            if (res.discordGetDiscordGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discordPostDiscordPost

Discord Post

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscordPostDiscordPostRequest;
import org.openapis.openapi.models.operations.DiscordPostDiscordPostResponse;
import org.openapis.openapi.models.shared.DiscordMessageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscordPostDiscordPostRequest req = new DiscordPostDiscordPostRequest(                new DiscordMessageRequest("deserunt") {{
                                base64Message = "suscipit";
                                message = "iure";
                            }};) {{
                authorization = "magnam";
            }};            

            DiscordPostDiscordPostResponse res = sdk.discord.discordPostDiscordPost(req);

            if (res.discordPostDiscordPost200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
