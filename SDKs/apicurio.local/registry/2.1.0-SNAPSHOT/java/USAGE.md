<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateGlobalRuleRequest req = new CreateGlobalRuleRequest() {{
                request = new Rule() {{
                    config = "sit";
                    type = "VALIDITY";
                }};
            }};

            CreateGlobalRuleResponse res = sdk.admin.createGlobalRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->