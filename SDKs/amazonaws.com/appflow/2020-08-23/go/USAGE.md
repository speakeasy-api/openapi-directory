<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateConnectorProfile(ctx, operations.CreateConnectorProfileRequest{
        RequestBody: operations.CreateConnectorProfileRequestBody{
            ClientToken: sdk.String("corrupti"),
            ConnectionMode: operations.CreateConnectorProfileRequestBodyConnectionModeEnumPrivate,
            ConnectorLabel: sdk.String("distinctio"),
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "quibusdam",
                        SecretKey: "unde",
                    },
                    CustomConnector: &shared.CustomConnectorProfileCredentials{
                        APIKey: &shared.APIKeyCredentials{
                            APIKey: "nulla",
                            APISecretKey: sdk.String("corrupti"),
                        },
                        AuthenticationType: shared.AuthenticationTypeEnumCustom,
                        Basic: &shared.BasicAuthCredentials{
                            Password: "vel",
                            Username: "Linda.Oberbrunner",
                        },
                        Custom: &shared.CustomAuthCredentials{
                            CredentialsMap: map[string]string{
                                "debitis": "ipsa",
                                "delectus": "tempora",
                            },
                            CustomAuthenticationType: "suscipit",
                        },
                        Oauth2: &shared.OAuth2Credentials{
                            AccessToken: sdk.String("molestiae"),
                            ClientID: sdk.String("minus"),
                            ClientSecret: sdk.String("placeat"),
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: sdk.String("voluptatum"),
                                RedirectURI: sdk.String("iusto"),
                            },
                            RefreshToken: sdk.String("excepturi"),
                        },
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "nisi",
                        ApplicationKey: "recusandae",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "temporibus",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: sdk.String("ab"),
                        ClientID: "quis",
                        ClientSecret: "veritatis",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("deserunt"),
                            RedirectURI: sdk.String("perferendis"),
                        },
                        RefreshToken: sdk.String("ipsam"),
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: sdk.String("repellendus"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("sapiente"),
                            RedirectURI: sdk.String("quo"),
                        },
                        RefreshToken: sdk.String("odit"),
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "at",
                        Datakey: "at",
                        SecretAccessKey: "maiores",
                        UserID: "molestiae",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: sdk.String("quod"),
                        ClientID: "quod",
                        ClientSecret: "esse",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("totam"),
                            RedirectURI: sdk.String("porro"),
                        },
                    },
                    Pardot: &shared.PardotConnectorProfileCredentials{
                        AccessToken: sdk.String("dolorum"),
                        ClientCredentialsArn: sdk.String("dicta"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("nam"),
                            RedirectURI: sdk.String("officia"),
                        },
                        RefreshToken: sdk.String("occaecati"),
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: sdk.String("fugit"),
                        Username: sdk.String("Kale_Welch10"),
                    },
                    SAPOData: &shared.SAPODataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "commodi",
                            Username: "Jaren77",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: sdk.String("cum"),
                            ClientID: "esse",
                            ClientSecret: "ipsum",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: sdk.String("excepturi"),
                                RedirectURI: sdk.String("aspernatur"),
                            },
                            RefreshToken: sdk.String("perferendis"),
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: sdk.String("ad"),
                        ClientCredentialsArn: sdk.String("natus"),
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("sed"),
                            RedirectURI: sdk.String("iste"),
                        },
                        RefreshToken: sdk.String("dolor"),
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "natus",
                        Username: "Gertrude_Welch44",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "corporis",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: sdk.String("iste"),
                        ClientID: "iure",
                        ClientSecret: "saepe",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("quidem"),
                            RedirectURI: sdk.String("architecto"),
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "ipsa",
                        Username: "Waino_Orn",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "dolores",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "dolorem",
                        Username: "Florian.Champlin60",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: sdk.String("nemo"),
                        ClientID: "minima",
                        ClientSecret: "excepturi",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: sdk.String("accusantium"),
                            RedirectURI: sdk.String("iure"),
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
                            OAuth2GrantType: shared.OAuth2GrantTypeEnumClientCredentials,
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
                        BusinessUnitID: sdk.String("voluptatibus"),
                        InstanceURL: sdk.String("vero"),
                        IsSandboxEnvironment: sdk.Bool(false),
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "nihil",
                        BucketPrefix: sdk.String("praesentium"),
                        ClusterIdentifier: sdk.String("voluptatibus"),
                        DataAPIRoleArn: sdk.String("ipsa"),
                        DatabaseName: sdk.String("omnis"),
                        DatabaseURL: sdk.String("voluptate"),
                        IsRedshiftServerless: sdk.Bool(false),
                        RoleArn: "cum",
                        WorkgroupName: sdk.String("perferendis"),
                    },
                    SAPOData: &shared.SAPODataConnectorProfileProperties{
                        ApplicationHostURL: "doloremque",
                        ApplicationServicePath: "reprehenderit",
                        ClientNumber: "ut",
                        LogonLanguage: sdk.String("maiores"),
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "dicta",
                            OAuthScopes: []string{
                                "dolore",
                                "iusto",
                            },
                            TokenURL: "dicta",
                        },
                        PortNumber: 688661,
                        PrivateLinkServiceName: sdk.String("enim"),
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: sdk.String("accusamus"),
                        IsSandboxEnvironment: sdk.Bool(false),
                        UsePrivateLinkForMetadataAndAuthorization: sdk.Bool(false),
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
                        AccountName: sdk.String("voluptates"),
                        BucketName: "quasi",
                        BucketPrefix: sdk.String("repudiandae"),
                        PrivateLinkServiceName: sdk.String("sint"),
                        Region: sdk.String("veritatis"),
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
            ConnectorType: operations.CreateConnectorProfileRequestBodyConnectorTypeEnumGoogleanalytics,
            KmsArn: sdk.String("modi"),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorProfileResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->