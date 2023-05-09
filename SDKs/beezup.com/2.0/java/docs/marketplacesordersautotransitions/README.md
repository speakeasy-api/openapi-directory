# marketplacesOrdersAutoTransitions

### Available Operations

* [configureAutomaticTransitions](#configureautomatictransitions) - Configure new or existing automatic Order status transition
* [getAutomaticTransitions](#getautomatictransitions) - Get list of configured automatic Order status transitions

## configureAutomaticTransitions

Configure new or existing automatic Order status transition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureAutomaticTransitionsResponse;
import org.openapis.openapi.models.shared.AutomaticTransition;
import org.openapis.openapi.models.shared.ConfigureAutomaticTransitionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConfigureAutomaticTransitionRequest req = new ConfigureAutomaticTransitionRequest(                new org.openapis.openapi.models.shared.AutomaticTransition[]{{
                                add(new AutomaticTransition(1234, true, "Amazon", 1234) {{
                                    accountId = 1234;
                                    enabled = true;
                                    marketplaceTechnicalCode = "Amazon";
                                    orderStatusTransitionId = 1234;
                                }}),
                                add(new AutomaticTransition(1234, true, "Amazon", 1234) {{
                                    accountId = 1234;
                                    enabled = true;
                                    marketplaceTechnicalCode = "Amazon";
                                    orderStatusTransitionId = 1234;
                                }}),
                            }});            

            ConfigureAutomaticTransitionsResponse res = sdk.marketplacesOrdersAutoTransitions.configureAutomaticTransitions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomaticTransitions

Get list of configured automatic Order status transitions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomaticTransitionsRequest;
import org.openapis.openapi.models.operations.GetAutomaticTransitionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomaticTransitionsRequest req = new GetAutomaticTransitionsRequest() {{
                ifNoneMatch = "veritatis";
                storeId = "consectetur";
            }};            

            GetAutomaticTransitionsResponse res = sdk.marketplacesOrdersAutoTransitions.getAutomaticTransitions(req);

            if (res.automaticTransitionInfoList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
