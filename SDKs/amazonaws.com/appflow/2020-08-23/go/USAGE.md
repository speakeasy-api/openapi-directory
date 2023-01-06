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