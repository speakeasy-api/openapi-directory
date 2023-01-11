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
                    org = "sequi";
                    repositoryId = 8778273325382179566;
                    runnerGroupId = 1618200316448249157;
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