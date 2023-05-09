# SDK

## Overview

<p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p> <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p> <p>Use the following links to get started on the Amazon AppFlow API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p> <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm"> <i>Authorize Apps with OAuth</i> </a> documentation.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appflow/>
### Available Operations

* [CreateConnectorProfile](#createconnectorprofile) -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* [CreateFlow](#createflow) -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* [DeleteConnectorProfile](#deleteconnectorprofile) -  Enables you to delete an existing connector profile. 
* [DeleteFlow](#deleteflow) -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* [DescribeConnector](#describeconnector) - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* [DescribeConnectorEntity](#describeconnectorentity) -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* [DescribeConnectorProfiles](#describeconnectorprofiles) - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* [DescribeConnectors](#describeconnectors) -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* [DescribeFlow](#describeflow) -  Provides a description of the specified flow. 
* [DescribeFlowExecutionRecords](#describeflowexecutionrecords) -  Fetches the execution history of the flow. 
* [ListConnectorEntities](#listconnectorentities) -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* [ListConnectors](#listconnectors) - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* [ListFlows](#listflows) -  Lists all of the flows associated with your account. 
* [ListTagsForResource](#listtagsforresource) -  Retrieves the tags that are associated with a specified flow. 
* [RegisterConnector](#registerconnector) - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* [StartFlow](#startflow) -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* [StopFlow](#stopflow) -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* [TagResource](#tagresource) -  Applies a tag to the specified flow. 
* [UnregisterConnector](#unregisterconnector) - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* [UntagResource](#untagresource) -  Removes a tag from the specified flow. 
* [UpdateConnectorProfile](#updateconnectorprofile) -  Updates a given connector profile associated with your account. 
* [UpdateConnectorRegistration](#updateconnectorregistration) - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* [UpdateFlow](#updateflow) -  Updates an existing flow. 

## CreateConnectorProfile

 Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateConnectorProfile(ctx, operations.CreateConnectorProfileRequest{
        RequestBody: operations.CreateConnectorProfileRequestBody{
            ClientToken: sdk.String("ipsam"),
            ConnectionMode: operations.CreateConnectorProfileRequestBodyConnectionModeEnumPublic,
            ConnectorLabel: sdk.String("fugit"),
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "dolorum",
                        SecretKey: "excepturi",
                    },
                    CustomConnector: &shared.CustomConnectorProfileCredentials{
                        APIKey: &shared.APIKeyCredentials{
                            APIKey: "tempora",
                            APISecretKey: sdk.String("facilis"),
                        },
                        AuthenticationType: shared.AuthenticationTypeEnumBasic,
                        Basic: &shared.BasicAuthCredentials{
                            Password: "labore",
                            Username: "Vilma75",
                        },
                        Custom: &shared.CustomAuthCredentials{
                            CredentialsMap: map[string]string{
                                "aliquid": "provident",
                                "necessitatibus": "sint",
                                "officia": "dolor",
                            },
                            CustomAuthenticationType: "debitis",
                        },
                        Oauth2: &shared.OAuth2Credentials{
                            AccessToken: sdk.String("a"),
                            ClientID: sdk.String("dolorum"),
                            ClientSecret: sdk.String("in"),
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: sdk.String("in"),
                                RedirectURI: sdk.String("illum"),
                            },
                            RefreshToken: sdk.String("maiores"),
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "rerum",
                        ApplicationKey: "dicta",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "magnam",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: sdk.String("cumque"),
                        ClientID: "facere",
                        ClientSecret: "ea",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("aliquid"),
                            RedirectURI: sdk.String("laborum"),
                        },
                        RefreshToken: sdk.String("accusamus"),
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: sdk.String("non"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("occaecati"),
                            RedirectURI: sdk.String("enim"),
                        },
                        RefreshToken: sdk.String("accusamus"),
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "delectus",
                        Datakey: "quidem",
                        SecretAccessKey: "provident",
                        UserID: "nam",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: sdk.String("id"),
                        ClientID: "blanditiis",
                        ClientSecret: "deleniti",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("sapiente"),
                            RedirectURI: sdk.String("amet"),
                        },
                    },
                    Pardot: &shared.PardotConnectorProfileCredentials{
                        AccessToken: sdk.String("deserunt"),
                        ClientCredentialsArn: sdk.String("nisi"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("vel"),
                            RedirectURI: sdk.String("natus"),
                        },
                        RefreshToken: sdk.String("omnis"),
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: sdk.String("molestiae"),
                        Username: sdk.String("Aileen71"),
                    },
                    SAPOData: &shared.SAPODataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "id",
                            Username: "Edward_Greenfelder",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: sdk.String("nobis"),
                            ClientID: "eum",
                            ClientSecret: "vero",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: sdk.String("aspernatur"),
                                RedirectURI: sdk.String("architecto"),
                            },
                            RefreshToken: sdk.String("magnam"),
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: sdk.String("et"),
                        ClientCredentialsArn: sdk.String("excepturi"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("ullam"),
                            RedirectURI: sdk.String("provident"),
                        },
                        RefreshToken: sdk.String("quos"),
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "sint",
                        Username: "Alexis_OHara32",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "eum",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: sdk.String("dolor"),
                        ClientID: "necessitatibus",
                        ClientSecret: "odit",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("nemo"),
                            RedirectURI: sdk.String("quasi"),
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "iure",
                        Username: "Wilton80",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "deleniti",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "facilis",
                        Username: "Isaias91",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: sdk.String("ullam"),
                        ClientID: "expedita",
                        ClientSecret: "nihil",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("repellat"),
                            RedirectURI: sdk.String("quibusdam"),
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "saepe": "pariatur",
                    },
                    CustomConnector: &shared.CustomConnectorProfileProperties{
                        OAuth2Properties: &shared.OAuth2Properties{
                            OAuth2GrantType: shared.OAuth2GrantTypeEnumClientCredentials,
                            TokenURL: "consequuntur",
                            TokenURLCustomProperties: map[string]string{
                                "natus": "magni",
                                "sunt": "quo",
                                "illum": "pariatur",
                            },
                        },
                        ProfileProperties: map[string]string{
                            "ea": "excepturi",
                            "odit": "ea",
                            "accusantium": "ab",
                            "maiores": "quidem",
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "ipsam",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "voluptate",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "nam": "eaque",
                        "pariatur": "nemo",
                    },
                    Honeycode: map[string]interface{}{
                        "perferendis": "fugiat",
                        "amet": "aut",
                        "cumque": "corporis",
                        "hic": "libero",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "nobis",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "dolores",
                    },
                    Pardot: &shared.PardotConnectorProfileProperties{
                        BusinessUnitID: sdk.String("quis"),
                        InstanceURL: sdk.String("totam"),
                        IsSandboxEnvironment: sdk.Bool(false),
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "dignissimos",
                        BucketPrefix: sdk.String("eaque"),
                        ClusterIdentifier: sdk.String("quis"),
                        DataAPIRoleArn: sdk.String("nesciunt"),
                        DatabaseName: sdk.String("eos"),
                        DatabaseURL: sdk.String("perferendis"),
                        IsRedshiftServerless: sdk.Bool(false),
                        RoleArn: "dolores",
                        WorkgroupName: sdk.String("minus"),
                    },
                    SAPOData: &shared.SAPODataConnectorProfileProperties{
                        ApplicationHostURL: "quam",
                        ApplicationServicePath: "dolor",
                        ClientNumber: "vero",
                        LogonLanguage: sdk.String("nostrum"),
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "hic",
                            OAuthScopes: []string{
                                "omnis",
                                "facilis",
                                "perspiciatis",
                                "voluptatem",
                            },
                            TokenURL: "porro",
                        },
                        PortNumber: 164694,
                        PrivateLinkServiceName: sdk.String("blanditiis"),
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: sdk.String("error"),
                        IsSandboxEnvironment: sdk.Bool(false),
                        UsePrivateLinkForMetadataAndAuthorization: sdk.Bool(false),
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "eaque",
                    },
                    Singular: map[string]interface{}{
                        "rerum": "adipisci",
                        "asperiores": "earum",
                        "modi": "iste",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "dolorum",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: sdk.String("deleniti"),
                        BucketName: "pariatur",
                        BucketPrefix: sdk.String("provident"),
                        PrivateLinkServiceName: sdk.String("nobis"),
                        Region: sdk.String("libero"),
                        Stage: "delectus",
                        Warehouse: "quaerat",
                    },
                    Trendmicro: map[string]interface{}{
                        "aliquid": "dolorem",
                        "dolorem": "dolor",
                        "qui": "ipsum",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "hic",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "excepturi",
                    },
                },
            },
            ConnectorProfileName: "cum",
            ConnectorType: operations.CreateConnectorProfileRequestBodyConnectorTypeEnumTrendmicro,
            KmsArn: sdk.String("dignissimos"),
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorProfileResponse != nil {
        // handle response
    }
}
```

## CreateFlow

 Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFlow(ctx, operations.CreateFlowRequest{
        RequestBody: operations.CreateFlowRequestBody{
            ClientToken: sdk.String("iure"),
            Description: sdk.String("odio"),
            DestinationFlowConfigList: []shared.DestinationFlowConfig{
                shared.DestinationFlowConfig{
                    APIVersion: sdk.String("accusamus"),
                    ConnectorProfileName: sdk.String("quidem"),
                    ConnectorType: shared.ConnectorTypeEnumPardot,
                    DestinationConnectorProperties: shared.DestinationConnectorProperties{
                        CustomConnector: &shared.CustomConnectorDestinationProperties{
                            CustomProperties: map[string]string{
                                "natus": "eos",
                                "atque": "sit",
                            },
                            EntityName: "fugiat",
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("ab"),
                                BucketPrefix: sdk.String("soluta"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "iusto",
                                "voluptate",
                                "dolorum",
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumUpdate.ToPointer(),
                        },
                        CustomerProfiles: &shared.CustomerProfilesDestinationProperties{
                            DomainName: "omnis",
                            ObjectTypeName: sdk.String("necessitatibus"),
                        },
                        EventBridge: &shared.EventBridgeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("distinctio"),
                                BucketPrefix: sdk.String("asperiores"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "nihil",
                        },
                        Honeycode: &shared.HoneycodeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("ipsum"),
                                BucketPrefix: sdk.String("voluptate"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "id",
                        },
                        LookoutMetrics: map[string]interface{}{
                            "eius": "aspernatur",
                            "perferendis": "amet",
                            "optio": "accusamus",
                            "ad": "saepe",
                        },
                        Marketo: &shared.MarketoDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("suscipit"),
                                BucketPrefix: sdk.String("deserunt"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "provident",
                        },
                        Redshift: &shared.RedshiftDestinationProperties{
                            BucketPrefix: sdk.String("minima"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("repellendus"),
                                BucketPrefix: sdk.String("totam"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "similique",
                            Object: "alias",
                        },
                        S3: &shared.S3DestinationProperties{
                            BucketName: "at",
                            BucketPrefix: sdk.String("quaerat"),
                            S3OutputFormatConfig: &shared.S3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumNone.ToPointer(),
                                    TargetFileSize: sdk.Int64(425451),
                                },
                                FileType: shared.FileTypeEnumParquet.ToPointer(),
                                PrefixConfig: &shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumExecutionID,
                                        shared.PathPrefixEnumSchemaVersion,
                                        shared.PathPrefixEnumSchemaVersion,
                                        shared.PathPrefixEnumExecutionID,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumHour.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumPath.ToPointer(),
                                },
                                PreserveSourceDataTyping: sdk.Bool(false),
                            },
                        },
                        SAPOData: &shared.SAPODataDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("ipsum"),
                                BucketPrefix: sdk.String("quisquam"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "amet",
                                "tempore",
                                "accusamus",
                                "numquam",
                            },
                            ObjectPath: "enim",
                            SuccessResponseHandlingConfig: &shared.SuccessResponseHandlingConfig{
                                BucketName: sdk.String("dolorem"),
                                BucketPrefix: sdk.String("sapiente"),
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumUpdate.ToPointer(),
                        },
                        Salesforce: &shared.SalesforceDestinationProperties{
                            DataTransferAPI: shared.SalesforceDataTransferAPIEnumBulkv2.ToPointer(),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("sit"),
                                BucketPrefix: sdk.String("expedita"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "sed",
                            },
                            Object: "vel",
                            WriteOperationType: shared.WriteOperationTypeEnumUpdate.ToPointer(),
                        },
                        Snowflake: &shared.SnowflakeDestinationProperties{
                            BucketPrefix: sdk.String("voluptas"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("deserunt"),
                                BucketPrefix: sdk.String("quam"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "ipsum",
                            Object: "incidunt",
                        },
                        Upsolver: &shared.UpsolverDestinationProperties{
                            BucketName: "qui",
                            BucketPrefix: sdk.String("cupiditate"),
                            S3OutputFormatConfig: shared.UpsolverS3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumSingleFile.ToPointer(),
                                    TargetFileSize: sdk.Int64(863856),
                                },
                                FileType: shared.FileTypeEnumParquet.ToPointer(),
                                PrefixConfig: shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumSchemaVersion,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumDay.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumFilename.ToPointer(),
                                },
                            },
                        },
                        Zendesk: &shared.ZendeskDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("aspernatur"),
                                BucketPrefix: sdk.String("dolores"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "facilis",
                                "aliquid",
                                "quam",
                            },
                            Object: "molestias",
                            WriteOperationType: shared.WriteOperationTypeEnumDelete.ToPointer(),
                        },
                    },
                },
                shared.DestinationFlowConfig{
                    APIVersion: sdk.String("qui"),
                    ConnectorProfileName: sdk.String("neque"),
                    ConnectorType: shared.ConnectorTypeEnumRedshift,
                    DestinationConnectorProperties: shared.DestinationConnectorProperties{
                        CustomConnector: &shared.CustomConnectorDestinationProperties{
                            CustomProperties: map[string]string{
                                "odio": "sunt",
                            },
                            EntityName: "ullam",
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("nam"),
                                BucketPrefix: sdk.String("hic"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "cumque",
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumUpdate.ToPointer(),
                        },
                        CustomerProfiles: &shared.CustomerProfilesDestinationProperties{
                            DomainName: "nobis",
                            ObjectTypeName: sdk.String("et"),
                        },
                        EventBridge: &shared.EventBridgeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("saepe"),
                                BucketPrefix: sdk.String("ipsum"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "veritatis",
                        },
                        Honeycode: &shared.HoneycodeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("nobis"),
                                BucketPrefix: sdk.String("quos"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "tempore",
                        },
                        LookoutMetrics: map[string]interface{}{
                            "aperiam": "delectus",
                            "dolorem": "dolore",
                            "labore": "adipisci",
                        },
                        Marketo: &shared.MarketoDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("dolorum"),
                                BucketPrefix: sdk.String("architecto"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "quae",
                        },
                        Redshift: &shared.RedshiftDestinationProperties{
                            BucketPrefix: sdk.String("aut"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("quas"),
                                BucketPrefix: sdk.String("itaque"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "consequatur",
                            Object: "est",
                        },
                        S3: &shared.S3DestinationProperties{
                            BucketName: "repellendus",
                            BucketPrefix: sdk.String("porro"),
                            S3OutputFormatConfig: &shared.S3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumSingleFile.ToPointer(),
                                    TargetFileSize: sdk.Int64(281730),
                                },
                                FileType: shared.FileTypeEnumParquet.ToPointer(),
                                PrefixConfig: &shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumExecutionID,
                                        shared.PathPrefixEnumExecutionID,
                                        shared.PathPrefixEnumSchemaVersion,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumDay.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumPath.ToPointer(),
                                },
                                PreserveSourceDataTyping: sdk.Bool(false),
                            },
                        },
                        SAPOData: &shared.SAPODataDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("voluptatibus"),
                                BucketPrefix: sdk.String("quisquam"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "omnis",
                                "quis",
                                "ipsum",
                                "delectus",
                            },
                            ObjectPath: "voluptate",
                            SuccessResponseHandlingConfig: &shared.SuccessResponseHandlingConfig{
                                BucketName: sdk.String("consectetur"),
                                BucketPrefix: sdk.String("vero"),
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumDelete.ToPointer(),
                        },
                        Salesforce: &shared.SalesforceDestinationProperties{
                            DataTransferAPI: shared.SalesforceDataTransferAPIEnumBulkv2.ToPointer(),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("hic"),
                                BucketPrefix: sdk.String("distinctio"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "odio",
                                "similique",
                                "facilis",
                                "vero",
                            },
                            Object: "ducimus",
                            WriteOperationType: shared.WriteOperationTypeEnumUpsert.ToPointer(),
                        },
                        Snowflake: &shared.SnowflakeDestinationProperties{
                            BucketPrefix: sdk.String("quibusdam"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("illum"),
                                BucketPrefix: sdk.String("sequi"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "natus",
                            Object: "impedit",
                        },
                        Upsolver: &shared.UpsolverDestinationProperties{
                            BucketName: "aut",
                            BucketPrefix: sdk.String("voluptatibus"),
                            S3OutputFormatConfig: shared.UpsolverS3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumNone.ToPointer(),
                                    TargetFileSize: sdk.Int64(862310),
                                },
                                FileType: shared.FileTypeEnumCsv.ToPointer(),
                                PrefixConfig: shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumSchemaVersion,
                                        shared.PathPrefixEnumSchemaVersion,
                                        shared.PathPrefixEnumExecutionID,
                                        shared.PathPrefixEnumSchemaVersion,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumDay.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumFilename.ToPointer(),
                                },
                            },
                        },
                        Zendesk: &shared.ZendeskDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("officia"),
                                BucketPrefix: sdk.String("tempora"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "ea",
                                "aspernatur",
                            },
                            Object: "vel",
                            WriteOperationType: shared.WriteOperationTypeEnumDelete.ToPointer(),
                        },
                    },
                },
            },
            FlowName: "magnam",
            KmsArn: sdk.String("ratione"),
            MetadataCatalogConfig: &operations.CreateFlowRequestBodyMetadataCatalogConfig{
                GlueDataCatalog: &shared.GlueDataCatalogConfig{
                    DatabaseName: "ex",
                    RoleArn: "laudantium",
                    TablePrefix: "dicta",
                },
            },
            SourceFlowConfig: operations.CreateFlowRequestBodySourceFlowConfig{
                APIVersion: sdk.String("dolor"),
                ConnectorProfileName: sdk.String("maiores"),
                ConnectorType: shared.ConnectorTypeEnumSlack.ToPointer(),
                IncrementalPullConfig: &shared.IncrementalPullConfig{
                    DatetimeTypeFieldName: sdk.String("ex"),
                },
                SourceConnectorProperties: &shared.SourceConnectorProperties{
                    Amplitude: &shared.AmplitudeSourceProperties{
                        Object: "nulla",
                    },
                    CustomConnector: &shared.CustomConnectorSourceProperties{
                        CustomProperties: map[string]string{
                            "voluptatibus": "nostrum",
                            "sapiente": "quisquam",
                            "saepe": "ea",
                        },
                        EntityName: "impedit",
                    },
                    Datadog: &shared.DatadogSourceProperties{
                        Object: "corporis",
                    },
                    Dynatrace: &shared.DynatraceSourceProperties{
                        Object: "veniam",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsSourceProperties{
                        Object: "aliquid",
                    },
                    InforNexus: &shared.InforNexusSourceProperties{
                        Object: "inventore",
                    },
                    Marketo: &shared.MarketoSourceProperties{
                        Object: "magnam",
                    },
                    Pardot: &shared.PardotSourceProperties{
                        Object: "ea",
                    },
                    S3: &shared.S3SourceProperties{
                        BucketName: "quo",
                        BucketPrefix: sdk.String("consectetur"),
                        S3InputFormatConfig: &shared.S3InputFormatConfig{
                            S3InputFileType: shared.S3InputFileTypeEnumJSON.ToPointer(),
                        },
                    },
                    SAPOData: &shared.SAPODataSourceProperties{
                        ObjectPath: sdk.String("aspernatur"),
                    },
                    Salesforce: &shared.SalesforceSourceProperties{
                        DataTransferAPI: shared.SalesforceDataTransferAPIEnumAutomatic.ToPointer(),
                        EnableDynamicFieldUpdate: sdk.Bool(false),
                        IncludeDeletedRecords: sdk.Bool(false),
                        Object: "eaque",
                    },
                    ServiceNow: &shared.ServiceNowSourceProperties{
                        Object: "a",
                    },
                    Singular: &shared.SingularSourceProperties{
                        Object: "libero",
                    },
                    Slack: &shared.SlackSourceProperties{
                        Object: "aut",
                    },
                    Trendmicro: &shared.TrendmicroSourceProperties{
                        Object: "aut",
                    },
                    Veeva: &shared.VeevaSourceProperties{
                        DocumentType: sdk.String("deleniti"),
                        IncludeAllVersions: sdk.Bool(false),
                        IncludeRenditions: sdk.Bool(false),
                        IncludeSourceFiles: sdk.Bool(false),
                        Object: "impedit",
                    },
                    Zendesk: &shared.ZendeskSourceProperties{
                        Object: "aliquam",
                    },
                },
            },
            Tags: map[string]string{
                "accusamus": "inventore",
            },
            Tasks: []shared.Task{
                shared.Task{
                    ConnectorOperator: &shared.ConnectorOperator{
                        Amplitude: shared.AmplitudeConnectorOperatorEnumBetween.ToPointer(),
                        CustomConnector: shared.OperatorEnumLessThan.ToPointer(),
                        Datadog: shared.DatadogConnectorOperatorEnumValidateNonNull.ToPointer(),
                        Dynatrace: shared.DynatraceConnectorOperatorEnumValidateNonNull.ToPointer(),
                        GoogleAnalytics: shared.GoogleAnalyticsConnectorOperatorEnumBetween.ToPointer(),
                        InforNexus: shared.InforNexusConnectorOperatorEnumAddition.ToPointer(),
                        Marketo: shared.MarketoConnectorOperatorEnumDivision.ToPointer(),
                        Pardot: shared.PardotConnectorOperatorEnumDivision.ToPointer(),
                        S3: shared.S3ConnectorOperatorEnumValidateNonNull.ToPointer(),
                        SAPOData: shared.SAPODataConnectorOperatorEnumDivision.ToPointer(),
                        Salesforce: shared.SalesforceConnectorOperatorEnumValidateNonZero.ToPointer(),
                        ServiceNow: shared.ServiceNowConnectorOperatorEnumValidateNonNegative.ToPointer(),
                        Singular: shared.SingularConnectorOperatorEnumSubtraction.ToPointer(),
                        Slack: shared.SlackConnectorOperatorEnumMaskLastN.ToPointer(),
                        Trendmicro: shared.TrendmicroConnectorOperatorEnumEqualTo.ToPointer(),
                        Veeva: shared.VeevaConnectorOperatorEnumLessThanOrEqualTo.ToPointer(),
                        Zendesk: shared.ZendeskConnectorOperatorEnumMultiplication.ToPointer(),
                    },
                    DestinationField: sdk.String("explicabo"),
                    SourceFields: []string{
                        "ipsa",
                        "molestiae",
                        "magnam",
                    },
                    TaskProperties: map[string]string{
                        "eius": "esse",
                        "esse": "rem",
                    },
                    TaskType: shared.TaskTypeEnumPassthrough,
                },
                shared.Task{
                    ConnectorOperator: &shared.ConnectorOperator{
                        Amplitude: shared.AmplitudeConnectorOperatorEnumBetween.ToPointer(),
                        CustomConnector: shared.OperatorEnumAddition.ToPointer(),
                        Datadog: shared.DatadogConnectorOperatorEnumValidateNonNull.ToPointer(),
                        Dynatrace: shared.DynatraceConnectorOperatorEnumValidateNonNegative.ToPointer(),
                        GoogleAnalytics: shared.GoogleAnalyticsConnectorOperatorEnumProjection.ToPointer(),
                        InforNexus: shared.InforNexusConnectorOperatorEnumSubtraction.ToPointer(),
                        Marketo: shared.MarketoConnectorOperatorEnumDivision.ToPointer(),
                        Pardot: shared.PardotConnectorOperatorEnumValidateNonZero.ToPointer(),
                        S3: shared.S3ConnectorOperatorEnumBetween.ToPointer(),
                        SAPOData: shared.SAPODataConnectorOperatorEnumMultiplication.ToPointer(),
                        Salesforce: shared.SalesforceConnectorOperatorEnumValidateNonNull.ToPointer(),
                        ServiceNow: shared.ServiceNowConnectorOperatorEnumContains.ToPointer(),
                        Singular: shared.SingularConnectorOperatorEnumProjection.ToPointer(),
                        Slack: shared.SlackConnectorOperatorEnumMaskFirstN.ToPointer(),
                        Trendmicro: shared.TrendmicroConnectorOperatorEnumValidateNonNull.ToPointer(),
                        Veeva: shared.VeevaConnectorOperatorEnumBetween.ToPointer(),
                        Zendesk: shared.ZendeskConnectorOperatorEnumValidateNonZero.ToPointer(),
                    },
                    DestinationField: sdk.String("illum"),
                    SourceFields: []string{
                        "fuga",
                        "eius",
                        "eos",
                        "voluptas",
                    },
                    TaskProperties: map[string]string{
                        "cupiditate": "consequatur",
                    },
                    TaskType: shared.TaskTypeEnumMap,
                },
            },
            TriggerConfig: operations.CreateFlowRequestBodyTriggerConfig{
                TriggerProperties: &shared.TriggerProperties{
                    Scheduled: &shared.ScheduledTriggerProperties{
                        DataPullMode: shared.DataPullModeEnumComplete.ToPointer(),
                        FirstExecutionFrom: types.MustTimeFromString("2022-11-13T06:50:40.250Z"),
                        FlowErrorDeactivationThreshold: sdk.Int64(197054),
                        ScheduleEndTime: types.MustTimeFromString("2021-08-15T10:59:14.485Z"),
                        ScheduleExpression: "recusandae",
                        ScheduleOffset: sdk.Int64(44612),
                        ScheduleStartTime: types.MustTimeFromString("2021-05-27T03:34:33.852Z"),
                        Timezone: sdk.String("dignissimos"),
                    },
                },
                TriggerType: shared.TriggerTypeEnumScheduled.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFlowResponse != nil {
        // handle response
    }
}
```

## DeleteConnectorProfile

 Enables you to delete an existing connector profile. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConnectorProfile(ctx, operations.DeleteConnectorProfileRequest{
        RequestBody: operations.DeleteConnectorProfileRequestBody{
            ConnectorProfileName: "sapiente",
            ForceDelete: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectorProfileResponse != nil {
        // handle response
    }
}
```

## DeleteFlow

 Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFlow(ctx, operations.DeleteFlowRequest{
        RequestBody: operations.DeleteFlowRequestBody{
            FlowName: "praesentium",
            ForceDelete: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFlowResponse != nil {
        // handle response
    }
}
```

## DescribeConnector

Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConnector(ctx, operations.DescribeConnectorRequest{
        RequestBody: operations.DescribeConnectorRequestBody{
            ConnectorLabel: sdk.String("explicabo"),
            ConnectorType: operations.DescribeConnectorRequestBodyConnectorTypeEnumZendesk,
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectorResponse != nil {
        // handle response
    }
}
```

## DescribeConnectorEntity

 Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConnectorEntity(ctx, operations.DescribeConnectorEntityRequest{
        RequestBody: operations.DescribeConnectorEntityRequestBody{
            APIVersion: sdk.String("occaecati"),
            ConnectorEntityName: "atque",
            ConnectorProfileName: sdk.String("et"),
            ConnectorType: operations.DescribeConnectorEntityRequestBodyConnectorTypeEnumTrendmicro.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectorEntityResponse != nil {
        // handle response
    }
}
```

## DescribeConnectorProfiles

<p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConnectorProfiles(ctx, operations.DescribeConnectorProfilesRequest{
        RequestBody: operations.DescribeConnectorProfilesRequestBody{
            ConnectorLabel: sdk.String("aliquid"),
            ConnectorProfileNames: []string{
                "saepe",
            },
            ConnectorType: operations.DescribeConnectorProfilesRequestBodyConnectorTypeEnumTrendmicro.ToPointer(),
            MaxResults: sdk.Int64(690025),
            NextToken: sdk.String("molestiae"),
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("culpa"),
        MaxResults: sdk.String("tempore"),
        NextToken: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectorProfilesResponse != nil {
        // handle response
    }
}
```

## DescribeConnectors

 Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConnectors(ctx, operations.DescribeConnectorsRequest{
        RequestBody: operations.DescribeConnectorsRequestBody{
            ConnectorTypes: []shared.ConnectorTypeEnum{
                shared.ConnectorTypeEnumRedshift,
                shared.ConnectorTypeEnumSalesforce,
                shared.ConnectorTypeEnumHoneycode,
                shared.ConnectorTypeEnumZendesk,
            },
            MaxResults: sdk.Int64(959167),
            NextToken: sdk.String("consectetur"),
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.String("quasi"),
        NextToken: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectorsResponse != nil {
        // handle response
    }
}
```

## DescribeFlow

 Provides a description of the specified flow. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFlow(ctx, operations.DescribeFlowRequest{
        RequestBody: operations.DescribeFlowRequestBody{
            FlowName: "error",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFlowResponse != nil {
        // handle response
    }
}
```

## DescribeFlowExecutionRecords

 Fetches the execution history of the flow. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFlowExecutionRecords(ctx, operations.DescribeFlowExecutionRecordsRequest{
        RequestBody: operations.DescribeFlowExecutionRecordsRequestBody{
            FlowName: "veritatis",
            MaxResults: sdk.Int64(159414),
            NextToken: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("vel"),
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFlowExecutionRecordsResponse != nil {
        // handle response
    }
}
```

## ListConnectorEntities

 Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConnectorEntities(ctx, operations.ListConnectorEntitiesRequest{
        RequestBody: operations.ListConnectorEntitiesRequestBody{
            APIVersion: sdk.String("libero"),
            ConnectorProfileName: sdk.String("illum"),
            ConnectorType: operations.ListConnectorEntitiesRequestBodyConnectorTypeEnumLookoutMetrics.ToPointer(),
            EntitiesPath: sdk.String("accusantium"),
            MaxResults: sdk.Int64(306986),
            NextToken: sdk.String("sapiente"),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorEntitiesResponse != nil {
        // handle response
    }
}
```

## ListConnectors

Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConnectors(ctx, operations.ListConnectorsRequest{
        RequestBody: operations.ListConnectorsRequestBody{
            MaxResults: sdk.Int64(185232),
            NextToken: sdk.String("quibusdam"),
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        MaxResults: sdk.String("quasi"),
        NextToken: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorsResponse != nil {
        // handle response
    }
}
```

## ListFlows

 Lists all of the flows associated with your account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFlows(ctx, operations.ListFlowsRequest{
        RequestBody: operations.ListFlowsRequestBody{
            MaxResults: sdk.Int64(92027),
            NextToken: sdk.String("voluptate"),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFlowsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

 Retrieves the tags that are associated with a specified flow. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("non"),
        ResourceArn: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## RegisterConnector

Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterConnector(ctx, operations.RegisterConnectorRequest{
        RequestBody: operations.RegisterConnectorRequestBody{
            ClientToken: sdk.String("dolor"),
            ConnectorLabel: sdk.String("occaecati"),
            ConnectorProvisioningConfig: &operations.RegisterConnectorRequestBodyConnectorProvisioningConfig{
                Lambda: &shared.LambdaConnectorProvisioningConfig{
                    LambdaArn: "numquam",
                },
            },
            ConnectorProvisioningType: operations.RegisterConnectorRequestBodyConnectorProvisioningTypeEnumLambda.ToPointer(),
            Description: sdk.String("impedit"),
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterConnectorResponse != nil {
        // handle response
    }
}
```

## StartFlow

 Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartFlow(ctx, operations.StartFlowRequest{
        RequestBody: operations.StartFlowRequestBody{
            ClientToken: sdk.String("velit"),
            FlowName: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFlowResponse != nil {
        // handle response
    }
}
```

## StopFlow

 Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopFlow(ctx, operations.StopFlowRequest{
        RequestBody: operations.StopFlowRequestBody{
            FlowName: "officia",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopFlowResponse != nil {
        // handle response
    }
}
```

## TagResource

 Applies a tag to the specified flow. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "quod": "labore",
                "ab": "adipisci",
                "fuga": "id",
                "suscipit": "velit",
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        ResourceArn: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UnregisterConnector

Unregisters the custom connector registered in your account that matches the connector label provided in the request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UnregisterConnector(ctx, operations.UnregisterConnectorRequest{
        RequestBody: operations.UnregisterConnectorRequestBody{
            ConnectorLabel: "vel",
            ForceDelete: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnregisterConnectorResponse != nil {
        // handle response
    }
}
```

## UntagResource

 Removes a tag from the specified flow. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("cum"),
        ResourceArn: "consectetur",
        TagKeys: []string{
            "exercitationem",
            "earum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateConnectorProfile

 Updates a given connector profile associated with your account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateConnectorProfile(ctx, operations.UpdateConnectorProfileRequest{
        RequestBody: operations.UpdateConnectorProfileRequestBody{
            ClientToken: sdk.String("facere"),
            ConnectionMode: operations.UpdateConnectorProfileRequestBodyConnectionModeEnumPublic,
            ConnectorProfileConfig: operations.UpdateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "doloribus",
                        SecretKey: "suscipit",
                    },
                    CustomConnector: &shared.CustomConnectorProfileCredentials{
                        APIKey: &shared.APIKeyCredentials{
                            APIKey: "reiciendis",
                            APISecretKey: sdk.String("quidem"),
                        },
                        AuthenticationType: shared.AuthenticationTypeEnumCustom,
                        Basic: &shared.BasicAuthCredentials{
                            Password: "necessitatibus",
                            Username: "Elenora.Cartwright24",
                        },
                        Custom: &shared.CustomAuthCredentials{
                            CredentialsMap: map[string]string{
                                "beatae": "dignissimos",
                            },
                            CustomAuthenticationType: "a",
                        },
                        Oauth2: &shared.OAuth2Credentials{
                            AccessToken: sdk.String("debitis"),
                            ClientID: sdk.String("consectetur"),
                            ClientSecret: sdk.String("corporis"),
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: sdk.String("harum"),
                                RedirectURI: sdk.String("laboriosam"),
                            },
                            RefreshToken: sdk.String("ipsa"),
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "voluptates",
                        ApplicationKey: "libero",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "vitae",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: sdk.String("accusamus"),
                        ClientID: "similique",
                        ClientSecret: "tempora",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("aspernatur"),
                            RedirectURI: sdk.String("voluptas"),
                        },
                        RefreshToken: sdk.String("voluptas"),
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: sdk.String("voluptas"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("minima"),
                            RedirectURI: sdk.String("nobis"),
                        },
                        RefreshToken: sdk.String("dolorum"),
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "adipisci",
                        Datakey: "minus",
                        SecretAccessKey: "dolores",
                        UserID: "blanditiis",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: sdk.String("in"),
                        ClientID: "dolore",
                        ClientSecret: "aliquam",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("officiis"),
                            RedirectURI: sdk.String("temporibus"),
                        },
                    },
                    Pardot: &shared.PardotConnectorProfileCredentials{
                        AccessToken: sdk.String("ullam"),
                        ClientCredentialsArn: sdk.String("adipisci"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("cum"),
                            RedirectURI: sdk.String("blanditiis"),
                        },
                        RefreshToken: sdk.String("quas"),
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: sdk.String("hic"),
                        Username: sdk.String("Colleen_Nader"),
                    },
                    SAPOData: &shared.SAPODataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "totam",
                            Username: "Tristian.Heidenreich69",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: sdk.String("sed"),
                            ClientID: "reiciendis",
                            ClientSecret: "explicabo",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: sdk.String("asperiores"),
                                RedirectURI: sdk.String("facilis"),
                            },
                            RefreshToken: sdk.String("voluptate"),
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: sdk.String("expedita"),
                        ClientCredentialsArn: sdk.String("ab"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("iste"),
                            RedirectURI: sdk.String("dolore"),
                        },
                        RefreshToken: sdk.String("laborum"),
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "sed",
                        Username: "Isai.Johnson37",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "unde",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: sdk.String("architecto"),
                        ClientID: "suscipit",
                        ClientSecret: "sapiente",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("debitis"),
                            RedirectURI: sdk.String("illo"),
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "reiciendis",
                        Username: "Aileen.Lockman14",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "provident",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "eius",
                        Username: "Sophie_Emard",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: sdk.String("quos"),
                        ClientID: "voluptatibus",
                        ClientSecret: "tempora",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("tempora"),
                            RedirectURI: sdk.String("voluptate"),
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "ex": "sit",
                        "non": "officiis",
                        "praesentium": "facilis",
                        "quaerat": "incidunt",
                    },
                    CustomConnector: &shared.CustomConnectorProfileProperties{
                        OAuth2Properties: &shared.OAuth2Properties{
                            OAuth2GrantType: shared.OAuth2GrantTypeEnumClientCredentials,
                            TokenURL: "debitis",
                            TokenURLCustomProperties: map[string]string{
                                "sit": "nobis",
                                "error": "veniam",
                                "minima": "recusandae",
                            },
                        },
                        ProfileProperties: map[string]string{
                            "nulla": "magni",
                            "aperiam": "saepe",
                            "numquam": "veniam",
                            "in": "officiis",
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "beatae",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "laudantium",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "praesentium": "cum",
                        "laboriosam": "dolorum",
                    },
                    Honeycode: map[string]interface{}{
                        "error": "hic",
                        "expedita": "debitis",
                        "neque": "dolorum",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "nostrum",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "officia",
                    },
                    Pardot: &shared.PardotConnectorProfileProperties{
                        BusinessUnitID: sdk.String("dolorum"),
                        InstanceURL: sdk.String("corrupti"),
                        IsSandboxEnvironment: sdk.Bool(false),
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "accusamus",
                        BucketPrefix: sdk.String("tempora"),
                        ClusterIdentifier: sdk.String("atque"),
                        DataAPIRoleArn: sdk.String("fugit"),
                        DatabaseName: sdk.String("ut"),
                        DatabaseURL: sdk.String("fugiat"),
                        IsRedshiftServerless: sdk.Bool(false),
                        RoleArn: "voluptatem",
                        WorkgroupName: sdk.String("culpa"),
                    },
                    SAPOData: &shared.SAPODataConnectorProfileProperties{
                        ApplicationHostURL: "expedita",
                        ApplicationServicePath: "magnam",
                        ClientNumber: "consequatur",
                        LogonLanguage: sdk.String("esse"),
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "ipsam",
                            OAuthScopes: []string{
                                "voluptatum",
                            },
                            TokenURL: "quas",
                        },
                        PortNumber: 922112,
                        PrivateLinkServiceName: sdk.String("corporis"),
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: sdk.String("et"),
                        IsSandboxEnvironment: sdk.Bool(false),
                        UsePrivateLinkForMetadataAndAuthorization: sdk.Bool(false),
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "blanditiis",
                    },
                    Singular: map[string]interface{}{
                        "sed": "sit",
                        "vel": "nostrum",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "saepe",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: sdk.String("error"),
                        BucketName: "consequatur",
                        BucketPrefix: sdk.String("incidunt"),
                        PrivateLinkServiceName: sdk.String("reiciendis"),
                        Region: sdk.String("dolorem"),
                        Stage: "harum",
                        Warehouse: "dicta",
                    },
                    Trendmicro: map[string]interface{}{
                        "occaecati": "labore",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "quidem",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "atque",
                    },
                },
            },
            ConnectorProfileName: "laborum",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectorProfileResponse != nil {
        // handle response
    }
}
```

## UpdateConnectorRegistration

<p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateConnectorRegistration(ctx, operations.UpdateConnectorRegistrationRequest{
        RequestBody: operations.UpdateConnectorRegistrationRequestBody{
            ClientToken: sdk.String("unde"),
            ConnectorLabel: "reiciendis",
            ConnectorProvisioningConfig: &operations.UpdateConnectorRegistrationRequestBodyConnectorProvisioningConfig{
                Lambda: &shared.LambdaConnectorProvisioningConfig{
                    LambdaArn: "provident",
                },
            },
            Description: sdk.String("repellendus"),
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectorRegistrationResponse != nil {
        // handle response
    }
}
```

## UpdateFlow

 Updates an existing flow. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFlow(ctx, operations.UpdateFlowRequest{
        RequestBody: operations.UpdateFlowRequestBody{
            ClientToken: sdk.String("fuga"),
            Description: sdk.String("praesentium"),
            DestinationFlowConfigList: []shared.DestinationFlowConfig{
                shared.DestinationFlowConfig{
                    APIVersion: sdk.String("veniam"),
                    ConnectorProfileName: sdk.String("voluptatem"),
                    ConnectorType: shared.ConnectorTypeEnumUpsolver,
                    DestinationConnectorProperties: shared.DestinationConnectorProperties{
                        CustomConnector: &shared.CustomConnectorDestinationProperties{
                            CustomProperties: map[string]string{
                                "quasi": "atque",
                                "reprehenderit": "asperiores",
                                "totam": "suscipit",
                                "quidem": "maxime",
                            },
                            EntityName: "et",
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("esse"),
                                BucketPrefix: sdk.String("amet"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "ea",
                                "atque",
                                "error",
                                "officiis",
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumDelete.ToPointer(),
                        },
                        CustomerProfiles: &shared.CustomerProfilesDestinationProperties{
                            DomainName: "accusamus",
                            ObjectTypeName: sdk.String("natus"),
                        },
                        EventBridge: &shared.EventBridgeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("minima"),
                                BucketPrefix: sdk.String("aspernatur"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "ex",
                        },
                        Honeycode: &shared.HoneycodeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("maiores"),
                                BucketPrefix: sdk.String("corrupti"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "at",
                        },
                        LookoutMetrics: map[string]interface{}{
                            "blanditiis": "suscipit",
                            "repudiandae": "atque",
                            "atque": "sunt",
                        },
                        Marketo: &shared.MarketoDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("recusandae"),
                                BucketPrefix: sdk.String("dolorum"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "repellendus",
                        },
                        Redshift: &shared.RedshiftDestinationProperties{
                            BucketPrefix: sdk.String("labore"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("reiciendis"),
                                BucketPrefix: sdk.String("doloremque"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "repudiandae",
                            Object: "dicta",
                        },
                        S3: &shared.S3DestinationProperties{
                            BucketName: "accusantium",
                            BucketPrefix: sdk.String("beatae"),
                            S3OutputFormatConfig: &shared.S3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumNone.ToPointer(),
                                    TargetFileSize: sdk.Int64(316488),
                                },
                                FileType: shared.FileTypeEnumJSON.ToPointer(),
                                PrefixConfig: &shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumSchemaVersion,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumDay.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumFilename.ToPointer(),
                                },
                                PreserveSourceDataTyping: sdk.Bool(false),
                            },
                        },
                        SAPOData: &shared.SAPODataDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("saepe"),
                                BucketPrefix: sdk.String("consequuntur"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "officiis",
                                "perspiciatis",
                                "in",
                            },
                            ObjectPath: "adipisci",
                            SuccessResponseHandlingConfig: &shared.SuccessResponseHandlingConfig{
                                BucketName: sdk.String("eveniet"),
                                BucketPrefix: sdk.String("occaecati"),
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumInsert.ToPointer(),
                        },
                        Salesforce: &shared.SalesforceDestinationProperties{
                            DataTransferAPI: shared.SalesforceDataTransferAPIEnumAutomatic.ToPointer(),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("id"),
                                BucketPrefix: sdk.String("quis"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "error",
                                "illo",
                            },
                            Object: "corporis",
                            WriteOperationType: shared.WriteOperationTypeEnumUpdate.ToPointer(),
                        },
                        Snowflake: &shared.SnowflakeDestinationProperties{
                            BucketPrefix: sdk.String("eveniet"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("non"),
                                BucketPrefix: sdk.String("vero"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "doloremque",
                            Object: "iure",
                        },
                        Upsolver: &shared.UpsolverDestinationProperties{
                            BucketName: "ipsa",
                            BucketPrefix: sdk.String("totam"),
                            S3OutputFormatConfig: shared.UpsolverS3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumNone.ToPointer(),
                                    TargetFileSize: sdk.Int64(474668),
                                },
                                FileType: shared.FileTypeEnumParquet.ToPointer(),
                                PrefixConfig: shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumSchemaVersion,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumDay.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumPathAndFilename.ToPointer(),
                                },
                            },
                        },
                        Zendesk: &shared.ZendeskDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("ratione"),
                                BucketPrefix: sdk.String("laborum"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "voluptatum",
                                "rem",
                                "aliquam",
                            },
                            Object: "ad",
                            WriteOperationType: shared.WriteOperationTypeEnumDelete.ToPointer(),
                        },
                    },
                },
                shared.DestinationFlowConfig{
                    APIVersion: sdk.String("alias"),
                    ConnectorProfileName: sdk.String("corporis"),
                    ConnectorType: shared.ConnectorTypeEnumAmplitude,
                    DestinationConnectorProperties: shared.DestinationConnectorProperties{
                        CustomConnector: &shared.CustomConnectorDestinationProperties{
                            CustomProperties: map[string]string{
                                "mollitia": "voluptas",
                                "alias": "maiores",
                            },
                            EntityName: "reiciendis",
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("dolores"),
                                BucketPrefix: sdk.String("id"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "dolore",
                                "dolorum",
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumInsert.ToPointer(),
                        },
                        CustomerProfiles: &shared.CustomerProfilesDestinationProperties{
                            DomainName: "quae",
                            ObjectTypeName: sdk.String("recusandae"),
                        },
                        EventBridge: &shared.EventBridgeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("omnis"),
                                BucketPrefix: sdk.String("quaerat"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "molestiae",
                        },
                        Honeycode: &shared.HoneycodeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("ex"),
                                BucketPrefix: sdk.String("ut"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "culpa",
                        },
                        LookoutMetrics: map[string]interface{}{
                            "debitis": "laudantium",
                        },
                        Marketo: &shared.MarketoDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("eum"),
                                BucketPrefix: sdk.String("nemo"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "recusandae",
                        },
                        Redshift: &shared.RedshiftDestinationProperties{
                            BucketPrefix: sdk.String("esse"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("provident"),
                                BucketPrefix: sdk.String("quis"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "eum",
                            Object: "reiciendis",
                        },
                        S3: &shared.S3DestinationProperties{
                            BucketName: "provident",
                            BucketPrefix: sdk.String("aspernatur"),
                            S3OutputFormatConfig: &shared.S3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumNone.ToPointer(),
                                    TargetFileSize: sdk.Int64(96804),
                                },
                                FileType: shared.FileTypeEnumJSON.ToPointer(),
                                PrefixConfig: &shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumSchemaVersion,
                                        shared.PathPrefixEnumSchemaVersion,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumMinute.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumPath.ToPointer(),
                                },
                                PreserveSourceDataTyping: sdk.Bool(false),
                            },
                        },
                        SAPOData: &shared.SAPODataDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("ex"),
                                BucketPrefix: sdk.String("aliquid"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "repellat",
                            },
                            ObjectPath: "doloribus",
                            SuccessResponseHandlingConfig: &shared.SuccessResponseHandlingConfig{
                                BucketName: sdk.String("ullam"),
                                BucketPrefix: sdk.String("in"),
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumUpdate.ToPointer(),
                        },
                        Salesforce: &shared.SalesforceDestinationProperties{
                            DataTransferAPI: shared.SalesforceDataTransferAPIEnumRestSync.ToPointer(),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("officia"),
                                BucketPrefix: sdk.String("laborum"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "modi",
                                "voluptatibus",
                                "molestias",
                                "officiis",
                            },
                            Object: "sapiente",
                            WriteOperationType: shared.WriteOperationTypeEnumDelete.ToPointer(),
                        },
                        Snowflake: &shared.SnowflakeDestinationProperties{
                            BucketPrefix: sdk.String("vitae"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("rerum"),
                                BucketPrefix: sdk.String("tempora"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "quis",
                            Object: "inventore",
                        },
                        Upsolver: &shared.UpsolverDestinationProperties{
                            BucketName: "fugit",
                            BucketPrefix: sdk.String("cumque"),
                            S3OutputFormatConfig: shared.UpsolverS3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumNone.ToPointer(),
                                    TargetFileSize: sdk.Int64(21688),
                                },
                                FileType: shared.FileTypeEnumCsv.ToPointer(),
                                PrefixConfig: shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumExecutionID,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumMonth.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumPath.ToPointer(),
                                },
                            },
                        },
                        Zendesk: &shared.ZendeskDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("at"),
                                BucketPrefix: sdk.String("impedit"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "sapiente",
                            },
                            Object: "eum",
                            WriteOperationType: shared.WriteOperationTypeEnumInsert.ToPointer(),
                        },
                    },
                },
                shared.DestinationFlowConfig{
                    APIVersion: sdk.String("minima"),
                    ConnectorProfileName: sdk.String("beatae"),
                    ConnectorType: shared.ConnectorTypeEnumAmplitude,
                    DestinationConnectorProperties: shared.DestinationConnectorProperties{
                        CustomConnector: &shared.CustomConnectorDestinationProperties{
                            CustomProperties: map[string]string{
                                "earum": "soluta",
                                "hic": "illum",
                                "eaque": "earum",
                            },
                            EntityName: "perspiciatis",
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("maiores"),
                                BucketPrefix: sdk.String("debitis"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "porro",
                                "suscipit",
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumInsert.ToPointer(),
                        },
                        CustomerProfiles: &shared.CustomerProfilesDestinationProperties{
                            DomainName: "fugit",
                            ObjectTypeName: sdk.String("cumque"),
                        },
                        EventBridge: &shared.EventBridgeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("fuga"),
                                BucketPrefix: sdk.String("ratione"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "animi",
                        },
                        Honeycode: &shared.HoneycodeDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("necessitatibus"),
                                BucketPrefix: sdk.String("nulla"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "consequatur",
                        },
                        LookoutMetrics: map[string]interface{}{
                            "et": "ducimus",
                        },
                        Marketo: &shared.MarketoDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("natus"),
                                BucketPrefix: sdk.String("occaecati"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            Object: "suscipit",
                        },
                        Redshift: &shared.RedshiftDestinationProperties{
                            BucketPrefix: sdk.String("adipisci"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("quasi"),
                                BucketPrefix: sdk.String("magni"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "doloribus",
                            Object: "nulla",
                        },
                        S3: &shared.S3DestinationProperties{
                            BucketName: "necessitatibus",
                            BucketPrefix: sdk.String("ipsa"),
                            S3OutputFormatConfig: &shared.S3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumNone.ToPointer(),
                                    TargetFileSize: sdk.Int64(470621),
                                },
                                FileType: shared.FileTypeEnumJSON.ToPointer(),
                                PrefixConfig: &shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumExecutionID,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumDay.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumPath.ToPointer(),
                                },
                                PreserveSourceDataTyping: sdk.Bool(false),
                            },
                        },
                        SAPOData: &shared.SAPODataDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("maiores"),
                                BucketPrefix: sdk.String("reiciendis"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "architecto",
                                "fugiat",
                            },
                            ObjectPath: "doloremque",
                            SuccessResponseHandlingConfig: &shared.SuccessResponseHandlingConfig{
                                BucketName: sdk.String("dicta"),
                                BucketPrefix: sdk.String("odio"),
                            },
                            WriteOperationType: shared.WriteOperationTypeEnumUpsert.ToPointer(),
                        },
                        Salesforce: &shared.SalesforceDestinationProperties{
                            DataTransferAPI: shared.SalesforceDataTransferAPIEnumBulkv2.ToPointer(),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("ex"),
                                BucketPrefix: sdk.String("consectetur"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "ipsa",
                                "laborum",
                            },
                            Object: "sunt",
                            WriteOperationType: shared.WriteOperationTypeEnumUpsert.ToPointer(),
                        },
                        Snowflake: &shared.SnowflakeDestinationProperties{
                            BucketPrefix: sdk.String("fugiat"),
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("expedita"),
                                BucketPrefix: sdk.String("aliquid"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IntermediateBucketName: "officia",
                            Object: "suscipit",
                        },
                        Upsolver: &shared.UpsolverDestinationProperties{
                            BucketName: "aliquid",
                            BucketPrefix: sdk.String("perferendis"),
                            S3OutputFormatConfig: shared.UpsolverS3OutputFormatConfig{
                                AggregationConfig: &shared.AggregationConfig{
                                    AggregationType: shared.AggregationTypeEnumNone.ToPointer(),
                                    TargetFileSize: sdk.Int64(374753),
                                },
                                FileType: shared.FileTypeEnumJSON.ToPointer(),
                                PrefixConfig: shared.PrefixConfig{
                                    PathPrefixHierarchy: []shared.PathPrefixEnum{
                                        shared.PathPrefixEnumExecutionID,
                                        shared.PathPrefixEnumSchemaVersion,
                                        shared.PathPrefixEnumSchemaVersion,
                                    },
                                    PrefixFormat: shared.PrefixFormatEnumMinute.ToPointer(),
                                    PrefixType: shared.PrefixTypeEnumPath.ToPointer(),
                                },
                            },
                        },
                        Zendesk: &shared.ZendeskDestinationProperties{
                            ErrorHandlingConfig: &shared.ErrorHandlingConfig{
                                BucketName: sdk.String("laborum"),
                                BucketPrefix: sdk.String("libero"),
                                FailOnFirstDestinationError: sdk.Bool(false),
                            },
                            IDFieldNames: []string{
                                "deleniti",
                                "enim",
                            },
                            Object: "vitae",
                            WriteOperationType: shared.WriteOperationTypeEnumDelete.ToPointer(),
                        },
                    },
                },
            },
            FlowName: "ex",
            MetadataCatalogConfig: &operations.UpdateFlowRequestBodyMetadataCatalogConfig{
                GlueDataCatalog: &shared.GlueDataCatalogConfig{
                    DatabaseName: "quo",
                    RoleArn: "ex",
                    TablePrefix: "ut",
                },
            },
            SourceFlowConfig: operations.UpdateFlowRequestBodySourceFlowConfig{
                APIVersion: sdk.String("ad"),
                ConnectorProfileName: sdk.String("expedita"),
                ConnectorType: shared.ConnectorTypeEnumSalesforce.ToPointer(),
                IncrementalPullConfig: &shared.IncrementalPullConfig{
                    DatetimeTypeFieldName: sdk.String("molestias"),
                },
                SourceConnectorProperties: &shared.SourceConnectorProperties{
                    Amplitude: &shared.AmplitudeSourceProperties{
                        Object: "cum",
                    },
                    CustomConnector: &shared.CustomConnectorSourceProperties{
                        CustomProperties: map[string]string{
                            "beatae": "voluptatum",
                            "omnis": "veritatis",
                        },
                        EntityName: "rerum",
                    },
                    Datadog: &shared.DatadogSourceProperties{
                        Object: "est",
                    },
                    Dynatrace: &shared.DynatraceSourceProperties{
                        Object: "culpa",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsSourceProperties{
                        Object: "voluptatem",
                    },
                    InforNexus: &shared.InforNexusSourceProperties{
                        Object: "sapiente",
                    },
                    Marketo: &shared.MarketoSourceProperties{
                        Object: "officiis",
                    },
                    Pardot: &shared.PardotSourceProperties{
                        Object: "architecto",
                    },
                    S3: &shared.S3SourceProperties{
                        BucketName: "fuga",
                        BucketPrefix: sdk.String("pariatur"),
                        S3InputFormatConfig: &shared.S3InputFormatConfig{
                            S3InputFileType: shared.S3InputFileTypeEnumJSON.ToPointer(),
                        },
                    },
                    SAPOData: &shared.SAPODataSourceProperties{
                        ObjectPath: sdk.String("voluptatem"),
                    },
                    Salesforce: &shared.SalesforceSourceProperties{
                        DataTransferAPI: shared.SalesforceDataTransferAPIEnumAutomatic.ToPointer(),
                        EnableDynamicFieldUpdate: sdk.Bool(false),
                        IncludeDeletedRecords: sdk.Bool(false),
                        Object: "deleniti",
                    },
                    ServiceNow: &shared.ServiceNowSourceProperties{
                        Object: "earum",
                    },
                    Singular: &shared.SingularSourceProperties{
                        Object: "ex",
                    },
                    Slack: &shared.SlackSourceProperties{
                        Object: "sapiente",
                    },
                    Trendmicro: &shared.TrendmicroSourceProperties{
                        Object: "rem",
                    },
                    Veeva: &shared.VeevaSourceProperties{
                        DocumentType: sdk.String("minus"),
                        IncludeAllVersions: sdk.Bool(false),
                        IncludeRenditions: sdk.Bool(false),
                        IncludeSourceFiles: sdk.Bool(false),
                        Object: "nemo",
                    },
                    Zendesk: &shared.ZendeskSourceProperties{
                        Object: "asperiores",
                    },
                },
            },
            Tasks: []shared.Task{
                shared.Task{
                    ConnectorOperator: &shared.ConnectorOperator{
                        Amplitude: shared.AmplitudeConnectorOperatorEnumBetween.ToPointer(),
                        CustomConnector: shared.OperatorEnumEqualTo.ToPointer(),
                        Datadog: shared.DatadogConnectorOperatorEnumProjection.ToPointer(),
                        Dynatrace: shared.DynatraceConnectorOperatorEnumValidateNonNegative.ToPointer(),
                        GoogleAnalytics: shared.GoogleAnalyticsConnectorOperatorEnumBetween.ToPointer(),
                        InforNexus: shared.InforNexusConnectorOperatorEnumValidateNonZero.ToPointer(),
                        Marketo: shared.MarketoConnectorOperatorEnumValidateNonNegative.ToPointer(),
                        Pardot: shared.PardotConnectorOperatorEnumValidateNonNull.ToPointer(),
                        S3: shared.S3ConnectorOperatorEnumNotEqualTo.ToPointer(),
                        SAPOData: shared.SAPODataConnectorOperatorEnumMaskAll.ToPointer(),
                        Salesforce: shared.SalesforceConnectorOperatorEnumBetween.ToPointer(),
                        ServiceNow: shared.ServiceNowConnectorOperatorEnumGreaterThanOrEqualTo.ToPointer(),
                        Singular: shared.SingularConnectorOperatorEnumEqualTo.ToPointer(),
                        Slack: shared.SlackConnectorOperatorEnumSubtraction.ToPointer(),
                        Trendmicro: shared.TrendmicroConnectorOperatorEnumEqualTo.ToPointer(),
                        Veeva: shared.VeevaConnectorOperatorEnumLessThanOrEqualTo.ToPointer(),
                        Zendesk: shared.ZendeskConnectorOperatorEnumMultiplication.ToPointer(),
                    },
                    DestinationField: sdk.String("consequatur"),
                    SourceFields: []string{
                        "sit",
                    },
                    TaskProperties: map[string]string{
                        "fugit": "ab",
                        "laudantium": "quae",
                    },
                    TaskType: shared.TaskTypeEnumMap,
                },
            },
            TriggerConfig: operations.UpdateFlowRequestBodyTriggerConfig{
                TriggerProperties: &shared.TriggerProperties{
                    Scheduled: &shared.ScheduledTriggerProperties{
                        DataPullMode: shared.DataPullModeEnumComplete.ToPointer(),
                        FirstExecutionFrom: types.MustTimeFromString("2022-11-02T19:49:34.406Z"),
                        FlowErrorDeactivationThreshold: sdk.Int64(55107),
                        ScheduleEndTime: types.MustTimeFromString("2021-03-06T19:49:32.641Z"),
                        ScheduleExpression: "impedit",
                        ScheduleOffset: sdk.Int64(884952),
                        ScheduleStartTime: types.MustTimeFromString("2022-02-07T11:51:09.998Z"),
                        Timezone: sdk.String("sed"),
                    },
                },
                TriggerType: shared.TriggerTypeEnumScheduled.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFlowResponse != nil {
        // handle response
    }
}
```
