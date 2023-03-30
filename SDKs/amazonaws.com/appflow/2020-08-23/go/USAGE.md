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