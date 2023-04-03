# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createConnectorProfile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* `createFlow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `deleteConnectorProfile` -  Enables you to delete an existing connector profile. 
* `deleteFlow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `describeConnector` - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* `describeConnectorEntity` -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* `describeConnectorProfiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `describeConnectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `describeFlow` -  Provides a description of the specified flow. 
* `describeFlowExecutionRecords` -  Fetches the execution history of the flow. 
* `listConnectorEntities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `listConnectors` - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* `listFlows` -  Lists all of the flows associated with your account. 
* `listTagsForResource` -  Retrieves the tags that are associated with a specified flow. 
* `registerConnector` - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* `startFlow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `stopFlow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `tagResource` -  Applies a tag to the specified flow. 
* `unregisterConnector` - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* `untagResource` -  Removes a tag from the specified flow. 
* `updateConnectorProfile` -  Updates a given connector profile associated with your account. 
* `updateConnectorRegistration` - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* `updateFlow` -  Updates an existing flow. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
