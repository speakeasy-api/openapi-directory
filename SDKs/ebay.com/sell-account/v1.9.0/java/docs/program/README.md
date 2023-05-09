# program

### Available Operations

* [getOptedInPrograms](#getoptedinprograms) - This method gets a list of the seller programs that the seller has opted-in to.
* [optInToProgram](#optintoprogram) - This method opts the seller in to an eBay seller program. Refer to the <a href="/api-docs/sell/account/overview.html#opt-in" target="_blank">Account API overview</a> for information about available eBay seller programs.<br /><br /><span class="tablenote"><b>Note:</b> It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the <a href="/api-docs/sell/account/resources/program/methods/getOptedInPrograms" target="_blank">getOptedInPrograms</a> call to check the status of your request after the processing period has passed.</span>
* [optOutOfProgram](#optoutofprogram) - This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the <b>getOptedInPrograms</b> call.

## getOptedInPrograms

This method gets a list of the seller programs that the seller has opted-in to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOptedInProgramsResponse;
import org.openapis.openapi.models.operations.GetOptedInProgramsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOptedInProgramsResponse res = sdk.program.getOptedInPrograms(new GetOptedInProgramsSecurity("repellendus") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.programs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optInToProgram

This method opts the seller in to an eBay seller program. Refer to the <a href="/api-docs/sell/account/overview.html#opt-in" target="_blank">Account API overview</a> for information about available eBay seller programs.<br /><br /><span class="tablenote"><b>Note:</b> It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the <a href="/api-docs/sell/account/resources/program/methods/getOptedInPrograms" target="_blank">getOptedInPrograms</a> call to check the status of your request after the processing period has passed.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptInToProgramResponse;
import org.openapis.openapi.models.operations.OptInToProgramSecurity;
import org.openapis.openapi.models.shared.Program;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Program req = new Program() {{
                programType = "totam";
            }};            

            OptInToProgramResponse res = sdk.program.optInToProgram(req, new OptInToProgramSecurity("similique") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.optInToProgram200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optOutOfProgram

This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the <b>getOptedInPrograms</b> call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptOutOfProgramResponse;
import org.openapis.openapi.models.operations.OptOutOfProgramSecurity;
import org.openapis.openapi.models.shared.Program;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Program req = new Program() {{
                programType = "alias";
            }};            

            OptOutOfProgramResponse res = sdk.program.optOutOfProgram(req, new OptOutOfProgramSecurity("at") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.optOutOfProgram200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
