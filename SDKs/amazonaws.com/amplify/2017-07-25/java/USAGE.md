<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateAppRequest req = new CreateAppRequest() {{
                headers = new CreateAppHeaders() {{
                    xAmzAlgorithm = "est";
                    xAmzContentSha256 = "id";
                    xAmzCredential = "ipsum";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "perspiciatis";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "vero";
                }};
                request = new CreateAppRequestBody() {{
                    accessToken = "voluptatem";
                    autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig() {{
                        basicAuthCredentials = "ex";
                        buildSpec = "magni";
                        enableAutoBuild = true;
                        enableBasicAuth = true;
                        enablePerformanceMode = false;
                        enablePullRequestPreview = false;
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("non", "nam");
                            put("beatae", "quae");
                            put("qui", "magni");
                        }};
                        framework = "minus";
                        pullRequestEnvironmentName = "sit";
                        stage = "BETA";
                    }};
                    autoBranchCreationPatterns = new String[]() {{
                        add("iusto"),
                    }};
                    basicAuthCredentials = "quia";
                    buildSpec = "repudiandae";
                    customHeaders = "debitis";
                    customRules = new openapisdk.models.shared.CustomRule[]() {{
                        add(new CustomRule() {{
                            condition = "odit";
                            source = "enim";
                            status = "ut";
                            target = "non";
                        }}),
                    }};
                    description = "nihil";
                    enableAutoBranchCreation = false;
                    enableBasicAuth = true;
                    enableBranchAutoBuild = true;
                    enableBranchAutoDeletion = false;
                    environmentVariables = new java.util.HashMap<String, String>() {{
                        put("perferendis", "id");
                        put("autem", "hic");
                        put("voluptatem", "omnis");
                    }};
                    iamServiceRoleArn = "libero";
                    name = "qui";
                    oauthToken = "omnis";
                    platform = "WEB";
                    repository = "nostrum";
                    tags = new java.util.HashMap<String, String>() {{
                        put("sit", "repellat");
                        put("quo", "dolorum");
                    }};
                }};
            }};

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->