# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appflow/2020-08-23/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.CreateConnectorProfile(ctx, operations.CreateConnectorProfileRequest{
        RequestBody: operations.CreateConnectorProfileRequestBody{
            ClientToken: sdk.String("corrupti"),
            ConnectionMode: operations.CreateConnectorProfileRequestBodyConnectionModeEnumPrivate,
            ConnectorLabel: sdk.String("distinctio"),
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "quibusdam",
                        SecretKey: "unde",
                    },
                    CustomConnector: &shared.CustomConnectorProfileCredentials{
                        APIKey: &shared.APIKeyCredentials{
                            APIKey: "nulla",
                            APISecretKey: sdk.String("corrupti"),
                        },
                        AuthenticationType: shared.AuthenticationTypeEnumCustom,
                        Basic: &shared.BasicAuthCredentials{
                            Password: "vel",
                            Username: "Linda.Oberbrunner",
                        },
                        Custom: &shared.CustomAuthCredentials{
                            CredentialsMap: map[string]string{
                                "debitis": "ipsa",
                                "delectus": "tempora",
                            },
                            CustomAuthenticationType: "suscipit",
                        },
                        Oauth2: &shared.OAuth2Credentials{
                            AccessToken: sdk.String("molestiae"),
                            ClientID: sdk.String("minus"),
                            ClientSecret: sdk.String("placeat"),
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: sdk.String("voluptatum"),
                                RedirectURI: sdk.String("iusto"),
                            },
                            RefreshToken: sdk.String("excepturi"),
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "nisi",
                        ApplicationKey: "recusandae",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "temporibus",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: sdk.String("ab"),
                        ClientID: "quis",
                        ClientSecret: "veritatis",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("deserunt"),
                            RedirectURI: sdk.String("perferendis"),
                        },
                        RefreshToken: sdk.String("ipsam"),
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: sdk.String("repellendus"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("sapiente"),
                            RedirectURI: sdk.String("quo"),
                        },
                        RefreshToken: sdk.String("odit"),
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "at",
                        Datakey: "at",
                        SecretAccessKey: "maiores",
                        UserID: "molestiae",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: sdk.String("quod"),
                        ClientID: "quod",
                        ClientSecret: "esse",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("totam"),
                            RedirectURI: sdk.String("porro"),
                        },
                    },
                    Pardot: &shared.PardotConnectorProfileCredentials{
                        AccessToken: sdk.String("dolorum"),
                        ClientCredentialsArn: sdk.String("dicta"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("nam"),
                            RedirectURI: sdk.String("officia"),
                        },
                        RefreshToken: sdk.String("occaecati"),
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: sdk.String("fugit"),
                        Username: sdk.String("Kale_Welch10"),
                    },
                    SAPOData: &shared.SAPODataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "commodi",
                            Username: "Jaren77",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: sdk.String("cum"),
                            ClientID: "esse",
                            ClientSecret: "ipsum",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: sdk.String("excepturi"),
                                RedirectURI: sdk.String("aspernatur"),
                            },
                            RefreshToken: sdk.String("perferendis"),
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: sdk.String("ad"),
                        ClientCredentialsArn: sdk.String("natus"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("sed"),
                            RedirectURI: sdk.String("iste"),
                        },
                        RefreshToken: sdk.String("dolor"),
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "natus",
                        Username: "Gertrude_Welch44",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "corporis",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: sdk.String("iste"),
                        ClientID: "iure",
                        ClientSecret: "saepe",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("quidem"),
                            RedirectURI: sdk.String("architecto"),
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "ipsa",
                        Username: "Waino_Orn",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "dolores",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "dolorem",
                        Username: "Florian.Champlin60",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: sdk.String("nemo"),
                        ClientID: "minima",
                        ClientSecret: "excepturi",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("accusantium"),
                            RedirectURI: sdk.String("iure"),
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "doloribus": "sapiente",
                        "architecto": "mollitia",
                        "dolorem": "culpa",
                    },
                    CustomConnector: &shared.CustomConnectorProfileProperties{
                        OAuth2Properties: &shared.OAuth2Properties{
                            OAuth2GrantType: shared.OAuth2GrantTypeEnumClientCredentials,
                            TokenURL: "repellat",
                            TokenURLCustomProperties: map[string]string{
                                "occaecati": "numquam",
                                "commodi": "quam",
                                "molestiae": "velit",
                            },
                        },
                        ProfileProperties: map[string]string{
                            "quia": "quis",
                            "vitae": "laborum",
                            "animi": "enim",
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "odit",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "quo",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "tenetur": "ipsam",
                    },
                    Honeycode: map[string]interface{}{
                        "possimus": "aut",
                        "quasi": "error",
                        "temporibus": "laborum",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "quasi",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "reiciendis",
                    },
                    Pardot: &shared.PardotConnectorProfileProperties{
                        BusinessUnitID: sdk.String("voluptatibus"),
                        InstanceURL: sdk.String("vero"),
                        IsSandboxEnvironment: sdk.Bool(false),
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "nihil",
                        BucketPrefix: sdk.String("praesentium"),
                        ClusterIdentifier: sdk.String("voluptatibus"),
                        DataAPIRoleArn: sdk.String("ipsa"),
                        DatabaseName: sdk.String("omnis"),
                        DatabaseURL: sdk.String("voluptate"),
                        IsRedshiftServerless: sdk.Bool(false),
                        RoleArn: "cum",
                        WorkgroupName: sdk.String("perferendis"),
                    },
                    SAPOData: &shared.SAPODataConnectorProfileProperties{
                        ApplicationHostURL: "doloremque",
                        ApplicationServicePath: "reprehenderit",
                        ClientNumber: "ut",
                        LogonLanguage: sdk.String("maiores"),
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "dicta",
                            OAuthScopes: []string{
                                "dolore",
                                "iusto",
                            },
                            TokenURL: "dicta",
                        },
                        PortNumber: 688661,
                        PrivateLinkServiceName: sdk.String("enim"),
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: sdk.String("accusamus"),
                        IsSandboxEnvironment: sdk.Bool(false),
                        UsePrivateLinkForMetadataAndAuthorization: sdk.Bool(false),
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "commodi",
                    },
                    Singular: map[string]interface{}{
                        "quae": "ipsum",
                        "quidem": "molestias",
                        "excepturi": "pariatur",
                        "modi": "praesentium",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "rem",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: sdk.String("voluptates"),
                        BucketName: "quasi",
                        BucketPrefix: sdk.String("repudiandae"),
                        PrivateLinkServiceName: sdk.String("sint"),
                        Region: sdk.String("veritatis"),
                        Stage: "itaque",
                        Warehouse: "incidunt",
                    },
                    Trendmicro: map[string]interface{}{
                        "consequatur": "est",
                        "quibusdam": "explicabo",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "deserunt",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "distinctio",
                    },
                },
            },
            ConnectorProfileName: "quibusdam",
            ConnectorType: operations.CreateConnectorProfileRequestBodyConnectorTypeEnumGoogleanalytics,
            KmsArn: sdk.String("modi"),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorProfileResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateConnectorProfile](docs/sdk/README.md#createconnectorprofile) -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* [CreateFlow](docs/sdk/README.md#createflow) -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* [DeleteConnectorProfile](docs/sdk/README.md#deleteconnectorprofile) -  Enables you to delete an existing connector profile. 
* [DeleteFlow](docs/sdk/README.md#deleteflow) -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* [DescribeConnector](docs/sdk/README.md#describeconnector) - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* [DescribeConnectorEntity](docs/sdk/README.md#describeconnectorentity) -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* [DescribeConnectorProfiles](docs/sdk/README.md#describeconnectorprofiles) - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* [DescribeConnectors](docs/sdk/README.md#describeconnectors) -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* [DescribeFlow](docs/sdk/README.md#describeflow) -  Provides a description of the specified flow. 
* [DescribeFlowExecutionRecords](docs/sdk/README.md#describeflowexecutionrecords) -  Fetches the execution history of the flow. 
* [ListConnectorEntities](docs/sdk/README.md#listconnectorentities) -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* [ListConnectors](docs/sdk/README.md#listconnectors) - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* [ListFlows](docs/sdk/README.md#listflows) -  Lists all of the flows associated with your account. 
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) -  Retrieves the tags that are associated with a specified flow. 
* [RegisterConnector](docs/sdk/README.md#registerconnector) - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* [StartFlow](docs/sdk/README.md#startflow) -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* [StopFlow](docs/sdk/README.md#stopflow) -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* [TagResource](docs/sdk/README.md#tagresource) -  Applies a tag to the specified flow. 
* [UnregisterConnector](docs/sdk/README.md#unregisterconnector) - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* [UntagResource](docs/sdk/README.md#untagresource) -  Removes a tag from the specified flow. 
* [UpdateConnectorProfile](docs/sdk/README.md#updateconnectorprofile) -  Updates a given connector profile associated with your account. 
* [UpdateConnectorRegistration](docs/sdk/README.md#updateconnectorregistration) - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* [UpdateFlow](docs/sdk/README.md#updateflow) -  Updates an existing flow. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
