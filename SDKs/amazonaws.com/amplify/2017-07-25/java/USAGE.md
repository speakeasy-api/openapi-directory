<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAppHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest() {{
                headers = new CreateAppHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateAppRequestBody() {{
                    accessToken = "illum";
                    autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig() {{
                        basicAuthCredentials = "vel";
                        buildSpec = "error";
                        enableAutoBuild = false;
                        enableBasicAuth = false;
                        enablePerformanceMode = false;
                        enablePullRequestPreview = false;
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("suscipit", "iure");
                            put("magnam", "debitis");
                            put("ipsa", "delectus");
                        }};
                        framework = "tempora";
                        pullRequestEnvironmentName = "suscipit";
                        stage = "DEVELOPMENT";
                    }};
                    autoBranchCreationPatterns = new String[]{{
                        add("placeat"),
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                    }};
                    basicAuthCredentials = "nisi";
                    buildSpec = "recusandae";
                    customHeaders = "temporibus";
                    customRules = new org.openapis.openapi.models.shared.CustomRule[]{{
                        add(new CustomRule() {{
                            condition = "quis";
                            source = "veritatis";
                            status = "deserunt";
                            target = "perferendis";
                        }}),
                    }};
                    description = "ipsam";
                    enableAutoBranchCreation = false;
                    enableBasicAuth = false;
                    enableBranchAutoBuild = false;
                    enableBranchAutoDeletion = false;
                    environmentVariables = new java.util.HashMap<String, String>() {{
                        put("sapiente", "quo");
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                    }};
                    iamServiceRoleArn = "quod";
                    name = "esse";
                    oauthToken = "totam";
                    platform = "WEB_COMPUTE";
                    repository = "dolorum";
                    tags = new java.util.HashMap<String, String>() {{
                        put("nam", "officia");
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