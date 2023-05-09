<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequest;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequestBody;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequestBodyConnectionModeEnum;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequestBodyConnectorProfileConfig;
import org.openapis.openapi.models.operations.CreateConnectorProfileRequestBodyConnectorTypeEnum;
import org.openapis.openapi.models.operations.CreateConnectorProfileResponse;
import org.openapis.openapi.models.shared.AmplitudeConnectorProfileCredentials;
import org.openapis.openapi.models.shared.ApiKeyCredentials;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.BasicAuthCredentials;
import org.openapis.openapi.models.shared.ConnectorOAuthRequest;
import org.openapis.openapi.models.shared.ConnectorProfileCredentials;
import org.openapis.openapi.models.shared.ConnectorProfileProperties;
import org.openapis.openapi.models.shared.CustomAuthCredentials;
import org.openapis.openapi.models.shared.CustomConnectorProfileCredentials;
import org.openapis.openapi.models.shared.CustomConnectorProfileProperties;
import org.openapis.openapi.models.shared.DatadogConnectorProfileCredentials;
import org.openapis.openapi.models.shared.DatadogConnectorProfileProperties;
import org.openapis.openapi.models.shared.DynatraceConnectorProfileCredentials;
import org.openapis.openapi.models.shared.DynatraceConnectorProfileProperties;
import org.openapis.openapi.models.shared.GoogleAnalyticsConnectorProfileCredentials;
import org.openapis.openapi.models.shared.HoneycodeConnectorProfileCredentials;
import org.openapis.openapi.models.shared.InforNexusConnectorProfileCredentials;
import org.openapis.openapi.models.shared.InforNexusConnectorProfileProperties;
import org.openapis.openapi.models.shared.MarketoConnectorProfileCredentials;
import org.openapis.openapi.models.shared.MarketoConnectorProfileProperties;
import org.openapis.openapi.models.shared.OAuth2Credentials;
import org.openapis.openapi.models.shared.OAuth2GrantTypeEnum;
import org.openapis.openapi.models.shared.OAuth2Properties;
import org.openapis.openapi.models.shared.OAuthCredentials;
import org.openapis.openapi.models.shared.OAuthProperties;
import org.openapis.openapi.models.shared.PardotConnectorProfileCredentials;
import org.openapis.openapi.models.shared.PardotConnectorProfileProperties;
import org.openapis.openapi.models.shared.RedshiftConnectorProfileCredentials;
import org.openapis.openapi.models.shared.RedshiftConnectorProfileProperties;
import org.openapis.openapi.models.shared.SAPODataConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SAPODataConnectorProfileProperties;
import org.openapis.openapi.models.shared.SalesforceConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SalesforceConnectorProfileProperties;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNowConnectorProfileCredentials;
import org.openapis.openapi.models.shared.ServiceNowConnectorProfileProperties;
import org.openapis.openapi.models.shared.SingularConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SlackConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SlackConnectorProfileProperties;
import org.openapis.openapi.models.shared.SnowflakeConnectorProfileCredentials;
import org.openapis.openapi.models.shared.SnowflakeConnectorProfileProperties;
import org.openapis.openapi.models.shared.TrendmicroConnectorProfileCredentials;
import org.openapis.openapi.models.shared.VeevaConnectorProfileCredentials;
import org.openapis.openapi.models.shared.VeevaConnectorProfileProperties;
import org.openapis.openapi.models.shared.ZendeskConnectorProfileCredentials;
import org.openapis.openapi.models.shared.ZendeskConnectorProfileProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectorProfileRequest req = new CreateConnectorProfileRequest(                new CreateConnectorProfileRequestBody(CreateConnectorProfileRequestBodyConnectionModeEnum.PRIVATE_,                 new CreateConnectorProfileRequestBodyConnectorProfileConfig() {{
                                                connectorProfileCredentials = new ConnectorProfileCredentials() {{
                                                    amplitude = new AmplitudeConnectorProfileCredentials("distinctio", "quibusdam");;
                                                    customConnector = new CustomConnectorProfileCredentials(AuthenticationTypeEnum.BASIC) {{
                                                        apiKey = new ApiKeyCredentials("nulla") {{
                                                            apiSecretKey = "corrupti";
                                                        }};;
                                                        basic = new BasicAuthCredentials("illum", "vel");;
                                                        custom = new CustomAuthCredentials("error") {{
                                                            credentialsMap = new java.util.HashMap<String, String>() {{
                                                                put("suscipit", "iure");
                                                                put("magnam", "debitis");
                                                                put("ipsa", "delectus");
                                                            }};
                                                        }};;
                                                        oauth2 = new OAuth2Credentials() {{
                                                            accessToken = "tempora";
                                                            clientId = "suscipit";
                                                            clientSecret = "molestiae";
                                                            oAuthRequest = new ConnectorOAuthRequest() {{
                                                                authCode = "minus";
                                                                redirectUri = "placeat";
                                                            }};;
                                                            refreshToken = "voluptatum";
                                                        }};;
                                                    }};;
                                                    datadog = new DatadogConnectorProfileCredentials("iusto", "excepturi");;
                                                    dynatrace = new DynatraceConnectorProfileCredentials("nisi");;
                                                    googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials("recusandae", "temporibus") {{
                                                        accessToken = "ab";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "quis";
                                                            redirectUri = "veritatis";
                                                        }};;
                                                        refreshToken = "deserunt";
                                                    }};;
                                                    honeycode = new HoneycodeConnectorProfileCredentials() {{
                                                        accessToken = "perferendis";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "ipsam";
                                                            redirectUri = "repellendus";
                                                        }};;
                                                        refreshToken = "sapiente";
                                                    }};;
                                                    inforNexus = new InforNexusConnectorProfileCredentials("quo", "odit", "at", "at");;
                                                    marketo = new MarketoConnectorProfileCredentials("maiores", "molestiae") {{
                                                        accessToken = "quod";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "quod";
                                                            redirectUri = "esse";
                                                        }};;
                                                    }};;
                                                    pardot = new PardotConnectorProfileCredentials() {{
                                                        accessToken = "totam";
                                                        clientCredentialsArn = "porro";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "dolorum";
                                                            redirectUri = "dicta";
                                                        }};;
                                                        refreshToken = "nam";
                                                    }};;
                                                    redshift = new RedshiftConnectorProfileCredentials() {{
                                                        password = "officia";
                                                        username = "Kristina_Conroy";
                                                    }};;
                                                    sapoData = new SAPODataConnectorProfileCredentials() {{
                                                        basicAuthCredentials = new BasicAuthCredentials("optio", "totam");;
                                                        oAuthCredentials = new OAuthCredentials("beatae", "commodi") {{
                                                            accessToken = "molestiae";
                                                            oAuthRequest = new ConnectorOAuthRequest() {{
                                                                authCode = "modi";
                                                                redirectUri = "qui";
                                                            }};;
                                                            refreshToken = "impedit";
                                                        }};;
                                                    }};;
                                                    salesforce = new SalesforceConnectorProfileCredentials() {{
                                                        accessToken = "cum";
                                                        clientCredentialsArn = "esse";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "ipsum";
                                                            redirectUri = "excepturi";
                                                        }};;
                                                        refreshToken = "aspernatur";
                                                    }};;
                                                    serviceNow = new ServiceNowConnectorProfileCredentials("perferendis", "ad");;
                                                    singular = new SingularConnectorProfileCredentials("natus");;
                                                    slack = new SlackConnectorProfileCredentials("sed", "iste") {{
                                                        accessToken = "dolor";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "natus";
                                                            redirectUri = "laboriosam";
                                                        }};;
                                                    }};;
                                                    snowflake = new SnowflakeConnectorProfileCredentials("hic", "saepe");;
                                                    trendmicro = new TrendmicroConnectorProfileCredentials("fuga");;
                                                    veeva = new VeevaConnectorProfileCredentials("in", "corporis");;
                                                    zendesk = new ZendeskConnectorProfileCredentials("iste", "iure") {{
                                                        accessToken = "saepe";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "quidem";
                                                            redirectUri = "architecto";
                                                        }};;
                                                    }};;
                                                }};;
                                                connectorProfileProperties = new ConnectorProfileProperties() {{
                                                    amplitude = new java.util.HashMap<String, Object>() {{
                                                        put("reiciendis", "est");
                                                    }};
                                                    customConnector = new CustomConnectorProfileProperties() {{
                                                        oAuth2Properties = new OAuth2Properties(OAuth2GrantTypeEnum.AUTHORIZATION_CODE, "laborum") {{
                                                            tokenUrlCustomProperties = new java.util.HashMap<String, String>() {{
                                                                put("dolorem", "corporis");
                                                            }};
                                                        }};;
                                                        profileProperties = new java.util.HashMap<String, String>() {{
                                                            put("nobis", "enim");
                                                        }};
                                                    }};;
                                                    datadog = new DatadogConnectorProfileProperties("omnis");;
                                                    dynatrace = new DynatraceConnectorProfileProperties("nemo");;
                                                    googleAnalytics = new java.util.HashMap<String, Object>() {{
                                                        put("excepturi", "accusantium");
                                                        put("iure", "culpa");
                                                    }};
                                                    honeycode = new java.util.HashMap<String, Object>() {{
                                                        put("sapiente", "architecto");
                                                        put("mollitia", "dolorem");
                                                        put("culpa", "consequuntur");
                                                        put("repellat", "mollitia");
                                                    }};
                                                    inforNexus = new InforNexusConnectorProfileProperties("occaecati");;
                                                    marketo = new MarketoConnectorProfileProperties("numquam");;
                                                    pardot = new PardotConnectorProfileProperties() {{
                                                        businessUnitId = "commodi";
                                                        instanceUrl = "quam";
                                                        isSandboxEnvironment = false;
                                                    }};;
                                                    redshift = new RedshiftConnectorProfileProperties("molestiae", "velit") {{
                                                        bucketPrefix = "error";
                                                        clusterIdentifier = "quia";
                                                        dataApiRoleArn = "quis";
                                                        databaseName = "vitae";
                                                        databaseUrl = "laborum";
                                                        isRedshiftServerless = false;
                                                        workgroupName = "animi";
                                                    }};;
                                                    sapoData = new SAPODataConnectorProfileProperties("enim", "odit", "quo", 196582L) {{
                                                        logonLanguage = "tenetur";
                                                        oAuthProperties = new OAuthProperties("ipsam",                 new String[]{{
                                                                            add("possimus"),
                                                                            add("aut"),
                                                                            add("quasi"),
                                                                        }}, "error");;
                                                        privateLinkServiceName = "temporibus";
                                                    }};;
                                                    salesforce = new SalesforceConnectorProfileProperties() {{
                                                        instanceUrl = "laborum";
                                                        isSandboxEnvironment = false;
                                                        usePrivateLinkForMetadataAndAuthorization = false;
                                                    }};;
                                                    serviceNow = new ServiceNowConnectorProfileProperties("quasi");;
                                                    singular = new java.util.HashMap<String, Object>() {{
                                                        put("voluptatibus", "vero");
                                                        put("nihil", "praesentium");
                                                        put("voluptatibus", "ipsa");
                                                        put("omnis", "voluptate");
                                                    }};
                                                    slack = new SlackConnectorProfileProperties("cum");;
                                                    snowflake = new SnowflakeConnectorProfileProperties("perferendis", "doloremque", "reprehenderit") {{
                                                        accountName = "ut";
                                                        bucketPrefix = "maiores";
                                                        privateLinkServiceName = "dicta";
                                                        region = "corporis";
                                                    }};;
                                                    trendmicro = new java.util.HashMap<String, Object>() {{
                                                        put("iusto", "dicta");
                                                        put("harum", "enim");
                                                    }};
                                                    veeva = new VeevaConnectorProfileProperties("accusamus");;
                                                    zendesk = new ZendeskConnectorProfileProperties("commodi");;
                                                }};;
                                            }};, "repudiandae", CreateConnectorProfileRequestBodyConnectorTypeEnum.SINGULAR) {{
                                clientToken = "ipsum";
                                connectorLabel = "quidem";
                                kmsArn = "molestias";
                            }};) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            CreateConnectorProfileResponse res = sdk.createConnectorProfile(req);

            if (res.createConnectorProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->