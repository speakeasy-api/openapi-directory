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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateAppRequestBody() {{
                    accessToken = "voluptas";
                    autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig() {{
                        basicAuthCredentials = "fugit";
                        buildSpec = "et";
                        enableAutoBuild = true;
                        enableBasicAuth = true;
                        enablePerformanceMode = false;
                        enablePullRequestPreview = true;
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("et", "ut");
                        }};
                        framework = "dolorem";
                        pullRequestEnvironmentName = "et";
                        stage = "PULL_REQUEST";
                    }};
                    autoBranchCreationPatterns = new String[]() {{
                        add("vitae"),
                        add("totam"),
                        add("dolores"),
                    }};
                    basicAuthCredentials = "illum";
                    buildSpec = "debitis";
                    customHeaders = "vel";
                    customRules = new openapisdk.models.shared.CustomRule[]() {{
                        add(new CustomRule() {{
                            condition = "dolore";
                            source = "id";
                            status = "aspernatur";
                            target = "accusantium";
                        }}),
                    }};
                    description = "totam";
                    enableAutoBranchCreation = false;
                    enableBasicAuth = true;
                    enableBranchAutoBuild = false;
                    enableBranchAutoDeletion = true;
                    environmentVariables = new java.util.HashMap<String, String>() {{
                        put("non", "voluptas");
                        put("omnis", "aut");
                    }};
                    iamServiceRoleArn = "illo";
                    name = "sed";
                    oauthToken = "officiis";
                    platform = "WEB";
                    repository = "consectetur";
                    tags = new java.util.HashMap<String, String>() {{
                        put("odio", "qui");
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