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
            XAmzAlgorithm: "fuga",
            XAmzContentSha256: "aliquid",
            XAmzCredential: "vero",
            XAmzDate: "aut",
            XAmzSecurityToken: "et",
            XAmzSignature: "voluptatem",
            XAmzSignedHeaders: "sunt",
        },
        Request: operations.CreateConnectorProfileRequestBody{
            ConnectionMode: "Private",
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "placeat",
                        SecretKey: "vitae",
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "rerum",
                        ApplicationKey: "officiis",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "commodi",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: "sed",
                        ClientID: "voluptates",
                        ClientSecret: "enim",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "eos",
                            RedirectURI: "ipsa",
                        },
                        RefreshToken: "cum",
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: "sint",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "aut",
                            RedirectURI: "eaque",
                        },
                        RefreshToken: "facilis",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "et",
                        Datakey: "ut",
                        SecretAccessKey: "et",
                        UserID: "quam",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: "sit",
                        ClientID: "voluptate",
                        ClientSecret: "eaque",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "consequuntur",
                            RedirectURI: "et",
                        },
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: "amet",
                        Username: "distinctio",
                    },
                    SAPOData: &shared.SapoDataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "in",
                            Username: "consectetur",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: "minima",
                            ClientID: "sequi",
                            ClientSecret: "et",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "consequatur",
                                RedirectURI: "eum",
                            },
                            RefreshToken: "sunt",
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: "cupiditate",
                        ClientCredentialsArn: "quam",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "repellendus",
                            RedirectURI: "dolores",
                        },
                        RefreshToken: "nihil",
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "ullam",
                        Username: "architecto",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "architecto",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: "beatae",
                        ClientID: "consequatur",
                        ClientSecret: "veniam",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "hic",
                            RedirectURI: "beatae",
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "veritatis",
                        Username: "architecto",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "voluptas",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "voluptatibus",
                        Username: "maiores",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: "consectetur",
                        ClientID: "modi",
                        ClientSecret: "eos",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "praesentium",
                            RedirectURI: "itaque",
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "natus": "quas",
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "nesciunt",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "nostrum",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "repudiandae": "eius",
                        "totam": "amet",
                    },
                    Honeycode: map[string]interface{}{
                        "unde": "nihil",
                        "asperiores": "quaerat",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "hic",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "quo",
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "est",
                        BucketPrefix: "nostrum",
                        DatabaseURL: "pariatur",
                        RoleArn: "enim",
                    },
                    SAPOData: &shared.SapoDataConnectorProfileProperties{
                        ApplicationHostURL: "occaecati",
                        ApplicationServicePath: "possimus",
                        ClientNumber: "temporibus",
                        LogonLanguage: "laborum",
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "voluptas",
                            OAuthScopes: []string{
                                "atque",
                                "soluta",
                            },
                            TokenURL: "tempora",
                        },
                        PortNumber: 4542131346235756591,
                        PrivateLinkServiceName: "nihil",
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: "quas",
                        IsSandboxEnvironment: true,
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "eveniet",
                    },
                    Singular: map[string]interface{}{
                        "fuga": "error",
                        "autem": "eaque",
                        "omnis": "esse",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "veritatis",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: "voluptas",
                        BucketName: "incidunt",
                        BucketPrefix: "sit",
                        PrivateLinkServiceName: "saepe",
                        Region: "est",
                        Stage: "odio",
                        Warehouse: "delectus",
                    },
                    Trendmicro: map[string]interface{}{
                        "voluptatem": "et",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "et",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "in",
                    },
                },
            },
            ConnectorProfileName: "ipsa",
            ConnectorType: "Salesforce",
            KmsArn: "deleniti",
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
