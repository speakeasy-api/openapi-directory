# rules

### Available Operations

* [deleteAppsAppIdRulesRuleId](#deleteappsappidrulesruleid) - Deletes a Integration Rule
* [getAppsAppIdRules](#getappsappidrules) - Lists Integration rules
* [getAppsAppIdRulesRuleId](#getappsappidrulesruleid) - Gets a Integration Rule by ID
* [patchAppsAppIdRulesRuleId](#patchappsappidrulesruleid) - Updates a Integration Rule
* [postAppsAppIdRules](#postappsappidrules) - Creates a Integration Rule

## deleteAppsAppIdRulesRuleId

Deletes a Integration Rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppsAppIdRulesRuleIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsAppIdRulesRuleIdResponse;
import org.openapis.openapi.models.operations.DeleteAppsAppIdRulesRuleIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAppsAppIdRulesRuleIdRequest req = new DeleteAppsAppIdRulesRuleIdRequest("ipsa", "reiciendis");            

            DeleteAppsAppIdRulesRuleIdResponse res = sdk.rules.deleteAppsAppIdRulesRuleId(req, new DeleteAppsAppIdRulesRuleIdSecurity("est") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsAppIdRules

Lists Integration rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsAppIdRulesRequest;
import org.openapis.openapi.models.operations.GetAppsAppIdRulesResponse;
import org.openapis.openapi.models.operations.GetAppsAppIdRulesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAppsAppIdRulesRequest req = new GetAppsAppIdRulesRequest("mollitia");            

            GetAppsAppIdRulesResponse res = sdk.rules.getAppsAppIdRules(req, new GetAppsAppIdRulesSecurity("laborum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.ruleResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsAppIdRulesRuleId

Gets a Integration Rule by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsAppIdRulesRuleIdRequest;
import org.openapis.openapi.models.operations.GetAppsAppIdRulesRuleIdResponse;
import org.openapis.openapi.models.operations.GetAppsAppIdRulesRuleIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAppsAppIdRulesRuleIdRequest req = new GetAppsAppIdRulesRuleIdRequest("dolores", "dolorem");            

            GetAppsAppIdRulesRuleIdResponse res = sdk.rules.getAppsAppIdRulesRuleId(req, new GetAppsAppIdRulesRuleIdSecurity("corporis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.ruleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAppsAppIdRulesRuleId

Updates a Integration Rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAppsAppIdRulesRuleIdRequest;
import org.openapis.openapi.models.operations.PatchAppsAppIdRulesRuleIdResponse;
import org.openapis.openapi.models.operations.PatchAppsAppIdRulesRuleIdSecurity;
import org.openapis.openapi.models.shared.AmqpExternalRulePatch;
import org.openapis.openapi.models.shared.AmqpExternalRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.AmqpExternalRulePatchTarget;
import org.openapis.openapi.models.shared.AmqpExternalRulePatchTargetHeaders;
import org.openapis.openapi.models.shared.AmqpRulePatch;
import org.openapis.openapi.models.shared.AmqpRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.AmqpRulePatchTarget;
import org.openapis.openapi.models.shared.AmqpRulePatchTargetHeaders;
import org.openapis.openapi.models.shared.AwsAccessKeys;
import org.openapis.openapi.models.shared.AwsAccessKeysAuthenticationModeEnum;
import org.openapis.openapi.models.shared.AwsAssumeRole;
import org.openapis.openapi.models.shared.AwsAssumeRoleAuthenticationModeEnum;
import org.openapis.openapi.models.shared.AwsKinesisRulePatch;
import org.openapis.openapi.models.shared.AwsKinesisRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.AwsKinesisRulePatchTarget;
import org.openapis.openapi.models.shared.AwsLambdaRulePatch;
import org.openapis.openapi.models.shared.AwsLambdaRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.AwsLambdaRulePatchTarget;
import org.openapis.openapi.models.shared.AwsSqsRulePatch;
import org.openapis.openapi.models.shared.AwsSqsRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.AwsSqsRulePatchTarget;
import org.openapis.openapi.models.shared.AzureFunctionRulePatch;
import org.openapis.openapi.models.shared.AzureFunctionRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.AzureFunctionRulePatchTarget;
import org.openapis.openapi.models.shared.AzureFunctionRulePatchTargetHeaders;
import org.openapis.openapi.models.shared.CloudflareWorkerRulePatch;
import org.openapis.openapi.models.shared.CloudflareWorkerRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.CloudflareWorkerRulePatchTarget;
import org.openapis.openapi.models.shared.CloudflareWorkerRulePatchTargetHeaders;
import org.openapis.openapi.models.shared.GoogleCloudFunctionRulePatch;
import org.openapis.openapi.models.shared.GoogleCloudFunctionRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudFunctionRulePatchTarget;
import org.openapis.openapi.models.shared.GoogleCloudFunctionRulePatchTargetHeaders;
import org.openapis.openapi.models.shared.HttpRulePatch;
import org.openapis.openapi.models.shared.HttpRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.HttpRulePatchTarget;
import org.openapis.openapi.models.shared.HttpRulePatchTargetHeaders;
import org.openapis.openapi.models.shared.IftttRulePatch;
import org.openapis.openapi.models.shared.IftttRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.IftttRulePatchTarget;
import org.openapis.openapi.models.shared.KafkaRulePatch;
import org.openapis.openapi.models.shared.KafkaRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.KafkaRulePatchTarget;
import org.openapis.openapi.models.shared.KafkaRulePatchTargetAuth;
import org.openapis.openapi.models.shared.KafkaRulePatchTargetAuthSasl;
import org.openapis.openapi.models.shared.KafkaRulePatchTargetAuthSaslMechanismEnum;
import org.openapis.openapi.models.shared.PulsarRulePatch;
import org.openapis.openapi.models.shared.PulsarRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.PulsarRulePatchTarget;
import org.openapis.openapi.models.shared.PulsarTokenAuth;
import org.openapis.openapi.models.shared.PulsarTokenAuthAuthenticationModeEnum;
import org.openapis.openapi.models.shared.RuleSourcePatch;
import org.openapis.openapi.models.shared.ZapierRulePatch;
import org.openapis.openapi.models.shared.ZapierRulePatchRuleTypeEnum;
import org.openapis.openapi.models.shared.ZapierRulePatchTarget;
import org.openapis.openapi.models.shared.ZapierRulePatchTargetHeaders;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAppsAppIdRulesRuleIdRequest req = new PatchAppsAppIdRulesRuleIdRequest("explicabo", "nobis") {{
                requestBody = new AzureFunctionRulePatch(AzureFunctionRulePatchRuleTypeEnum.HTTP_AZURE_FUNCTION) {{
                    requestMode = "omnis";
                    source = new RuleSourcePatch() {{
                        channelFilter = "nemo";
                        type = "minima";
                    }};;
                    status = "excepturi";
                    target = new AzureFunctionRulePatchTarget() {{
                        azureAppId = "accusantium";
                        azureFunctionName = "iure";
                        enveloped = false;
                        format = "culpa";
                        headers = new org.openapis.openapi.models.shared.AzureFunctionRulePatchTargetHeaders[]{{
                            add(new AzureFunctionRulePatchTargetHeaders() {{
                                name = "Juan O'Hara";
                                value = "consequuntur";
                            }}),
                            add(new AzureFunctionRulePatchTargetHeaders() {{
                                name = "Shaun McCullough";
                                value = "quam";
                            }}),
                            add(new AzureFunctionRulePatchTargetHeaders() {{
                                name = "Shannon Mueller";
                                value = "vitae";
                            }}),
                            add(new AzureFunctionRulePatchTargetHeaders() {{
                                name = "Matt Hamill";
                                value = "sequi";
                            }}),
                        }};
                        signingKeyId = "tenetur";
                    }};;
                }};;
            }};            

            PatchAppsAppIdRulesRuleIdResponse res = sdk.rules.patchAppsAppIdRulesRuleId(req, new PatchAppsAppIdRulesRuleIdSecurity("ipsam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.ruleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdRules

Creates a Integration Rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdRulesRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdRulesResponse;
import org.openapis.openapi.models.operations.PostAppsAppIdRulesSecurity;
import org.openapis.openapi.models.shared.AmqpExternalRulePost;
import org.openapis.openapi.models.shared.AmqpExternalRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.AmqpExternalRulePostTarget;
import org.openapis.openapi.models.shared.AmqpExternalRulePostTargetHeaders;
import org.openapis.openapi.models.shared.AmqpRulePost;
import org.openapis.openapi.models.shared.AmqpRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.AmqpRulePostTarget;
import org.openapis.openapi.models.shared.AmqpRulePostTargetHeaders;
import org.openapis.openapi.models.shared.AwsAccessKeys;
import org.openapis.openapi.models.shared.AwsAccessKeysAuthenticationModeEnum;
import org.openapis.openapi.models.shared.AwsAssumeRole;
import org.openapis.openapi.models.shared.AwsAssumeRoleAuthenticationModeEnum;
import org.openapis.openapi.models.shared.AwsKinesisRulePost;
import org.openapis.openapi.models.shared.AwsKinesisRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.AwsKinesisRulePostTarget;
import org.openapis.openapi.models.shared.AwsLambdaRulePost;
import org.openapis.openapi.models.shared.AwsLambdaRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.AwsLambdaRulePostTarget;
import org.openapis.openapi.models.shared.AwsSqsRulePost;
import org.openapis.openapi.models.shared.AwsSqsRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.AwsSqsRulePostTarget;
import org.openapis.openapi.models.shared.AzureFunctionRulePost;
import org.openapis.openapi.models.shared.AzureFunctionRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.AzureFunctionRulePostTarget;
import org.openapis.openapi.models.shared.AzureFunctionRulePostTargetHeaders;
import org.openapis.openapi.models.shared.CloudflareWorkerRulePost;
import org.openapis.openapi.models.shared.CloudflareWorkerRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.CloudflareWorkerRulePostTarget;
import org.openapis.openapi.models.shared.CloudflareWorkerRulePostTargetHeaders;
import org.openapis.openapi.models.shared.GoogleCloudFunctionRulePost;
import org.openapis.openapi.models.shared.GoogleCloudFunctionRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudFunctionRulePostTarget;
import org.openapis.openapi.models.shared.GoogleCloudFunctionRulePostTargetHeaders;
import org.openapis.openapi.models.shared.HttpRulePost;
import org.openapis.openapi.models.shared.HttpRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.HttpRulePostTarget;
import org.openapis.openapi.models.shared.HttpRulePostTargetHeaders;
import org.openapis.openapi.models.shared.IftttRulePost;
import org.openapis.openapi.models.shared.IftttRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.IftttRulePostTarget;
import org.openapis.openapi.models.shared.KafkaRulePost;
import org.openapis.openapi.models.shared.KafkaRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.KafkaRulePostTarget;
import org.openapis.openapi.models.shared.KafkaRulePostTargetAuth;
import org.openapis.openapi.models.shared.KafkaRulePostTargetAuthSasl;
import org.openapis.openapi.models.shared.KafkaRulePostTargetAuthSaslMechanismEnum;
import org.openapis.openapi.models.shared.PulsarRulePost;
import org.openapis.openapi.models.shared.PulsarRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.PulsarRulePostTarget;
import org.openapis.openapi.models.shared.PulsarTokenAuth;
import org.openapis.openapi.models.shared.PulsarTokenAuthAuthenticationModeEnum;
import org.openapis.openapi.models.shared.RuleSource;
import org.openapis.openapi.models.shared.ZapierRulePost;
import org.openapis.openapi.models.shared.ZapierRulePostRuleTypeEnum;
import org.openapis.openapi.models.shared.ZapierRulePostTarget;
import org.openapis.openapi.models.shared.ZapierRulePostTargetHeaders;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAppsAppIdRulesRequest req = new PostAppsAppIdRulesRequest("id") {{
                requestBody = new AmqpExternalRulePost("aut", AmqpExternalRulePostRuleTypeEnum.AMQP_EXTERNAL,                 new RuleSource("quasi", "error");,                 new AmqpExternalRulePostTarget(false, false, "temporibus", "laborum") {{
                                    enveloped = false;
                                    exchange = "quasi";
                                    format = "reiciendis";
                                    headers = new org.openapis.openapi.models.shared.AmqpExternalRulePostTargetHeaders[]{{
                                        add(new AmqpExternalRulePostTargetHeaders() {{
                                            name = "Jessie Langosh V";
                                            value = "voluptate";
                                        }}),
                                        add(new AmqpExternalRulePostTargetHeaders() {{
                                            name = "Thomas Batz";
                                            value = "maiores";
                                        }}),
                                        add(new AmqpExternalRulePostTargetHeaders() {{
                                            name = "Stacy Gulgowski MD";
                                            value = "enim";
                                        }}),
                                        add(new AmqpExternalRulePostTargetHeaders() {{
                                            name = "Mrs. Leslie VonRueden";
                                            value = "molestias";
                                        }}),
                                    }};
                                    messageTtl = 566602L;
                                }};) {{
                    status = "pariatur";
                }};;
            }};            

            PostAppsAppIdRulesResponse res = sdk.rules.postAppsAppIdRules(req, new PostAppsAppIdRulesSecurity("modi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.ruleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
