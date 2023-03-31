<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgPathParams;
import org.openapis.openapi.models.operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody;
import org.openapis.openapi.models.operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest;
import org.openapis.openapi.models.operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest req = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest() {{
                pathParams = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgPathParams() {{
                    org = "corrupti";
                    runnerId = 592845;
                }};
                request = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody() {{
                    labels = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                }};
            }};            

            ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse res = sdk.actions.actionsAddCustomLabelsToSelfHostedRunnerForOrg(req);

            if (res.actionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->