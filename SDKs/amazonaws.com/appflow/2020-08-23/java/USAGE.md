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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateConnectorProfileRequestBody() {{
                    connectionMode = "Private";
                    connectorProfileConfig = new CreateConnectorProfileRequestBodyConnectorProfileConfig() {{
                        connectorProfileCredentials = new ConnectorProfileCredentials() {{
                            amplitude = new AmplitudeConnectorProfileCredentials() {{
                                apiKey = "fugit";
                                secretKey = "et";
                            }};
                            datadog = new DatadogConnectorProfileCredentials() {{
                                apiKey = "nihil";
                                applicationKey = "rerum";
                            }};
                            dynatrace = new DynatraceConnectorProfileCredentials() {{
                                apiToken = "dicta";
                            }};
                            googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials() {{
                                accessToken = "debitis";
                                clientId = "voluptatum";
                                clientSecret = "et";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "ut";
                                    redirectUri = "dolorem";
                                }};
                                refreshToken = "et";
                            }};
                            honeycode = new HoneycodeConnectorProfileCredentials() {{
                                accessToken = "voluptate";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "iste";
                                    redirectUri = "vitae";
                                }};
                                refreshToken = "totam";
                            }};
                            inforNexus = new InforNexusConnectorProfileCredentials() {{
                                accessKeyId = "dolores";
                                datakey = "illum";
                                secretAccessKey = "debitis";
                                userId = "vel";
                            }};
                            marketo = new MarketoConnectorProfileCredentials() {{
                                accessToken = "odio";
                                clientId = "dolore";
                                clientSecret = "id";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "aspernatur";
                                    redirectUri = "accusantium";
                                }};
                            }};
                            redshift = new RedshiftConnectorProfileCredentials() {{
                                password = "totam";
                                username = "commodi";
                            }};
                            sapoData = new SapoDataConnectorProfileCredentials() {{
                                basicAuthCredentials = new BasicAuthCredentials() {{
                                    password = "quis";
                                    username = "est";
                                }};
                                oAuthCredentials = new OAuthCredentials() {{
                                    accessToken = "aut";
                                    clientId = "odit";
                                    clientSecret = "non";
                                    oAuthRequest = new ConnectorOAuthRequest() {{
                                        authCode = "voluptas";
                                        redirectUri = "omnis";
                                    }};
                                    refreshToken = "aut";
                                }};
                            }};
                            salesforce = new SalesforceConnectorProfileCredentials() {{
                                accessToken = "illo";
                                clientCredentialsArn = "sed";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "officiis";
                                    redirectUri = "autem";
                                }};
                                refreshToken = "consectetur";
                            }};
                            serviceNow = new ServiceNowConnectorProfileCredentials() {{
                                password = "nobis";
                                username = "odio";
                            }};
                            singular = new SingularConnectorProfileCredentials() {{
                                apiKey = "qui";
                            }};
                            slack = new SlackConnectorProfileCredentials() {{
                                accessToken = "recusandae";
                                clientId = "at";
                                clientSecret = "ipsum";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "eveniet";
                                    redirectUri = "modi";
                                }};
                            }};
                            snowflake = new SnowflakeConnectorProfileCredentials() {{
                                password = "sint";
                                username = "inventore";
                            }};
                            trendmicro = new TrendmicroConnectorProfileCredentials() {{
                                apiSecretKey = "ut";
                            }};
                            veeva = new VeevaConnectorProfileCredentials() {{
                                password = "exercitationem";
                                username = "aut";
                            }};
                            zendesk = new ZendeskConnectorProfileCredentials() {{
                                accessToken = "reprehenderit";
                                clientId = "tempore";
                                clientSecret = "maiores";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "incidunt";
                                    redirectUri = "dolor";
                                }};
                            }};
                        }};
                        connectorProfileProperties = new ConnectorProfileProperties() {{
                            amplitude = new java.util.HashMap<String, Object>() {{
                                put("veritatis", "in");
                                put("et", "omnis");
                                put("ipsum", "ex");
                            }};
                            datadog = new DatadogConnectorProfileProperties() {{
                                instanceUrl = "dolores";
                            }};
                            dynatrace = new DynatraceConnectorProfileProperties() {{
                                instanceUrl = "placeat";
                            }};
                            googleAnalytics = new java.util.HashMap<String, Object>() {{
                                put("rerum", "mollitia");
                                put("voluptas", "quam");
                            }};
                            honeycode = new java.util.HashMap<String, Object>() {{
                                put("qui", "qui");
                            }};
                            inforNexus = new InforNexusConnectorProfileProperties() {{
                                instanceUrl = "unde";
                            }};
                            marketo = new MarketoConnectorProfileProperties() {{
                                instanceUrl = "in";
                            }};
                            redshift = new RedshiftConnectorProfileProperties() {{
                                bucketName = "autem";
                                bucketPrefix = "qui";
                                databaseUrl = "ut";
                                roleArn = "itaque";
                            }};
                            sapoData = new SapoDataConnectorProfileProperties() {{
                                applicationHostUrl = "ab";
                                applicationServicePath = "neque";
                                clientNumber = "ullam";
                                logonLanguage = "et";
                                oAuthProperties = new OAuthProperties() {{
                                    authCodeUrl = "accusantium";
                                    oAuthScopes = new String[]() {{
                                        add("architecto"),
                                        add("quam"),
                                    }};
                                    tokenUrl = "velit";
                                }};
                                portNumber = 2066195468801476818;
                                privateLinkServiceName = "soluta";
                            }};
                            salesforce = new SalesforceConnectorProfileProperties() {{
                                instanceUrl = "sunt";
                                isSandboxEnvironment = false;
                            }};
                            serviceNow = new ServiceNowConnectorProfileProperties() {{
                                instanceUrl = "magni";
                            }};
                            singular = new java.util.HashMap<String, Object>() {{
                                put("optio", "qui");
                                put("earum", "illo");
                                put("omnis", "ut");
                            }};
                            slack = new SlackConnectorProfileProperties() {{
                                instanceUrl = "consequatur";
                            }};
                            snowflake = new SnowflakeConnectorProfileProperties() {{
                                accountName = "dolor";
                                bucketName = "commodi";
                                bucketPrefix = "error";
                                privateLinkServiceName = "reprehenderit";
                                region = "consectetur";
                                stage = "nostrum";
                                warehouse = "ut";
                            }};
                            trendmicro = new java.util.HashMap<String, Object>() {{
                                put("sed", "a");
                                put("soluta", "aut");
                                put("quas", "consequuntur");
                            }};
                            veeva = new VeevaConnectorProfileProperties() {{
                                instanceUrl = "laudantium";
                            }};
                            zendesk = new ZendeskConnectorProfileProperties() {{
                                instanceUrl = "autem";
                            }};
                        }};
                    }};
                    connectorProfileName = "ipsa";
                    connectorType = "Honeycode";
                    kmsArn = "doloremque";
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