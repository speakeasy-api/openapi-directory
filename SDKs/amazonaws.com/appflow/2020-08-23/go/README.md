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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateConnectorProfileRequest{
        RequestBody: operations.CreateConnectorProfileRequestBody{
            ConnectionMode: "Private",
            ConnectorLabel: "provident",
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "distinctio",
                        SecretKey: "quibusdam",
                    },
                    CustomConnector: &shared.CustomConnectorProfileCredentials{
                        APIKey: &shared.APIKeyCredentials{
                            APIKey: "unde",
                            APISecretKey: "nulla",
                        },
                        AuthenticationType: "BASIC",
                        Basic: &shared.BasicAuthCredentials{
                            Password: "illum",
                            Username: "Henry.Mueller",
                        },
                        Custom: &shared.CustomAuthCredentials{
                            CredentialsMap: map[string]string{
                                "magnam": "debitis",
                                "ipsa": "delectus",
                            },
                            CustomAuthenticationType: "tempora",
                        },
                        Oauth2: &shared.OAuth2Credentials{
                            AccessToken: "suscipit",
                            ClientID: "molestiae",
                            ClientSecret: "minus",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "placeat",
                                RedirectURI: "voluptatum",
                            },
                            RefreshToken: "iusto",
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "excepturi",
                        ApplicationKey: "nisi",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "recusandae",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: "temporibus",
                        ClientID: "ab",
                        ClientSecret: "quis",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "veritatis",
                            RedirectURI: "deserunt",
                        },
                        RefreshToken: "perferendis",
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: "ipsam",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "repellendus",
                            RedirectURI: "sapiente",
                        },
                        RefreshToken: "quo",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "odit",
                        Datakey: "at",
                        SecretAccessKey: "at",
                        UserID: "maiores",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: "molestiae",
                        ClientID: "quod",
                        ClientSecret: "quod",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "esse",
                            RedirectURI: "totam",
                        },
                    },
                    Pardot: &shared.PardotConnectorProfileCredentials{
                        AccessToken: "porro",
                        ClientCredentialsArn: "dolorum",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "dicta",
                            RedirectURI: "nam",
                        },
                        RefreshToken: "officia",
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: "occaecati",
                        Username: "Buck_Lind52",
                    },
                    SAPOData: &shared.SAPODataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "beatae",
                            Username: "Haskell18",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: "impedit",
                            ClientID: "cum",
                            ClientSecret: "esse",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "ipsum",
                                RedirectURI: "excepturi",
                            },
                            RefreshToken: "aspernatur",
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: "perferendis",
                        ClientCredentialsArn: "ad",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "natus",
                            RedirectURI: "sed",
                        },
                        RefreshToken: "iste",
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "dolor",
                        Username: "Lexie_Howe68",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "in",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: "corporis",
                        ClientID: "iste",
                        ClientSecret: "iure",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "saepe",
                            RedirectURI: "quidem",
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "architecto",
                        Username: "Andy_Wisozk67",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "dolores",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "dolorem",
                        Username: "Florian.Champlin60",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: "nemo",
                        ClientID: "minima",
                        ClientSecret: "excepturi",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "accusantium",
                            RedirectURI: "iure",
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
                            OAuth2GrantType: "CLIENT_CREDENTIALS",
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
                        BusinessUnitID: "voluptatibus",
                        InstanceURL: "vero",
                        IsSandboxEnvironment: false,
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "nihil",
                        BucketPrefix: "praesentium",
                        ClusterIdentifier: "voluptatibus",
                        DataAPIRoleArn: "ipsa",
                        DatabaseName: "omnis",
                        DatabaseURL: "voluptate",
                        IsRedshiftServerless: false,
                        RoleArn: "cum",
                        WorkgroupName: "perferendis",
                    },
                    SAPOData: &shared.SAPODataConnectorProfileProperties{
                        ApplicationHostURL: "doloremque",
                        ApplicationServicePath: "reprehenderit",
                        ClientNumber: "ut",
                        LogonLanguage: "maiores",
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "dicta",
                            OAuthScopes: []string{
                                "dolore",
                                "iusto",
                            },
                            TokenURL: "dicta",
                        },
                        PortNumber: 688661,
                        PrivateLinkServiceName: "enim",
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: "accusamus",
                        IsSandboxEnvironment: false,
                        UsePrivateLinkForMetadataAndAuthorization: false,
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
                        AccountName: "voluptates",
                        BucketName: "quasi",
                        BucketPrefix: "repudiandae",
                        PrivateLinkServiceName: "sint",
                        Region: "veritatis",
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
            ConnectorType: "Googleanalytics",
            KmsArn: "modi",
        },
        XAmzAlgorithm: "qui",
        XAmzContentSha256: "aliquid",
        XAmzCredential: "cupiditate",
        XAmzDate: "quos",
        XAmzSecurityToken: "perferendis",
        XAmzSignature: "magni",
        XAmzSignedHeaders: "assumenda",
    }

    ctx := context.Background()
    res, err := s.CreateConnectorProfile(ctx, req)
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

### SDK SDK

* `CreateConnectorProfile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* `CreateFlow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `DeleteConnectorProfile` -  Enables you to delete an existing connector profile. 
* `DeleteFlow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `DescribeConnector` - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* `DescribeConnectorEntity` -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* `DescribeConnectorProfiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `DescribeConnectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `DescribeFlow` -  Provides a description of the specified flow. 
* `DescribeFlowExecutionRecords` -  Fetches the execution history of the flow. 
* `ListConnectorEntities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `ListConnectors` - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* `ListFlows` -  Lists all of the flows associated with your account. 
* `ListTagsForResource` -  Retrieves the tags that are associated with a specified flow. 
* `RegisterConnector` - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* `StartFlow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `StopFlow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `TagResource` -  Applies a tag to the specified flow. 
* `UnregisterConnector` - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* `UntagResource` -  Removes a tag from the specified flow. 
* `UpdateConnectorProfile` -  Updates a given connector profile associated with your account. 
* `UpdateConnectorRegistration` - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* `UpdateFlow` -  Updates an existing flow. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
