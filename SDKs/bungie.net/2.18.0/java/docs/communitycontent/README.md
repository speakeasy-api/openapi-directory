# communityContent

## Overview

communitycontent

### Available Operations

* [communityContentGetCommunityContent](#communitycontentgetcommunitycontent) - Returns community content.

## communityContentGetCommunityContent

Returns community content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommunityContentGetCommunityContentRequest;
import org.openapis.openapi.models.operations.CommunityContentGetCommunityContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommunityContentGetCommunityContentRequest req = new CommunityContentGetCommunityContentRequest(544883, 847252, 423655L);            

            CommunityContentGetCommunityContentResponse res = sdk.communityContent.communityContentGetCommunityContent(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
