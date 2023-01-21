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