<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppRequestBody;
import org.openapis.openapi.models.operations.CreateAppRequestBodyAutoBranchCreationConfig;
import org.openapis.openapi.models.operations.CreateAppRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.CreateAppResponse;
import org.openapis.openapi.models.shared.CustomRule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest(                new CreateAppRequestBody("provident") {{
                                accessToken = "distinctio";
                                autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig() {{
                                    basicAuthCredentials = "quibusdam";
                                    buildSpec = "unde";
                                    enableAutoBuild = false;
                                    enableBasicAuth = false;
                                    enablePerformanceMode = false;
                                    enablePullRequestPreview = false;
                                    environmentVariables = new java.util.HashMap<String, String>() {{
                                        put("corrupti", "illum");
                                        put("vel", "error");
                                        put("deserunt", "suscipit");
                                        put("iure", "magnam");
                                    }};
                                    framework = "debitis";
                                    pullRequestEnvironmentName = "ipsa";
                                    stage = StageEnum.PULL_REQUEST;
                                }};;
                                autoBranchCreationPatterns = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                                basicAuthCredentials = "minus";
                                buildSpec = "placeat";
                                customHeaders = "voluptatum";
                                customRules = new org.openapis.openapi.models.shared.CustomRule[]{{
                                    add(new CustomRule("ab", "quis") {{
                                        condition = "excepturi";
                                        source = "nisi";
                                        status = "recusandae";
                                        target = "temporibus";
                                    }}),
                                    add(new CustomRule("repellendus", "sapiente") {{
                                        condition = "veritatis";
                                        source = "deserunt";
                                        status = "perferendis";
                                        target = "ipsam";
                                    }}),
                                }};
                                description = "quo";
                                enableAutoBranchCreation = false;
                                enableBasicAuth = false;
                                enableBranchAutoBuild = false;
                                enableBranchAutoDeletion = false;
                                environmentVariables = new java.util.HashMap<String, String>() {{
                                    put("at", "at");
                                }};
                                iamServiceRoleArn = "maiores";
                                oauthToken = "molestiae";
                                platform = CreateAppRequestBodyPlatformEnum.WEB_COMPUTE;
                                repository = "quod";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                            }};) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->