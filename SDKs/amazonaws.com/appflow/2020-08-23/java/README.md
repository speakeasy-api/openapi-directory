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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createConnectorProfile](docs/sdk/README.md#createconnectorprofile) -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* [createFlow](docs/sdk/README.md#createflow) -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* [deleteConnectorProfile](docs/sdk/README.md#deleteconnectorprofile) -  Enables you to delete an existing connector profile. 
* [deleteFlow](docs/sdk/README.md#deleteflow) -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* [describeConnector](docs/sdk/README.md#describeconnector) - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* [describeConnectorEntity](docs/sdk/README.md#describeconnectorentity) -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* [describeConnectorProfiles](docs/sdk/README.md#describeconnectorprofiles) - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* [describeConnectors](docs/sdk/README.md#describeconnectors) -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* [describeFlow](docs/sdk/README.md#describeflow) -  Provides a description of the specified flow. 
* [describeFlowExecutionRecords](docs/sdk/README.md#describeflowexecutionrecords) -  Fetches the execution history of the flow. 
* [listConnectorEntities](docs/sdk/README.md#listconnectorentities) -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* [listConnectors](docs/sdk/README.md#listconnectors) - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* [listFlows](docs/sdk/README.md#listflows) -  Lists all of the flows associated with your account. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Retrieves the tags that are associated with a specified flow. 
* [registerConnector](docs/sdk/README.md#registerconnector) - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* [startFlow](docs/sdk/README.md#startflow) -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* [stopFlow](docs/sdk/README.md#stopflow) -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* [tagResource](docs/sdk/README.md#tagresource) -  Applies a tag to the specified flow. 
* [unregisterConnector](docs/sdk/README.md#unregisterconnector) - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* [untagResource](docs/sdk/README.md#untagresource) -  Removes a tag from the specified flow. 
* [updateConnectorProfile](docs/sdk/README.md#updateconnectorprofile) -  Updates a given connector profile associated with your account. 
* [updateConnectorRegistration](docs/sdk/README.md#updateconnectorregistration) - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* [updateFlow](docs/sdk/README.md#updateflow) -  Updates an existing flow. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
