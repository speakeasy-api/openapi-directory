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

<!-- Start SDK Available Operations -->
## SDK Available Operations

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
