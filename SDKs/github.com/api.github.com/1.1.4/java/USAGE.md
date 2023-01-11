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

            ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest req = new ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest() {{
                pathParams = new ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams() {{
                    org = "sit";
                    repositoryId = 2259404117704393152;
                    runnerGroupId = 6050128673802995827;
                }};
            }};

            ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse res = sdk.actions.actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->