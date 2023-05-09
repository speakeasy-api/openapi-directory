# generation

## Overview

Generate names, insults, lorem ipsum etc

Find out more
<http://fungenerators.com/api/pirate/>
### Available Operations

* [getPirateGenerateInsult](#getpirategenerateinsult) - Generate random pirate insults.
* [getPirateGenerateLoremIpsum](#getpirategenerateloremipsum) - Generate pirate lorem ipsum.
* [getPirateGenerateName](#getpirategeneratename) - Generate random pirate names.

## getPirateGenerateInsult

Generate random pirate insults.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultRequest;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultResponse;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPirateGenerateInsultRequest req = new GetPirateGenerateInsultRequest() {{
                limit = 715190L;
            }};            

            GetPirateGenerateInsultResponse res = sdk.generation.getPirateGenerateInsult(req, new GetPirateGenerateInsultSecurity("quibusdam") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPirateGenerateLoremIpsum

Generate pirate lorem ipsum.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPirateGenerateLoremIpsumRequest;
import org.openapis.openapi.models.operations.GetPirateGenerateLoremIpsumResponse;
import org.openapis.openapi.models.operations.GetPirateGenerateLoremIpsumSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPirateGenerateLoremIpsumRequest req = new GetPirateGenerateLoremIpsumRequest() {{
                limit = 602763L;
                type = "nulla";
            }};            

            GetPirateGenerateLoremIpsumResponse res = sdk.generation.getPirateGenerateLoremIpsum(req, new GetPirateGenerateLoremIpsumSecurity("corrupti") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPirateGenerateName

Generate random pirate names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPirateGenerateNameRequest;
import org.openapis.openapi.models.operations.GetPirateGenerateNameResponse;
import org.openapis.openapi.models.operations.GetPirateGenerateNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPirateGenerateNameRequest req = new GetPirateGenerateNameRequest() {{
                limit = 847252L;
                variation = "vel";
            }};            

            GetPirateGenerateNameResponse res = sdk.generation.getPirateGenerateName(req, new GetPirateGenerateNameSecurity("error") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
