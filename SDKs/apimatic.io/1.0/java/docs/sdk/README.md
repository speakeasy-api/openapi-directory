# SDK

## Overview

Transform API Descriptions from/to various formats

API Transformer Website
<https://apimatic.io/transformer>
### Available Operations

* [convertAPI](#convertapi) - Transform API Descriptions from/to various formats

## convertAPI

Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.

### INPUTS
* API Blueprint
* Swagger 1.0 - 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* Google Discovery
* RAML 0.8
* I/O Docs - Mashery
* HAR 1.2
* Postman Collection 1.0 - 2.0
* APIMATIC Format
* Mashape

### OUTPUTS
* API Blueprint
* Swagger 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* RAML 0.8 - 1.0
* APIMATIC Format

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertAPIFormatEnum;
import org.openapis.openapi.models.operations.ConvertAPIRequest;
import org.openapis.openapi.models.operations.ConvertAPIRequestBody;
import org.openapis.openapi.models.operations.ConvertAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertAPIRequest req = new ConvertAPIRequest(ConvertAPIFormatEnum.RAML) {{
                requestBody = new ConvertAPIRequestBody() {{
                    url = "quibusdam";
                }};;
            }};            

            ConvertAPIResponse res = sdk.sdk.convertAPI(req);

            if (res.convertAPI200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
