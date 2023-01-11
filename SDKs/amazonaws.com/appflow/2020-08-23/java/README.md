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
