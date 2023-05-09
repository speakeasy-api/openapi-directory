# SDK

## Overview

<p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p> <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p> <p>Use the following links to get started on the Amazon AppFlow API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p> <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm"> <i>Authorize Apps with OAuth</i> </a> documentation.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appflow/>
### Available Operations

* [createConnectorProfile](#createconnectorprofile) -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* [createFlow](#createflow) -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* [deleteConnectorProfile](#deleteconnectorprofile) -  Enables you to delete an existing connector profile. 
* [deleteFlow](#deleteflow) -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* [describeConnector](#describeconnector) - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* [describeConnectorEntity](#describeconnectorentity) -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* [describeConnectorProfiles](#describeconnectorprofiles) - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* [describeConnectors](#describeconnectors) -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* [describeFlow](#describeflow) -  Provides a description of the specified flow. 
* [describeFlowExecutionRecords](#describeflowexecutionrecords) -  Fetches the execution history of the flow. 
* [listConnectorEntities](#listconnectorentities) -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* [listConnectors](#listconnectors) - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* [listFlows](#listflows) -  Lists all of the flows associated with your account. 
* [listTagsForResource](#listtagsforresource) -  Retrieves the tags that are associated with a specified flow. 
* [registerConnector](#registerconnector) - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* [startFlow](#startflow) -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* [stopFlow](#stopflow) -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* [tagResource](#tagresource) -  Applies a tag to the specified flow. 
* [unregisterConnector](#unregisterconnector) - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* [untagResource](#untagresource) -  Removes a tag from the specified flow. 
* [updateConnectorProfile](#updateconnectorprofile) -  Updates a given connector profile associated with your account. 
* [updateConnectorRegistration](#updateconnectorregistration) - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* [updateFlow](#updateflow) -  Updates an existing flow. 

## createConnectorProfile

 Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.

### Example Usage

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
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectorProfileRequest req = new CreateConnectorProfileRequest(                new CreateConnectorProfileRequestBody(CreateConnectorProfileRequestBodyConnectionModeEnum.PRIVATE_,                 new CreateConnectorProfileRequestBodyConnectorProfileConfig() {{
                                                connectorProfileCredentials = new ConnectorProfileCredentials() {{
                                                    amplitude = new AmplitudeConnectorProfileCredentials("veritatis", "itaque");;
                                                    customConnector = new CustomConnectorProfileCredentials(AuthenticationTypeEnum.APIKEY) {{
                                                        apiKey = new ApiKeyCredentials("enim") {{
                                                            apiSecretKey = "consequatur";
                                                        }};;
                                                        basic = new BasicAuthCredentials("est", "quibusdam");;
                                                        custom = new CustomAuthCredentials("explicabo") {{
                                                            credentialsMap = new java.util.HashMap<String, String>() {{
                                                                put("distinctio", "quibusdam");
                                                                put("labore", "modi");
                                                                put("qui", "aliquid");
                                                            }};
                                                        }};;
                                                        oauth2 = new OAuth2Credentials() {{
                                                            accessToken = "cupiditate";
                                                            clientId = "quos";
                                                            clientSecret = "perferendis";
                                                            oAuthRequest = new ConnectorOAuthRequest() {{
                                                                authCode = "magni";
                                                                redirectUri = "assumenda";
                                                            }};;
                                                            refreshToken = "ipsam";
                                                        }};;
                                                    }};;
                                                    datadog = new DatadogConnectorProfileCredentials("alias", "fugit");;
                                                    dynatrace = new DynatraceConnectorProfileCredentials("dolorum");;
                                                    googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials("excepturi", "tempora") {{
                                                        accessToken = "facilis";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "tempore";
                                                            redirectUri = "labore";
                                                        }};;
                                                        refreshToken = "delectus";
                                                    }};;
                                                    honeycode = new HoneycodeConnectorProfileCredentials() {{
                                                        accessToken = "eum";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "non";
                                                            redirectUri = "eligendi";
                                                        }};;
                                                        refreshToken = "sint";
                                                    }};;
                                                    inforNexus = new InforNexusConnectorProfileCredentials("aliquid", "provident", "necessitatibus", "sint");;
                                                    marketo = new MarketoConnectorProfileCredentials("officia", "dolor") {{
                                                        accessToken = "debitis";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "a";
                                                            redirectUri = "dolorum";
                                                        }};;
                                                    }};;
                                                    pardot = new PardotConnectorProfileCredentials() {{
                                                        accessToken = "in";
                                                        clientCredentialsArn = "in";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "illum";
                                                            redirectUri = "maiores";
                                                        }};;
                                                        refreshToken = "rerum";
                                                    }};;
                                                    redshift = new RedshiftConnectorProfileCredentials() {{
                                                        password = "dicta";
                                                        username = "Elfrieda.Runolfsson39";
                                                    }};;
                                                    sapoData = new SAPODataConnectorProfileCredentials() {{
                                                        basicAuthCredentials = new BasicAuthCredentials("laborum", "accusamus");;
                                                        oAuthCredentials = new OAuthCredentials("non", "occaecati") {{
                                                            accessToken = "enim";
                                                            oAuthRequest = new ConnectorOAuthRequest() {{
                                                                authCode = "accusamus";
                                                                redirectUri = "delectus";
                                                            }};;
                                                            refreshToken = "quidem";
                                                        }};;
                                                    }};;
                                                    salesforce = new SalesforceConnectorProfileCredentials() {{
                                                        accessToken = "provident";
                                                        clientCredentialsArn = "nam";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "id";
                                                            redirectUri = "blanditiis";
                                                        }};;
                                                        refreshToken = "deleniti";
                                                    }};;
                                                    serviceNow = new ServiceNowConnectorProfileCredentials("sapiente", "amet");;
                                                    singular = new SingularConnectorProfileCredentials("deserunt");;
                                                    slack = new SlackConnectorProfileCredentials("nisi", "vel") {{
                                                        accessToken = "natus";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "omnis";
                                                            redirectUri = "molestiae";
                                                        }};;
                                                    }};;
                                                    snowflake = new SnowflakeConnectorProfileCredentials("perferendis", "nihil");;
                                                    trendmicro = new TrendmicroConnectorProfileCredentials("magnam");;
                                                    veeva = new VeevaConnectorProfileCredentials("distinctio", "id");;
                                                    zendesk = new ZendeskConnectorProfileCredentials("labore", "labore") {{
                                                        accessToken = "suscipit";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "natus";
                                                            redirectUri = "nobis";
                                                        }};;
                                                    }};;
                                                }};;
                                                connectorProfileProperties = new ConnectorProfileProperties() {{
                                                    amplitude = new java.util.HashMap<String, Object>() {{
                                                        put("vero", "aspernatur");
                                                        put("architecto", "magnam");
                                                    }};
                                                    customConnector = new CustomConnectorProfileProperties() {{
                                                        oAuth2Properties = new OAuth2Properties(OAuth2GrantTypeEnum.CLIENT_CREDENTIALS, "excepturi") {{
                                                            tokenUrlCustomProperties = new java.util.HashMap<String, String>() {{
                                                                put("provident", "quos");
                                                                put("sint", "accusantium");
                                                            }};
                                                        }};;
                                                        profileProperties = new java.util.HashMap<String, String>() {{
                                                            put("reiciendis", "mollitia");
                                                            put("ad", "eum");
                                                            put("dolor", "necessitatibus");
                                                        }};
                                                    }};;
                                                    datadog = new DatadogConnectorProfileProperties("odit");;
                                                    dynatrace = new DynatraceConnectorProfileProperties("nemo");;
                                                    googleAnalytics = new java.util.HashMap<String, Object>() {{
                                                        put("iure", "doloribus");
                                                    }};
                                                    honeycode = new java.util.HashMap<String, Object>() {{
                                                        put("eius", "maxime");
                                                        put("deleniti", "facilis");
                                                        put("in", "architecto");
                                                        put("architecto", "repudiandae");
                                                    }};
                                                    inforNexus = new InforNexusConnectorProfileProperties("ullam");;
                                                    marketo = new MarketoConnectorProfileProperties("expedita");;
                                                    pardot = new PardotConnectorProfileProperties() {{
                                                        businessUnitId = "nihil";
                                                        instanceUrl = "repellat";
                                                        isSandboxEnvironment = false;
                                                    }};;
                                                    redshift = new RedshiftConnectorProfileProperties("quibusdam", "sed") {{
                                                        bucketPrefix = "saepe";
                                                        clusterIdentifier = "pariatur";
                                                        dataApiRoleArn = "accusantium";
                                                        databaseName = "consequuntur";
                                                        databaseUrl = "praesentium";
                                                        isRedshiftServerless = false;
                                                        workgroupName = "natus";
                                                    }};;
                                                    sapoData = new SAPODataConnectorProfileProperties("magni", "sunt", "quo", 848009L) {{
                                                        logonLanguage = "pariatur";
                                                        oAuthProperties = new OAuthProperties("maxime",                 new String[]{{
                                                                            add("excepturi"),
                                                                            add("odit"),
                                                                        }}, "ea");;
                                                        privateLinkServiceName = "accusantium";
                                                    }};;
                                                    salesforce = new SalesforceConnectorProfileProperties() {{
                                                        instanceUrl = "ab";
                                                        isSandboxEnvironment = false;
                                                        usePrivateLinkForMetadataAndAuthorization = false;
                                                    }};;
                                                    serviceNow = new ServiceNowConnectorProfileProperties("maiores");;
                                                    singular = new java.util.HashMap<String, Object>() {{
                                                        put("ipsam", "voluptate");
                                                        put("autem", "nam");
                                                        put("eaque", "pariatur");
                                                    }};
                                                    slack = new SlackConnectorProfileProperties("nemo");;
                                                    snowflake = new SnowflakeConnectorProfileProperties("voluptatibus", "perferendis", "fugiat") {{
                                                        accountName = "amet";
                                                        bucketPrefix = "aut";
                                                        privateLinkServiceName = "cumque";
                                                        region = "corporis";
                                                    }};;
                                                    trendmicro = new java.util.HashMap<String, Object>() {{
                                                        put("libero", "nobis");
                                                        put("dolores", "quis");
                                                        put("totam", "dignissimos");
                                                        put("eaque", "quis");
                                                    }};
                                                    veeva = new VeevaConnectorProfileProperties("nesciunt");;
                                                    zendesk = new ZendeskConnectorProfileProperties("eos");;
                                                }};;
                                            }};, "perferendis", CreateConnectorProfileRequestBodyConnectorTypeEnum.S3) {{
                                clientToken = "minus";
                                connectorLabel = "quam";
                                kmsArn = "dolor";
                            }};) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            CreateConnectorProfileResponse res = sdk.sdk.createConnectorProfile(req);

            if (res.createConnectorProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFlow

 Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFlowRequest;
import org.openapis.openapi.models.operations.CreateFlowRequestBody;
import org.openapis.openapi.models.operations.CreateFlowRequestBodyMetadataCatalogConfig;
import org.openapis.openapi.models.operations.CreateFlowRequestBodySourceFlowConfig;
import org.openapis.openapi.models.operations.CreateFlowRequestBodyTriggerConfig;
import org.openapis.openapi.models.operations.CreateFlowResponse;
import org.openapis.openapi.models.shared.AggregationConfig;
import org.openapis.openapi.models.shared.AggregationTypeEnum;
import org.openapis.openapi.models.shared.AmplitudeConnectorOperatorEnum;
import org.openapis.openapi.models.shared.AmplitudeSourceProperties;
import org.openapis.openapi.models.shared.ConnectorOperator;
import org.openapis.openapi.models.shared.ConnectorTypeEnum;
import org.openapis.openapi.models.shared.CustomConnectorDestinationProperties;
import org.openapis.openapi.models.shared.CustomConnectorSourceProperties;
import org.openapis.openapi.models.shared.CustomerProfilesDestinationProperties;
import org.openapis.openapi.models.shared.DataPullModeEnum;
import org.openapis.openapi.models.shared.DatadogConnectorOperatorEnum;
import org.openapis.openapi.models.shared.DatadogSourceProperties;
import org.openapis.openapi.models.shared.DestinationConnectorProperties;
import org.openapis.openapi.models.shared.DestinationFlowConfig;
import org.openapis.openapi.models.shared.DynatraceConnectorOperatorEnum;
import org.openapis.openapi.models.shared.DynatraceSourceProperties;
import org.openapis.openapi.models.shared.ErrorHandlingConfig;
import org.openapis.openapi.models.shared.EventBridgeDestinationProperties;
import org.openapis.openapi.models.shared.FileTypeEnum;
import org.openapis.openapi.models.shared.GlueDataCatalogConfig;
import org.openapis.openapi.models.shared.GoogleAnalyticsConnectorOperatorEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsSourceProperties;
import org.openapis.openapi.models.shared.HoneycodeDestinationProperties;
import org.openapis.openapi.models.shared.IncrementalPullConfig;
import org.openapis.openapi.models.shared.InforNexusConnectorOperatorEnum;
import org.openapis.openapi.models.shared.InforNexusSourceProperties;
import org.openapis.openapi.models.shared.MarketoConnectorOperatorEnum;
import org.openapis.openapi.models.shared.MarketoDestinationProperties;
import org.openapis.openapi.models.shared.MarketoSourceProperties;
import org.openapis.openapi.models.shared.OperatorEnum;
import org.openapis.openapi.models.shared.PardotConnectorOperatorEnum;
import org.openapis.openapi.models.shared.PardotSourceProperties;
import org.openapis.openapi.models.shared.PathPrefixEnum;
import org.openapis.openapi.models.shared.PrefixConfig;
import org.openapis.openapi.models.shared.PrefixFormatEnum;
import org.openapis.openapi.models.shared.PrefixTypeEnum;
import org.openapis.openapi.models.shared.RedshiftDestinationProperties;
import org.openapis.openapi.models.shared.S3ConnectorOperatorEnum;
import org.openapis.openapi.models.shared.S3DestinationProperties;
import org.openapis.openapi.models.shared.S3InputFileTypeEnum;
import org.openapis.openapi.models.shared.S3InputFormatConfig;
import org.openapis.openapi.models.shared.S3OutputFormatConfig;
import org.openapis.openapi.models.shared.S3SourceProperties;
import org.openapis.openapi.models.shared.SAPODataConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SAPODataDestinationProperties;
import org.openapis.openapi.models.shared.SAPODataSourceProperties;
import org.openapis.openapi.models.shared.SalesforceConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SalesforceDataTransferApiEnum;
import org.openapis.openapi.models.shared.SalesforceDestinationProperties;
import org.openapis.openapi.models.shared.SalesforceSourceProperties;
import org.openapis.openapi.models.shared.ScheduledTriggerProperties;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNowConnectorOperatorEnum;
import org.openapis.openapi.models.shared.ServiceNowSourceProperties;
import org.openapis.openapi.models.shared.SingularConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SingularSourceProperties;
import org.openapis.openapi.models.shared.SlackConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SlackSourceProperties;
import org.openapis.openapi.models.shared.SnowflakeDestinationProperties;
import org.openapis.openapi.models.shared.SourceConnectorProperties;
import org.openapis.openapi.models.shared.SuccessResponseHandlingConfig;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskTypeEnum;
import org.openapis.openapi.models.shared.TrendmicroConnectorOperatorEnum;
import org.openapis.openapi.models.shared.TrendmicroSourceProperties;
import org.openapis.openapi.models.shared.TriggerProperties;
import org.openapis.openapi.models.shared.TriggerTypeEnum;
import org.openapis.openapi.models.shared.UpsolverDestinationProperties;
import org.openapis.openapi.models.shared.UpsolverS3OutputFormatConfig;
import org.openapis.openapi.models.shared.VeevaConnectorOperatorEnum;
import org.openapis.openapi.models.shared.VeevaSourceProperties;
import org.openapis.openapi.models.shared.WriteOperationTypeEnum;
import org.openapis.openapi.models.shared.ZendeskConnectorOperatorEnum;
import org.openapis.openapi.models.shared.ZendeskDestinationProperties;
import org.openapis.openapi.models.shared.ZendeskSourceProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFlowRequest req = new CreateFlowRequest(                new CreateFlowRequestBody(                new org.openapis.openapi.models.shared.DestinationFlowConfig[]{{
                                                add(new DestinationFlowConfig(ConnectorTypeEnum.LOOKOUT_METRICS,                 new DestinationConnectorProperties() {{
                                                                    customConnector = new CustomConnectorDestinationProperties("voluptas") {{
                                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                                            put("quam", "ipsum");
                                                                            put("incidunt", "qui");
                                                                            put("cupiditate", "maxime");
                                                                        }};
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "pariatur";
                                                                            bucketPrefix = "soluta";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("laborum"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                                    }};;
                                                                    customerProfiles = new CustomerProfilesDestinationProperties("incidunt") {{
                                                                        objectTypeName = "aspernatur";
                                                                    }};;
                                                                    eventBridge = new EventBridgeDestinationProperties("dolores") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "distinctio";
                                                                            bucketPrefix = "facilis";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    honeycode = new HoneycodeDestinationProperties("aliquid") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "quam";
                                                                            bucketPrefix = "molestias";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                                        put("qui", "neque");
                                                                        put("fugit", "magni");
                                                                        put("odio", "sunt");
                                                                        put("ullam", "nam");
                                                                    }};
                                                                    marketo = new MarketoDestinationProperties("hic") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "voluptatem";
                                                                            bucketPrefix = "cumque";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    redshift = new RedshiftDestinationProperties("soluta", "nobis") {{
                                                                        bucketPrefix = "et";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "saepe";
                                                                            bucketPrefix = "ipsum";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    s3 = new S3DestinationProperties("veritatis") {{
                                                                        bucketPrefix = "nobis";
                                                                        s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                targetFileSize = 731694L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.JSON;
                                                                            prefixConfig = new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MONTH;
                                                                                prefixType = PrefixTypeEnum.FILENAME;
                                                                            }};;
                                                                            preserveSourceDataTyping = false;
                                                                        }};;
                                                                    }};;
                                                                    sapoData = new SAPODataDestinationProperties("labore") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "adipisci";
                                                                            bucketPrefix = "dolorum";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("quae"),
                                                                        }};
                                                                        successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                            bucketName = "aut";
                                                                            bucketPrefix = "quas";
                                                                        }};;
                                                                        writeOperationType = WriteOperationTypeEnum.DELETE;
                                                                    }};;
                                                                    salesforce = new SalesforceDestinationProperties("consequatur") {{
                                                                        dataTransferApi = SalesforceDataTransferApiEnum.REST_SYNC;
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "repellendus";
                                                                            bucketPrefix = "porro";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("ut"),
                                                                            add("facilis"),
                                                                            add("cupiditate"),
                                                                            add("qui"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.INSERT;
                                                                    }};;
                                                                    snowflake = new SnowflakeDestinationProperties("laudantium", "odio") {{
                                                                        bucketPrefix = "occaecati";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "voluptatibus";
                                                                            bucketPrefix = "quisquam";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    upsolver = new UpsolverDestinationProperties("vero",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                                        pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                        }};
                                                                                                        prefixFormat = PrefixFormatEnum.DAY;
                                                                                                        prefixType = PrefixTypeEnum.FILENAME;
                                                                                                    }};) {{
                                                                                        aggregationConfig = new AggregationConfig() {{
                                                                                            aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                            targetFileSize = 949319L;
                                                                                        }};;
                                                                                        fileType = FileTypeEnum.JSON;
                                                                                    }};) {{
                                                                        bucketPrefix = "hic";
                                                                    }};;
                                                                    zendesk = new ZendeskDestinationProperties("distinctio") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "quod";
                                                                            bucketPrefix = "odio";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("facilis"),
                                                                            add("vero"),
                                                                            add("ducimus"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                }};) {{
                                                    apiVersion = "consequuntur";
                                                    connectorProfileName = "blanditiis";
                                                    connectorType = ConnectorTypeEnum.AMPLITUDE;
                                                    destinationConnectorProperties = new DestinationConnectorProperties() {{
                                                        customConnector = new CustomConnectorDestinationProperties("pariatur") {{
                                                            customProperties = new java.util.HashMap<String, String>() {{
                                                                put("occaecati", "rerum");
                                                            }};
                                                            entityName = "adipisci";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "asperiores";
                                                                bucketPrefix = "earum";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("iste"),
                                                                add("dolorum"),
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                        }};
                                                        customerProfiles = new CustomerProfilesDestinationProperties("libero") {{
                                                            domainName = "provident";
                                                            objectTypeName = "nobis";
                                                        }};
                                                        eventBridge = new EventBridgeDestinationProperties("aliquid") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "delectus";
                                                                bucketPrefix = "quaerat";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "quos";
                                                        }};
                                                        honeycode = new HoneycodeDestinationProperties("qui") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "dolorem";
                                                                bucketPrefix = "dolorem";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "dolor";
                                                        }};
                                                        lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                            put("hic", "excepturi");
                                                        }};
                                                        marketo = new MarketoDestinationProperties("reiciendis") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "cum";
                                                                bucketPrefix = "voluptate";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "dignissimos";
                                                        }};
                                                        redshift = new RedshiftDestinationProperties("ipsa", "iure") {{
                                                            bucketPrefix = "amet";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "dolorum";
                                                                bucketPrefix = "numquam";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "veritatis";
                                                            object = "ipsa";
                                                        }};
                                                        s3 = new S3DestinationProperties("fugiat") {{
                                                            bucketName = "odio";
                                                            bucketPrefix = "quaerat";
                                                            s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                    targetFileSize = 696344L;
                                                                }};
                                                                fileType = FileTypeEnum.PARQUET;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.DAY;
                                                                    prefixType = PrefixTypeEnum.FILENAME;
                                                                }};
                                                                preserveSourceDataTyping = false;
                                                            }};
                                                        }};
                                                        sapoData = new SAPODataDestinationProperties("asperiores") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "ab";
                                                                bucketPrefix = "soluta";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("iusto"),
                                                                add("voluptate"),
                                                                add("dolorum"),
                                                            }};
                                                            objectPath = "deleniti";
                                                            successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                bucketName = "omnis";
                                                                bucketPrefix = "necessitatibus";
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                        }};
                                                        salesforce = new SalesforceDestinationProperties("optio") {{
                                                            dataTransferApi = SalesforceDataTransferApiEnum.BULKV2;
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "ipsum";
                                                                bucketPrefix = "voluptate";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("saepe"),
                                                                add("eius"),
                                                                add("aspernatur"),
                                                            }};
                                                            object = "perferendis";
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                        snowflake = new SnowflakeDestinationProperties("provident", "minima") {{
                                                            bucketPrefix = "accusamus";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "ad";
                                                                bucketPrefix = "saepe";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "suscipit";
                                                            object = "deserunt";
                                                        }};
                                                        upsolver = new UpsolverDestinationProperties("harum",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                            pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                add(PathPrefixEnum.EXECUTION_ID),
                                                                                                add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                            }};
                                                                                            prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                            prefixType = PrefixTypeEnum.FILENAME;
                                                                                        }};) {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                targetFileSize = 880298L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.CSV;
                                                                        }};) {{
                                                            bucketName = "repellendus";
                                                            bucketPrefix = "totam";
                                                            s3OutputFormatConfig = new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                prefixType = PrefixTypeEnum.PATH;
                                                                            }};) {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                    targetFileSize = 55L;
                                                                }};
                                                                fileType = FileTypeEnum.PARQUET;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.HOUR;
                                                                    prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                }};
                                                            }};
                                                        }};
                                                        zendesk = new ZendeskDestinationProperties("vel") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "enim";
                                                                bucketPrefix = "dolorem";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("totam"),
                                                                add("nihil"),
                                                                add("sit"),
                                                                add("expedita"),
                                                            }};
                                                            object = "neque";
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                    }};
                                                }}),
                                                add(new DestinationFlowConfig(ConnectorTypeEnum.GOOGLEANALYTICS,                 new DestinationConnectorProperties() {{
                                                                    customConnector = new CustomConnectorDestinationProperties("debitis") {{
                                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                                            put("aspernatur", "sequi");
                                                                            put("quo", "esse");
                                                                        }};
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "recusandae";
                                                                            bucketPrefix = "aperiam";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("quod"),
                                                                            add("dignissimos"),
                                                                            add("inventore"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                    customerProfiles = new CustomerProfilesDestinationProperties("totam") {{
                                                                        objectTypeName = "accusamus";
                                                                    }};;
                                                                    eventBridge = new EventBridgeDestinationProperties("aliquam") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "odio";
                                                                            bucketPrefix = "occaecati";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    honeycode = new HoneycodeDestinationProperties("commodi") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "sapiente";
                                                                            bucketPrefix = "dolores";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                                        put("molestiae", "accusantium");
                                                                        put("porro", "eum");
                                                                        put("quas", "praesentium");
                                                                    }};
                                                                    marketo = new MarketoDestinationProperties("consequuntur") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "deleniti";
                                                                            bucketPrefix = "fugit";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    redshift = new RedshiftDestinationProperties("fuga", "mollitia") {{
                                                                        bucketPrefix = "incidunt";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "atque";
                                                                            bucketPrefix = "explicabo";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    s3 = new S3DestinationProperties("minima") {{
                                                                        bucketPrefix = "nisi";
                                                                        s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.NONE;
                                                                                targetFileSize = 956406L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.CSV;
                                                                            prefixConfig = new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                prefixType = PrefixTypeEnum.PATH;
                                                                            }};;
                                                                            preserveSourceDataTyping = false;
                                                                        }};;
                                                                    }};;
                                                                    sapoData = new SAPODataDestinationProperties("atque") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "et";
                                                                            bucketPrefix = "esse";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("accusamus"),
                                                                            add("veritatis"),
                                                                            add("esse"),
                                                                            add("quod"),
                                                                        }};
                                                                        successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                            bucketName = "nam";
                                                                            bucketPrefix = "vero";
                                                                        }};;
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                    salesforce = new SalesforceDestinationProperties("quasi") {{
                                                                        dataTransferApi = SalesforceDataTransferApiEnum.REST_SYNC;
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "vel";
                                                                            bucketPrefix = "harum";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("rerum"),
                                                                            add("occaecati"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                    snowflake = new SnowflakeDestinationProperties("distinctio", "eligendi") {{
                                                                        bucketPrefix = "sit";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "culpa";
                                                                            bucketPrefix = "tempore";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    upsolver = new UpsolverDestinationProperties("adipisci",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                                        pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                        }};
                                                                                                        prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                                        prefixType = PrefixTypeEnum.FILENAME;
                                                                                                    }};) {{
                                                                                        aggregationConfig = new AggregationConfig() {{
                                                                                            aggregationType = AggregationTypeEnum.NONE;
                                                                                            targetFileSize = 503427L;
                                                                                        }};;
                                                                                        fileType = FileTypeEnum.JSON;
                                                                                    }};) {{
                                                                        bucketPrefix = "a";
                                                                    }};;
                                                                    zendesk = new ZendeskDestinationProperties("nulla") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "quas";
                                                                            bucketPrefix = "esse";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("a"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                                    }};;
                                                                }};) {{
                                                    apiVersion = "quibusdam";
                                                    connectorProfileName = "illum";
                                                    connectorType = ConnectorTypeEnum.S3;
                                                    destinationConnectorProperties = new DestinationConnectorProperties() {{
                                                        customConnector = new CustomConnectorDestinationProperties("officia") {{
                                                            customProperties = new java.util.HashMap<String, String>() {{
                                                                put("impedit", "aut");
                                                                put("voluptatibus", "exercitationem");
                                                                put("nulla", "fugit");
                                                            }};
                                                            entityName = "porro";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "maiores";
                                                                bucketPrefix = "doloribus";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("eligendi"),
                                                                add("ducimus"),
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                        customerProfiles = new CustomerProfilesDestinationProperties("ea") {{
                                                            domainName = "tempora";
                                                            objectTypeName = "ipsam";
                                                        }};
                                                        eventBridge = new EventBridgeDestinationProperties("magnam") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "aspernatur";
                                                                bucketPrefix = "vel";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "possimus";
                                                        }};
                                                        honeycode = new HoneycodeDestinationProperties("dicta") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "ratione";
                                                                bucketPrefix = "ex";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "laudantium";
                                                        }};
                                                        lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                            put("maiores", "quasi");
                                                        }};
                                                        marketo = new MarketoDestinationProperties("voluptatibus") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "ex";
                                                                bucketPrefix = "nulla";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "excepturi";
                                                        }};
                                                        redshift = new RedshiftDestinationProperties("impedit", "corporis") {{
                                                            bucketPrefix = "nostrum";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "sapiente";
                                                                bucketPrefix = "quisquam";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "saepe";
                                                            object = "ea";
                                                        }};
                                                        s3 = new S3DestinationProperties("libero") {{
                                                            bucketName = "veniam";
                                                            bucketPrefix = "aliquid";
                                                            s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.NONE;
                                                                    targetFileSize = 301831L;
                                                                }};
                                                                fileType = FileTypeEnum.JSON;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.YEAR;
                                                                    prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                }};
                                                                preserveSourceDataTyping = false;
                                                            }};
                                                        }};
                                                        sapoData = new SAPODataDestinationProperties("dolorum") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "aut";
                                                                bucketPrefix = "aut";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("impedit"),
                                                                add("aliquam"),
                                                                add("fugit"),
                                                            }};
                                                            objectPath = "accusamus";
                                                            successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                bucketName = "inventore";
                                                                bucketPrefix = "non";
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                        salesforce = new SalesforceDestinationProperties("nulla") {{
                                                            dataTransferApi = SalesforceDataTransferApiEnum.REST_SYNC;
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "placeat";
                                                                bucketPrefix = "velit";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("autem"),
                                                                add("nobis"),
                                                            }};
                                                            object = "quas";
                                                            writeOperationType = WriteOperationTypeEnum.DELETE;
                                                        }};
                                                        snowflake = new SnowflakeDestinationProperties("explicabo", "provident") {{
                                                            bucketPrefix = "voluptas";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "libero";
                                                                bucketPrefix = "quasi";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "tempora";
                                                            object = "numquam";
                                                        }};
                                                        upsolver = new UpsolverDestinationProperties("eos",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                            pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                add(PathPrefixEnum.EXECUTION_ID),
                                                                                                add(PathPrefixEnum.EXECUTION_ID),
                                                                                            }};
                                                                                            prefixFormat = PrefixFormatEnum.HOUR;
                                                                                            prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                                        }};) {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.NONE;
                                                                                targetFileSize = 778696L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.PARQUET;
                                                                        }};) {{
                                                            bucketName = "ipsa";
                                                            bucketPrefix = "molestiae";
                                                            s3OutputFormatConfig = new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MONTH;
                                                                                prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                            }};) {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.NONE;
                                                                    targetFileSize = 487935L;
                                                                }};
                                                                fileType = FileTypeEnum.CSV;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.HOUR;
                                                                    prefixType = PrefixTypeEnum.PATH;
                                                                }};
                                                            }};
                                                        }};
                                                        zendesk = new ZendeskDestinationProperties("consequatur") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "quo";
                                                                bucketPrefix = "fuga";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("eos"),
                                                                add("voluptas"),
                                                            }};
                                                            object = "ab";
                                                            writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                        }};
                                                    }};
                                                }}),
                                                add(new DestinationFlowConfig(ConnectorTypeEnum.SERVICENOW,                 new DestinationConnectorProperties() {{
                                                                    customConnector = new CustomConnectorDestinationProperties("recusandae") {{
                                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                                            put("aperiam", "cum");
                                                                            put("consectetur", "in");
                                                                        }};
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "exercitationem";
                                                                            bucketPrefix = "earum";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("numquam"),
                                                                            add("doloribus"),
                                                                            add("suscipit"),
                                                                            add("reiciendis"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                                    }};;
                                                                    customerProfiles = new CustomerProfilesDestinationProperties("saepe") {{
                                                                        objectTypeName = "necessitatibus";
                                                                    }};;
                                                                    eventBridge = new EventBridgeDestinationProperties("dolore") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "sunt";
                                                                            bucketPrefix = "asperiores";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    honeycode = new HoneycodeDestinationProperties("adipisci") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "non";
                                                                            bucketPrefix = "amet";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                                        put("dignissimos", "a");
                                                                    }};
                                                                    marketo = new MarketoDestinationProperties("debitis") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "consectetur";
                                                                            bucketPrefix = "corporis";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    redshift = new RedshiftDestinationProperties("harum", "laboriosam") {{
                                                                        bucketPrefix = "ipsa";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "voluptates";
                                                                            bucketPrefix = "libero";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    s3 = new S3DestinationProperties("vitae") {{
                                                                        bucketPrefix = "accusamus";
                                                                        s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                targetFileSize = 272437L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.CSV;
                                                                            prefixConfig = new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MONTH;
                                                                                prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                            }};;
                                                                            preserveSourceDataTyping = false;
                                                                        }};;
                                                                    }};;
                                                                    sapoData = new SAPODataDestinationProperties("dolorum") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "adipisci";
                                                                            bucketPrefix = "minus";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("blanditiis"),
                                                                        }};
                                                                        successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                            bucketName = "in";
                                                                            bucketPrefix = "dolore";
                                                                        }};;
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                    salesforce = new SalesforceDestinationProperties("officiis") {{
                                                                        dataTransferApi = SalesforceDataTransferApiEnum.REST_SYNC;
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "ullam";
                                                                            bucketPrefix = "adipisci";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("blanditiis"),
                                                                            add("quas"),
                                                                            add("hic"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.INSERT;
                                                                    }};;
                                                                    snowflake = new SnowflakeDestinationProperties("culpa", "corrupti") {{
                                                                        bucketPrefix = "pariatur";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "totam";
                                                                            bucketPrefix = "hic";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    upsolver = new UpsolverDestinationProperties("exercitationem",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                                        pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                        }};
                                                                                                        prefixFormat = PrefixFormatEnum.YEAR;
                                                                                                        prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                                                    }};) {{
                                                                                        aggregationConfig = new AggregationConfig() {{
                                                                                            aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                            targetFileSize = 451822L;
                                                                                        }};;
                                                                                        fileType = FileTypeEnum.PARQUET;
                                                                                    }};) {{
                                                                        bucketPrefix = "ab";
                                                                    }};;
                                                                    zendesk = new ZendeskDestinationProperties("iste") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "dolore";
                                                                            bucketPrefix = "laborum";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("in"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                }};) {{
                                                    apiVersion = "sint";
                                                    connectorProfileName = "pariatur";
                                                    connectorType = ConnectorTypeEnum.HONEYCODE;
                                                    destinationConnectorProperties = new DestinationConnectorProperties() {{
                                                        customConnector = new CustomConnectorDestinationProperties("aliquid") {{
                                                            customProperties = new java.util.HashMap<String, String>() {{
                                                                put("eveniet", "asperiores");
                                                            }};
                                                            entityName = "facere";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "veritatis";
                                                                bucketPrefix = "consequuntur";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("similique"),
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                        }};
                                                        customerProfiles = new CustomerProfilesDestinationProperties("earum") {{
                                                            domainName = "tenetur";
                                                            objectTypeName = "quae";
                                                        }};
                                                        eventBridge = new EventBridgeDestinationProperties("libero") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "vel";
                                                                bucketPrefix = "in";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "eius";
                                                        }};
                                                        honeycode = new HoneycodeDestinationProperties("aliquam") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "illum";
                                                                bucketPrefix = "soluta";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "accusantium";
                                                        }};
                                                        lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                            put("dicta", "ullam");
                                                            put("reprehenderit", "ullam");
                                                            put("nisi", "aut");
                                                            put("voluptatum", "qui");
                                                        }};
                                                        marketo = new MarketoDestinationProperties("itaque") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "quibusdam";
                                                                bucketPrefix = "ex";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "deleniti";
                                                        }};
                                                        redshift = new RedshiftDestinationProperties("at", "et") {{
                                                            bucketPrefix = "dolorum";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "architecto";
                                                                bucketPrefix = "omnis";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "tenetur";
                                                            object = "quasi";
                                                        }};
                                                        s3 = new S3DestinationProperties("rem") {{
                                                            bucketName = "voluptate";
                                                            bucketPrefix = "ipsa";
                                                            s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.NONE;
                                                                    targetFileSize = 86532L;
                                                                }};
                                                                fileType = FileTypeEnum.CSV;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.MINUTE;
                                                                    prefixType = PrefixTypeEnum.FILENAME;
                                                                }};
                                                                preserveSourceDataTyping = false;
                                                            }};
                                                        }};
                                                        sapoData = new SAPODataDestinationProperties("occaecati") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "aut";
                                                                bucketPrefix = "laudantium";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("mollitia"),
                                                                add("ab"),
                                                            }};
                                                            objectPath = "corrupti";
                                                            successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                bucketName = "non";
                                                                bucketPrefix = "voluptatem";
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                        salesforce = new SalesforceDestinationProperties("natus") {{
                                                            dataTransferApi = SalesforceDataTransferApiEnum.AUTOMATIC;
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "impedit";
                                                                bucketPrefix = "explicabo";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("aut"),
                                                                add("dignissimos"),
                                                            }};
                                                            object = "dicta";
                                                            writeOperationType = WriteOperationTypeEnum.DELETE;
                                                        }};
                                                        snowflake = new SnowflakeDestinationProperties("ea", "quaerat") {{
                                                            bucketPrefix = "velit";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "voluptatibus";
                                                                bucketPrefix = "voluptas";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "asperiores";
                                                            object = "aperiam";
                                                        }};
                                                        upsolver = new UpsolverDestinationProperties("velit",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                            pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                            }};
                                                                                            prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                            prefixType = PrefixTypeEnum.PATH;
                                                                                        }};) {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.NONE;
                                                                                targetFileSize = 554688L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.JSON;
                                                                        }};) {{
                                                            bucketName = "consequuntur";
                                                            bucketPrefix = "repellendus";
                                                            s3OutputFormatConfig = new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.HOUR;
                                                                                prefixType = PrefixTypeEnum.PATH;
                                                                            }};) {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                    targetFileSize = 807023L;
                                                                }};
                                                                fileType = FileTypeEnum.JSON;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.MONTH;
                                                                    prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                }};
                                                            }};
                                                        }};
                                                        zendesk = new ZendeskDestinationProperties("assumenda") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "labore";
                                                                bucketPrefix = "possimus";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("cum"),
                                                                add("commodi"),
                                                                add("in"),
                                                            }};
                                                            object = "corporis";
                                                            writeOperationType = WriteOperationTypeEnum.DELETE;
                                                        }};
                                                    }};
                                                }}),
                                                add(new DestinationFlowConfig(ConnectorTypeEnum.MARKETO,                 new DestinationConnectorProperties() {{
                                                                    customConnector = new CustomConnectorDestinationProperties("deserunt") {{
                                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                                            put("unde", "reiciendis");
                                                                            put("provident", "repellendus");
                                                                        }};
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "delectus";
                                                                            bucketPrefix = "voluptates";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("est"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                                    }};;
                                                                    customerProfiles = new CustomerProfilesDestinationProperties("reprehenderit") {{
                                                                        objectTypeName = "facere";
                                                                    }};;
                                                                    eventBridge = new EventBridgeDestinationProperties("fuga") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "praesentium";
                                                                            bucketPrefix = "mollitia";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    honeycode = new HoneycodeDestinationProperties("veniam") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "voluptatem";
                                                                            bucketPrefix = "quisquam";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                                        put("quasi", "atque");
                                                                        put("reprehenderit", "asperiores");
                                                                        put("totam", "suscipit");
                                                                        put("quidem", "maxime");
                                                                    }};
                                                                    marketo = new MarketoDestinationProperties("et") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "esse";
                                                                            bucketPrefix = "amet";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    redshift = new RedshiftDestinationProperties("assumenda", "ea") {{
                                                                        bucketPrefix = "atque";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "error";
                                                                            bucketPrefix = "officiis";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    s3 = new S3DestinationProperties("officiis") {{
                                                                        bucketPrefix = "accusamus";
                                                                        s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                targetFileSize = 328303L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.CSV;
                                                                            prefixConfig = new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                prefixType = PrefixTypeEnum.PATH;
                                                                            }};;
                                                                            preserveSourceDataTyping = false;
                                                                        }};;
                                                                    }};;
                                                                    sapoData = new SAPODataDestinationProperties("blanditiis") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "suscipit";
                                                                            bucketPrefix = "repudiandae";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("atque"),
                                                                            add("sunt"),
                                                                            add("recusandae"),
                                                                        }};
                                                                        successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                            bucketName = "dolorum";
                                                                            bucketPrefix = "repellendus";
                                                                        }};;
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                    salesforce = new SalesforceDestinationProperties("reiciendis") {{
                                                                        dataTransferApi = SalesforceDataTransferApiEnum.AUTOMATIC;
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "repudiandae";
                                                                            bucketPrefix = "dicta";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("beatae"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.INSERT;
                                                                    }};;
                                                                    snowflake = new SnowflakeDestinationProperties("enim", "laboriosam") {{
                                                                        bucketPrefix = "velit";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "a";
                                                                            bucketPrefix = "molestias";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    upsolver = new UpsolverDestinationProperties("magnam",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                                        pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                        }};
                                                                                                        prefixFormat = PrefixFormatEnum.DAY;
                                                                                                        prefixType = PrefixTypeEnum.FILENAME;
                                                                                                    }};) {{
                                                                                        aggregationConfig = new AggregationConfig() {{
                                                                                            aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                            targetFileSize = 580887L;
                                                                                        }};;
                                                                                        fileType = FileTypeEnum.CSV;
                                                                                    }};) {{
                                                                        bucketPrefix = "fugit";
                                                                    }};;
                                                                    zendesk = new ZendeskDestinationProperties("id") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "quis";
                                                                            bucketPrefix = "reprehenderit";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("illo"),
                                                                            add("corporis"),
                                                                            add("quidem"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.DELETE;
                                                                    }};;
                                                                }};) {{
                                                    apiVersion = "quidem";
                                                    connectorProfileName = "explicabo";
                                                    connectorType = ConnectorTypeEnum.DATADOG;
                                                    destinationConnectorProperties = new DestinationConnectorProperties() {{
                                                        customConnector = new CustomConnectorDestinationProperties("necessitatibus") {{
                                                            customProperties = new java.util.HashMap<String, String>() {{
                                                                put("architecto", "suscipit");
                                                                put("sapiente", "debitis");
                                                                put("illo", "reiciendis");
                                                            }};
                                                            entityName = "perferendis";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "corrupti";
                                                                bucketPrefix = "maiores";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("sed"),
                                                                add("provident"),
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                        }};
                                                        customerProfiles = new CustomerProfilesDestinationProperties("occaecati") {{
                                                            domainName = "ipsum";
                                                            objectTypeName = "ea";
                                                        }};
                                                        eventBridge = new EventBridgeDestinationProperties("tempora") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "quos";
                                                                bucketPrefix = "voluptatibus";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "tempora";
                                                        }};
                                                        honeycode = new HoneycodeDestinationProperties("sit") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "voluptate";
                                                                bucketPrefix = "reiciendis";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "ex";
                                                        }};
                                                        lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                            put("officiis", "praesentium");
                                                        }};
                                                        marketo = new MarketoDestinationProperties("ipsam") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "facilis";
                                                                bucketPrefix = "quaerat";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "incidunt";
                                                        }};
                                                        redshift = new RedshiftDestinationProperties("veniam", "minima") {{
                                                            bucketPrefix = "debitis";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "rem";
                                                                bucketPrefix = "sit";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "nobis";
                                                            object = "error";
                                                        }};
                                                        s3 = new S3DestinationProperties("exercitationem") {{
                                                            bucketName = "recusandae";
                                                            bucketPrefix = "reiciendis";
                                                            s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                    targetFileSize = 168576L;
                                                                }};
                                                                fileType = FileTypeEnum.CSV;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.YEAR;
                                                                    prefixType = PrefixTypeEnum.PATH;
                                                                }};
                                                                preserveSourceDataTyping = false;
                                                            }};
                                                        }};
                                                        sapoData = new SAPODataDestinationProperties("neque") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "praesentium";
                                                                bucketPrefix = "cum";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("dolorum"),
                                                                add("voluptatum"),
                                                            }};
                                                            objectPath = "error";
                                                            successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                bucketName = "hic";
                                                                bucketPrefix = "expedita";
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.DELETE;
                                                        }};
                                                        salesforce = new SalesforceDestinationProperties("ut") {{
                                                            dataTransferApi = SalesforceDataTransferApiEnum.REST_SYNC;
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "nostrum";
                                                                bucketPrefix = "officia";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("corrupti"),
                                                                add("accusamus"),
                                                                add("tempora"),
                                                            }};
                                                            object = "atque";
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                        snowflake = new SnowflakeDestinationProperties("consequatur", "esse") {{
                                                            bucketPrefix = "fugiat";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "voluptatem";
                                                                bucketPrefix = "culpa";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "expedita";
                                                            object = "magnam";
                                                        }};
                                                        upsolver = new UpsolverDestinationProperties("error",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                            pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                add(PathPrefixEnum.EXECUTION_ID),
                                                                                            }};
                                                                                            prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                            prefixType = PrefixTypeEnum.FILENAME;
                                                                                        }};) {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                targetFileSize = 115703L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.CSV;
                                                                        }};) {{
                                                            bucketName = "ipsam";
                                                            bucketPrefix = "sit";
                                                            s3OutputFormatConfig = new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MONTH;
                                                                                prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                            }};) {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                    targetFileSize = 558065L;
                                                                }};
                                                                fileType = FileTypeEnum.PARQUET;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.DAY;
                                                                    prefixType = PrefixTypeEnum.FILENAME;
                                                                }};
                                                            }};
                                                        }};
                                                        zendesk = new ZendeskDestinationProperties("alias") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "occaecati";
                                                                bucketPrefix = "labore";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("atque"),
                                                                add("laborum"),
                                                                add("nam"),
                                                            }};
                                                            object = "tenetur";
                                                            writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                        }};
                                                    }};
                                                }}),
                                            }}, "non",                 new CreateFlowRequestBodySourceFlowConfig() {{
                                                apiVersion = "vero";
                                                connectorProfileName = "doloremque";
                                                connectorType = ConnectorTypeEnum.TRENDMICRO;
                                                incrementalPullConfig = new IncrementalPullConfig() {{
                                                    datetimeTypeFieldName = "ipsa";
                                                }};;
                                                sourceConnectorProperties = new SourceConnectorProperties() {{
                                                    amplitude = new AmplitudeSourceProperties("totam");;
                                                    customConnector = new CustomConnectorSourceProperties("quae") {{
                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                            put("eveniet", "qui");
                                                            put("cum", "iure");
                                                        }};
                                                    }};;
                                                    datadog = new DatadogSourceProperties("necessitatibus");;
                                                    dynatrace = new DynatraceSourceProperties("ratione");;
                                                    googleAnalytics = new GoogleAnalyticsSourceProperties("laborum");;
                                                    inforNexus = new InforNexusSourceProperties("distinctio");;
                                                    marketo = new MarketoSourceProperties("voluptatum");;
                                                    pardot = new PardotSourceProperties("rem");;
                                                    s3 = new S3SourceProperties("aliquam") {{
                                                        bucketPrefix = "ad";
                                                        s3InputFormatConfig = new S3InputFormatConfig() {{
                                                            s3InputFileType = S3InputFileTypeEnum.JSON;
                                                        }};;
                                                    }};;
                                                    sapoData = new SAPODataSourceProperties() {{
                                                        objectPath = "alias";
                                                    }};;
                                                    salesforce = new SalesforceSourceProperties("corporis") {{
                                                        dataTransferApi = SalesforceDataTransferApiEnum.BULKV2;
                                                        enableDynamicFieldUpdate = false;
                                                        includeDeletedRecords = false;
                                                    }};;
                                                    serviceNow = new ServiceNowSourceProperties("nihil");;
                                                    singular = new SingularSourceProperties("mollitia");;
                                                    slack = new SlackSourceProperties("voluptas");;
                                                    trendmicro = new TrendmicroSourceProperties("alias");;
                                                    veeva = new VeevaSourceProperties("maiores") {{
                                                        documentType = "reiciendis";
                                                        includeAllVersions = false;
                                                        includeRenditions = false;
                                                        includeSourceFiles = false;
                                                    }};;
                                                    zendesk = new ZendeskSourceProperties("dolores");;
                                                }};;
                                            }};,                 new org.openapis.openapi.models.shared.Task[]{{
                                                add(new Task(                new String[]{{
                                                                    add("ex"),
                                                                    add("aliquid"),
                                                                    add("accusantium"),
                                                                }}, TaskTypeEnum.PARTITION) {{
                                                    connectorOperator = new ConnectorOperator() {{
                                                        amplitude = AmplitudeConnectorOperatorEnum.BETWEEN;
                                                        customConnector = OperatorEnum.GREATER_THAN_OR_EQUAL_TO;
                                                        datadog = DatadogConnectorOperatorEnum.MULTIPLICATION;
                                                        dynatrace = DynatraceConnectorOperatorEnum.VALIDATE_NON_NULL;
                                                        googleAnalytics = GoogleAnalyticsConnectorOperatorEnum.PROJECTION;
                                                        inforNexus = InforNexusConnectorOperatorEnum.PROJECTION;
                                                        marketo = MarketoConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                        pardot = PardotConnectorOperatorEnum.MASK_FIRST_N;
                                                        s3 = S3ConnectorOperatorEnum.EQUAL_TO;
                                                        sapoData = SAPODataConnectorOperatorEnum.MULTIPLICATION;
                                                        salesforce = SalesforceConnectorOperatorEnum.NOT_EQUAL_TO;
                                                        serviceNow = ServiceNowConnectorOperatorEnum.LESS_THAN_OR_EQUAL_TO;
                                                        singular = SingularConnectorOperatorEnum.MASK_LAST_N;
                                                        slack = SlackConnectorOperatorEnum.LESS_THAN_OR_EQUAL_TO;
                                                        trendmicro = TrendmicroConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                        veeva = VeevaConnectorOperatorEnum.MULTIPLICATION;
                                                        zendesk = ZendeskConnectorOperatorEnum.MASK_ALL;
                                                    }};
                                                    destinationField = "nemo";
                                                    sourceFields = new String[]{{
                                                        add("esse"),
                                                        add("provident"),
                                                        add("quis"),
                                                        add("eum"),
                                                    }};
                                                    taskProperties = new java.util.HashMap<String, String>() {{
                                                        put("provident", "aspernatur");
                                                        put("ullam", "quasi");
                                                        put("animi", "nostrum");
                                                        put("mollitia", "provident");
                                                    }};
                                                    taskType = TaskTypeEnum.VALIDATE;
                                                }}),
                                                add(new Task(                new String[]{{
                                                                    add("sapiente"),
                                                                }}, TaskTypeEnum.MASK) {{
                                                    connectorOperator = new ConnectorOperator() {{
                                                        amplitude = AmplitudeConnectorOperatorEnum.BETWEEN;
                                                        customConnector = OperatorEnum.NO_OP;
                                                        datadog = DatadogConnectorOperatorEnum.DIVISION;
                                                        dynatrace = DynatraceConnectorOperatorEnum.SUBTRACTION;
                                                        googleAnalytics = GoogleAnalyticsConnectorOperatorEnum.BETWEEN;
                                                        inforNexus = InforNexusConnectorOperatorEnum.NO_OP;
                                                        marketo = MarketoConnectorOperatorEnum.MASK_LAST_N;
                                                        pardot = PardotConnectorOperatorEnum.MASK_LAST_N;
                                                        s3 = S3ConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                        sapoData = SAPODataConnectorOperatorEnum.LESS_THAN_OR_EQUAL_TO;
                                                        salesforce = SalesforceConnectorOperatorEnum.NO_OP;
                                                        serviceNow = ServiceNowConnectorOperatorEnum.DIVISION;
                                                        singular = SingularConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                        slack = SlackConnectorOperatorEnum.NO_OP;
                                                        trendmicro = TrendmicroConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                        veeva = VeevaConnectorOperatorEnum.GREATER_THAN;
                                                        zendesk = ZendeskConnectorOperatorEnum.VALIDATE_NON_NULL;
                                                    }};
                                                    destinationField = "tempora";
                                                    sourceFields = new String[]{{
                                                        add("inventore"),
                                                        add("fugit"),
                                                    }};
                                                    taskProperties = new java.util.HashMap<String, String>() {{
                                                        put("quae", "perferendis");
                                                        put("velit", "aspernatur");
                                                        put("eum", "eius");
                                                        put("rem", "at");
                                                    }};
                                                    taskType = TaskTypeEnum.TRUNCATE;
                                                }}),
                                                add(new Task(                new String[]{{
                                                                    add("occaecati"),
                                                                    add("suscipit"),
                                                                    add("adipisci"),
                                                                }}, TaskTypeEnum.ARITHMETIC) {{
                                                    connectorOperator = new ConnectorOperator() {{
                                                        amplitude = AmplitudeConnectorOperatorEnum.BETWEEN;
                                                        customConnector = OperatorEnum.GREATER_THAN;
                                                        datadog = DatadogConnectorOperatorEnum.MULTIPLICATION;
                                                        dynatrace = DynatraceConnectorOperatorEnum.BETWEEN;
                                                        googleAnalytics = GoogleAnalyticsConnectorOperatorEnum.BETWEEN;
                                                        inforNexus = InforNexusConnectorOperatorEnum.MASK_FIRST_N;
                                                        marketo = MarketoConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                        pardot = PardotConnectorOperatorEnum.VALIDATE_NON_NULL;
                                                        s3 = S3ConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                        sapoData = SAPODataConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                        salesforce = SalesforceConnectorOperatorEnum.LESS_THAN;
                                                        serviceNow = ServiceNowConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                        singular = SingularConnectorOperatorEnum.MASK_LAST_N;
                                                        slack = SlackConnectorOperatorEnum.NO_OP;
                                                        trendmicro = TrendmicroConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                        veeva = VeevaConnectorOperatorEnum.NOT_EQUAL_TO;
                                                        zendesk = ZendeskConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                    }};
                                                    destinationField = "suscipit";
                                                    sourceFields = new String[]{{
                                                        add("fugit"),
                                                    }};
                                                    taskProperties = new java.util.HashMap<String, String>() {{
                                                        put("fuga", "ratione");
                                                        put("animi", "necessitatibus");
                                                        put("nulla", "consequatur");
                                                        put("quasi", "et");
                                                    }};
                                                    taskType = TaskTypeEnum.MASK;
                                                }}),
                                            }},                 new CreateFlowRequestBodyTriggerConfig() {{
                                                triggerProperties = new TriggerProperties() {{
                                                    scheduled = new ScheduledTriggerProperties("magni") {{
                                                        dataPullMode = DataPullModeEnum.COMPLETE;
                                                        firstExecutionFrom = OffsetDateTime.parse("2020-04-24T05:50:40.136Z");
                                                        flowErrorDeactivationThreshold = 58534L;
                                                        scheduleEndTime = OffsetDateTime.parse("2022-07-13T05:21:38.727Z");
                                                        scheduleOffset = 473190L;
                                                        scheduleStartTime = OffsetDateTime.parse("2022-07-09T21:21:21.316Z");
                                                        timezone = "esse";
                                                    }};;
                                                }};;
                                                triggerType = TriggerTypeEnum.EVENT;
                                            }};) {{
                                clientToken = "maiores";
                                description = "reiciendis";
                                kmsArn = "vel";
                                metadataCatalogConfig = new CreateFlowRequestBodyMetadataCatalogConfig() {{
                                    glueDataCatalog = new GlueDataCatalogConfig("architecto", "fugiat", "doloremque");;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("odio", "tempora");
                                }};
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ex";
                xAmzCredential = "consectetur";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "sunt";
            }};            

            CreateFlowResponse res = sdk.sdk.createFlow(req);

            if (res.createFlowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectorProfile

 Enables you to delete an existing connector profile. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectorProfileRequest;
import org.openapis.openapi.models.operations.DeleteConnectorProfileRequestBody;
import org.openapis.openapi.models.operations.DeleteConnectorProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectorProfileRequest req = new DeleteConnectorProfileRequest(                new DeleteConnectorProfileRequestBody("fugiat") {{
                                forceDelete = false;
                            }};) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "officia";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "eum";
            }};            

            DeleteConnectorProfileResponse res = sdk.sdk.deleteConnectorProfile(req);

            if (res.deleteConnectorProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFlow

 Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFlowRequest;
import org.openapis.openapi.models.operations.DeleteFlowRequestBody;
import org.openapis.openapi.models.operations.DeleteFlowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFlowRequest req = new DeleteFlowRequest(                new DeleteFlowRequestBody("iste") {{
                                forceDelete = false;
                            }};) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "ab";
                xAmzCredential = "error";
                xAmzDate = "possimus";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteFlowResponse res = sdk.sdk.deleteFlow(req);

            if (res.deleteFlowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnector

Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectorRequest;
import org.openapis.openapi.models.operations.DescribeConnectorRequestBody;
import org.openapis.openapi.models.operations.DescribeConnectorRequestBodyConnectorTypeEnum;
import org.openapis.openapi.models.operations.DescribeConnectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectorRequest req = new DescribeConnectorRequest(                new DescribeConnectorRequestBody(DescribeConnectorRequestBodyConnectorTypeEnum.ZENDESK) {{
                                connectorLabel = "deleniti";
                            }};) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "repellendus";
                xAmzDate = "ex";
                xAmzSecurityToken = "quo";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "ut";
            }};            

            DescribeConnectorResponse res = sdk.sdk.describeConnector(req);

            if (res.describeConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnectorEntity

 Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectorEntityRequest;
import org.openapis.openapi.models.operations.DescribeConnectorEntityRequestBody;
import org.openapis.openapi.models.operations.DescribeConnectorEntityRequestBodyConnectorTypeEnum;
import org.openapis.openapi.models.operations.DescribeConnectorEntityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectorEntityRequest req = new DescribeConnectorEntityRequest(                new DescribeConnectorEntityRequestBody("expedita") {{
                                apiVersion = "voluptatem";
                                connectorProfileName = "molestias";
                                connectorType = DescribeConnectorEntityRequestBodyConnectorTypeEnum.LOOKOUT_METRICS;
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "voluptatum";
                xAmzDate = "omnis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "est";
            }};            

            DescribeConnectorEntityResponse res = sdk.sdk.describeConnectorEntity(req);

            if (res.describeConnectorEntityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnectorProfiles

<p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectorProfilesRequest;
import org.openapis.openapi.models.operations.DescribeConnectorProfilesRequestBody;
import org.openapis.openapi.models.operations.DescribeConnectorProfilesRequestBodyConnectorTypeEnum;
import org.openapis.openapi.models.operations.DescribeConnectorProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectorProfilesRequest req = new DescribeConnectorProfilesRequest(                new DescribeConnectorProfilesRequestBody() {{
                                connectorLabel = "voluptatem";
                                connectorProfileNames = new String[]{{
                                    add("officiis"),
                                    add("architecto"),
                                    add("fuga"),
                                    add("pariatur"),
                                }};
                                connectorType = DescribeConnectorProfilesRequestBodyConnectorTypeEnum.SAPO_DATA;
                                maxResults = 29190L;
                                nextToken = "alias";
                            }};) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "earum";
                xAmzCredential = "ex";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "rem";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "nemo";
                maxResults = "asperiores";
                nextToken = "ratione";
            }};            

            DescribeConnectorProfilesResponse res = sdk.sdk.describeConnectorProfiles(req);

            if (res.describeConnectorProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnectors

 Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectorsRequest;
import org.openapis.openapi.models.operations.DescribeConnectorsRequestBody;
import org.openapis.openapi.models.operations.DescribeConnectorsResponse;
import org.openapis.openapi.models.shared.ConnectorTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectorsRequest req = new DescribeConnectorsRequest(                new DescribeConnectorsRequestBody() {{
                                connectorTypes = new org.openapis.openapi.models.shared.ConnectorTypeEnum[]{{
                                    add(ConnectorTypeEnum.CUSTOMER_PROFILES),
                                }};
                                maxResults = 518150L;
                                nextToken = "impedit";
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "ipsam";
                xAmzDate = "culpa";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "inventore";
                maxResults = "deleniti";
                nextToken = "veritatis";
            }};            

            DescribeConnectorsResponse res = sdk.sdk.describeConnectors(req);

            if (res.describeConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFlow

 Provides a description of the specified flow. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFlowRequest;
import org.openapis.openapi.models.operations.DescribeFlowRequestBody;
import org.openapis.openapi.models.operations.DescribeFlowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFlowRequest req = new DescribeFlowRequest(                new DescribeFlowRequestBody("dolor");) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "sit";
                xAmzDate = "modi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "laudantium";
            }};            

            DescribeFlowResponse res = sdk.sdk.describeFlow(req);

            if (res.describeFlowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFlowExecutionRecords

 Fetches the execution history of the flow. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFlowExecutionRecordsRequest;
import org.openapis.openapi.models.operations.DescribeFlowExecutionRecordsRequestBody;
import org.openapis.openapi.models.operations.DescribeFlowExecutionRecordsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFlowExecutionRecordsRequest req = new DescribeFlowExecutionRecordsRequest(                new DescribeFlowExecutionRecordsRequestBody("dolor") {{
                                maxResults = 856277L;
                                nextToken = "ipsam";
                            }};) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "quas";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "esse";
                maxResults = "necessitatibus";
                nextToken = "sed";
            }};            

            DescribeFlowExecutionRecordsResponse res = sdk.sdk.describeFlowExecutionRecords(req);

            if (res.describeFlowExecutionRecordsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectorEntities

 Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectorEntitiesRequest;
import org.openapis.openapi.models.operations.ListConnectorEntitiesRequestBody;
import org.openapis.openapi.models.operations.ListConnectorEntitiesRequestBodyConnectorTypeEnum;
import org.openapis.openapi.models.operations.ListConnectorEntitiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectorEntitiesRequest req = new ListConnectorEntitiesRequest(                new ListConnectorEntitiesRequestBody() {{
                                apiVersion = "nesciunt";
                                connectorProfileName = "expedita";
                                connectorType = ListConnectorEntitiesRequestBodyConnectorTypeEnum.TRENDMICRO;
                                entitiesPath = "vel";
                                maxResults = 528234L;
                                nextToken = "magnam";
                            }};) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "ab";
                xAmzCredential = "porro";
                xAmzDate = "autem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "recusandae";
            }};            

            ListConnectorEntitiesResponse res = sdk.sdk.listConnectorEntities(req);

            if (res.listConnectorEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectors

Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectorsRequest;
import org.openapis.openapi.models.operations.ListConnectorsRequestBody;
import org.openapis.openapi.models.operations.ListConnectorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectorsRequest req = new ListConnectorsRequest(                new ListConnectorsRequestBody() {{
                                maxResults = 28952L;
                                nextToken = "exercitationem";
                            }};) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "nisi";
                xAmzDate = "at";
                xAmzSecurityToken = "vero";
                xAmzSignature = "est";
                xAmzSignedHeaders = "harum";
                maxResults = "sequi";
                nextToken = "doloribus";
            }};            

            ListConnectorsResponse res = sdk.sdk.listConnectors(req);

            if (res.listConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFlows

 Lists all of the flows associated with your account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFlowsRequest;
import org.openapis.openapi.models.operations.ListFlowsRequestBody;
import org.openapis.openapi.models.operations.ListFlowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFlowsRequest req = new ListFlowsRequest(                new ListFlowsRequestBody() {{
                                maxResults = 759283L;
                                nextToken = "occaecati";
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "blanditiis";
                xAmzDate = "officia";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "nemo";
                maxResults = "quos";
                nextToken = "eius";
            }};            

            ListFlowsResponse res = sdk.sdk.listFlows(req);

            if (res.listFlowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 Retrieves the tags that are associated with a specified flow. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("ducimus") {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "laudantium";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fugiat";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerConnector

Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterConnectorRequest;
import org.openapis.openapi.models.operations.RegisterConnectorRequestBody;
import org.openapis.openapi.models.operations.RegisterConnectorRequestBodyConnectorProvisioningConfig;
import org.openapis.openapi.models.operations.RegisterConnectorRequestBodyConnectorProvisioningTypeEnum;
import org.openapis.openapi.models.operations.RegisterConnectorResponse;
import org.openapis.openapi.models.shared.LambdaConnectorProvisioningConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterConnectorRequest req = new RegisterConnectorRequest(                new RegisterConnectorRequestBody() {{
                                clientToken = "nisi";
                                connectorLabel = "consequuntur";
                                connectorProvisioningConfig = new RegisterConnectorRequestBodyConnectorProvisioningConfig() {{
                                    lambda = new LambdaConnectorProvisioningConfig("consectetur");;
                                }};;
                                connectorProvisioningType = RegisterConnectorRequestBodyConnectorProvisioningTypeEnum.LAMBDA;
                                description = "aperiam";
                            }};) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "soluta";
                xAmzDate = "alias";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "occaecati";
            }};            

            RegisterConnectorResponse res = sdk.sdk.registerConnector(req);

            if (res.registerConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startFlow

 Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFlowRequest;
import org.openapis.openapi.models.operations.StartFlowRequestBody;
import org.openapis.openapi.models.operations.StartFlowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFlowRequest req = new StartFlowRequest(                new StartFlowRequestBody("magni") {{
                                clientToken = "inventore";
                            }};) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "voluptatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "minima";
            }};            

            StartFlowResponse res = sdk.sdk.startFlow(req);

            if (res.startFlowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopFlow

 Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopFlowRequest;
import org.openapis.openapi.models.operations.StopFlowRequestBody;
import org.openapis.openapi.models.operations.StopFlowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopFlowRequest req = new StopFlowRequest(                new StopFlowRequestBody("maxime");) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "quos";
                xAmzDate = "commodi";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "totam";
            }};            

            StopFlowResponse res = sdk.sdk.stopFlow(req);

            if (res.stopFlowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 Applies a tag to the specified flow. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("nam", "vero");
                                                put("voluptatem", "ipsam");
                                            }});, "vel") {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "non";
                xAmzDate = "maiores";
                xAmzSecurityToken = "enim";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "nulla";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unregisterConnector

Unregisters the custom connector registered in your account that matches the connector label provided in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnregisterConnectorRequest;
import org.openapis.openapi.models.operations.UnregisterConnectorRequestBody;
import org.openapis.openapi.models.operations.UnregisterConnectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnregisterConnectorRequest req = new UnregisterConnectorRequest(                new UnregisterConnectorRequestBody("esse") {{
                                forceDelete = false;
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "est";
                xAmzDate = "quis";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "impedit";
            }};            

            UnregisterConnectorResponse res = sdk.sdk.unregisterConnector(req);

            if (res.unregisterConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

 Removes a tag from the specified flow. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("necessitatibus",                 new String[]{{
                                add("ex"),
                                add("voluptas"),
                                add("debitis"),
                                add("delectus"),
                            }}) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "fuga";
                xAmzDate = "laborum";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "atque";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectorProfile

 Updates a given connector profile associated with your account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectorProfileRequest;
import org.openapis.openapi.models.operations.UpdateConnectorProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateConnectorProfileRequestBodyConnectionModeEnum;
import org.openapis.openapi.models.operations.UpdateConnectorProfileRequestBodyConnectorProfileConfig;
import org.openapis.openapi.models.operations.UpdateConnectorProfileResponse;
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
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectorProfileRequest req = new UpdateConnectorProfileRequest(                new UpdateConnectorProfileRequestBody(UpdateConnectorProfileRequestBodyConnectionModeEnum.PRIVATE_,                 new UpdateConnectorProfileRequestBodyConnectorProfileConfig() {{
                                                connectorProfileCredentials = new ConnectorProfileCredentials() {{
                                                    amplitude = new AmplitudeConnectorProfileCredentials("magni", "soluta");;
                                                    customConnector = new CustomConnectorProfileCredentials(AuthenticationTypeEnum.CUSTOM) {{
                                                        apiKey = new ApiKeyCredentials("nam") {{
                                                            apiSecretKey = "dolore";
                                                        }};;
                                                        basic = new BasicAuthCredentials("iusto", "voluptate");;
                                                        custom = new CustomAuthCredentials("sequi") {{
                                                            credentialsMap = new java.util.HashMap<String, String>() {{
                                                                put("neque", "quo");
                                                                put("deleniti", "quibusdam");
                                                            }};
                                                        }};;
                                                        oauth2 = new OAuth2Credentials() {{
                                                            accessToken = "iure";
                                                            clientId = "odit";
                                                            clientSecret = "voluptatibus";
                                                            oAuthRequest = new ConnectorOAuthRequest() {{
                                                                authCode = "vel";
                                                                redirectUri = "magnam";
                                                            }};;
                                                            refreshToken = "quibusdam";
                                                        }};;
                                                    }};;
                                                    datadog = new DatadogConnectorProfileCredentials("inventore", "facere");;
                                                    dynatrace = new DynatraceConnectorProfileCredentials("libero");;
                                                    googleAnalytics = new GoogleAnalyticsConnectorProfileCredentials("architecto", "voluptatibus") {{
                                                        accessToken = "quia";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "porro";
                                                            redirectUri = "aliquam";
                                                        }};;
                                                        refreshToken = "velit";
                                                    }};;
                                                    honeycode = new HoneycodeConnectorProfileCredentials() {{
                                                        accessToken = "illo";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "accusantium";
                                                            redirectUri = "vel";
                                                        }};;
                                                        refreshToken = "ea";
                                                    }};;
                                                    inforNexus = new InforNexusConnectorProfileCredentials("beatae", "vero", "excepturi", "eum");;
                                                    marketo = new MarketoConnectorProfileCredentials("velit", "ut") {{
                                                        accessToken = "perspiciatis";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "earum";
                                                            redirectUri = "dicta";
                                                        }};;
                                                    }};;
                                                    pardot = new PardotConnectorProfileCredentials() {{
                                                        accessToken = "impedit";
                                                        clientCredentialsArn = "voluptatibus";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "iste";
                                                            redirectUri = "itaque";
                                                        }};;
                                                        refreshToken = "alias";
                                                    }};;
                                                    redshift = new RedshiftConnectorProfileCredentials() {{
                                                        password = "nisi";
                                                        username = "Toney.Flatley22";
                                                    }};;
                                                    sapoData = new SAPODataConnectorProfileCredentials() {{
                                                        basicAuthCredentials = new BasicAuthCredentials("iusto", "sit");;
                                                        oAuthCredentials = new OAuthCredentials("doloremque", "consequatur") {{
                                                            accessToken = "officia";
                                                            oAuthRequest = new ConnectorOAuthRequest() {{
                                                                authCode = "recusandae";
                                                                redirectUri = "ea";
                                                            }};;
                                                            refreshToken = "quidem";
                                                        }};;
                                                    }};;
                                                    salesforce = new SalesforceConnectorProfileCredentials() {{
                                                        accessToken = "voluptas";
                                                        clientCredentialsArn = "facilis";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "placeat";
                                                            redirectUri = "perspiciatis";
                                                        }};;
                                                        refreshToken = "expedita";
                                                    }};;
                                                    serviceNow = new ServiceNowConnectorProfileCredentials("deleniti", "a");;
                                                    singular = new SingularConnectorProfileCredentials("voluptate");;
                                                    slack = new SlackConnectorProfileCredentials("ullam", "unde") {{
                                                        accessToken = "necessitatibus";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "animi";
                                                            redirectUri = "impedit";
                                                        }};;
                                                    }};;
                                                    snowflake = new SnowflakeConnectorProfileCredentials("ipsam", "corporis");;
                                                    trendmicro = new TrendmicroConnectorProfileCredentials("est");;
                                                    veeva = new VeevaConnectorProfileCredentials("error", "esse");;
                                                    zendesk = new ZendeskConnectorProfileCredentials("labore", "veritatis") {{
                                                        accessToken = "vero";
                                                        oAuthRequest = new ConnectorOAuthRequest() {{
                                                            authCode = "consectetur";
                                                            redirectUri = "vitae";
                                                        }};;
                                                    }};;
                                                }};;
                                                connectorProfileProperties = new ConnectorProfileProperties() {{
                                                    amplitude = new java.util.HashMap<String, Object>() {{
                                                        put("dolorem", "ad");
                                                    }};
                                                    customConnector = new CustomConnectorProfileProperties() {{
                                                        oAuth2Properties = new OAuth2Properties(OAuth2GrantTypeEnum.CLIENT_CREDENTIALS, "iste") {{
                                                            tokenUrlCustomProperties = new java.util.HashMap<String, String>() {{
                                                                put("nemo", "soluta");
                                                                put("libero", "rem");
                                                            }};
                                                        }};;
                                                        profileProperties = new java.util.HashMap<String, String>() {{
                                                            put("odio", "fugit");
                                                            put("alias", "magni");
                                                            put("vel", "quae");
                                                        }};
                                                    }};;
                                                    datadog = new DatadogConnectorProfileProperties("quae");;
                                                    dynatrace = new DynatraceConnectorProfileProperties("modi");;
                                                    googleAnalytics = new java.util.HashMap<String, Object>() {{
                                                        put("exercitationem", "itaque");
                                                    }};
                                                    honeycode = new java.util.HashMap<String, Object>() {{
                                                        put("ipsum", "unde");
                                                    }};
                                                    inforNexus = new InforNexusConnectorProfileProperties("nulla");;
                                                    marketo = new MarketoConnectorProfileProperties("distinctio");;
                                                    pardot = new PardotConnectorProfileProperties() {{
                                                        businessUnitId = "maxime";
                                                        instanceUrl = "quia";
                                                        isSandboxEnvironment = false;
                                                    }};;
                                                    redshift = new RedshiftConnectorProfileProperties("quia", "nostrum") {{
                                                        bucketPrefix = "omnis";
                                                        clusterIdentifier = "libero";
                                                        dataApiRoleArn = "dicta";
                                                        databaseName = "id";
                                                        databaseUrl = "libero";
                                                        isRedshiftServerless = false;
                                                        workgroupName = "fugiat";
                                                    }};;
                                                    sapoData = new SAPODataConnectorProfileProperties("officia", "quos", "placeat", 25756L) {{
                                                        logonLanguage = "iusto";
                                                        oAuthProperties = new OAuthProperties("ipsa",                 new String[]{{
                                                                            add("inventore"),
                                                                            add("aperiam"),
                                                                            add("totam"),
                                                                            add("dolore"),
                                                                        }}, "eligendi");;
                                                        privateLinkServiceName = "distinctio";
                                                    }};;
                                                    salesforce = new SalesforceConnectorProfileProperties() {{
                                                        instanceUrl = "voluptatem";
                                                        isSandboxEnvironment = false;
                                                        usePrivateLinkForMetadataAndAuthorization = false;
                                                    }};;
                                                    serviceNow = new ServiceNowConnectorProfileProperties("autem");;
                                                    singular = new java.util.HashMap<String, Object>() {{
                                                        put("dolores", "assumenda");
                                                        put("beatae", "est");
                                                    }};
                                                    slack = new SlackConnectorProfileProperties("facere");;
                                                    snowflake = new SnowflakeConnectorProfileProperties("corrupti", "molestiae", "provident") {{
                                                        accountName = "accusamus";
                                                        bucketPrefix = "necessitatibus";
                                                        privateLinkServiceName = "tempore";
                                                        region = "sint";
                                                    }};;
                                                    trendmicro = new java.util.HashMap<String, Object>() {{
                                                        put("autem", "ipsam");
                                                        put("rerum", "laudantium");
                                                    }};
                                                    veeva = new VeevaConnectorProfileProperties("corporis");;
                                                    zendesk = new ZendeskConnectorProfileProperties("officiis");;
                                                }};;
                                            }};, "voluptatibus") {{
                                clientToken = "cum";
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "alias";
                xAmzCredential = "quia";
                xAmzDate = "quidem";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "accusantium";
            }};            

            UpdateConnectorProfileResponse res = sdk.sdk.updateConnectorProfile(req);

            if (res.updateConnectorProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectorRegistration

<p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectorRegistrationRequest;
import org.openapis.openapi.models.operations.UpdateConnectorRegistrationRequestBody;
import org.openapis.openapi.models.operations.UpdateConnectorRegistrationRequestBodyConnectorProvisioningConfig;
import org.openapis.openapi.models.operations.UpdateConnectorRegistrationResponse;
import org.openapis.openapi.models.shared.LambdaConnectorProvisioningConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectorRegistrationRequest req = new UpdateConnectorRegistrationRequest(                new UpdateConnectorRegistrationRequestBody("officiis") {{
                                clientToken = "eos";
                                connectorProvisioningConfig = new UpdateConnectorRegistrationRequestBodyConnectorProvisioningConfig() {{
                                    lambda = new LambdaConnectorProvisioningConfig("quibusdam");;
                                }};;
                                description = "odio";
                            }};) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "odit";
                xAmzCredential = "explicabo";
                xAmzDate = "corporis";
                xAmzSecurityToken = "error";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "adipisci";
            }};            

            UpdateConnectorRegistrationResponse res = sdk.sdk.updateConnectorRegistration(req);

            if (res.updateConnectorRegistrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFlow

 Updates an existing flow. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFlowRequest;
import org.openapis.openapi.models.operations.UpdateFlowRequestBody;
import org.openapis.openapi.models.operations.UpdateFlowRequestBodyMetadataCatalogConfig;
import org.openapis.openapi.models.operations.UpdateFlowRequestBodySourceFlowConfig;
import org.openapis.openapi.models.operations.UpdateFlowRequestBodyTriggerConfig;
import org.openapis.openapi.models.operations.UpdateFlowResponse;
import org.openapis.openapi.models.shared.AggregationConfig;
import org.openapis.openapi.models.shared.AggregationTypeEnum;
import org.openapis.openapi.models.shared.AmplitudeConnectorOperatorEnum;
import org.openapis.openapi.models.shared.AmplitudeSourceProperties;
import org.openapis.openapi.models.shared.ConnectorOperator;
import org.openapis.openapi.models.shared.ConnectorTypeEnum;
import org.openapis.openapi.models.shared.CustomConnectorDestinationProperties;
import org.openapis.openapi.models.shared.CustomConnectorSourceProperties;
import org.openapis.openapi.models.shared.CustomerProfilesDestinationProperties;
import org.openapis.openapi.models.shared.DataPullModeEnum;
import org.openapis.openapi.models.shared.DatadogConnectorOperatorEnum;
import org.openapis.openapi.models.shared.DatadogSourceProperties;
import org.openapis.openapi.models.shared.DestinationConnectorProperties;
import org.openapis.openapi.models.shared.DestinationFlowConfig;
import org.openapis.openapi.models.shared.DynatraceConnectorOperatorEnum;
import org.openapis.openapi.models.shared.DynatraceSourceProperties;
import org.openapis.openapi.models.shared.ErrorHandlingConfig;
import org.openapis.openapi.models.shared.EventBridgeDestinationProperties;
import org.openapis.openapi.models.shared.FileTypeEnum;
import org.openapis.openapi.models.shared.GlueDataCatalogConfig;
import org.openapis.openapi.models.shared.GoogleAnalyticsConnectorOperatorEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsSourceProperties;
import org.openapis.openapi.models.shared.HoneycodeDestinationProperties;
import org.openapis.openapi.models.shared.IncrementalPullConfig;
import org.openapis.openapi.models.shared.InforNexusConnectorOperatorEnum;
import org.openapis.openapi.models.shared.InforNexusSourceProperties;
import org.openapis.openapi.models.shared.MarketoConnectorOperatorEnum;
import org.openapis.openapi.models.shared.MarketoDestinationProperties;
import org.openapis.openapi.models.shared.MarketoSourceProperties;
import org.openapis.openapi.models.shared.OperatorEnum;
import org.openapis.openapi.models.shared.PardotConnectorOperatorEnum;
import org.openapis.openapi.models.shared.PardotSourceProperties;
import org.openapis.openapi.models.shared.PathPrefixEnum;
import org.openapis.openapi.models.shared.PrefixConfig;
import org.openapis.openapi.models.shared.PrefixFormatEnum;
import org.openapis.openapi.models.shared.PrefixTypeEnum;
import org.openapis.openapi.models.shared.RedshiftDestinationProperties;
import org.openapis.openapi.models.shared.S3ConnectorOperatorEnum;
import org.openapis.openapi.models.shared.S3DestinationProperties;
import org.openapis.openapi.models.shared.S3InputFileTypeEnum;
import org.openapis.openapi.models.shared.S3InputFormatConfig;
import org.openapis.openapi.models.shared.S3OutputFormatConfig;
import org.openapis.openapi.models.shared.S3SourceProperties;
import org.openapis.openapi.models.shared.SAPODataConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SAPODataDestinationProperties;
import org.openapis.openapi.models.shared.SAPODataSourceProperties;
import org.openapis.openapi.models.shared.SalesforceConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SalesforceDataTransferApiEnum;
import org.openapis.openapi.models.shared.SalesforceDestinationProperties;
import org.openapis.openapi.models.shared.SalesforceSourceProperties;
import org.openapis.openapi.models.shared.ScheduledTriggerProperties;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNowConnectorOperatorEnum;
import org.openapis.openapi.models.shared.ServiceNowSourceProperties;
import org.openapis.openapi.models.shared.SingularConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SingularSourceProperties;
import org.openapis.openapi.models.shared.SlackConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SlackSourceProperties;
import org.openapis.openapi.models.shared.SnowflakeDestinationProperties;
import org.openapis.openapi.models.shared.SourceConnectorProperties;
import org.openapis.openapi.models.shared.SuccessResponseHandlingConfig;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskTypeEnum;
import org.openapis.openapi.models.shared.TrendmicroConnectorOperatorEnum;
import org.openapis.openapi.models.shared.TrendmicroSourceProperties;
import org.openapis.openapi.models.shared.TriggerProperties;
import org.openapis.openapi.models.shared.TriggerTypeEnum;
import org.openapis.openapi.models.shared.UpsolverDestinationProperties;
import org.openapis.openapi.models.shared.UpsolverS3OutputFormatConfig;
import org.openapis.openapi.models.shared.VeevaConnectorOperatorEnum;
import org.openapis.openapi.models.shared.VeevaSourceProperties;
import org.openapis.openapi.models.shared.WriteOperationTypeEnum;
import org.openapis.openapi.models.shared.ZendeskConnectorOperatorEnum;
import org.openapis.openapi.models.shared.ZendeskDestinationProperties;
import org.openapis.openapi.models.shared.ZendeskSourceProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFlowRequest req = new UpdateFlowRequest(                new UpdateFlowRequestBody(                new org.openapis.openapi.models.shared.DestinationFlowConfig[]{{
                                                add(new DestinationFlowConfig(ConnectorTypeEnum.ZENDESK,                 new DestinationConnectorProperties() {{
                                                                    customConnector = new CustomConnectorDestinationProperties("hic") {{
                                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                                            put("quas", "totam");
                                                                            put("molestias", "odio");
                                                                            put("eaque", "saepe");
                                                                        }};
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "architecto";
                                                                            bucketPrefix = "quos";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("assumenda"),
                                                                            add("tempore"),
                                                                            add("libero"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.INSERT;
                                                                    }};;
                                                                    customerProfiles = new CustomerProfilesDestinationProperties("doloremque") {{
                                                                        objectTypeName = "delectus";
                                                                    }};;
                                                                    eventBridge = new EventBridgeDestinationProperties("impedit") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "cum";
                                                                            bucketPrefix = "ipsum";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    honeycode = new HoneycodeDestinationProperties("adipisci") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "saepe";
                                                                            bucketPrefix = "deserunt";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                                        put("quis", "veniam");
                                                                    }};
                                                                    marketo = new MarketoDestinationProperties("libero") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "architecto";
                                                                            bucketPrefix = "cupiditate";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    redshift = new RedshiftDestinationProperties("molestiae", "eligendi") {{
                                                                        bucketPrefix = "possimus";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "non";
                                                                            bucketPrefix = "magnam";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    s3 = new S3DestinationProperties("itaque") {{
                                                                        bucketPrefix = "sed";
                                                                        s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                targetFileSize = 330267L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.CSV;
                                                                            prefixConfig = new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MONTH;
                                                                                prefixType = PrefixTypeEnum.FILENAME;
                                                                            }};;
                                                                            preserveSourceDataTyping = false;
                                                                        }};;
                                                                    }};;
                                                                    sapoData = new SAPODataDestinationProperties("velit") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "facilis";
                                                                            bucketPrefix = "tempore";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("voluptatibus"),
                                                                            add("quaerat"),
                                                                        }};
                                                                        successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                            bucketName = "blanditiis";
                                                                            bucketPrefix = "distinctio";
                                                                        }};;
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                    salesforce = new SalesforceDestinationProperties("quis") {{
                                                                        dataTransferApi = SalesforceDataTransferApiEnum.BULKV2;
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "libero";
                                                                            bucketPrefix = "minus";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("facilis"),
                                                                            add("ipsum"),
                                                                            add("ad"),
                                                                            add("voluptatibus"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.DELETE;
                                                                    }};;
                                                                    snowflake = new SnowflakeDestinationProperties("consequuntur", "debitis") {{
                                                                        bucketPrefix = "labore";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "rerum";
                                                                            bucketPrefix = "eos";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    upsolver = new UpsolverDestinationProperties("reprehenderit",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                                        pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                        }};
                                                                                                        prefixFormat = PrefixFormatEnum.HOUR;
                                                                                                        prefixType = PrefixTypeEnum.PATH;
                                                                                                    }};) {{
                                                                                        aggregationConfig = new AggregationConfig() {{
                                                                                            aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                            targetFileSize = 853606L;
                                                                                        }};;
                                                                                        fileType = FileTypeEnum.JSON;
                                                                                    }};) {{
                                                                        bucketPrefix = "officiis";
                                                                    }};;
                                                                    zendesk = new ZendeskDestinationProperties("ducimus") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "dolor";
                                                                            bucketPrefix = "dicta";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("porro"),
                                                                            add("vitae"),
                                                                            add("dignissimos"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                }};) {{
                                                    apiVersion = "ut";
                                                    connectorProfileName = "quidem";
                                                    connectorType = ConnectorTypeEnum.SERVICENOW;
                                                    destinationConnectorProperties = new DestinationConnectorProperties() {{
                                                        customConnector = new CustomConnectorDestinationProperties("officia") {{
                                                            customProperties = new java.util.HashMap<String, String>() {{
                                                                put("unde", "molestiae");
                                                            }};
                                                            entityName = "delectus";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "cupiditate";
                                                                bucketPrefix = "fugit";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("numquam"),
                                                                add("nesciunt"),
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.DELETE;
                                                        }};
                                                        customerProfiles = new CustomerProfilesDestinationProperties("necessitatibus") {{
                                                            domainName = "dignissimos";
                                                            objectTypeName = "optio";
                                                        }};
                                                        eventBridge = new EventBridgeDestinationProperties("voluptatum") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "corporis";
                                                                bucketPrefix = "qui";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "expedita";
                                                        }};
                                                        honeycode = new HoneycodeDestinationProperties("enim") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "cupiditate";
                                                                bucketPrefix = "minima";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "placeat";
                                                        }};
                                                        lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                            put("in", "minus");
                                                        }};
                                                        marketo = new MarketoDestinationProperties("magnam") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "eum";
                                                                bucketPrefix = "modi";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "corporis";
                                                        }};
                                                        redshift = new RedshiftDestinationProperties("ratione", "labore") {{
                                                            bucketPrefix = "voluptates";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "maiores";
                                                                bucketPrefix = "tempore";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "aperiam";
                                                            object = "libero";
                                                        }};
                                                        s3 = new S3DestinationProperties("vero") {{
                                                            bucketName = "totam";
                                                            bucketPrefix = "occaecati";
                                                            s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.NONE;
                                                                    targetFileSize = 779180L;
                                                                }};
                                                                fileType = FileTypeEnum.CSV;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.MINUTE;
                                                                    prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                }};
                                                                preserveSourceDataTyping = false;
                                                            }};
                                                        }};
                                                        sapoData = new SAPODataDestinationProperties("dolores") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "odit";
                                                                bucketPrefix = "repellat";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("nemo"),
                                                                add("reprehenderit"),
                                                                add("aperiam"),
                                                                add("odio"),
                                                            }};
                                                            objectPath = "minima";
                                                            successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                bucketName = "in";
                                                                bucketPrefix = "ducimus";
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                        }};
                                                        salesforce = new SalesforceDestinationProperties("ex") {{
                                                            dataTransferApi = SalesforceDataTransferApiEnum.BULKV2;
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "veritatis";
                                                                bucketPrefix = "ducimus";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("pariatur"),
                                                                add("itaque"),
                                                            }};
                                                            object = "similique";
                                                            writeOperationType = WriteOperationTypeEnum.DELETE;
                                                        }};
                                                        snowflake = new SnowflakeDestinationProperties("exercitationem", "quam") {{
                                                            bucketPrefix = "quaerat";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "commodi";
                                                                bucketPrefix = "officiis";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "placeat";
                                                            object = "quidem";
                                                        }};
                                                        upsolver = new UpsolverDestinationProperties("necessitatibus",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                            pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                add(PathPrefixEnum.EXECUTION_ID),
                                                                                                add(PathPrefixEnum.EXECUTION_ID),
                                                                                                add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                            }};
                                                                                            prefixFormat = PrefixFormatEnum.YEAR;
                                                                                            prefixType = PrefixTypeEnum.FILENAME;
                                                                                        }};) {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.NONE;
                                                                                targetFileSize = 863471L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.PARQUET;
                                                                        }};) {{
                                                            bucketName = "dolorem";
                                                            bucketPrefix = "modi";
                                                            s3OutputFormatConfig = new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.YEAR;
                                                                                prefixType = PrefixTypeEnum.FILENAME;
                                                                            }};) {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.NONE;
                                                                    targetFileSize = 575534L;
                                                                }};
                                                                fileType = FileTypeEnum.PARQUET;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.HOUR;
                                                                    prefixType = PrefixTypeEnum.FILENAME;
                                                                }};
                                                            }};
                                                        }};
                                                        zendesk = new ZendeskDestinationProperties("sint") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "excepturi";
                                                                bucketPrefix = "occaecati";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("aliquam"),
                                                                add("nostrum"),
                                                            }};
                                                            object = "doloribus";
                                                            writeOperationType = WriteOperationTypeEnum.DELETE;
                                                        }};
                                                    }};
                                                }}),
                                                add(new DestinationFlowConfig(ConnectorTypeEnum.AMPLITUDE,                 new DestinationConnectorProperties() {{
                                                                    customConnector = new CustomConnectorDestinationProperties("temporibus") {{
                                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                                            put("amet", "tenetur");
                                                                            put("aspernatur", "quo");
                                                                            put("itaque", "illum");
                                                                        }};
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "laborum";
                                                                            bucketPrefix = "dignissimos";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("qui"),
                                                                            add("consectetur"),
                                                                            add("repellat"),
                                                                            add("explicabo"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.INSERT;
                                                                    }};;
                                                                    customerProfiles = new CustomerProfilesDestinationProperties("exercitationem") {{
                                                                        objectTypeName = "nihil";
                                                                    }};;
                                                                    eventBridge = new EventBridgeDestinationProperties("non") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "ab";
                                                                            bucketPrefix = "illo";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    honeycode = new HoneycodeDestinationProperties("hic") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "deserunt";
                                                                            bucketPrefix = "delectus";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                                        put("distinctio", "in");
                                                                        put("exercitationem", "labore");
                                                                    }};
                                                                    marketo = new MarketoDestinationProperties("numquam") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "repudiandae";
                                                                            bucketPrefix = "modi";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    redshift = new RedshiftDestinationProperties("in", "explicabo") {{
                                                                        bucketPrefix = "accusamus";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "rem";
                                                                            bucketPrefix = "aperiam";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    s3 = new S3DestinationProperties("odit") {{
                                                                        bucketPrefix = "deleniti";
                                                                        s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.NONE;
                                                                                targetFileSize = 452730L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.JSON;
                                                                            prefixConfig = new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.YEAR;
                                                                                prefixType = PrefixTypeEnum.FILENAME;
                                                                            }};;
                                                                            preserveSourceDataTyping = false;
                                                                        }};;
                                                                    }};;
                                                                    sapoData = new SAPODataDestinationProperties("eum") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "nesciunt";
                                                                            bucketPrefix = "mollitia";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("fugiat"),
                                                                            add("nostrum"),
                                                                        }};
                                                                        successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                            bucketName = "molestiae";
                                                                            bucketPrefix = "veniam";
                                                                        }};;
                                                                        writeOperationType = WriteOperationTypeEnum.DELETE;
                                                                    }};;
                                                                    salesforce = new SalesforceDestinationProperties("ab") {{
                                                                        dataTransferApi = SalesforceDataTransferApiEnum.AUTOMATIC;
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "aut";
                                                                            bucketPrefix = "aut";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("odio"),
                                                                            add("commodi"),
                                                                            add("numquam"),
                                                                            add("dolorum"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.DELETE;
                                                                    }};;
                                                                    snowflake = new SnowflakeDestinationProperties("voluptate", "consectetur") {{
                                                                        bucketPrefix = "nesciunt";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "quaerat";
                                                                            bucketPrefix = "itaque";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    upsolver = new UpsolverDestinationProperties("minus",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                                        pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                        }};
                                                                                                        prefixFormat = PrefixFormatEnum.DAY;
                                                                                                        prefixType = PrefixTypeEnum.PATH;
                                                                                                    }};) {{
                                                                                        aggregationConfig = new AggregationConfig() {{
                                                                                            aggregationType = AggregationTypeEnum.NONE;
                                                                                            targetFileSize = 704948L;
                                                                                        }};;
                                                                                        fileType = FileTypeEnum.CSV;
                                                                                    }};) {{
                                                                        bucketPrefix = "autem";
                                                                    }};;
                                                                    zendesk = new ZendeskDestinationProperties("fuga") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "alias";
                                                                            bucketPrefix = "rem";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("quos"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                                    }};;
                                                                }};) {{
                                                    apiVersion = "fugiat";
                                                    connectorProfileName = "ad";
                                                    connectorType = ConnectorTypeEnum.REDSHIFT;
                                                    destinationConnectorProperties = new DestinationConnectorProperties() {{
                                                        customConnector = new CustomConnectorDestinationProperties("earum") {{
                                                            customProperties = new java.util.HashMap<String, String>() {{
                                                                put("delectus", "iusto");
                                                                put("dignissimos", "libero");
                                                            }};
                                                            entityName = "illo";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "ab";
                                                                bucketPrefix = "incidunt";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("saepe"),
                                                                add("tempore"),
                                                                add("veniam"),
                                                                add("eos"),
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.DELETE;
                                                        }};
                                                        customerProfiles = new CustomerProfilesDestinationProperties("nemo") {{
                                                            domainName = "reprehenderit";
                                                            objectTypeName = "praesentium";
                                                        }};
                                                        eventBridge = new EventBridgeDestinationProperties("nihil") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "repellat";
                                                                bucketPrefix = "quisquam";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "sequi";
                                                        }};
                                                        honeycode = new HoneycodeDestinationProperties("assumenda") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "deleniti";
                                                                bucketPrefix = "illo";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "labore";
                                                        }};
                                                        lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                            put("quisquam", "provident");
                                                            put("laudantium", "repudiandae");
                                                        }};
                                                        marketo = new MarketoDestinationProperties("nam") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "consequatur";
                                                                bucketPrefix = "maxime";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "aspernatur";
                                                        }};
                                                        redshift = new RedshiftDestinationProperties("dignissimos", "corporis") {{
                                                            bucketPrefix = "expedita";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "quas";
                                                                bucketPrefix = "provident";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "repudiandae";
                                                            object = "rerum";
                                                        }};
                                                        s3 = new S3DestinationProperties("ad") {{
                                                            bucketName = "vero";
                                                            bucketPrefix = "similique";
                                                            s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                    targetFileSize = 434827L;
                                                                }};
                                                                fileType = FileTypeEnum.CSV;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.YEAR;
                                                                    prefixType = PrefixTypeEnum.FILENAME;
                                                                }};
                                                                preserveSourceDataTyping = false;
                                                            }};
                                                        }};
                                                        sapoData = new SAPODataDestinationProperties("earum") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "quae";
                                                                bucketPrefix = "amet";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("praesentium"),
                                                                add("quidem"),
                                                                add("cum"),
                                                                add("amet"),
                                                            }};
                                                            objectPath = "quasi";
                                                            successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                bucketName = "dicta";
                                                                bucketPrefix = "laudantium";
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                        salesforce = new SalesforceDestinationProperties("molestiae") {{
                                                            dataTransferApi = SalesforceDataTransferApiEnum.BULKV2;
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "amet";
                                                                bucketPrefix = "provident";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("necessitatibus"),
                                                                add("provident"),
                                                                add("repudiandae"),
                                                            }};
                                                            object = "consequatur";
                                                            writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                        }};
                                                        snowflake = new SnowflakeDestinationProperties("accusamus", "eos") {{
                                                            bucketPrefix = "itaque";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "facilis";
                                                                bucketPrefix = "corrupti";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "aperiam";
                                                            object = "sint";
                                                        }};
                                                        upsolver = new UpsolverDestinationProperties("voluptatem",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                            pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                            }};
                                                                                            prefixFormat = PrefixFormatEnum.DAY;
                                                                                            prefixType = PrefixTypeEnum.FILENAME;
                                                                                        }};) {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.NONE;
                                                                                targetFileSize = 998026L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.CSV;
                                                                        }};) {{
                                                            bucketName = "totam";
                                                            bucketPrefix = "dicta";
                                                            s3OutputFormatConfig = new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.HOUR;
                                                                                prefixType = PrefixTypeEnum.PATH;
                                                                            }};) {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.NONE;
                                                                    targetFileSize = 244376L;
                                                                }};
                                                                fileType = FileTypeEnum.CSV;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.MONTH;
                                                                    prefixType = PrefixTypeEnum.PATH;
                                                                }};
                                                            }};
                                                        }};
                                                        zendesk = new ZendeskDestinationProperties("soluta") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "porro";
                                                                bucketPrefix = "provident";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("eligendi"),
                                                            }};
                                                            object = "dignissimos";
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                    }};
                                                }}),
                                                add(new DestinationFlowConfig(ConnectorTypeEnum.ZENDESK,                 new DestinationConnectorProperties() {{
                                                                    customConnector = new CustomConnectorDestinationProperties("quos") {{
                                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                                            put("fugiat", "est");
                                                                            put("delectus", "velit");
                                                                            put("vitae", "nesciunt");
                                                                            put("similique", "illo");
                                                                        }};
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "repellat";
                                                                            bucketPrefix = "nemo";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("possimus"),
                                                                            add("unde"),
                                                                            add("incidunt"),
                                                                            add("explicabo"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                                    }};;
                                                                    customerProfiles = new CustomerProfilesDestinationProperties("cupiditate") {{
                                                                        objectTypeName = "optio";
                                                                    }};;
                                                                    eventBridge = new EventBridgeDestinationProperties("alias") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "quidem";
                                                                            bucketPrefix = "nesciunt";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    honeycode = new HoneycodeDestinationProperties("commodi") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "sapiente";
                                                                            bucketPrefix = "consequuntur";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                                        put("debitis", "officia");
                                                                        put("sint", "ut");
                                                                    }};
                                                                    marketo = new MarketoDestinationProperties("numquam") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "tenetur";
                                                                            bucketPrefix = "adipisci";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    redshift = new RedshiftDestinationProperties("libero", "in") {{
                                                                        bucketPrefix = "minima";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "ex";
                                                                            bucketPrefix = "minus";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    s3 = new S3DestinationProperties("ab") {{
                                                                        bucketPrefix = "beatae";
                                                                        s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                targetFileSize = 392319L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.PARQUET;
                                                                            prefixConfig = new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.HOUR;
                                                                                prefixType = PrefixTypeEnum.FILENAME;
                                                                            }};;
                                                                            preserveSourceDataTyping = false;
                                                                        }};;
                                                                    }};;
                                                                    sapoData = new SAPODataDestinationProperties("architecto") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "qui";
                                                                            bucketPrefix = "aliquid";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("incidunt"),
                                                                        }};
                                                                        successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                            bucketName = "adipisci";
                                                                            bucketPrefix = "praesentium";
                                                                        }};;
                                                                        writeOperationType = WriteOperationTypeEnum.INSERT;
                                                                    }};;
                                                                    salesforce = new SalesforceDestinationProperties("exercitationem") {{
                                                                        dataTransferApi = SalesforceDataTransferApiEnum.REST_SYNC;
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "facilis";
                                                                            bucketPrefix = "impedit";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("nemo"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                                    }};;
                                                                    snowflake = new SnowflakeDestinationProperties("consequuntur", "amet") {{
                                                                        bucketPrefix = "deserunt";
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "modi";
                                                                            bucketPrefix = "veniam";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                    }};;
                                                                    upsolver = new UpsolverDestinationProperties("quod",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                                        pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                            add(PathPrefixEnum.EXECUTION_ID),
                                                                                                            add(PathPrefixEnum.SCHEMA_VERSION),
                                                                                                        }};
                                                                                                        prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                                        prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                                                    }};) {{
                                                                                        aggregationConfig = new AggregationConfig() {{
                                                                                            aggregationType = AggregationTypeEnum.NONE;
                                                                                            targetFileSize = 5315L;
                                                                                        }};;
                                                                                        fileType = FileTypeEnum.JSON;
                                                                                    }};) {{
                                                                        bucketPrefix = "ipsa";
                                                                    }};;
                                                                    zendesk = new ZendeskDestinationProperties("nobis") {{
                                                                        errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                            bucketName = "necessitatibus";
                                                                            bucketPrefix = "quia";
                                                                            failOnFirstDestinationError = false;
                                                                        }};;
                                                                        idFieldNames = new String[]{{
                                                                            add("vel"),
                                                                        }};
                                                                        writeOperationType = WriteOperationTypeEnum.UPDATE;
                                                                    }};;
                                                                }};) {{
                                                    apiVersion = "repellendus";
                                                    connectorProfileName = "veritatis";
                                                    connectorType = ConnectorTypeEnum.SINGULAR;
                                                    destinationConnectorProperties = new DestinationConnectorProperties() {{
                                                        customConnector = new CustomConnectorDestinationProperties("eveniet") {{
                                                            customProperties = new java.util.HashMap<String, String>() {{
                                                                put("saepe", "delectus");
                                                            }};
                                                            entityName = "mollitia";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "nulla";
                                                                bucketPrefix = "officia";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("voluptatem"),
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                        customerProfiles = new CustomerProfilesDestinationProperties("incidunt") {{
                                                            domainName = "hic";
                                                            objectTypeName = "voluptatem";
                                                        }};
                                                        eventBridge = new EventBridgeDestinationProperties("harum") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "qui";
                                                                bucketPrefix = "qui";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "necessitatibus";
                                                        }};
                                                        honeycode = new HoneycodeDestinationProperties("modi") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "explicabo";
                                                                bucketPrefix = "beatae";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "aliquid";
                                                        }};
                                                        lookoutMetrics = new java.util.HashMap<String, Object>() {{
                                                            put("voluptatibus", "molestias");
                                                            put("officia", "libero");
                                                            put("totam", "sequi");
                                                            put("aliquid", "ea");
                                                        }};
                                                        marketo = new MarketoDestinationProperties("velit") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "impedit";
                                                                bucketPrefix = "ducimus";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            object = "odit";
                                                        }};
                                                        redshift = new RedshiftDestinationProperties("accusamus", "doloremque") {{
                                                            bucketPrefix = "reiciendis";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "repellat";
                                                                bucketPrefix = "nulla";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "laborum";
                                                            object = "natus";
                                                        }};
                                                        s3 = new S3DestinationProperties("eligendi") {{
                                                            bucketName = "nisi";
                                                            bucketPrefix = "rerum";
                                                            s3OutputFormatConfig = new S3OutputFormatConfig() {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                    targetFileSize = 913285L;
                                                                }};
                                                                fileType = FileTypeEnum.CSV;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.EXECUTION_ID),
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.YEAR;
                                                                    prefixType = PrefixTypeEnum.PATH_AND_FILENAME;
                                                                }};
                                                                preserveSourceDataTyping = false;
                                                            }};
                                                        }};
                                                        sapoData = new SAPODataDestinationProperties("facilis") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "quae";
                                                                bucketPrefix = "officiis";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("architecto"),
                                                            }};
                                                            objectPath = "enim";
                                                            successResponseHandlingConfig = new SuccessResponseHandlingConfig() {{
                                                                bucketName = "optio";
                                                                bucketPrefix = "rem";
                                                            }};
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                        salesforce = new SalesforceDestinationProperties("modi") {{
                                                            dataTransferApi = SalesforceDataTransferApiEnum.REST_SYNC;
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "a";
                                                                bucketPrefix = "iste";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("quos"),
                                                            }};
                                                            object = "ullam";
                                                            writeOperationType = WriteOperationTypeEnum.UPSERT;
                                                        }};
                                                        snowflake = new SnowflakeDestinationProperties("vero", "doloribus") {{
                                                            bucketPrefix = "itaque";
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "maxime";
                                                                bucketPrefix = "modi";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            intermediateBucketName = "consequuntur";
                                                            object = "assumenda";
                                                        }};
                                                        upsolver = new UpsolverDestinationProperties("neque",                 new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                            pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                                add(PathPrefixEnum.EXECUTION_ID),
                                                                                                add(PathPrefixEnum.EXECUTION_ID),
                                                                                            }};
                                                                                            prefixFormat = PrefixFormatEnum.HOUR;
                                                                                            prefixType = PrefixTypeEnum.PATH;
                                                                                        }};) {{
                                                                            aggregationConfig = new AggregationConfig() {{
                                                                                aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                                targetFileSize = 262800L;
                                                                            }};;
                                                                            fileType = FileTypeEnum.CSV;
                                                                        }};) {{
                                                            bucketName = "impedit";
                                                            bucketPrefix = "porro";
                                                            s3OutputFormatConfig = new UpsolverS3OutputFormatConfig(                new PrefixConfig() {{
                                                                                pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                    add(PathPrefixEnum.EXECUTION_ID),
                                                                                }};
                                                                                prefixFormat = PrefixFormatEnum.MINUTE;
                                                                                prefixType = PrefixTypeEnum.PATH;
                                                                            }};) {{
                                                                aggregationConfig = new AggregationConfig() {{
                                                                    aggregationType = AggregationTypeEnum.SINGLE_FILE;
                                                                    targetFileSize = 518990L;
                                                                }};
                                                                fileType = FileTypeEnum.PARQUET;
                                                                prefixConfig = new PrefixConfig() {{
                                                                    pathPrefixHierarchy = new org.openapis.openapi.models.shared.PathPrefixEnum[]{{
                                                                        add(PathPrefixEnum.SCHEMA_VERSION),
                                                                    }};
                                                                    prefixFormat = PrefixFormatEnum.DAY;
                                                                    prefixType = PrefixTypeEnum.PATH;
                                                                }};
                                                            }};
                                                        }};
                                                        zendesk = new ZendeskDestinationProperties("facere") {{
                                                            errorHandlingConfig = new ErrorHandlingConfig() {{
                                                                bucketName = "rem";
                                                                bucketPrefix = "maiores";
                                                                failOnFirstDestinationError = false;
                                                            }};
                                                            idFieldNames = new String[]{{
                                                                add("veniam"),
                                                            }};
                                                            object = "saepe";
                                                            writeOperationType = WriteOperationTypeEnum.INSERT;
                                                        }};
                                                    }};
                                                }}),
                                            }}, "debitis",                 new UpdateFlowRequestBodySourceFlowConfig() {{
                                                apiVersion = "ullam";
                                                connectorProfileName = "architecto";
                                                connectorType = ConnectorTypeEnum.SALESFORCE;
                                                incrementalPullConfig = new IncrementalPullConfig() {{
                                                    datetimeTypeFieldName = "perferendis";
                                                }};;
                                                sourceConnectorProperties = new SourceConnectorProperties() {{
                                                    amplitude = new AmplitudeSourceProperties("veritatis");;
                                                    customConnector = new CustomConnectorSourceProperties("provident") {{
                                                        customProperties = new java.util.HashMap<String, String>() {{
                                                            put("iure", "quibusdam");
                                                            put("quod", "nemo");
                                                            put("recusandae", "velit");
                                                            put("magnam", "dignissimos");
                                                        }};
                                                    }};;
                                                    datadog = new DatadogSourceProperties("laboriosam");;
                                                    dynatrace = new DynatraceSourceProperties("sed");;
                                                    googleAnalytics = new GoogleAnalyticsSourceProperties("odio");;
                                                    inforNexus = new InforNexusSourceProperties("natus");;
                                                    marketo = new MarketoSourceProperties("provident");;
                                                    pardot = new PardotSourceProperties("cum");;
                                                    s3 = new S3SourceProperties("doloribus") {{
                                                        bucketPrefix = "facilis";
                                                        s3InputFormatConfig = new S3InputFormatConfig() {{
                                                            s3InputFileType = S3InputFileTypeEnum.JSON;
                                                        }};;
                                                    }};;
                                                    sapoData = new SAPODataSourceProperties() {{
                                                        objectPath = "itaque";
                                                    }};;
                                                    salesforce = new SalesforceSourceProperties("laboriosam") {{
                                                        dataTransferApi = SalesforceDataTransferApiEnum.BULKV2;
                                                        enableDynamicFieldUpdate = false;
                                                        includeDeletedRecords = false;
                                                    }};;
                                                    serviceNow = new ServiceNowSourceProperties("modi");;
                                                    singular = new SingularSourceProperties("perspiciatis");;
                                                    slack = new SlackSourceProperties("hic");;
                                                    trendmicro = new TrendmicroSourceProperties("cum");;
                                                    veeva = new VeevaSourceProperties("aspernatur") {{
                                                        documentType = "libero";
                                                        includeAllVersions = false;
                                                        includeRenditions = false;
                                                        includeSourceFiles = false;
                                                    }};;
                                                    zendesk = new ZendeskSourceProperties("nam");;
                                                }};;
                                            }};,                 new org.openapis.openapi.models.shared.Task[]{{
                                                add(new Task(                new String[]{{
                                                                    add("occaecati"),
                                                                    add("labore"),
                                                                    add("quo"),
                                                                }}, TaskTypeEnum.ARITHMETIC) {{
                                                    connectorOperator = new ConnectorOperator() {{
                                                        amplitude = AmplitudeConnectorOperatorEnum.BETWEEN;
                                                        customConnector = OperatorEnum.VALIDATE_NUMERIC;
                                                        datadog = DatadogConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                        dynatrace = DynatraceConnectorOperatorEnum.MASK_LAST_N;
                                                        googleAnalytics = GoogleAnalyticsConnectorOperatorEnum.BETWEEN;
                                                        inforNexus = InforNexusConnectorOperatorEnum.SUBTRACTION;
                                                        marketo = MarketoConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                        pardot = PardotConnectorOperatorEnum.NO_OP;
                                                        s3 = S3ConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                        sapoData = SAPODataConnectorOperatorEnum.EQUAL_TO;
                                                        salesforce = SalesforceConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                        serviceNow = ServiceNowConnectorOperatorEnum.MASK_FIRST_N;
                                                        singular = SingularConnectorOperatorEnum.MULTIPLICATION;
                                                        slack = SlackConnectorOperatorEnum.MASK_FIRST_N;
                                                        trendmicro = TrendmicroConnectorOperatorEnum.VALIDATE_NON_NEGATIVE;
                                                        veeva = VeevaConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                        zendesk = ZendeskConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                    }};
                                                    destinationField = "pariatur";
                                                    sourceFields = new String[]{{
                                                        add("facere"),
                                                        add("laborum"),
                                                    }};
                                                    taskProperties = new java.util.HashMap<String, String>() {{
                                                        put("laborum", "incidunt");
                                                        put("maxime", "ipsam");
                                                        put("alias", "suscipit");
                                                        put("deserunt", "molestias");
                                                    }};
                                                    taskType = TaskTypeEnum.PASSTHROUGH;
                                                }}),
                                                add(new Task(                new String[]{{
                                                                    add("eaque"),
                                                                }}, TaskTypeEnum.FILTER) {{
                                                    connectorOperator = new ConnectorOperator() {{
                                                        amplitude = AmplitudeConnectorOperatorEnum.BETWEEN;
                                                        customConnector = OperatorEnum.CONTAINS;
                                                        datadog = DatadogConnectorOperatorEnum.DIVISION;
                                                        dynatrace = DynatraceConnectorOperatorEnum.MULTIPLICATION;
                                                        googleAnalytics = GoogleAnalyticsConnectorOperatorEnum.PROJECTION;
                                                        inforNexus = InforNexusConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                                        marketo = MarketoConnectorOperatorEnum.NO_OP;
                                                        pardot = PardotConnectorOperatorEnum.MULTIPLICATION;
                                                        s3 = S3ConnectorOperatorEnum.VALIDATE_NON_NEGATIVE;
                                                        sapoData = SAPODataConnectorOperatorEnum.SUBTRACTION;
                                                        salesforce = SalesforceConnectorOperatorEnum.VALIDATE_NON_NEGATIVE;
                                                        serviceNow = ServiceNowConnectorOperatorEnum.MASK_ALL;
                                                        singular = SingularConnectorOperatorEnum.VALIDATE_NON_NULL;
                                                        slack = SlackConnectorOperatorEnum.GREATER_THAN_OR_EQUAL_TO;
                                                        trendmicro = TrendmicroConnectorOperatorEnum.DIVISION;
                                                        veeva = VeevaConnectorOperatorEnum.ADDITION;
                                                        zendesk = ZendeskConnectorOperatorEnum.MASK_FIRST_N;
                                                    }};
                                                    destinationField = "fuga";
                                                    sourceFields = new String[]{{
                                                        add("impedit"),
                                                        add("quasi"),
                                                        add("deserunt"),
                                                        add("quod"),
                                                    }};
                                                    taskProperties = new java.util.HashMap<String, String>() {{
                                                        put("doloremque", "voluptatem");
                                                        put("facere", "necessitatibus");
                                                    }};
                                                    taskType = TaskTypeEnum.VALIDATE;
                                                }}),
                                            }},                 new UpdateFlowRequestBodyTriggerConfig() {{
                                                triggerProperties = new TriggerProperties() {{
                                                    scheduled = new ScheduledTriggerProperties("similique") {{
                                                        dataPullMode = DataPullModeEnum.COMPLETE;
                                                        firstExecutionFrom = OffsetDateTime.parse("2022-11-17T13:10:04.528Z");
                                                        flowErrorDeactivationThreshold = 169819L;
                                                        scheduleEndTime = OffsetDateTime.parse("2022-07-22T12:36:05.070Z");
                                                        scheduleOffset = 898111L;
                                                        scheduleStartTime = OffsetDateTime.parse("2022-10-31T16:48:27.091Z");
                                                        timezone = "excepturi";
                                                    }};;
                                                }};;
                                                triggerType = TriggerTypeEnum.ON_DEMAND;
                                            }};) {{
                                clientToken = "maiores";
                                description = "laudantium";
                                metadataCatalogConfig = new UpdateFlowRequestBodyMetadataCatalogConfig() {{
                                    glueDataCatalog = new GlueDataCatalogConfig("maiores", "alias", "asperiores");;
                                }};;
                            }};) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "suscipit";
                xAmzDate = "earum";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eius";
            }};            

            UpdateFlowResponse res = sdk.sdk.updateFlow(req);

            if (res.updateFlowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
