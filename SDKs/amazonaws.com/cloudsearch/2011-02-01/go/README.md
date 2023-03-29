# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cloudsearch/2011-02-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.GETCreateDomainRequest{
        QueryParams: operations.GETCreateDomainQueryParams{
            Action: "CreateDomain",
            DomainName: "deserunt",
            Version: "2011-02-01",
        },
        Headers: operations.GETCreateDomainHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.GETCreateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GETCreateDomain` - Creates a new search domain.
* `GETDefineRankExpression` - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* `GETDeleteDomain` - Permanently deletes a search domain and all of its data.
* `GETDeleteIndexField` - Removes an <code>IndexField</code> from the search domain.
* `GETDeleteRankExpression` - Removes a <code>RankExpression</code> from the search domain.
* `GETDescribeAvailabilityOptions` - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `GETDescribeDefaultSearchField` - Gets the default search field configured for the search domain.
* `GETDescribeDomains` - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* `GETDescribeIndexFields` - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* `GETDescribeRankExpressions` - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* `GETDescribeServiceAccessPolicies` - Gets information about the resource-based policies that control access to the domain's document and search services.
* `GETDescribeStemmingOptions` - Gets the stemming dictionary configured for the search domain.
* `GETDescribeStopwordOptions` - Gets the stopwords configured for the search domain.
* `GETDescribeSynonymOptions` - Gets the synonym dictionary configured for the search domain.
* `GETIndexDocuments` - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* `GETUpdateAvailabilityOptions` - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `GETUpdateDefaultSearchField` - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* `GETUpdateServiceAccessPolicies` - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* `GETUpdateStemmingOptions` - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* `GETUpdateStopwordOptions` - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* `GETUpdateSynonymOptions` - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* `POSTCreateDomain` - Creates a new search domain.
* `POSTDefineIndexField` - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* `POSTDefineRankExpression` - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* `POSTDeleteDomain` - Permanently deletes a search domain and all of its data.
* `POSTDeleteIndexField` - Removes an <code>IndexField</code> from the search domain.
* `POSTDeleteRankExpression` - Removes a <code>RankExpression</code> from the search domain.
* `POSTDescribeAvailabilityOptions` - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `POSTDescribeDefaultSearchField` - Gets the default search field configured for the search domain.
* `POSTDescribeDomains` - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* `POSTDescribeIndexFields` - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* `POSTDescribeRankExpressions` - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* `POSTDescribeServiceAccessPolicies` - Gets information about the resource-based policies that control access to the domain's document and search services.
* `POSTDescribeStemmingOptions` - Gets the stemming dictionary configured for the search domain.
* `POSTDescribeStopwordOptions` - Gets the stopwords configured for the search domain.
* `POSTDescribeSynonymOptions` - Gets the synonym dictionary configured for the search domain.
* `POSTIndexDocuments` - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* `POSTUpdateAvailabilityOptions` - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `POSTUpdateDefaultSearchField` - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* `POSTUpdateServiceAccessPolicies` - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* `POSTUpdateStemmingOptions` - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* `POSTUpdateStopwordOptions` - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* `POSTUpdateSynonymOptions` - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
