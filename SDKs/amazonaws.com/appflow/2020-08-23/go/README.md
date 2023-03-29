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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateConnectorProfileRequest{
        Headers: operations.CreateConnectorProfileHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateConnectorProfileRequestBody{
            ConnectionMode: "Private",
            ConnectorLabel: "nihil",
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "fuga",
                        SecretKey: "facilis",
                    },
                    CustomConnector: &shared.CustomConnectorProfileCredentials{
                        APIKey: &shared.APIKeyCredentials{
                            APIKey: "eum",
                            APISecretKey: "iusto",
                        },
                        AuthenticationType: "APIKEY",
                        Basic: &shared.BasicAuthCredentials{
                            Password: "saepe",
                            Username: "Anahi38",
                        },
                        Custom: &shared.CustomAuthCredentials{
                            CredentialsMap: map[string]string{
                                "autem": "vel",
                                "non": "deleniti",
                            },
                            CustomAuthenticationType: "similique",
                        },
                        Oauth2: &shared.OAuth2Credentials{
                            AccessToken: "reprehenderit",
                            ClientID: "molestiae",
                            ClientSecret: "quo",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "quasi",
                                RedirectURI: "laboriosam",
                            },
                            RefreshToken: "dicta",
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "est",
                        ApplicationKey: "voluptatem",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "consequatur",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: "fugiat",
                        ClientID: "a",
                        ClientSecret: "omnis",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "eos",
                            RedirectURI: "accusamus",
                        },
                        RefreshToken: "accusamus",
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: "reiciendis",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "rem",
                            RedirectURI: "quibusdam",
                        },
                        RefreshToken: "et",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "praesentium",
                        Datakey: "occaecati",
                        SecretAccessKey: "dolor",
                        UserID: "soluta",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: "sed",
                        ClientID: "quisquam",
                        ClientSecret: "rerum",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "culpa",
                            RedirectURI: "qui",
                        },
                    },
                    Pardot: &shared.PardotConnectorProfileCredentials{
                        AccessToken: "sed",
                        ClientCredentialsArn: "rerum",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "possimus",
                            RedirectURI: "occaecati",
                        },
                        RefreshToken: "odit",
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: "esse",
                        Username: "Jared77",
                    },
                    SAPOData: &shared.SAPODataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "id",
                            Username: "Jackson.Emmerich",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: "sit",
                            ClientID: "quia",
                            ClientSecret: "et",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "voluptatem",
                                RedirectURI: "laborum",
                            },
                            RefreshToken: "modi",
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: "et",
                        ClientCredentialsArn: "iure",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "earum",
                            RedirectURI: "ut",
                        },
                        RefreshToken: "soluta",
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "qui",
                        Username: "Floyd_Moore",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "optio",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: "aspernatur",
                        ClientID: "inventore",
                        ClientSecret: "ut",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "libero",
                            RedirectURI: "et",
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "libero",
                        Username: "Cecilia.Ebert",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "placeat",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "ipsam",
                        Username: "Lenora57",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: "eaque",
                        ClientID: "odio",
                        ClientSecret: "harum",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "doloribus",
                            RedirectURI: "a",
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "et": "non",
                    },
                    CustomConnector: &shared.CustomConnectorProfileProperties{
                        OAuth2Properties: &shared.OAuth2Properties{
                            OAuth2GrantType: "AUTHORIZATION_CODE",
                            TokenURL: "neque",
                            TokenURLCustomProperties: map[string]string{
                                "et": "culpa",
                                "aliquam": "esse",
                                "totam": "voluptatum",
                                "et": "fuga",
                            },
                        },
                        ProfileProperties: map[string]string{
                            "laboriosam": "aut",
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "cum",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "expedita",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "eos": "omnis",
                        "adipisci": "hic",
                    },
                    Honeycode: map[string]interface{}{
                        "distinctio": "qui",
                        "perferendis": "aspernatur",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "fuga",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "quo",
                    },
                    Pardot: &shared.PardotConnectorProfileProperties{
                        BusinessUnitID: "tempore",
                        InstanceURL: "explicabo",
                        IsSandboxEnvironment: false,
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "aut",
                        BucketPrefix: "reiciendis",
                        ClusterIdentifier: "debitis",
                        DataAPIRoleArn: "totam",
                        DatabaseName: "molestias",
                        DatabaseURL: "reiciendis",
                        IsRedshiftServerless: false,
                        RoleArn: "illo",
                        WorkgroupName: "id",
                    },
                    SAPOData: &shared.SAPODataConnectorProfileProperties{
                        ApplicationHostURL: "qui",
                        ApplicationServicePath: "quod",
                        ClientNumber: "sit",
                        LogonLanguage: "eaque",
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "odio",
                            OAuthScopes: []string{
                                "reiciendis",
                                "sed",
                            },
                            TokenURL: "ea",
                        },
                        PortNumber: 296140,
                        PrivateLinkServiceName: "deleniti",
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: "sed",
                        IsSandboxEnvironment: false,
                        UsePrivateLinkForMetadataAndAuthorization: false,
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "est",
                    },
                    Singular: map[string]interface{}{
                        "aut": "esse",
                        "sint": "veritatis",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "numquam",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: "eligendi",
                        BucketName: "error",
                        BucketPrefix: "similique",
                        PrivateLinkServiceName: "et",
                        Region: "ut",
                        Stage: "molestias",
                        Warehouse: "cupiditate",
                    },
                    Trendmicro: map[string]interface{}{
                        "explicabo": "et",
                        "in": "vitae",
                        "non": "minima",
                        "voluptatem": "aut",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "libero",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "voluptas",
                    },
                },
            },
            ConnectorProfileName: "magni",
            ConnectorType: "Veeva",
            KmsArn: "porro",
        },
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
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
