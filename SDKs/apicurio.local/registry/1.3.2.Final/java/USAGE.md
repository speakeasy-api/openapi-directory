<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateArtifactRulePathParams;
import org.openapis.openapi.models.operations.CreateArtifactRuleRequest;
import org.openapis.openapi.models.operations.CreateArtifactRuleResponse;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateArtifactRuleRequest req = new CreateArtifactRuleRequest() {{
                pathParams = new CreateArtifactRulePathParams() {{
                    artifactId = "corrupti";
                }};
                request = new Rule() {{
                    config = "provident";
                    type = "VALIDITY";
                }};
            }};            

            CreateArtifactRuleResponse res = sdk.artifactRules.createArtifactRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->