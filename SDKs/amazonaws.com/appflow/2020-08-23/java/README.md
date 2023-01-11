# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createConnectorProfile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. 
* `createFlow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `deleteConnectorProfile` -  Enables you to delete an existing connector profile. 
* `deleteFlow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `describeConnectorEntity` -  Provides details regarding the entity used with the connector, with a description of the data model for each entity. 
* `describeConnectorProfiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `describeConnectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `describeFlow` -  Provides a description of the specified flow. 
* `describeFlowExecutionRecords` -  Fetches the execution history of the flow. 
* `listConnectorEntities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `listFlows` -  Lists all of the flows associated with your account. 
* `listTagsForResource` -  Retrieves the tags that are associated with a specified flow. 
* `startFlow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `stopFlow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `tagResource` -  Applies a tag to the specified flow. 
* `untagResource` -  Removes a tag from the specified flow. 
* `updateConnectorProfile` -  Updates a given connector profile associated with your account. 
* `updateFlow` -  Updates an existing flow. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
