<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateConnectorProfileHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateConnectorProfileRequest req = new CreateConnectorProfileRequest() {{
                headers = new CreateConnectorProfileHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateConnectorProfileRequestBody() {{
                    connectionMode = "Private";
                    connectorLabel = "vel";
                    connectorProfileConfig = new CreateConnectorProfileRequestBodyConnectorProfileConfig() {{
                        connectorProfileCredentials = new ConnectorProfileCredentials() {{
                            amplitude = new AmplitudeConnectorProfileCredentials() {{
                                apiKey = "error";
                                secretKey = "deserunt";
                            }};
                            customConnector = new CustomConnectorProfileCredentials() {{
                                apiKey = new ApiKeyCredentials() {{
                                    apiKey = "suscipit";
                                    apiSecretKey = "iure";
                                }};
                                authenticationType = "APIKEY";
                                basic = new BasicAuthCredentials() {{
                                    password = "debitis";
                                    username = "Anahi38";
                                }};
                                custom = new CustomAuthCredentials() {{
                                    credentialsMap = new java.util.HashMap<String, String>() {{
                                        put("minus", "placeat");
                                        put("voluptatum", "iusto");
                                    }};
                                    customAuthenticationType = "excepturi";
                                }};
                                oauth2 = new OAuth2Credentials() {{
                                    accessToken = "nisi";
                                    clientId = "recusandae";
                                    clientSecret = "temporibus";
                                    oAuthRequest = new ConnectorOAuthRequest() {{
                                        authCode = "ab";
                                        redirectUri = "quis";
                                    }};
                                    refreshToken = "veritatis";
                                }};
                            }};
                            datadog = new DatadogConnectorProfileCredentials() {{
                                apiKey = "deserunt";
                                applicationKey = "perferendis";
                            }};
                            dynatrace = new DynatraceConnectorProfileCredentials() {{
                                apiToken = "ipsam";
                            }};
                            googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials() {{
                                accessToken = "repellendus";
                                clientId = "sapiente";
                                clientSecret = "quo";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "odit";
                                    redirectUri = "at";
                                }};
                                refreshToken = "at";
                            }};
                            honeycode = new HoneycodeConnectorProfileCredentials() {{
                                accessToken = "maiores";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "molestiae";
                                    redirectUri = "quod";
                                }};
                                refreshToken = "quod";
                            }};
                            inforNexus = new InforNexusConnectorProfileCredentials() {{
                                accessKeyId = "esse";
                                datakey = "totam";
                                secretAccessKey = "porro";
                                userId = "dolorum";
                            }};
                            marketo = new MarketoConnectorProfileCredentials() {{
                                accessToken = "dicta";
                                clientId = "nam";
                                clientSecret = "officia";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "occaecati";
                                    redirectUri = "fugit";
                                }};
                            }};
                            pardot = new PardotConnectorProfileCredentials() {{
                                accessToken = "deleniti";
                                clientCredentialsArn = "hic";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "optio";
                                    redirectUri = "totam";
                                }};
                                refreshToken = "beatae";
                            }};
                            redshift = new RedshiftConnectorProfileCredentials() {{
                                password = "commodi";
                                username = "Jaren77";
                            }};
                            sapoData = new SAPODataConnectorProfileCredentials() {{
                                basicAuthCredentials = new BasicAuthCredentials() {{
                                    password = "cum";
                                    username = "Jacky.Emmerich";
                                }};
                                oAuthCredentials = new OAuthCredentials() {{
                                    accessToken = "perferendis";
                                    clientId = "ad";
                                    clientSecret = "natus";
                                    oAuthRequest = new ConnectorOAuthRequest() {{
                                        authCode = "sed";
                                        redirectUri = "iste";
                                    }};
                                    refreshToken = "dolor";
                                }};
                            }};
                            salesforce = new SalesforceConnectorProfileCredentials() {{
                                accessToken = "natus";
                                clientCredentialsArn = "laboriosam";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "hic";
                                    redirectUri = "saepe";
                                }};
                                refreshToken = "fuga";
                            }};
                            serviceNow = new ServiceNowConnectorProfileCredentials() {{
                                password = "in";
                                username = "Floy_Moore";
                            }};
                            singular = new SingularConnectorProfileCredentials() {{
                                apiKey = "quidem";
                            }};
                            slack = new SlackConnectorProfileCredentials() {{
                                accessToken = "architecto";
                                clientId = "ipsa";
                                clientSecret = "reiciendis";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "est";
                                    redirectUri = "mollitia";
                                }};
                            }};
                            snowflake = new SnowflakeConnectorProfileCredentials() {{
                                password = "laborum";
                                username = "Cecilia.Ebert";
                            }};
                            trendmicro = new TrendmicroConnectorProfileCredentials() {{
                                apiSecretKey = "nobis";
                            }};
                            veeva = new VeevaConnectorProfileCredentials() {{
                                password = "enim";
                                username = "Lenore57";
                            }};
                            zendesk = new ZendeskConnectorProfileCredentials() {{
                                accessToken = "accusantium";
                                clientId = "iure";
                                clientSecret = "culpa";
                                oAuthRequest = new ConnectorOAuthRequest() {{
                                    authCode = "doloribus";
                                    redirectUri = "sapiente";
                                }};
                            }};
                        }};
                        connectorProfileProperties = new ConnectorProfileProperties() {{
                            amplitude = new java.util.HashMap<String, Object>() {{
                                put("mollitia", "dolorem");
                            }};
                            customConnector = new CustomConnectorProfileProperties() {{
                                oAuth2Properties = new OAuth2Properties() {{
                                    oAuth2GrantType = "AUTHORIZATION_CODE";
                                    tokenUrl = "consequuntur";
                                    tokenUrlCustomProperties = new java.util.HashMap<String, String>() {{
                                        put("mollitia", "occaecati");
                                        put("numquam", "commodi");
                                        put("quam", "molestiae");
                                        put("velit", "error");
                                    }};
                                }};
                                profileProperties = new java.util.HashMap<String, String>() {{
                                    put("quis", "vitae");
                                }};
                            }};
                            datadog = new DatadogConnectorProfileProperties() {{
                                instanceUrl = "laborum";
                            }};
                            dynatrace = new DynatraceConnectorProfileProperties() {{
                                instanceUrl = "animi";
                            }};
                            googleAnalytics = new java.util.HashMap<String, Object>() {{
                                put("odit", "quo");
                                put("sequi", "tenetur");
                            }};
                            honeycode = new java.util.HashMap<String, Object>() {{
                                put("id", "possimus");
                                put("aut", "quasi");
                            }};
                            inforNexus = new InforNexusConnectorProfileProperties() {{
                                instanceUrl = "error";
                            }};
                            marketo = new MarketoConnectorProfileProperties() {{
                                instanceUrl = "temporibus";
                            }};
                            pardot = new PardotConnectorProfileProperties() {{
                                businessUnitId = "laborum";
                                instanceUrl = "quasi";
                                isSandboxEnvironment = false;
                            }};
                            redshift = new RedshiftConnectorProfileProperties() {{
                                bucketName = "reiciendis";
                                bucketPrefix = "voluptatibus";
                                clusterIdentifier = "vero";
                                dataApiRoleArn = "nihil";
                                databaseName = "praesentium";
                                databaseUrl = "voluptatibus";
                                isRedshiftServerless = false;
                                roleArn = "ipsa";
                                workgroupName = "omnis";
                            }};
                            sapoData = new SAPODataConnectorProfileProperties() {{
                                applicationHostUrl = "voluptate";
                                applicationServicePath = "cum";
                                clientNumber = "perferendis";
                                logonLanguage = "doloremque";
                                oAuthProperties = new OAuthProperties() {{
                                    authCodeUrl = "reprehenderit";
                                    oAuthScopes = new String[]{{
                                        add("maiores"),
                                        add("dicta"),
                                    }};
                                    tokenUrl = "corporis";
                                }};
                                portNumber = 296140;
                                privateLinkServiceName = "iusto";
                            }};
                            salesforce = new SalesforceConnectorProfileProperties() {{
                                instanceUrl = "dicta";
                                isSandboxEnvironment = false;
                                usePrivateLinkForMetadataAndAuthorization = false;
                            }};
                            serviceNow = new ServiceNowConnectorProfileProperties() {{
                                instanceUrl = "harum";
                            }};
                            singular = new java.util.HashMap<String, Object>() {{
                                put("accusamus", "commodi");
                                put("repudiandae", "quae");
                            }};
                            slack = new SlackConnectorProfileProperties() {{
                                instanceUrl = "ipsum";
                            }};
                            snowflake = new SnowflakeConnectorProfileProperties() {{
                                accountName = "quidem";
                                bucketName = "molestias";
                                bucketPrefix = "excepturi";
                                privateLinkServiceName = "pariatur";
                                region = "modi";
                                stage = "praesentium";
                                warehouse = "rem";
                            }};
                            trendmicro = new java.util.HashMap<String, Object>() {{
                                put("quasi", "repudiandae");
                                put("sint", "veritatis");
                                put("itaque", "incidunt");
                                put("enim", "consequatur");
                            }};
                            veeva = new VeevaConnectorProfileProperties() {{
                                instanceUrl = "est";
                            }};
                            zendesk = new ZendeskConnectorProfileProperties() {{
                                instanceUrl = "quibusdam";
                            }};
                        }};
                    }};
                    connectorProfileName = "explicabo";
                    connectorType = "Veeva";
                    kmsArn = "distinctio";
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