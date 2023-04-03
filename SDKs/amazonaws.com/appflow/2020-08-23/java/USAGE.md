<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequestBodyConnectionModeEnum;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequestBodyConnectorProfileConfig;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequestBodyConnectorTypeEnum;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequestBody;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequest;
import org.openapis.openapi.models.operations.CreateConnectorProfileResponse;
import org.openapis.openapi.models.shared.ConnectorProfileProperties;
import org.openapis.openapi.models.shared.ZendeskConnectorProfileProperties;
import org.openapis.openapi.models.shared.VeevaConnectorProfileProperties;
import org.openapis.openapi.models.shared.SnowflakeConnectorProfileProperties;
import org.openapis.openapi.models.shared.SlackConnectorProfileProperties;
import org.openapis.openapi.models.shared.ServiceNowConnectorProfileProperties;
import org.openapis.openapi.models.shared.SalesforceConnectorProfileProperties;
import org.openapis.openapi.models.shared.SAPODataConnectorProfileProperties;
import org.openapis.openapi.models.shared.OAuthProperties;
import org.openapis.openapi.models.shared.RedshiftConnectorProfileProperties;
import org.openapis.openapi.models.shared.PardotConnectorProfileProperties;
import org.openapis.openapi.models.shared.MarketoConnectorProfileProperties;
import org.openapis.openapi.models.shared.InforNexusConnectorProfileProperties;
import org.openapis.openapi.models.shared.DynatraceConnectorProfileProperties;
import org.openapis.openapi.models.shared.DatadogConnectorProfileProperties;
import org.openapis.openapi.models.shared.CustomConnectorProfileProperties;
import org.openapis.openapi.models.shared.OAuth2Properties;
import org.openapis.openapi.models.shared.OAuth2GrantTypeEnum;
import org.openapis.openapi.models.shared.ConnectorProfileCredentials;
import org.openapis.openapi.models.shared.ZendeskConnectorProfileCredentials;
import org.openapis.openapi.models.shared.ConnectorOAuthRequest;
import org.openapis.openapi.models.shared.VeevaConnectorProfileCredentials;
import org.openapis.openapi.models.shared.TrendmicroConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SnowflakeConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SlackConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SingularConnectorProfileCredentials;
import org.openapis.openapi.models.shared.ServiceNowConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SalesforceConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SAPODataConnectorProfileCredentials;
import org.openapis.openapi.models.shared.OAuthCredentials;
import org.openapis.openapi.models.shared.BasicAuthCredentials;
import org.openapis.openapi.models.shared.RedshiftConnectorProfileCredentials;
import org.openapis.openapi.models.shared.PardotConnectorProfileCredentials;
import org.openapis.openapi.models.shared.MarketoConnectorProfileCredentials;
import org.openapis.openapi.models.shared.InforNexusConnectorProfileCredentials;
import org.openapis.openapi.models.shared.HoneycodeConnectorProfileCredentials;
import org.openapis.openapi.models.shared.GoogleAnalyticsConnectorProfileCredentials;
import org.openapis.openapi.models.shared.DynatraceConnectorProfileCredentials;
import org.openapis.openapi.models.shared.DatadogConnectorProfileCredentials;
import org.openapis.openapi.models.shared.CustomConnectorProfileCredentials;
import org.openapis.openapi.models.shared.OAuth2Credentials;
import org.openapis.openapi.models.shared.CustomAuthCredentials;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.ApiKeyCredentials;
import org.openapis.openapi.models.shared.AmplitudeConnectorProfileCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectorProfileRequest req = new CreateConnectorProfileRequest() {{
                requestBody = new CreateConnectorProfileRequestBody() {{
                    connectionMode = "Private";
                    connectorLabel = "provident";
                    connectorProfileConfig = new CreateConnectorProfileRequestBodyConnectorProfileConfig() {{
                        connectorProfileCredentials = new ConnectorProfileCredentials() {{
                            amplitude = new AmplitudeConnectorProfileCredentials() {{
                                apiKey = "distinctio";
                                secretKey = "quibusdam";
                            }};
                            customConnector = new CustomConnectorProfileCredentials() {{
                                apiKey = new ApiKeyCredentials() {{
                                    apiKey = "unde";
                                    apiSecretKey = "nulla";
                                }};
                                authenticationType = "BASIC";
                                basic = new BasicAuthCredentials() {{
                                    password = "illum";
                                    username = "Henry.Mueller";
                                }};
                                custom = new CustomAuthCredentials() {{
                                    credentialsMap = new java.util.HashMap<String, String>() {{
                                        put("magnam", "debitis");
                                        put("ipsa", "delectus");
                                    }};
                                    customAuthenticationType = "tempora";
                                }};
                                oauth2 = new OAuth2Credentials() {{
                                    accessToken = "suscipit";
                                    clientId = "molestiae";
                                    clientSecret = "minus";
                                    oAuthRequest = new ConnectorOAuthRequest() {{
                                        authCode = "placeat";
                                        redirectUri = "voluptatum";
                                    }};
                                    refreshToken = "iusto";
                                }};
                            }};
                            datadog = new DatadogConnectorProfileCredentials() {{
                                apiKey = "excepturi";
                                applicationKey = "nisi";
                            }};
                            dynatrace = new DynatraceConnectorProfileCredentials() {{
                                apiToken = "recusandae";
                            }};
                            googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials() {{
                                accessToken = "temporibus";
                                clientId = "ab";
                                clientSecret = "quis";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "veritatis";
                                    redirectUri = "deserunt";
                                }};
                                refreshToken = "perferendis";
                            }};
                            honeycode = new HoneycodeConnectorProfileCredentials() {{
                                accessToken = "ipsam";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "repellendus";
                                    redirectUri = "sapiente";
                                }};
                                refreshToken = "quo";
                            }};
                            inforNexus = new InforNexusConnectorProfileCredentials() {{
                                accessKeyId = "odit";
                                datakey = "at";
                                secretAccessKey = "at";
                                userId = "maiores";
                            }};
                            marketo = new MarketoConnectorProfileCredentials() {{
                                accessToken = "molestiae";
                                clientId = "quod";
                                clientSecret = "quod";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "esse";
                                    redirectUri = "totam";
                                }};
                            }};
                            pardot = new PardotConnectorProfileCredentials() {{
                                accessToken = "porro";
                                clientCredentialsArn = "dolorum";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "dicta";
                                    redirectUri = "nam";
                                }};
                                refreshToken = "officia";
                            }};
                            redshift = new RedshiftConnectorProfileCredentials() {{
                                password = "occaecati";
                                username = "Buck_Lind52";
                            }};
                            sapoData = new SAPODataConnectorProfileCredentials() {{
                                basicAuthCredentials = new BasicAuthCredentials() {{
                                    password = "beatae";
                                    username = "Haskell18";
                                }};
                                oAuthCredentials = new OAuthCredentials() {{
                                    accessToken = "impedit";
                                    clientId = "cum";
                                    clientSecret = "esse";
                                    oAuthRequest = new ConnectorOAuthRequest() {{
                                        authCode = "ipsum";
                                        redirectUri = "excepturi";
                                    }};
                                    refreshToken = "aspernatur";
                                }};
                            }};
                            salesforce = new SalesforceConnectorProfileCredentials() {{
                                accessToken = "perferendis";
                                clientCredentialsArn = "ad";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "natus";
                                    redirectUri = "sed";
                                }};
                                refreshToken = "iste";
                            }};
                            serviceNow = new ServiceNowConnectorProfileCredentials() {{
                                password = "dolor";
                                username = "Lexie_Howe68";
                            }};
                            singular = new SingularConnectorProfileCredentials() {{
                                apiKey = "in";
                            }};
                            slack = new SlackConnectorProfileCredentials() {{
                                accessToken = "corporis";
                                clientId = "iste";
                                clientSecret = "iure";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "saepe";
                                    redirectUri = "quidem";
                                }};
                            }};
                            snowflake = new SnowflakeConnectorProfileCredentials() {{
                                password = "architecto";
                                username = "Andy_Wisozk67";
                            }};
                            trendmicro = new TrendmicroConnectorProfileCredentials() {{
                                apiSecretKey = "dolores";
                            }};
                            veeva = new VeevaConnectorProfileCredentials() {{
                                password = "dolorem";
                                username = "Florian.Champlin60";
                            }};
                            zendesk = new ZendeskConnectorProfileCredentials() {{
                                accessToken = "nemo";
                                clientId = "minima";
                                clientSecret = "excepturi";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "accusantium";
                                    redirectUri = "iure";
                                }};
                            }};
                        }};
                        connectorProfileProperties = new ConnectorProfileProperties() {{
                            amplitude = new java.util.HashMap<String, Object>() {{
                                put("doloribus", "sapiente");
                                put("architecto", "mollitia");
                                put("dolorem", "culpa");
                            }};
                            customConnector = new CustomConnectorProfileProperties() {{
                                oAuth2Properties = new OAuth2Properties() {{
                                    oAuth2GrantType = "CLIENT_CREDENTIALS";
                                    tokenUrl = "repellat";
                                    tokenUrlCustomProperties = new java.util.HashMap<String, String>() {{
                                        put("occaecati", "numquam");
                                        put("commodi", "quam");
                                        put("molestiae", "velit");
                                    }};
                                }};
                                profileProperties = new java.util.HashMap<String, String>() {{
                                    put("quia", "quis");
                                    put("vitae", "laborum");
                                    put("animi", "enim");
                                }};
                            }};
                            datadog = new DatadogConnectorProfileProperties() {{
                                instanceUrl = "odit";
                            }};
                            dynatrace = new DynatraceConnectorProfileProperties() {{
                                instanceUrl = "quo";
                            }};
                            googleAnalytics = new java.util.HashMap<String, Object>() {{
                                put("tenetur", "ipsam");
                            }};
                            honeycode = new java.util.HashMap<String, Object>() {{
                                put("possimus", "aut");
                                put("quasi", "error");
                                put("temporibus", "laborum");
                            }};
                            inforNexus = new InforNexusConnectorProfileProperties() {{
                                instanceUrl = "quasi";
                            }};
                            marketo = new MarketoConnectorProfileProperties() {{
                                instanceUrl = "reiciendis";
                            }};
                            pardot = new PardotConnectorProfileProperties() {{
                                businessUnitId = "voluptatibus";
                                instanceUrl = "vero";
                                isSandboxEnvironment = false;
                            }};
                            redshift = new RedshiftConnectorProfileProperties() {{
                                bucketName = "nihil";
                                bucketPrefix = "praesentium";
                                clusterIdentifier = "voluptatibus";
                                dataApiRoleArn = "ipsa";
                                databaseName = "omnis";
                                databaseUrl = "voluptate";
                                isRedshiftServerless = false;
                                roleArn = "cum";
                                workgroupName = "perferendis";
                            }};
                            sapoData = new SAPODataConnectorProfileProperties() {{
                                applicationHostUrl = "doloremque";
                                applicationServicePath = "reprehenderit";
                                clientNumber = "ut";
                                logonLanguage = "maiores";
                                oAuthProperties = new OAuthProperties() {{
                                    authCodeUrl = "dicta";
                                    oAuthScopes = new String[]{{
                                        add("dolore"),
                                        add("iusto"),
                                    }};
                                    tokenUrl = "dicta";
                                }};
                                portNumber = 688661;
                                privateLinkServiceName = "enim";
                            }};
                            salesforce = new SalesforceConnectorProfileProperties() {{
                                instanceUrl = "accusamus";
                                isSandboxEnvironment = false;
                                usePrivateLinkForMetadataAndAuthorization = false;
                            }};
                            serviceNow = new ServiceNowConnectorProfileProperties() {{
                                instanceUrl = "commodi";
                            }};
                            singular = new java.util.HashMap<String, Object>() {{
                                put("quae", "ipsum");
                                put("quidem", "molestias");
                                put("excepturi", "pariatur");
                                put("modi", "praesentium");
                            }};
                            slack = new SlackConnectorProfileProperties() {{
                                instanceUrl = "rem";
                            }};
                            snowflake = new SnowflakeConnectorProfileProperties() {{
                                accountName = "voluptates";
                                bucketName = "quasi";
                                bucketPrefix = "repudiandae";
                                privateLinkServiceName = "sint";
                                region = "veritatis";
                                stage = "itaque";
                                warehouse = "incidunt";
                            }};
                            trendmicro = new java.util.HashMap<String, Object>() {{
                                put("consequatur", "est");
                                put("quibusdam", "explicabo");
                            }};
                            veeva = new VeevaConnectorProfileProperties() {{
                                instanceUrl = "deserunt";
                            }};
                            zendesk = new ZendeskConnectorProfileProperties() {{
                                instanceUrl = "distinctio";
                            }};
                        }};
                    }};
                    connectorProfileName = "quibusdam";
                    connectorType = "Googleanalytics";
                    kmsArn = "modi";
                }};
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }}            

            CreateConnectorProfileResponse res = sdk.createConnectorProfile(req);

            if (res.createConnectorProfileResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->