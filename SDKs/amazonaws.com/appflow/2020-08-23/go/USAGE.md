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