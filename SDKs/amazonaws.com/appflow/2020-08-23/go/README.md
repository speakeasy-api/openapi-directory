# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConnectorProfileRequest{
        Headers: operations.CreateConnectorProfileHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateConnectorProfileRequestBody{
            ConnectionMode: "Private",
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "fugit",
                        SecretKey: "et",
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "nihil",
                        ApplicationKey: "rerum",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "dicta",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: "debitis",
                        ClientID: "voluptatum",
                        ClientSecret: "et",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "ut",
                            RedirectURI: "dolorem",
                        },
                        RefreshToken: "et",
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: "voluptate",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "iste",
                            RedirectURI: "vitae",
                        },
                        RefreshToken: "totam",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "dolores",
                        Datakey: "illum",
                        SecretAccessKey: "debitis",
                        UserID: "vel",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: "odio",
                        ClientID: "dolore",
                        ClientSecret: "id",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "aspernatur",
                            RedirectURI: "accusantium",
                        },
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: "totam",
                        Username: "commodi",
                    },
                    SAPOData: &shared.SapoDataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "quis",
                            Username: "est",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: "aut",
                            ClientID: "odit",
                            ClientSecret: "non",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "voluptas",
                                RedirectURI: "omnis",
                            },
                            RefreshToken: "aut",
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: "illo",
                        ClientCredentialsArn: "sed",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "officiis",
                            RedirectURI: "autem",
                        },
                        RefreshToken: "consectetur",
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "nobis",
                        Username: "odio",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "qui",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: "recusandae",
                        ClientID: "at",
                        ClientSecret: "ipsum",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "eveniet",
                            RedirectURI: "modi",
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "sint",
                        Username: "inventore",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "ut",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "exercitationem",
                        Username: "aut",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: "reprehenderit",
                        ClientID: "tempore",
                        ClientSecret: "maiores",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "incidunt",
                            RedirectURI: "dolor",
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "veritatis": "in",
                        "et": "omnis",
                        "ipsum": "ex",
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "dolores",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "placeat",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "rerum": "mollitia",
                        "voluptas": "quam",
                    },
                    Honeycode: map[string]interface{}{
                        "qui": "qui",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "unde",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "in",
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "autem",
                        BucketPrefix: "qui",
                        DatabaseURL: "ut",
                        RoleArn: "itaque",
                    },
                    SAPOData: &shared.SapoDataConnectorProfileProperties{
                        ApplicationHostURL: "ab",
                        ApplicationServicePath: "neque",
                        ClientNumber: "ullam",
                        LogonLanguage: "et",
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "accusantium",
                            OAuthScopes: []string{
                                "architecto",
                                "quam",
                            },
                            TokenURL: "velit",
                        },
                        PortNumber: 2066195468801476818,
                        PrivateLinkServiceName: "soluta",
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: "sunt",
                        IsSandboxEnvironment: false,
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "magni",
                    },
                    Singular: map[string]interface{}{
                        "optio": "qui",
                        "earum": "illo",
                        "omnis": "ut",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "consequatur",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: "dolor",
                        BucketName: "commodi",
                        BucketPrefix: "error",
                        PrivateLinkServiceName: "reprehenderit",
                        Region: "consectetur",
                        Stage: "nostrum",
                        Warehouse: "ut",
                    },
                    Trendmicro: map[string]interface{}{
                        "sed": "a",
                        "soluta": "aut",
                        "quas": "consequuntur",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "laudantium",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "autem",
                    },
                },
            },
            ConnectorProfileName: "ipsa",
            ConnectorType: "Honeycode",
            KmsArn: "doloremque",
        },
    }
    
    res, err := s.CreateConnectorProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorProfileResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateConnectorProfile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. 
* `CreateFlow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `DeleteConnectorProfile` -  Enables you to delete an existing connector profile. 
* `DeleteFlow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `DescribeConnectorEntity` -  Provides details regarding the entity used with the connector, with a description of the data model for each entity. 
* `DescribeConnectorProfiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `DescribeConnectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `DescribeFlow` -  Provides a description of the specified flow. 
* `DescribeFlowExecutionRecords` -  Fetches the execution history of the flow. 
* `ListConnectorEntities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `ListFlows` -  Lists all of the flows associated with your account. 
* `ListTagsForResource` -  Retrieves the tags that are associated with a specified flow. 
* `StartFlow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `StopFlow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `TagResource` -  Applies a tag to the specified flow. 
* `UntagResource` -  Removes a tag from the specified flow. 
* `UpdateConnectorProfile` -  Updates a given connector profile associated with your account. 
* `UpdateFlow` -  Updates an existing flow. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
