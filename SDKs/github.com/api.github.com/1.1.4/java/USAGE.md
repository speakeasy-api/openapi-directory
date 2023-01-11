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
                    org = "voluptate";
                    repositoryId = 5132794701053150193;
                    runnerGroupId = 9183065293705613090;
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