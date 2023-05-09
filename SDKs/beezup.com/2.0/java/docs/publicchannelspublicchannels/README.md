# publicChannelsPublicChannels

### Available Operations

* [getChannels](#getchannels) - The channel list for one country
* [getChannelsIndex](#getchannelsindex) - Get public channel index

## getChannels

The channel list for one country

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelsRequest;
import org.openapis.openapi.models.operations.GetChannelsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelsRequest req = new GetChannelsRequest(                new String[]{{
                                add("eos"),
                                add("occaecati"),
                                add("iste"),
                            }}, "magni") {{
                ifNoneMatch = "inventore";
            }};            

            GetChannelsResponse res = sdk.publicChannelsPublicChannels.getChannels(req);

            if (res.publicChannelInfoList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelsIndex

Use this operation to get the correct link to the channels and to the list of values

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelsIndexRequest;
import org.openapis.openapi.models.operations.GetChannelsIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelsIndexRequest req = new GetChannelsIndexRequest() {{
                ifNoneMatch = "fuga";
            }};            

            GetChannelsIndexResponse res = sdk.publicChannelsPublicChannels.getChannelsIndex(req);

            if (res.publicChannelIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
