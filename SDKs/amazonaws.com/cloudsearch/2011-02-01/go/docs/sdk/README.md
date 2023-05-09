# SDK

## Overview

<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region">Regions and Endpoints</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudsearch/>
### Available Operations

* [GETCreateDomain](#getcreatedomain) - Creates a new search domain.
* [GETDefineRankExpression](#getdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [GETDeleteDomain](#getdeletedomain) - Permanently deletes a search domain and all of its data.
* [GETDeleteIndexField](#getdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [GETDeleteRankExpression](#getdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [GETDescribeAvailabilityOptions](#getdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [GETDescribeDefaultSearchField](#getdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [GETDescribeDomains](#getdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [GETDescribeIndexFields](#getdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [GETDescribeRankExpressions](#getdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [GETDescribeServiceAccessPolicies](#getdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [GETDescribeStemmingOptions](#getdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [GETDescribeStopwordOptions](#getdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [GETDescribeSynonymOptions](#getdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [GETIndexDocuments](#getindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [GETUpdateAvailabilityOptions](#getupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [GETUpdateDefaultSearchField](#getupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [GETUpdateServiceAccessPolicies](#getupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [GETUpdateStemmingOptions](#getupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [GETUpdateStopwordOptions](#getupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [GETUpdateSynonymOptions](#getupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* [POSTCreateDomain](#postcreatedomain) - Creates a new search domain.
* [POSTDefineIndexField](#postdefineindexfield) - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* [POSTDefineRankExpression](#postdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [POSTDeleteDomain](#postdeletedomain) - Permanently deletes a search domain and all of its data.
* [POSTDeleteIndexField](#postdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [POSTDeleteRankExpression](#postdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [POSTDescribeAvailabilityOptions](#postdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [POSTDescribeDefaultSearchField](#postdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [POSTDescribeDomains](#postdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [POSTDescribeIndexFields](#postdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [POSTDescribeRankExpressions](#postdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [POSTDescribeServiceAccessPolicies](#postdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [POSTDescribeStemmingOptions](#postdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [POSTDescribeStopwordOptions](#postdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [POSTDescribeSynonymOptions](#postdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [POSTIndexDocuments](#postindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [POSTUpdateAvailabilityOptions](#postupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [POSTUpdateDefaultSearchField](#postupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [POSTUpdateServiceAccessPolicies](#postupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [POSTUpdateStemmingOptions](#postupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [POSTUpdateStopwordOptions](#postupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [POSTUpdateSynonymOptions](#postupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

## GETCreateDomain

Creates a new search domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETCreateDomain(ctx, operations.GETCreateDomainRequest{
        Action: operations.GETCreateDomainActionEnumCreateDomain,
        DomainName: "vel",
        Version: operations.GETCreateDomainVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDefineRankExpression

Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDefineRankExpression(ctx, operations.GETDefineRankExpressionRequest{
        Action: operations.GETDefineRankExpressionActionEnumDefineRankExpression,
        DomainName: "delectus",
        RankExpression: operations.GETDefineRankExpressionRankExpression{
            RankExpression: "tempora",
            RankName: "suscipit",
        },
        Version: operations.GETDefineRankExpressionVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDomain

Permanently deletes a search domain and all of its data.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDomain(ctx, operations.GETDeleteDomainRequest{
        Action: operations.GETDeleteDomainActionEnumDeleteDomain,
        DomainName: "recusandae",
        Version: operations.GETDeleteDomainVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteIndexField

Removes an <code>IndexField</code> from the search domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteIndexField(ctx, operations.GETDeleteIndexFieldRequest{
        Action: operations.GETDeleteIndexFieldActionEnumDeleteIndexField,
        DomainName: "repellendus",
        IndexFieldName: "sapiente",
        Version: operations.GETDeleteIndexFieldVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteRankExpression

Removes a <code>RankExpression</code> from the search domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteRankExpression(ctx, operations.GETDeleteRankExpressionRequest{
        Action: operations.GETDeleteRankExpressionActionEnumDeleteRankExpression,
        DomainName: "quod",
        RankName: "esse",
        Version: operations.GETDeleteRankExpressionVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeAvailabilityOptions

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeAvailabilityOptions(ctx, operations.GETDescribeAvailabilityOptionsRequest{
        Action: operations.GETDescribeAvailabilityOptionsActionEnumDescribeAvailabilityOptions,
        DomainName: "fugit",
        Version: operations.GETDescribeAvailabilityOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDefaultSearchField

Gets the default search field configured for the search domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeDefaultSearchField(ctx, operations.GETDescribeDefaultSearchFieldRequest{
        Action: operations.GETDescribeDefaultSearchFieldActionEnumDescribeDefaultSearchField,
        DomainName: "modi",
        Version: operations.GETDescribeDefaultSearchFieldVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeDomains(ctx, operations.GETDescribeDomainsRequest{
        Action: operations.GETDescribeDomainsActionEnumDescribeDomains,
        DomainNames: []string{
            "ad",
        },
        Version: operations.GETDescribeDomainsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeIndexFields(ctx, operations.GETDescribeIndexFieldsRequest{
        Action: operations.GETDescribeIndexFieldsActionEnumDescribeIndexFields,
        DomainName: "saepe",
        FieldNames: []string{
            "in",
            "corporis",
            "iste",
        },
        Version: operations.GETDescribeIndexFieldsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeRankExpressions

Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeRankExpressions(ctx, operations.GETDescribeRankExpressionsRequest{
        Action: operations.GETDescribeRankExpressionsActionEnumDescribeRankExpressions,
        DomainName: "mollitia",
        RankNames: []string{
            "dolores",
            "dolorem",
            "corporis",
        },
        Version: operations.GETDescribeRankExpressionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeServiceAccessPolicies

Gets information about the resource-based policies that control access to the domain's document and search services.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeServiceAccessPolicies(ctx, operations.GETDescribeServiceAccessPoliciesRequest{
        Action: operations.GETDescribeServiceAccessPoliciesActionEnumDescribeServiceAccessPolicies,
        DomainName: "accusantium",
        Version: operations.GETDescribeServiceAccessPoliciesVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeStemmingOptions

Gets the stemming dictionary configured for the search domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeStemmingOptions(ctx, operations.GETDescribeStemmingOptionsRequest{
        Action: operations.GETDescribeStemmingOptionsActionEnumDescribeStemmingOptions,
        DomainName: "culpa",
        Version: operations.GETDescribeStemmingOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeStopwordOptions

Gets the stopwords configured for the search domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeStopwordOptions(ctx, operations.GETDescribeStopwordOptionsRequest{
        Action: operations.GETDescribeStopwordOptionsActionEnumDescribeStopwordOptions,
        DomainName: "molestiae",
        Version: operations.GETDescribeStopwordOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeSynonymOptions

Gets the synonym dictionary configured for the search domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeSynonymOptions(ctx, operations.GETDescribeSynonymOptionsRequest{
        Action: operations.GETDescribeSynonymOptionsActionEnumDescribeSynonymOptions,
        DomainName: "enim",
        Version: operations.GETDescribeSynonymOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETIndexDocuments

Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETIndexDocuments(ctx, operations.GETIndexDocumentsRequest{
        Action: operations.GETIndexDocumentsActionEnumIndexDocuments,
        DomainName: "aut",
        Version: operations.GETIndexDocumentsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateAvailabilityOptions

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETUpdateAvailabilityOptions(ctx, operations.GETUpdateAvailabilityOptionsRequest{
        Action: operations.GETUpdateAvailabilityOptionsActionEnumUpdateAvailabilityOptions,
        DomainName: "vero",
        MultiAZ: false,
        Version: operations.GETUpdateAvailabilityOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateDefaultSearchField

Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETUpdateDefaultSearchField(ctx, operations.GETUpdateDefaultSearchFieldRequest{
        Action: operations.GETUpdateDefaultSearchFieldActionEnumUpdateDefaultSearchField,
        DefaultSearchField: "perferendis",
        DomainName: "doloremque",
        Version: operations.GETUpdateDefaultSearchFieldVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateServiceAccessPolicies

Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETUpdateServiceAccessPolicies(ctx, operations.GETUpdateServiceAccessPoliciesRequest{
        AccessPolicies: "dicta",
        Action: operations.GETUpdateServiceAccessPoliciesActionEnumUpdateServiceAccessPolicies,
        DomainName: "harum",
        Version: operations.GETUpdateServiceAccessPoliciesVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateStemmingOptions

Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETUpdateStemmingOptions(ctx, operations.GETUpdateStemmingOptionsRequest{
        Action: operations.GETUpdateStemmingOptionsActionEnumUpdateStemmingOptions,
        DomainName: "molestias",
        Stems: "excepturi",
        Version: operations.GETUpdateStemmingOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateStopwordOptions

Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETUpdateStopwordOptions(ctx, operations.GETUpdateStopwordOptionsRequest{
        Action: operations.GETUpdateStopwordOptionsActionEnumUpdateStopwordOptions,
        DomainName: "sint",
        Stopwords: "veritatis",
        Version: operations.GETUpdateStopwordOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateSynonymOptions

Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETUpdateSynonymOptions(ctx, operations.GETUpdateSynonymOptionsRequest{
        Action: operations.GETUpdateSynonymOptionsActionEnumUpdateSynonymOptions,
        DomainName: "deserunt",
        Synonyms: "distinctio",
        Version: operations.GETUpdateSynonymOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDomain

Creates a new search domain.

### Example Usage

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
    res, err := s.SDK.POSTCreateDomain(ctx, operations.POSTCreateDomainRequest{
        Action: operations.POSTCreateDomainActionEnumCreateDomain,
        RequestBody: []byte("perferendis"),
        Version: operations.POSTCreateDomainVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDefineIndexField

Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.

### Example Usage

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
    res, err := s.SDK.POSTDefineIndexField(ctx, operations.POSTDefineIndexFieldRequest{
        Action: operations.POSTDefineIndexFieldActionEnumDefineIndexField,
        RequestBody: []byte("tempora"),
        Version: operations.POSTDefineIndexFieldVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDefineRankExpression

Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.

### Example Usage

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
    res, err := s.SDK.POSTDefineRankExpression(ctx, operations.POSTDefineRankExpressionRequest{
        Action: operations.POSTDefineRankExpressionActionEnumDefineRankExpression,
        RequestBody: []byte("sint"),
        Version: operations.POSTDefineRankExpressionVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDomain

Permanently deletes a search domain and all of its data.

### Example Usage

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
    res, err := s.SDK.POSTDeleteDomain(ctx, operations.POSTDeleteDomainRequest{
        Action: operations.POSTDeleteDomainActionEnumDeleteDomain,
        RequestBody: []byte("a"),
        Version: operations.POSTDeleteDomainVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteIndexField

Removes an <code>IndexField</code> from the search domain.

### Example Usage

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
    res, err := s.SDK.POSTDeleteIndexField(ctx, operations.POSTDeleteIndexFieldRequest{
        Action: operations.POSTDeleteIndexFieldActionEnumDeleteIndexField,
        RequestBody: []byte("magnam"),
        Version: operations.POSTDeleteIndexFieldVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteRankExpression

Removes a <code>RankExpression</code> from the search domain.

### Example Usage

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
    res, err := s.SDK.POSTDeleteRankExpression(ctx, operations.POSTDeleteRankExpressionRequest{
        Action: operations.POSTDeleteRankExpressionActionEnumDeleteRankExpression,
        RequestBody: []byte("occaecati"),
        Version: operations.POSTDeleteRankExpressionVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeAvailabilityOptions

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

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
    res, err := s.SDK.POSTDescribeAvailabilityOptions(ctx, operations.POSTDescribeAvailabilityOptionsRequest{
        Action: operations.POSTDescribeAvailabilityOptionsActionEnumDescribeAvailabilityOptions,
        RequestBody: []byte("blanditiis"),
        Version: operations.POSTDescribeAvailabilityOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDefaultSearchField

Gets the default search field configured for the search domain.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDefaultSearchField(ctx, operations.POSTDescribeDefaultSearchFieldRequest{
        Action: operations.POSTDescribeDefaultSearchFieldActionEnumDescribeDefaultSearchField,
        RequestBody: []byte("omnis"),
        Version: operations.POSTDescribeDefaultSearchFieldVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDomains(ctx, operations.POSTDescribeDomainsRequest{
        Action: operations.POSTDescribeDomainsActionEnumDescribeDomains,
        RequestBody: []byte("labore"),
        Version: operations.POSTDescribeDomainsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.

### Example Usage

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
    res, err := s.SDK.POSTDescribeIndexFields(ctx, operations.POSTDescribeIndexFieldsRequest{
        Action: operations.POSTDescribeIndexFieldsActionEnumDescribeIndexFields,
        RequestBody: []byte("magnam"),
        Version: operations.POSTDescribeIndexFieldsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeRankExpressions

Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 

### Example Usage

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
    res, err := s.SDK.POSTDescribeRankExpressions(ctx, operations.POSTDescribeRankExpressionsRequest{
        Action: operations.POSTDescribeRankExpressionsActionEnumDescribeRankExpressions,
        RequestBody: []byte("mollitia"),
        Version: operations.POSTDescribeRankExpressionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeServiceAccessPolicies

Gets information about the resource-based policies that control access to the domain's document and search services.

### Example Usage

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
    res, err := s.SDK.POSTDescribeServiceAccessPolicies(ctx, operations.POSTDescribeServiceAccessPoliciesRequest{
        Action: operations.POSTDescribeServiceAccessPoliciesActionEnumDescribeServiceAccessPolicies,
        RequestBody: []byte("nemo"),
        Version: operations.POSTDescribeServiceAccessPoliciesVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeStemmingOptions

Gets the stemming dictionary configured for the search domain.

### Example Usage

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
    res, err := s.SDK.POSTDescribeStemmingOptions(ctx, operations.POSTDescribeStemmingOptionsRequest{
        Action: operations.POSTDescribeStemmingOptionsActionEnumDescribeStemmingOptions,
        RequestBody: []byte("facilis"),
        Version: operations.POSTDescribeStemmingOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeStopwordOptions

Gets the stopwords configured for the search domain.

### Example Usage

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
    res, err := s.SDK.POSTDescribeStopwordOptions(ctx, operations.POSTDescribeStopwordOptionsRequest{
        Action: operations.POSTDescribeStopwordOptionsActionEnumDescribeStopwordOptions,
        RequestBody: []byte("repellat"),
        Version: operations.POSTDescribeStopwordOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeSynonymOptions

Gets the synonym dictionary configured for the search domain.

### Example Usage

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
    res, err := s.SDK.POSTDescribeSynonymOptions(ctx, operations.POSTDescribeSynonymOptionsRequest{
        Action: operations.POSTDescribeSynonymOptionsActionEnumDescribeSynonymOptions,
        RequestBody: []byte("natus"),
        Version: operations.POSTDescribeSynonymOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTIndexDocuments

Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.

### Example Usage

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
    res, err := s.SDK.POSTIndexDocuments(ctx, operations.POSTIndexDocumentsRequest{
        Action: operations.POSTIndexDocumentsActionEnumIndexDocuments,
        RequestBody: []byte("excepturi"),
        Version: operations.POSTIndexDocumentsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateAvailabilityOptions

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

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
    res, err := s.SDK.POSTUpdateAvailabilityOptions(ctx, operations.POSTUpdateAvailabilityOptionsRequest{
        Action: operations.POSTUpdateAvailabilityOptionsActionEnumUpdateAvailabilityOptions,
        RequestBody: []byte("voluptate"),
        Version: operations.POSTUpdateAvailabilityOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateDefaultSearchField

Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 

### Example Usage

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
    res, err := s.SDK.POSTUpdateDefaultSearchField(ctx, operations.POSTUpdateDefaultSearchFieldRequest{
        Action: operations.POSTUpdateDefaultSearchFieldActionEnumUpdateDefaultSearchField,
        RequestBody: []byte("fugiat"),
        Version: operations.POSTUpdateDefaultSearchFieldVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateServiceAccessPolicies

Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.

### Example Usage

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
    res, err := s.SDK.POSTUpdateServiceAccessPolicies(ctx, operations.POSTUpdateServiceAccessPoliciesRequest{
        Action: operations.POSTUpdateServiceAccessPoliciesActionEnumUpdateServiceAccessPolicies,
        RequestBody: []byte("dolores"),
        Version: operations.POSTUpdateServiceAccessPoliciesVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateStemmingOptions

Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.

### Example Usage

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
    res, err := s.SDK.POSTUpdateStemmingOptions(ctx, operations.POSTUpdateStemmingOptionsRequest{
        Action: operations.POSTUpdateStemmingOptionsActionEnumUpdateStemmingOptions,
        RequestBody: []byte("perferendis"),
        Version: operations.POSTUpdateStemmingOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateStopwordOptions

Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.

### Example Usage

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
    res, err := s.SDK.POSTUpdateStopwordOptions(ctx, operations.POSTUpdateStopwordOptionsRequest{
        Action: operations.POSTUpdateStopwordOptionsActionEnumUpdateStopwordOptions,
        RequestBody: []byte("recusandae"),
        Version: operations.POSTUpdateStopwordOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateSynonymOptions

Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

### Example Usage

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
    res, err := s.SDK.POSTUpdateSynonymOptions(ctx, operations.POSTUpdateSynonymOptionsRequest{
        Action: operations.POSTUpdateSynonymOptionsActionEnumUpdateSynonymOptions,
        RequestBody: []byte("error"),
        Version: operations.POSTUpdateSynonymOptionsVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
