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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateConnectorProfileRequestBody{
            ConnectionMode: "Private",
            ConnectorLabel: "vel",
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "error",
                        SecretKey: "deserunt",
                    },
                    CustomConnector: &shared.CustomConnectorProfileCredentials{
                        APIKey: &shared.APIKeyCredentials{
                            APIKey: "suscipit",
                            APISecretKey: "iure",
                        },
                        AuthenticationType: "APIKEY",
                        Basic: &shared.BasicAuthCredentials{
                            Password: "debitis",
                            Username: "Anahi38",
                        },
                        Custom: &shared.CustomAuthCredentials{
                            CredentialsMap: map[string]string{
                                "minus": "placeat",
                                "voluptatum": "iusto",
                            },
                            CustomAuthenticationType: "excepturi",
                        },
                        Oauth2: &shared.OAuth2Credentials{
                            AccessToken: "nisi",
                            ClientID: "recusandae",
                            ClientSecret: "temporibus",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "ab",
                                RedirectURI: "quis",
                            },
                            RefreshToken: "veritatis",
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "deserunt",
                        ApplicationKey: "perferendis",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "ipsam",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: "repellendus",
                        ClientID: "sapiente",
                        ClientSecret: "quo",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "odit",
                            RedirectURI: "at",
                        },
                        RefreshToken: "at",
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: "maiores",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "molestiae",
                            RedirectURI: "quod",
                        },
                        RefreshToken: "quod",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "esse",
                        Datakey: "totam",
                        SecretAccessKey: "porro",
                        UserID: "dolorum",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: "dicta",
                        ClientID: "nam",
                        ClientSecret: "officia",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "occaecati",
                            RedirectURI: "fugit",
                        },
                    },
                    Pardot: &shared.PardotConnectorProfileCredentials{
                        AccessToken: "deleniti",
                        ClientCredentialsArn: "hic",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "optio",
                            RedirectURI: "totam",
                        },
                        RefreshToken: "beatae",
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: "commodi",
                        Username: "Jaren77",
                    },
                    SAPOData: &shared.SAPODataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "cum",
                            Username: "Jacky.Emmerich",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: "perferendis",
                            ClientID: "ad",
                            ClientSecret: "natus",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "sed",
                                RedirectURI: "iste",
                            },
                            RefreshToken: "dolor",
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: "natus",
                        ClientCredentialsArn: "laboriosam",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "hic",
                            RedirectURI: "saepe",
                        },
                        RefreshToken: "fuga",
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "in",
                        Username: "Floy_Moore",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "quidem",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: "architecto",
                        ClientID: "ipsa",
                        ClientSecret: "reiciendis",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "est",
                            RedirectURI: "mollitia",
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "laborum",
                        Username: "Cecilia.Ebert",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "nobis",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "enim",
                        Username: "Lenore57",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: "accusantium",
                        ClientID: "iure",
                        ClientSecret: "culpa",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "doloribus",
                            RedirectURI: "sapiente",
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "mollitia": "dolorem",
                    },
                    CustomConnector: &shared.CustomConnectorProfileProperties{
                        OAuth2Properties: &shared.OAuth2Properties{
                            OAuth2GrantType: "AUTHORIZATION_CODE",
                            TokenURL: "consequuntur",
                            TokenURLCustomProperties: map[string]string{
                                "mollitia": "occaecati",
                                "numquam": "commodi",
                                "quam": "molestiae",
                                "velit": "error",
                            },
                        },
                        ProfileProperties: map[string]string{
                            "quis": "vitae",
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "laborum",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "animi",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "odit": "quo",
                        "sequi": "tenetur",
                    },
                    Honeycode: map[string]interface{}{
                        "id": "possimus",
                        "aut": "quasi",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "error",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "temporibus",
                    },
                    Pardot: &shared.PardotConnectorProfileProperties{
                        BusinessUnitID: "laborum",
                        InstanceURL: "quasi",
                        IsSandboxEnvironment: false,
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "reiciendis",
                        BucketPrefix: "voluptatibus",
                        ClusterIdentifier: "vero",
                        DataAPIRoleArn: "nihil",
                        DatabaseName: "praesentium",
                        DatabaseURL: "voluptatibus",
                        IsRedshiftServerless: false,
                        RoleArn: "ipsa",
                        WorkgroupName: "omnis",
                    },
                    SAPOData: &shared.SAPODataConnectorProfileProperties{
                        ApplicationHostURL: "voluptate",
                        ApplicationServicePath: "cum",
                        ClientNumber: "perferendis",
                        LogonLanguage: "doloremque",
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "reprehenderit",
                            OAuthScopes: []string{
                                "maiores",
                                "dicta",
                            },
                            TokenURL: "corporis",
                        },
                        PortNumber: 296140,
                        PrivateLinkServiceName: "iusto",
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: "dicta",
                        IsSandboxEnvironment: false,
                        UsePrivateLinkForMetadataAndAuthorization: false,
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "harum",
                    },
                    Singular: map[string]interface{}{
                        "accusamus": "commodi",
                        "repudiandae": "quae",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "ipsum",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: "quidem",
                        BucketName: "molestias",
                        BucketPrefix: "excepturi",
                        PrivateLinkServiceName: "pariatur",
                        Region: "modi",
                        Stage: "praesentium",
                        Warehouse: "rem",
                    },
                    Trendmicro: map[string]interface{}{
                        "quasi": "repudiandae",
                        "sint": "veritatis",
                        "itaque": "incidunt",
                        "enim": "consequatur",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "est",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "quibusdam",
                    },
                },
            },
            ConnectorProfileName: "explicabo",
            ConnectorType: "Veeva",
            KmsArn: "distinctio",
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
