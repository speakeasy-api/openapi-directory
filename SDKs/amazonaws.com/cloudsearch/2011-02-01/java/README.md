# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDomainActionEnum;
import org.openapis.openapi.models.operations.GETCreateDomainRequest;
import org.openapis.openapi.models.operations.GETCreateDomainResponse;
import org.openapis.openapi.models.operations.GETCreateDomainVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDomainRequest req = new GETCreateDomainRequest(GETCreateDomainActionEnum.CREATE_DOMAIN, "provident", GETCreateDomainVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            GETCreateDomainResponse res = sdk.getCreateDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getCreateDomain](docs/sdk/README.md#getcreatedomain) - Creates a new search domain.
* [getDefineRankExpression](docs/sdk/README.md#getdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [getDeleteDomain](docs/sdk/README.md#getdeletedomain) - Permanently deletes a search domain and all of its data.
* [getDeleteIndexField](docs/sdk/README.md#getdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [getDeleteRankExpression](docs/sdk/README.md#getdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [getDescribeAvailabilityOptions](docs/sdk/README.md#getdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeDefaultSearchField](docs/sdk/README.md#getdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [getDescribeDomains](docs/sdk/README.md#getdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [getDescribeIndexFields](docs/sdk/README.md#getdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [getDescribeRankExpressions](docs/sdk/README.md#getdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [getDescribeServiceAccessPolicies](docs/sdk/README.md#getdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [getDescribeStemmingOptions](docs/sdk/README.md#getdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [getDescribeStopwordOptions](docs/sdk/README.md#getdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [getDescribeSynonymOptions](docs/sdk/README.md#getdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [getIndexDocuments](docs/sdk/README.md#getindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [getUpdateAvailabilityOptions](docs/sdk/README.md#getupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getUpdateDefaultSearchField](docs/sdk/README.md#getupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [getUpdateServiceAccessPolicies](docs/sdk/README.md#getupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [getUpdateStemmingOptions](docs/sdk/README.md#getupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [getUpdateStopwordOptions](docs/sdk/README.md#getupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [getUpdateSynonymOptions](docs/sdk/README.md#getupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* [postCreateDomain](docs/sdk/README.md#postcreatedomain) - Creates a new search domain.
* [postDefineIndexField](docs/sdk/README.md#postdefineindexfield) - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* [postDefineRankExpression](docs/sdk/README.md#postdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [postDeleteDomain](docs/sdk/README.md#postdeletedomain) - Permanently deletes a search domain and all of its data.
* [postDeleteIndexField](docs/sdk/README.md#postdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [postDeleteRankExpression](docs/sdk/README.md#postdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [postDescribeAvailabilityOptions](docs/sdk/README.md#postdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeDefaultSearchField](docs/sdk/README.md#postdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [postDescribeDomains](docs/sdk/README.md#postdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [postDescribeIndexFields](docs/sdk/README.md#postdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [postDescribeRankExpressions](docs/sdk/README.md#postdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [postDescribeServiceAccessPolicies](docs/sdk/README.md#postdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [postDescribeStemmingOptions](docs/sdk/README.md#postdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [postDescribeStopwordOptions](docs/sdk/README.md#postdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [postDescribeSynonymOptions](docs/sdk/README.md#postdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [postIndexDocuments](docs/sdk/README.md#postindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [postUpdateAvailabilityOptions](docs/sdk/README.md#postupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postUpdateDefaultSearchField](docs/sdk/README.md#postupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [postUpdateServiceAccessPolicies](docs/sdk/README.md#postupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [postUpdateStemmingOptions](docs/sdk/README.md#postupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [postUpdateStopwordOptions](docs/sdk/README.md#postupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [postUpdateSynonymOptions](docs/sdk/README.md#postupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
