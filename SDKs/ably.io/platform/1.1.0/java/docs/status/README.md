# status

### Available Operations

* [getMetadataOfAllChannels](#getmetadataofallchannels) - Enumerate all active channels of the application
* [getMetadataOfChannel](#getmetadataofchannel) - Get metadata of a channel
* [getPresenceOfChannel](#getpresenceofchannel) - Get presence of a channel

## getMetadataOfAllChannels

Enumerate all active channels of the application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMetadataOfAllChannelsByEnum;
import org.openapis.openapi.models.operations.GetMetadataOfAllChannelsRequest;
import org.openapis.openapi.models.operations.GetMetadataOfAllChannelsResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("delectus", "voluptate") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMetadataOfAllChannelsRequest req = new GetMetadataOfAllChannelsRequest() {{
                xAblyVersion = "consectetur";
                by = GetMetadataOfAllChannelsByEnum.ID;
                format = ResponseFormatEnum.HTML;
                limit = 492268L;
                prefix = "hic";
            }};            

            GetMetadataOfAllChannelsResponse res = sdk.status.getMetadataOfAllChannels(req);

            if (res.getMetadataOfAllChannels2XXApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMetadataOfChannel

Get metadata of a channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMetadataOfChannelRequest;
import org.openapis.openapi.models.operations.GetMetadataOfChannelResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("distinctio", "quod") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMetadataOfChannelRequest req = new GetMetadataOfChannelRequest("odio") {{
                xAblyVersion = "similique";
                format = ResponseFormatEnum.MSGPACK;
            }};            

            GetMetadataOfChannelResponse res = sdk.status.getMetadataOfChannel(req);

            if (res.channelDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPresenceOfChannel

Get presence on a channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresenceOfChannelRequest;
import org.openapis.openapi.models.operations.GetPresenceOfChannelResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vero", "ducimus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPresenceOfChannelRequest req = new GetPresenceOfChannelRequest("dolore") {{
                xAblyVersion = "quibusdam";
                clientId = "illum";
                connectionId = "sequi";
                format = ResponseFormatEnum.MSGPACK;
                limit = 773326L;
            }};            

            GetPresenceOfChannelResponse res = sdk.status.getPresenceOfChannel(req);

            if (res.presenceMessages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
