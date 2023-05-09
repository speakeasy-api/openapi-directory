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
    res, err := s.GETCreateDomain(ctx, operations.GETCreateDomainRequest{
        Action: operations.GETCreateDomainActionEnumCreateDomain,
        DomainName: "corrupti",
        Version: operations.GETCreateDomainVersionEnumTwoThousandAndEleven0201,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
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
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GETCreateDomain](docs/sdk/README.md#getcreatedomain) - Creates a new search domain.
* [GETDefineRankExpression](docs/sdk/README.md#getdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [GETDeleteDomain](docs/sdk/README.md#getdeletedomain) - Permanently deletes a search domain and all of its data.
* [GETDeleteIndexField](docs/sdk/README.md#getdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [GETDeleteRankExpression](docs/sdk/README.md#getdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [GETDescribeAvailabilityOptions](docs/sdk/README.md#getdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [GETDescribeDefaultSearchField](docs/sdk/README.md#getdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [GETDescribeDomains](docs/sdk/README.md#getdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [GETDescribeIndexFields](docs/sdk/README.md#getdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [GETDescribeRankExpressions](docs/sdk/README.md#getdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [GETDescribeServiceAccessPolicies](docs/sdk/README.md#getdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [GETDescribeStemmingOptions](docs/sdk/README.md#getdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [GETDescribeStopwordOptions](docs/sdk/README.md#getdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [GETDescribeSynonymOptions](docs/sdk/README.md#getdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [GETIndexDocuments](docs/sdk/README.md#getindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [GETUpdateAvailabilityOptions](docs/sdk/README.md#getupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [GETUpdateDefaultSearchField](docs/sdk/README.md#getupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [GETUpdateServiceAccessPolicies](docs/sdk/README.md#getupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [GETUpdateStemmingOptions](docs/sdk/README.md#getupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [GETUpdateStopwordOptions](docs/sdk/README.md#getupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [GETUpdateSynonymOptions](docs/sdk/README.md#getupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* [POSTCreateDomain](docs/sdk/README.md#postcreatedomain) - Creates a new search domain.
* [POSTDefineIndexField](docs/sdk/README.md#postdefineindexfield) - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* [POSTDefineRankExpression](docs/sdk/README.md#postdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [POSTDeleteDomain](docs/sdk/README.md#postdeletedomain) - Permanently deletes a search domain and all of its data.
* [POSTDeleteIndexField](docs/sdk/README.md#postdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [POSTDeleteRankExpression](docs/sdk/README.md#postdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [POSTDescribeAvailabilityOptions](docs/sdk/README.md#postdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [POSTDescribeDefaultSearchField](docs/sdk/README.md#postdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [POSTDescribeDomains](docs/sdk/README.md#postdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [POSTDescribeIndexFields](docs/sdk/README.md#postdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [POSTDescribeRankExpressions](docs/sdk/README.md#postdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [POSTDescribeServiceAccessPolicies](docs/sdk/README.md#postdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [POSTDescribeStemmingOptions](docs/sdk/README.md#postdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [POSTDescribeStopwordOptions](docs/sdk/README.md#postdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [POSTDescribeSynonymOptions](docs/sdk/README.md#postdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [POSTIndexDocuments](docs/sdk/README.md#postindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [POSTUpdateAvailabilityOptions](docs/sdk/README.md#postupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [POSTUpdateDefaultSearchField](docs/sdk/README.md#postupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [POSTUpdateServiceAccessPolicies](docs/sdk/README.md#postupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [POSTUpdateStemmingOptions](docs/sdk/README.md#postupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [POSTUpdateStopwordOptions](docs/sdk/README.md#postupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [POSTUpdateSynonymOptions](docs/sdk/README.md#postupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
