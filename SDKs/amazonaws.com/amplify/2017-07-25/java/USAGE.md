<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAppRequestBodyAutoBranchCreationConfig;
import org.openapis.openapi.models.operations.CreateAppRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.CreateAppRequestBody;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppResponse;
import org.openapis.openapi.models.shared.CustomRule;
import org.openapis.openapi.models.shared.StageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest() {{
                requestBody = new CreateAppRequestBody() {{
                    accessToken = "corrupti";
                    autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig() {{
                        basicAuthCredentials = "provident";
                        buildSpec = "distinctio";
                        enableAutoBuild = false;
                        enableBasicAuth = false;
                        enablePerformanceMode = false;
                        enablePullRequestPreview = false;
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("unde", "nulla");
                            put("corrupti", "illum");
                            put("vel", "error");
                            put("deserunt", "suscipit");
                        }};
                        framework = "iure";
                        pullRequestEnvironmentName = "magnam";
                        stage = "PULL_REQUEST";
                    }};
                    autoBranchCreationPatterns = new String[]{{
                        add("delectus"),
                    }};
                    basicAuthCredentials = "tempora";
                    buildSpec = "suscipit";
                    customHeaders = "molestiae";
                    customRules = new org.openapis.openapi.models.shared.CustomRule[]{{
                        add(new CustomRule() {{
                            condition = "placeat";
                            source = "voluptatum";
                            status = "iusto";
                            target = "excepturi";
                        }}),
                        add(new CustomRule() {{
                            condition = "nisi";
                            source = "recusandae";
                            status = "temporibus";
                            target = "ab";
                        }}),
                        add(new CustomRule() {{
                            condition = "quis";
                            source = "veritatis";
                            status = "deserunt";
                            target = "perferendis";
                        }}),
                        add(new CustomRule() {{
                            condition = "ipsam";
                            source = "repellendus";
                            status = "sapiente";
                            target = "quo";
                        }}),
                    }};
                    description = "odit";
                    enableAutoBranchCreation = false;
                    enableBasicAuth = false;
                    enableBranchAutoBuild = false;
                    enableBranchAutoDeletion = false;
                    environmentVariables = new java.util.HashMap<String, String>() {{
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                    }};
                    iamServiceRoleArn = "dolorum";
                    name = "dicta";
                    oauthToken = "nam";
                    platform = "WEB_DYNAMIC";
                    repository = "occaecati";
                    tags = new java.util.HashMap<String, String>() {{
                        put("deleniti", "hic");
                    }};
                }};
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }}            

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->