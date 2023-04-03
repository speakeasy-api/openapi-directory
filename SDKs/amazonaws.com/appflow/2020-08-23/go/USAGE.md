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