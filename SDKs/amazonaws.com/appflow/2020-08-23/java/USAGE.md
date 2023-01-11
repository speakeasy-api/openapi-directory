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

            CreateConnectorProfileRequest req = new CreateConnectorProfileRequest() {{
                headers = new CreateConnectorProfileHeaders() {{
                    xAmzAlgorithm = "fuga";
                    xAmzContentSha256 = "aliquid";
                    xAmzCredential = "vero";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "voluptatem";
                    xAmzSignedHeaders = "sunt";
                }};
                request = new CreateConnectorProfileRequestBody() {{
                    connectionMode = "Private";
                    connectorProfileConfig = new CreateConnectorProfileRequestBodyConnectorProfileConfig() {{
                        connectorProfileCredentials = new ConnectorProfileCredentials() {{
                            amplitude = new AmplitudeConnectorProfileCredentials() {{
                                apiKey = "placeat";
                                secretKey = "vitae";
                            }};
                            datadog = new DatadogConnectorProfileCredentials() {{
                                apiKey = "rerum";
                                applicationKey = "officiis";
                            }};
                            dynatrace = new DynatraceConnectorProfileCredentials() {{
                                apiToken = "commodi";
                            }};
                            googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials() {{
                                accessToken = "sed";
                                clientId = "voluptates";
                                clientSecret = "enim";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "eos";
                                    redirectUri = "ipsa";
                                }};
                                refreshToken = "cum";
                            }};
                            honeycode = new HoneycodeConnectorProfileCredentials() {{
                                accessToken = "sint";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "aut";
                                    redirectUri = "eaque";
                                }};
                                refreshToken = "facilis";
                            }};
                            inforNexus = new InforNexusConnectorProfileCredentials() {{
                                accessKeyId = "et";
                                datakey = "ut";
                                secretAccessKey = "et";
                                userId = "quam";
                            }};
                            marketo = new MarketoConnectorProfileCredentials() {{
                                accessToken = "sit";
                                clientId = "voluptate";
                                clientSecret = "eaque";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "consequuntur";
                                    redirectUri = "et";
                                }};
                            }};
                            redshift = new RedshiftConnectorProfileCredentials() {{
                                password = "amet";
                                username = "distinctio";
                            }};
                            sapoData = new SapoDataConnectorProfileCredentials() {{
                                basicAuthCredentials = new BasicAuthCredentials() {{
                                    password = "in";
                                    username = "consectetur";
                                }};
                                oAuthCredentials = new OAuthCredentials() {{
                                    accessToken = "minima";
                                    clientId = "sequi";
                                    clientSecret = "et";
                                    oAuthRequest = new ConnectorOAuthRequest() {{
                                        authCode = "consequatur";
                                        redirectUri = "eum";
                                    }};
                                    refreshToken = "sunt";
                                }};
                            }};
                            salesforce = new SalesforceConnectorProfileCredentials() {{
                                accessToken = "cupiditate";
                                clientCredentialsArn = "quam";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "repellendus";
                                    redirectUri = "dolores";
                                }};
                                refreshToken = "nihil";
                            }};
                            serviceNow = new ServiceNowConnectorProfileCredentials() {{
                                password = "ullam";
                                username = "architecto";
                            }};
                            singular = new SingularConnectorProfileCredentials() {{
                                apiKey = "architecto";
                            }};
                            slack = new SlackConnectorProfileCredentials() {{
                                accessToken = "beatae";
                                clientId = "consequatur";
                                clientSecret = "veniam";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "hic";
                                    redirectUri = "beatae";
                                }};
                            }};
                            snowflake = new SnowflakeConnectorProfileCredentials() {{
                                password = "veritatis";
                                username = "architecto";
                            }};
                            trendmicro = new TrendmicroConnectorProfileCredentials() {{
                                apiSecretKey = "voluptas";
                            }};
                            veeva = new VeevaConnectorProfileCredentials() {{
                                password = "voluptatibus";
                                username = "maiores";
                            }};
                            zendesk = new ZendeskConnectorProfileCredentials() {{
                                accessToken = "consectetur";
                                clientId = "modi";
                                clientSecret = "eos";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "praesentium";
                                    redirectUri = "itaque";
                                }};
                            }};
                        }};
                        connectorProfileProperties = new ConnectorProfileProperties() {{
                            amplitude = new java.util.HashMap<String, Object>() {{
                                put("natus", "quas");
                            }};
                            datadog = new DatadogConnectorProfileProperties() {{
                                instanceUrl = "nesciunt";
                            }};
                            dynatrace = new DynatraceConnectorProfileProperties() {{
                                instanceUrl = "nostrum";
                            }};
                            googleAnalytics = new java.util.HashMap<String, Object>() {{
                                put("repudiandae", "eius");
                                put("totam", "amet");
                            }};
                            honeycode = new java.util.HashMap<String, Object>() {{
                                put("unde", "nihil");
                                put("asperiores", "quaerat");
                            }};
                            inforNexus = new InforNexusConnectorProfileProperties() {{
                                instanceUrl = "hic";
                            }};
                            marketo = new MarketoConnectorProfileProperties() {{
                                instanceUrl = "quo";
                            }};
                            redshift = new RedshiftConnectorProfileProperties() {{
                                bucketName = "est";
                                bucketPrefix = "nostrum";
                                databaseUrl = "pariatur";
                                roleArn = "enim";
                            }};
                            sapoData = new SapoDataConnectorProfileProperties() {{
                                applicationHostUrl = "occaecati";
                                applicationServicePath = "possimus";
                                clientNumber = "temporibus";
                                logonLanguage = "laborum";
                                oAuthProperties = new OAuthProperties() {{
                                    authCodeUrl = "voluptas";
                                    oAuthScopes = new String[]() {{
                                        add("atque"),
                                        add("soluta"),
                                    }};
                                    tokenUrl = "tempora";
                                }};
                                portNumber = 4542131346235756591;
                                privateLinkServiceName = "nihil";
                            }};
                            salesforce = new SalesforceConnectorProfileProperties() {{
                                instanceUrl = "quas";
                                isSandboxEnvironment = true;
                            }};
                            serviceNow = new ServiceNowConnectorProfileProperties() {{
                                instanceUrl = "eveniet";
                            }};
                            singular = new java.util.HashMap<String, Object>() {{
                                put("fuga", "error");
                                put("autem", "eaque");
                                put("omnis", "esse");
                            }};
                            slack = new SlackConnectorProfileProperties() {{
                                instanceUrl = "veritatis";
                            }};
                            snowflake = new SnowflakeConnectorProfileProperties() {{
                                accountName = "voluptas";
                                bucketName = "incidunt";
                                bucketPrefix = "sit";
                                privateLinkServiceName = "saepe";
                                region = "est";
                                stage = "odio";
                                warehouse = "delectus";
                            }};
                            trendmicro = new java.util.HashMap<String, Object>() {{
                                put("voluptatem", "et");
                            }};
                            veeva = new VeevaConnectorProfileProperties() {{
                                instanceUrl = "et";
                            }};
                            zendesk = new ZendeskConnectorProfileProperties() {{
                                instanceUrl = "in";
                            }};
                        }};
                    }};
                    connectorProfileName = "ipsa";
                    connectorType = "Salesforce";
                    kmsArn = "deleniti";
                }};
            }};

            CreateConnectorProfileResponse res = sdk.createConnectorProfile(req);

            if (res.createConnectorProfileResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->