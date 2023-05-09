# channelsChannelsGlobal

### Available Operations

* [getAvailableChannels](#getavailablechannels) - List all available channel for this store
* [getChannelCategories](#getchannelcategories) - Get channel categories
* [getChannelColumns](#getchannelcolumns) - Get channel columns
* [getChannelInfo](#getchannelinfo) - Get channel information

## getAvailableChannels

List all available channel for this store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAvailableChannelsRequest;
import org.openapis.openapi.models.operations.GetAvailableChannelsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAvailableChannelsRequest req = new GetAvailableChannelsRequest("minima");            

            GetAvailableChannelsResponse res = sdk.channelsChannelsGlobal.getAvailableChannels(req);

            if (res.channelHeaders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCategories

Get channel categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCategoriesRequest;
import org.openapis.openapi.models.operations.GetChannelCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCategoriesRequest req = new GetChannelCategoriesRequest(                new String[]{{
                                add("eligendi"),
                                add("sit"),
                                add("culpa"),
                            }}, "tempore");            

            GetChannelCategoriesResponse res = sdk.channelsChannelsGlobal.getChannelCategories(req);

            if (res.channelRootCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelColumns

Get channel columns

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelColumnsRequest;
import org.openapis.openapi.models.operations.GetChannelColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelColumnsRequest req = new GetChannelColumnsRequest(                new String[]{{
                                add("cumque"),
                            }}, "consequuntur") {{
                requestBody = new String[]{{
                    add("8a76f06a-fefc-4c0d-bcfe-b210f1482977"),
                }};
            }};            

            GetChannelColumnsResponse res = sdk.channelsChannelsGlobal.getChannelColumns(req);

            if (res.channelColumns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelInfo

Get channel information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelInfoRequest;
import org.openapis.openapi.models.operations.GetChannelInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelInfoRequest req = new GetChannelInfoRequest("minus");            

            GetChannelInfoResponse res = sdk.channelsChannelsGlobal.getChannelInfo(req);

            if (res.channelInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
