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