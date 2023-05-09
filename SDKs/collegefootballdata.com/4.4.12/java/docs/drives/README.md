# drives

## Overview

Drive data

### Available Operations

* [getDrives](#getdrives) - Drive data and results

## getDrives

Get game drives

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDrivesRequest;
import org.openapis.openapi.models.operations.GetDrivesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDrivesRequest req = new GetDrivesRequest(957156L) {{
                classification = "quo";
                conference = "odit";
                defense = "at";
                defenseConference = "at";
                offense = "maiores";
                offenseConference = "molestiae";
                seasonType = "quod";
                team = "quod";
                week = 461479L;
            }};            

            GetDrivesResponse res = sdk.drives.getDrives(req);

            if (res.drives != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
