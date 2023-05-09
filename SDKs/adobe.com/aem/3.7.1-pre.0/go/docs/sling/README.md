# Sling

### Available Operations

* [DeleteAgent](#deleteagent)
* [DeleteNode](#deletenode)
* [GetAgent](#getagent)
* [GetAgents](#getagents)
* [GetAuthorizableKeystore](#getauthorizablekeystore)
* [GetKeystore](#getkeystore)
* [GetNode](#getnode)
* [GetPackage](#getpackage)
* [GetPackageFilter](#getpackagefilter)
* [GetQuery](#getquery)
* [GetTruststore](#gettruststore)
* [GetTruststoreInfo](#gettruststoreinfo)
* [PostAgent](#postagent)
* [PostAuthorizableKeystore](#postauthorizablekeystore)
* [PostAuthorizables](#postauthorizables)
* [PostConfigAdobeGraniteSamlAuthenticationHandler](#postconfigadobegranitesamlauthenticationhandler)
* [PostConfigApacheFelixJettyBasedHTTPService](#postconfigapachefelixjettybasedhttpservice)
* [PostConfigApacheHTTPComponentsProxyConfiguration](#postconfigapachehttpcomponentsproxyconfiguration)
* [PostConfigApacheSlingDavExServlet](#postconfigapacheslingdavexservlet)
* [PostConfigApacheSlingGetServlet](#postconfigapacheslinggetservlet)
* [PostConfigApacheSlingReferrerFilter](#postconfigapacheslingreferrerfilter)
* [PostConfigProperty](#postconfigproperty)
* [PostNode](#postnode)
* [PostNodeRw](#postnoderw)
* [PostPath](#postpath)
* [PostQuery](#postquery)
* [PostTreeActivation](#posttreeactivation)
* [PostTruststore](#posttruststore)
* [PostTruststorePkcs12](#posttruststorepkcs12)

## DeleteAgent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.DeleteAgent(ctx, operations.DeleteAgentRequest{
        Name: "Roger Beier",
        Runmode: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNode

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.DeleteNode(ctx, operations.DeleteNodeRequest{
        Name: "Ernest Ebert",
        Path: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAgent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetAgent(ctx, operations.GetAgentRequest{
        Name: "Guadalupe Hickle",
        Runmode: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAgents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetAgents(ctx, operations.GetAgentsRequest{
        Runmode: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAuthorizableKeystore

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetAuthorizableKeystore(ctx, operations.GetAuthorizableKeystoreRequest{
        AuthorizableID: "culpa",
        IntermediatePath: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeystoreInfo != nil {
        // handle response
    }
}
```

## GetKeystore

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetKeystore(ctx, operations.GetKeystoreRequest{
        AuthorizableID: "sapiente",
        IntermediatePath: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNode

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetNode(ctx, operations.GetNodeRequest{
        Name: "Mike Nicolas",
        Path: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPackage

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetPackage(ctx, operations.GetPackageRequest{
        Group: "occaecati",
        Name: "Lucy Konopelski",
        Version: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPackageFilter

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetPackageFilter(ctx, operations.GetPackageFilterRequest{
        Group: "quia",
        Name: "Gloria Padberg",
        Version: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetQuery(ctx, operations.GetQueryRequest{
        OneProperty: "quo",
        OnePropertyValue: "sequi",
        PLimit: 9495.72,
        Path: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTruststore

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetTruststore(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTruststoreInfo

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.GetTruststoreInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TruststoreInfo != nil {
        // handle response
    }
}
```

## PostAgent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostAgent(ctx, operations.PostAgentRequest{
        Operation: sdk.String("id"),
        JcrContentCqDistribute: sdk.Bool(false),
        JcrContentCqDistributeAtTypeHint: sdk.String("possimus"),
        JcrContentCqName: sdk.String("aut"),
        JcrContentCqTemplate: sdk.String("quasi"),
        JcrContentEnabled: sdk.Bool(false),
        JcrContentJcrDescription: sdk.String("error"),
        JcrContentJcrLastModified: sdk.String("temporibus"),
        JcrContentJcrLastModifiedBy: sdk.String("laborum"),
        JcrContentJcrMixinTypes: sdk.String("quasi"),
        JcrContentJcrTitle: sdk.String("reiciendis"),
        JcrContentLogLevel: sdk.String("voluptatibus"),
        JcrContentNoStatusUpdate: sdk.Bool(false),
        JcrContentNoVersioning: sdk.Bool(false),
        JcrContentProtocolConnectTimeout: sdk.Float64(8781.94),
        JcrContentProtocolHTTPConnectionClosed: sdk.Bool(false),
        JcrContentProtocolHTTPExpired: sdk.String("nihil"),
        JcrContentProtocolHTTPHeaders: []string{
            "voluptatibus",
            "ipsa",
            "omnis",
        },
        JcrContentProtocolHTTPHeadersAtTypeHint: sdk.String("voluptate"),
        JcrContentProtocolHTTPMethod: sdk.String("cum"),
        JcrContentProtocolHTTPSRelaxed: sdk.Bool(false),
        JcrContentProtocolInterface: sdk.String("perferendis"),
        JcrContentProtocolSocketTimeout: sdk.Float64(391.87),
        JcrContentProtocolVersion: sdk.String("reprehenderit"),
        JcrContentProxyHost: sdk.String("ut"),
        JcrContentProxyNTLMDomain: sdk.String("maiores"),
        JcrContentProxyNTLMHost: sdk.String("dicta"),
        JcrContentProxyPassword: sdk.String("corporis"),
        JcrContentProxyPort: sdk.Float64(2961.4),
        JcrContentProxyUser: sdk.String("iusto"),
        JcrContentQueueBatchMaxSize: sdk.Float64(1187.27),
        JcrContentQueueBatchMode: sdk.String("harum"),
        JcrContentQueueBatchWaitTime: sdk.Float64(3179.83),
        JcrContentRetryDelay: sdk.String("accusamus"),
        JcrContentReverseReplication: sdk.Bool(false),
        JcrContentSerializationType: sdk.String("commodi"),
        JcrContentSlingResourceType: sdk.String("repudiandae"),
        JcrContentSsl: sdk.String("quae"),
        JcrContentTransportNTLMDomain: sdk.String("ipsum"),
        JcrContentTransportNTLMHost: sdk.String("quidem"),
        JcrContentTransportPassword: sdk.String("molestias"),
        JcrContentTransportURI: sdk.String("excepturi"),
        JcrContentTransportUser: sdk.String("pariatur"),
        JcrContentTriggerDistribute: sdk.Bool(false),
        JcrContentTriggerModified: sdk.Bool(false),
        JcrContentTriggerOnOffTime: sdk.Bool(false),
        JcrContentTriggerReceive: sdk.Bool(false),
        JcrContentTriggerSpecific: sdk.Bool(false),
        JcrContentUserID: sdk.String("modi"),
        JcrPrimaryType: sdk.String("praesentium"),
        Name: "Grady Botsford",
        Runmode: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAuthorizableKeystore

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostAuthorizableKeystore(ctx, operations.PostAuthorizableKeystoreRequest{
        Operation: sdk.String("itaque"),
        RequestBody: &operations.PostAuthorizableKeystoreRequestBody{
            CertChain: &operations.PostAuthorizableKeystoreRequestBodyCertChain{
                CertChain: "incidunt",
                Content: []byte("enim"),
            },
            KeyStore: &operations.PostAuthorizableKeystoreRequestBodyKeyStore{
                Content: []byte("consequatur"),
                KeyStore: "est",
            },
            Pk: &operations.PostAuthorizableKeystoreRequestBodyPk{
                Content: []byte("quibusdam"),
                Pk: "explicabo",
            },
        },
        Alias: sdk.String("deserunt"),
        AuthorizableID: "distinctio",
        CurrentPassword: sdk.String("quibusdam"),
        IntermediatePath: "labore",
        KeyPassword: sdk.String("modi"),
        KeyStorePass: sdk.String("qui"),
        NewAlias: sdk.String("aliquid"),
        NewPassword: sdk.String("cupiditate"),
        RePassword: sdk.String("quos"),
        RemoveAlias: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeystoreInfo != nil {
        // handle response
    }
}
```

## PostAuthorizables

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostAuthorizables(ctx, operations.PostAuthorizablesRequest{
        AuthorizableID: "magni",
        CreateGroup: sdk.String("assumenda"),
        CreateUser: sdk.String("ipsam"),
        IntermediatePath: "alias",
        ProfileGivenName: sdk.String("fugit"),
        RepPassword: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigAdobeGraniteSamlAuthenticationHandler

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostConfigAdobeGraniteSamlAuthenticationHandler(ctx, operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest{
        AddGroupMemberships: sdk.Bool(false),
        AddGroupMembershipsAtTypeHint: sdk.String("excepturi"),
        AssertionConsumerServiceURL: sdk.String("tempora"),
        AssertionConsumerServiceURLAtTypeHint: sdk.String("facilis"),
        ClockTolerance: sdk.Int64(735194),
        ClockToleranceAtTypeHint: sdk.String("labore"),
        CreateUser: sdk.Bool(false),
        CreateUserAtTypeHint: sdk.String("delectus"),
        DefaultGroups: []string{
            "non",
            "eligendi",
        },
        DefaultGroupsAtTypeHint: sdk.String("sint"),
        DefaultRedirectURL: sdk.String("aliquid"),
        DefaultRedirectURLAtTypeHint: sdk.String("provident"),
        DigestMethod: sdk.String("necessitatibus"),
        DigestMethodAtTypeHint: sdk.String("sint"),
        GroupMembershipAttribute: sdk.String("officia"),
        GroupMembershipAttributeAtTypeHint: sdk.String("dolor"),
        HandleLogout: sdk.Bool(false),
        HandleLogoutAtTypeHint: sdk.String("debitis"),
        IdpCertAlias: sdk.String("a"),
        IdpCertAliasAtTypeHint: sdk.String("dolorum"),
        IdpHTTPRedirect: sdk.Bool(false),
        IdpHTTPRedirectAtTypeHint: sdk.String("in"),
        IdpURL: sdk.String("in"),
        IdpURLAtTypeHint: sdk.String("illum"),
        KeyStorePassword: sdk.String("maiores"),
        KeyStorePasswordAtTypeHint: sdk.String("rerum"),
        LogoutURL: sdk.String("dicta"),
        LogoutURLAtTypeHint: sdk.String("magnam"),
        NameIDFormat: sdk.String("cumque"),
        NameIDFormatAtTypeHint: sdk.String("facere"),
        Path: []string{
            "aliquid",
            "laborum",
        },
        PathAtTypeHint: sdk.String("accusamus"),
        ServiceRanking: sdk.Int64(249796),
        ServiceRankingAtTypeHint: sdk.String("occaecati"),
        ServiceProviderEntityID: sdk.String("enim"),
        ServiceProviderEntityIDAtTypeHint: sdk.String("accusamus"),
        SignatureMethod: sdk.String("delectus"),
        SignatureMethodAtTypeHint: sdk.String("quidem"),
        SpPrivateKeyAlias: sdk.String("provident"),
        SpPrivateKeyAliasAtTypeHint: sdk.String("nam"),
        SynchronizeAttributes: []string{
            "blanditiis",
            "deleniti",
            "sapiente",
        },
        SynchronizeAttributesAtTypeHint: sdk.String("amet"),
        UseEncryption: sdk.Bool(false),
        UseEncryptionAtTypeHint: sdk.String("deserunt"),
        UserIDAttribute: sdk.String("nisi"),
        UserIDAttributeAtTypeHint: sdk.String("vel"),
        UserIntermediatePath: sdk.String("natus"),
        UserIntermediatePathAtTypeHint: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigApacheFelixJettyBasedHTTPService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostConfigApacheFelixJettyBasedHTTPService(ctx, operations.PostConfigApacheFelixJettyBasedHTTPServiceRequest{
        OrgApacheFelixHTTPSClientcertificate: sdk.String("molestiae"),
        OrgApacheFelixHTTPSClientcertificateAtTypeHint: sdk.String("perferendis"),
        OrgApacheFelixHTTPSEnable: sdk.Bool(false),
        OrgApacheFelixHTTPSEnableAtTypeHint: sdk.String("nihil"),
        OrgApacheFelixHTTPSKeystore: sdk.String("magnam"),
        OrgApacheFelixHTTPSKeystoreKey: sdk.String("distinctio"),
        OrgApacheFelixHTTPSKeystoreKeyPassword: sdk.String("id"),
        OrgApacheFelixHTTPSKeystoreKeyPasswordAtTypeHint: sdk.String("labore"),
        OrgApacheFelixHTTPSKeystoreKeyAtTypeHint: sdk.String("labore"),
        OrgApacheFelixHTTPSKeystorePassword: sdk.String("suscipit"),
        OrgApacheFelixHTTPSKeystorePasswordAtTypeHint: sdk.String("natus"),
        OrgApacheFelixHTTPSKeystoreAtTypeHint: sdk.String("nobis"),
        OrgApacheFelixHTTPSNio: sdk.Bool(false),
        OrgApacheFelixHTTPSNioAtTypeHint: sdk.String("eum"),
        OrgApacheFelixHTTPSTruststore: sdk.String("vero"),
        OrgApacheFelixHTTPSTruststorePassword: sdk.String("aspernatur"),
        OrgApacheFelixHTTPSTruststorePasswordAtTypeHint: sdk.String("architecto"),
        OrgApacheFelixHTTPSTruststoreAtTypeHint: sdk.String("magnam"),
        OrgOsgiServiceHTTPPortSecure: sdk.String("et"),
        OrgOsgiServiceHTTPPortSecureAtTypeHint: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigApacheHTTPComponentsProxyConfiguration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostConfigApacheHTTPComponentsProxyConfiguration(ctx, operations.PostConfigApacheHTTPComponentsProxyConfigurationRequest{
        ProxyEnabled: sdk.Bool(false),
        ProxyEnabledAtTypeHint: sdk.String("ullam"),
        ProxyExceptions: []string{
            "quos",
            "sint",
            "accusantium",
        },
        ProxyExceptionsAtTypeHint: sdk.String("mollitia"),
        ProxyHost: sdk.String("reiciendis"),
        ProxyHostAtTypeHint: sdk.String("mollitia"),
        ProxyPassword: sdk.String("ad"),
        ProxyPasswordAtTypeHint: sdk.String("eum"),
        ProxyPort: sdk.Int64(221262),
        ProxyPortAtTypeHint: sdk.String("necessitatibus"),
        ProxyUser: sdk.String("odit"),
        ProxyUserAtTypeHint: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigApacheSlingDavExServlet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostConfigApacheSlingDavExServlet(ctx, operations.PostConfigApacheSlingDavExServletRequest{
        Alias: sdk.String("quasi"),
        AliasAtTypeHint: sdk.String("iure"),
        DavCreateAbsoluteURI: sdk.Bool(false),
        DavCreateAbsoluteURIAtTypeHint: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigApacheSlingGetServlet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostConfigApacheSlingGetServlet(ctx, operations.PostConfigApacheSlingGetServletRequest{
        EnableHTML: sdk.Bool(false),
        EnableHTMLAtTypeHint: sdk.String("debitis"),
        EnableTxt: sdk.Bool(false),
        EnableTxtAtTypeHint: sdk.String("eius"),
        EnableXML: sdk.Bool(false),
        EnableXMLAtTypeHint: sdk.String("maxime"),
        JSONMaximumresults: sdk.String("deleniti"),
        JSONMaximumresultsAtTypeHint: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigApacheSlingReferrerFilter

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostConfigApacheSlingReferrerFilter(ctx, operations.PostConfigApacheSlingReferrerFilterRequest{
        AllowEmpty: sdk.Bool(false),
        AllowEmptyAtTypeHint: sdk.String("in"),
        AllowHosts: sdk.String("architecto"),
        AllowHostsRegexp: sdk.String("architecto"),
        AllowHostsRegexpAtTypeHint: sdk.String("repudiandae"),
        AllowHostsAtTypeHint: sdk.String("ullam"),
        FilterMethods: sdk.String("expedita"),
        FilterMethodsAtTypeHint: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigProperty

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostConfigProperty(ctx, operations.PostConfigPropertyRequest{
        ConfigNodeName: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostNode

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostNode(ctx, operations.PostNodeRequest{
        Operation: sdk.String("quibusdam"),
        RequestBody: &operations.PostNodeRequestBody{
            File: &operations.PostNodeRequestBodyFile{
                Content: []byte("sed"),
                File: "saepe",
            },
        },
        DeleteAuthorizable: sdk.String("pariatur"),
        Name: "Kathryn Lang",
        Path: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostNodeRw

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostNodeRw(ctx, operations.PostNodeRwRequest{
        AddMembers: sdk.String("quo"),
        Name: "Ervin Schoen",
        Path: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostPath

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostPath(ctx, operations.PostPathRequest{
        Name: "ea",
        JcrPrimaryType: "accusantium",
        Path: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostQuery(ctx, operations.PostQueryRequest{
        OneProperty: "maiores",
        OnePropertyValue: "quidem",
        PLimit: 3732.91,
        Path: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTreeActivation

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostTreeActivation(ctx, operations.PostTreeActivationRequest{
        Cmd: "autem",
        Ignoredeactivated: false,
        Onlymodified: false,
        Path: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTruststore

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostTruststore(ctx, operations.PostTruststoreRequest{
        Operation: sdk.String("eaque"),
        RequestBody: &operations.PostTruststoreRequestBody{
            Certificate: &operations.PostTruststoreRequestBodyCertificate{
                Certificate: "pariatur",
                Content: []byte("nemo"),
            },
        },
        KeyStoreType: sdk.String("voluptatibus"),
        NewPassword: sdk.String("perferendis"),
        RePassword: sdk.String("fugiat"),
        RemoveAlias: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTruststorePkcs12

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sling.PostTruststorePkcs12(ctx, operations.PostTruststorePkcs12RequestBody{
        TruststoreP12: &operations.PostTruststorePkcs12RequestBodyTruststoreP12{
            Content: []byte("aut"),
            TruststoreP12: "cumque",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
