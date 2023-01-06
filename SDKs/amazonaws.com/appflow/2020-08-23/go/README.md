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
            XAmzAlgorithm: "officiis",
            XAmzContentSha256: "commodi",
            XAmzCredential: "sed",
            XAmzDate: "voluptates",
            XAmzSecurityToken: "enim",
            XAmzSignature: "eos",
            XAmzSignedHeaders: "ipsa",
        },
        Request: operations.CreateConnectorProfileRequestBody{
            ConnectionMode: "Public",
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "sint",
                        SecretKey: "aut",
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "eaque",
                        ApplicationKey: "facilis",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "et",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: "ut",
                        ClientID: "et",
                        ClientSecret: "quam",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "sit",
                            RedirectURI: "voluptate",
                        },
                        RefreshToken: "eaque",
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: "consequuntur",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "et",
                            RedirectURI: "amet",
                        },
                        RefreshToken: "distinctio",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "in",
                        Datakey: "consectetur",
                        SecretAccessKey: "minima",
                        UserID: "sequi",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: "et",
                        ClientID: "consequatur",
                        ClientSecret: "eum",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "sunt",
                            RedirectURI: "cupiditate",
                        },
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: "quam",
                        Username: "repellendus",
                    },
                    SAPOData: &shared.SapoDataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "dolores",
                            Username: "nihil",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: "ullam",
                            ClientID: "architecto",
                            ClientSecret: "architecto",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "beatae",
                                RedirectURI: "consequatur",
                            },
                            RefreshToken: "veniam",
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: "hic",
                        ClientCredentialsArn: "beatae",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "veritatis",
                            RedirectURI: "architecto",
                        },
                        RefreshToken: "voluptas",
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "voluptatibus",
                        Username: "maiores",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "consectetur",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: "modi",
                        ClientID: "eos",
                        ClientSecret: "praesentium",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "itaque",
                            RedirectURI: "ipsum",
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "natus",
                        Username: "quas",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "nesciunt",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "nostrum",
                        Username: "quod",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: "repudiandae",
                        ClientID: "eius",
                        ClientSecret: "totam",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "amet",
                            RedirectURI: "blanditiis",
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "nihil": "asperiores",
                        "quaerat": "hic",
                        "quo": "est",
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "nostrum",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "pariatur",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "occaecati": "possimus",
                        "temporibus": "laborum",
                    },
                    Honeycode: map[string]interface{}{
                        "modi": "atque",
                        "soluta": "tempora",
                        "qui": "nihil",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "quas",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "facere",
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "eveniet",
                        BucketPrefix: "dolores",
                        DatabaseURL: "fuga",
                        RoleArn: "error",
                    },
                    SAPOData: &shared.SapoDataConnectorProfileProperties{
                        ApplicationHostURL: "autem",
                        ApplicationServicePath: "eaque",
                        ClientNumber: "omnis",
                        LogonLanguage: "esse",
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "veritatis",
                            OAuthScopes: []string{
                                "incidunt",
                            },
                            TokenURL: "sit",
                        },
                        PortNumber: 4790775879297943507,
                        PrivateLinkServiceName: "est",
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: "odio",
                        IsSandboxEnvironment: true,
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "delectus",
                    },
                    Singular: map[string]interface{}{
                        "et": "et",
                        "in": "ipsa",
                        "repellat": "deleniti",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "asperiores",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: "voluptatem",
                        BucketName: "hic",
                        BucketPrefix: "doloribus",
                        PrivateLinkServiceName: "corrupti",
                        Region: "nemo",
                        Stage: "architecto",
                        Warehouse: "neque",
                    },
                    Trendmicro: map[string]interface{}{
                        "saepe": "voluptatem",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "error",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "consequuntur",
                    },
                },
            },
            ConnectorProfileName: "in",
            ConnectorType: "Datadog",
            KmsArn: "autem",
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
