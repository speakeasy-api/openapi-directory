# generation

## Overview

Generate random quotes, names, insults, lorem ipsum etc

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [getShakespeareGenerateInsult](#getshakespearegenerateinsult) - Generate random Shakespeare style insults.
* [getShakespeareGenerateLoremIpsum](#getshakespearegenerateloremipsum) - Generate Shakespeare lorem ipsum.
* [getShakespeareGenerateName](#getshakespearegeneratename) - Generate random Shakespearen names.

## getShakespeareGenerateInsult

Generate random Shakespeare style insults.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultRequest;
import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultResponse;
import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShakespeareGenerateInsultRequest req = new GetShakespeareGenerateInsultRequest() {{
                limit = 715190L;
            }};            

            GetShakespeareGenerateInsultResponse res = sdk.generation.getShakespeareGenerateInsult(req, new GetShakespeareGenerateInsultSecurity("quibusdam") {{
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

## getShakespeareGenerateLoremIpsum

Generate Shakespeare lorem ipsum.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShakespeareGenerateLoremIpsumRequest;
import org.openapis.openapi.models.operations.GetShakespeareGenerateLoremIpsumResponse;
import org.openapis.openapi.models.operations.GetShakespeareGenerateLoremIpsumSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShakespeareGenerateLoremIpsumRequest req = new GetShakespeareGenerateLoremIpsumRequest() {{
                limit = 602763L;
                type = "nulla";
            }};            

            GetShakespeareGenerateLoremIpsumResponse res = sdk.generation.getShakespeareGenerateLoremIpsum(req, new GetShakespeareGenerateLoremIpsumSecurity("corrupti") {{
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

## getShakespeareGenerateName

Generate random Shakespearen names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShakespeareGenerateNameRequest;
import org.openapis.openapi.models.operations.GetShakespeareGenerateNameResponse;
import org.openapis.openapi.models.operations.GetShakespeareGenerateNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShakespeareGenerateNameRequest req = new GetShakespeareGenerateNameRequest() {{
                limit = 847252L;
                variation = "vel";
            }};            

            GetShakespeareGenerateNameResponse res = sdk.generation.getShakespeareGenerateName(req, new GetShakespeareGenerateNameSecurity("error") {{
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
