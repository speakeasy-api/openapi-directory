# SDK

## Overview

<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudsearch/>
### Available Operations

* [getBuildSuggesters](#getbuildsuggesters) - Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getCreateDomain](#getcreatedomain) - Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDefineExpression](#getdefineexpression) - Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDeleteAnalysisScheme](#getdeleteanalysisscheme) - Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [getDeleteDomain](#getdeletedomain) - Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [getDeleteExpression](#getdeleteexpression) - Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDeleteIndexField](#getdeleteindexfield) - Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDeleteSuggester](#getdeletesuggester) - Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeAnalysisSchemes](#getdescribeanalysisschemes) - Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeAvailabilityOptions](#getdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeDomainEndpointOptions](#getdescribedomainendpointoptions) - Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeDomains](#getdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeExpressions](#getdescribeexpressions) - Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeIndexFields](#getdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeScalingParameters](#getdescribescalingparameters) - Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeServiceAccessPolicies](#getdescribeserviceaccesspolicies) - Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeSuggesters](#getdescribesuggesters) - Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getIndexDocuments](#getindexdocuments) - Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
* [getListDomainNames](#getlistdomainnames) - Lists all search domains owned by an account.
* [getUpdateAvailabilityOptions](#getupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getUpdateDomainEndpointOptions](#getupdatedomainendpointoptions) - Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getUpdateScalingParameters](#getupdatescalingparameters) - Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [getUpdateServiceAccessPolicies](#getupdateserviceaccesspolicies) - Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.
* [postBuildSuggesters](#postbuildsuggesters) - Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postCreateDomain](#postcreatedomain) - Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDefineAnalysisScheme](#postdefineanalysisscheme) - Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDefineExpression](#postdefineexpression) - Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDefineIndexField](#postdefineindexfield) - Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [postDefineSuggester](#postdefinesuggester) - Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDeleteAnalysisScheme](#postdeleteanalysisscheme) - Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [postDeleteDomain](#postdeletedomain) - Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [postDeleteExpression](#postdeleteexpression) - Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDeleteIndexField](#postdeleteindexfield) - Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDeleteSuggester](#postdeletesuggester) - Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeAnalysisSchemes](#postdescribeanalysisschemes) - Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeAvailabilityOptions](#postdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeDomainEndpointOptions](#postdescribedomainendpointoptions) - Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeDomains](#postdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeExpressions](#postdescribeexpressions) - Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeIndexFields](#postdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeScalingParameters](#postdescribescalingparameters) - Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeServiceAccessPolicies](#postdescribeserviceaccesspolicies) - Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeSuggesters](#postdescribesuggesters) - Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postIndexDocuments](#postindexdocuments) - Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
* [postListDomainNames](#postlistdomainnames) - Lists all search domains owned by an account.
* [postUpdateAvailabilityOptions](#postupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postUpdateDomainEndpointOptions](#postupdatedomainendpointoptions) - Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postUpdateScalingParameters](#postupdatescalingparameters) - Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [postUpdateServiceAccessPolicies](#postupdateserviceaccesspolicies) - Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.

## getBuildSuggesters

Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETBuildSuggestersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETBuildSuggestersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETBuildSuggestersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETBuildSuggestersRequest();
    $request->action = GETBuildSuggestersActionEnum::BUILD_SUGGESTERS;
    $request->domainName = 'vel';
    $request->version = GETBuildSuggestersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getBuildSuggesters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateDomain

Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDomainRequest();
    $request->action = GETCreateDomainActionEnum::CREATE_DOMAIN;
    $request->domainName = 'delectus';
    $request->version = GETCreateDomainVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getCreateDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDefineExpression

Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDefineExpressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDefineExpressionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDefineExpressionExpression;
use \OpenAPI\OpenAPI\Models\Operations\GETDefineExpressionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDefineExpressionRequest();
    $request->action = GETDefineExpressionActionEnum::DEFINE_EXPRESSION;
    $request->domainName = 'excepturi';
    $request->expression = new GETDefineExpressionExpression();
    $request->expression->expressionName = 'nisi';
    $request->expression->expressionValue = 'recusandae';
    $request->version = GETDefineExpressionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getDefineExpression($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteAnalysisScheme

Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAnalysisSchemeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAnalysisSchemeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAnalysisSchemeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteAnalysisSchemeRequest();
    $request->action = GETDeleteAnalysisSchemeActionEnum::DELETE_ANALYSIS_SCHEME;
    $request->analysisSchemeName = 'repellendus';
    $request->domainName = 'sapiente';
    $request->version = GETDeleteAnalysisSchemeVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->getDeleteAnalysisScheme($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDomain

Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDomainActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDomainVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDomainRequest();
    $request->action = GETDeleteDomainActionEnum::DELETE_DOMAIN;
    $request->domainName = 'quod';
    $request->version = GETDeleteDomainVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->getDeleteDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteExpression

Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteExpressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteExpressionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteExpressionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteExpressionRequest();
    $request->action = GETDeleteExpressionActionEnum::DELETE_EXPRESSION;
    $request->domainName = 'occaecati';
    $request->expressionName = 'fugit';
    $request->version = GETDeleteExpressionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getDeleteExpression($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteIndexField

Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIndexFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIndexFieldActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIndexFieldVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteIndexFieldRequest();
    $request->action = GETDeleteIndexFieldActionEnum::DELETE_INDEX_FIELD;
    $request->domainName = 'modi';
    $request->indexFieldName = 'qui';
    $request->version = GETDeleteIndexFieldVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getDeleteIndexField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteSuggester

Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSuggesterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSuggesterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSuggesterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteSuggesterRequest();
    $request->action = GETDeleteSuggesterActionEnum::DELETE_SUGGESTER;
    $request->domainName = 'ad';
    $request->suggesterName = 'natus';
    $request->version = GETDeleteSuggesterVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->getDeleteSuggester($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAnalysisSchemes

Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAnalysisSchemesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAnalysisSchemesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAnalysisSchemesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAnalysisSchemesRequest();
    $request->action = GETDescribeAnalysisSchemesActionEnum::DESCRIBE_ANALYSIS_SCHEMES;
    $request->analysisSchemeNames = [
        'in',
        'corporis',
        'iste',
    ];
    $request->deployed = false;
    $request->domainName = 'iure';
    $request->version = GETDescribeAnalysisSchemesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getDescribeAnalysisSchemes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAvailabilityOptions

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAvailabilityOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAvailabilityOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAvailabilityOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAvailabilityOptionsRequest();
    $request->action = GETDescribeAvailabilityOptionsActionEnum::DESCRIBE_AVAILABILITY_OPTIONS;
    $request->deployed = false;
    $request->domainName = 'laborum';
    $request->version = GETDescribeAvailabilityOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getDescribeAvailabilityOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDomainEndpointOptions

Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDomainEndpointOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDomainEndpointOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDomainEndpointOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDomainEndpointOptionsRequest();
    $request->action = GETDescribeDomainEndpointOptionsActionEnum::DESCRIBE_DOMAIN_ENDPOINT_OPTIONS;
    $request->deployed = false;
    $request->domainName = 'nemo';
    $request->version = GETDescribeDomainEndpointOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getDescribeDomainEndpointOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDomainsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDomainsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDomainsRequest();
    $request->action = GETDescribeDomainsActionEnum::DESCRIBE_DOMAINS;
    $request->domainNames = [
        'mollitia',
    ];
    $request->version = GETDescribeDomainsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getDescribeDomains($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeExpressions

Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeExpressionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeExpressionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeExpressionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeExpressionsRequest();
    $request->action = GETDescribeExpressionsActionEnum::DESCRIBE_EXPRESSIONS;
    $request->deployed = false;
    $request->domainName = 'commodi';
    $request->expressionNames = [
        'molestiae',
        'velit',
    ];
    $request->version = GETDescribeExpressionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDescribeExpressions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeIndexFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeIndexFieldsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeIndexFieldsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeIndexFieldsRequest();
    $request->action = GETDescribeIndexFieldsActionEnum::DESCRIBE_INDEX_FIELDS;
    $request->deployed = false;
    $request->domainName = 'odit';
    $request->fieldNames = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->version = GETDescribeIndexFieldsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getDescribeIndexFields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeScalingParameters

Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeScalingParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeScalingParametersRequest();
    $request->action = GETDescribeScalingParametersActionEnum::DESCRIBE_SCALING_PARAMETERS;
    $request->domainName = 'reiciendis';
    $request->version = GETDescribeScalingParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getDescribeScalingParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeServiceAccessPolicies

Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeServiceAccessPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeServiceAccessPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeServiceAccessPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeServiceAccessPoliciesRequest();
    $request->action = GETDescribeServiceAccessPoliciesActionEnum::DESCRIBE_SERVICE_ACCESS_POLICIES;
    $request->deployed = false;
    $request->domainName = 'voluptate';
    $request->version = GETDescribeServiceAccessPoliciesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getDescribeServiceAccessPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeSuggesters

Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSuggestersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSuggestersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSuggestersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeSuggestersRequest();
    $request->action = GETDescribeSuggestersActionEnum::DESCRIBE_SUGGESTERS;
    $request->deployed = false;
    $request->domainName = 'corporis';
    $request->suggesterNames = [
        'iusto',
        'dicta',
    ];
    $request->version = GETDescribeSuggestersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->getDescribeSuggesters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndexDocuments

Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETIndexDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETIndexDocumentsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETIndexDocumentsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETIndexDocumentsRequest();
    $request->action = GETIndexDocumentsActionEnum::INDEX_DOCUMENTS;
    $request->domainName = 'quidem';
    $request->version = GETIndexDocumentsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';

    $response = $sdk->sdk->getIndexDocuments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListDomainNames

Lists all search domains owned by an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListDomainNamesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListDomainNamesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListDomainNamesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListDomainNamesRequest();
    $request->action = GETListDomainNamesActionEnum::LIST_DOMAIN_NAMES;
    $request->version = GETListDomainNamesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getListDomainNames($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateAvailabilityOptions

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAvailabilityOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAvailabilityOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAvailabilityOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateAvailabilityOptionsRequest();
    $request->action = GETUpdateAvailabilityOptionsActionEnum::UPDATE_AVAILABILITY_OPTIONS;
    $request->domainName = 'consequatur';
    $request->multiAZ = false;
    $request->version = GETUpdateAvailabilityOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->getUpdateAvailabilityOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateDomainEndpointOptions

Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateDomainEndpointOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateDomainEndpointOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateDomainEndpointOptionsDomainEndpointOptions;
use \OpenAPI\OpenAPI\Models\Shared\TLSSecurityPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateDomainEndpointOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateDomainEndpointOptionsRequest();
    $request->action = GETUpdateDomainEndpointOptionsActionEnum::UPDATE_DOMAIN_ENDPOINT_OPTIONS;
    $request->domainEndpointOptions = new GETUpdateDomainEndpointOptionsDomainEndpointOptions();
    $request->domainEndpointOptions->enforceHTTPS = false;
    $request->domainEndpointOptions->tlsSecurityPolicy = TLSSecurityPolicyEnum::POLICY_MIN_TLS10201907;
    $request->domainName = 'qui';
    $request->version = GETUpdateDomainEndpointOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getUpdateDomainEndpointOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateScalingParameters

Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateScalingParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateScalingParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateScalingParametersScalingParameters;
use \OpenAPI\OpenAPI\Models\Shared\PartitionInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateScalingParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateScalingParametersRequest();
    $request->action = GETUpdateScalingParametersActionEnum::UPDATE_SCALING_PARAMETERS;
    $request->domainName = 'alias';
    $request->scalingParameters = new GETUpdateScalingParametersScalingParameters();
    $request->scalingParameters->desiredInstanceType = PartitionInstanceTypeEnum::SEARCH_M2_XLARGE;
    $request->scalingParameters->desiredPartitionCount = 677817;
    $request->scalingParameters->desiredReplicationCount = 569618;
    $request->version = GETUpdateScalingParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getUpdateScalingParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateServiceAccessPolicies

Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceAccessPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceAccessPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceAccessPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateServiceAccessPoliciesRequest();
    $request->accessPolicies = 'eligendi';
    $request->action = GETUpdateServiceAccessPoliciesActionEnum::UPDATE_SERVICE_ACCESS_POLICIES;
    $request->domainName = 'sint';
    $request->version = GETUpdateServiceAccessPoliciesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->getUpdateServiceAccessPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBuildSuggesters

Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBuildSuggestersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBuildSuggestersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBuildSuggestersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBuildSuggestersRequest();
    $request->action = POSTBuildSuggestersActionEnum::BUILD_SUGGESTERS;
    $request->requestBody = 'a';
    $request->version = POSTBuildSuggestersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postBuildSuggesters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDomain

Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDomainActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDomainVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDomainRequest();
    $request->action = POSTCreateDomainActionEnum::CREATE_DOMAIN;
    $request->requestBody = 'magnam';
    $request->version = POSTCreateDomainVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postCreateDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDefineAnalysisScheme

Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineAnalysisSchemeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineAnalysisSchemeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineAnalysisSchemeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDefineAnalysisSchemeRequest();
    $request->action = POSTDefineAnalysisSchemeActionEnum::DEFINE_ANALYSIS_SCHEME;
    $request->requestBody = 'occaecati';
    $request->version = POSTDefineAnalysisSchemeVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postDefineAnalysisScheme($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDefineExpression

Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineExpressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineExpressionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineExpressionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDefineExpressionRequest();
    $request->action = POSTDefineExpressionActionEnum::DEFINE_EXPRESSION;
    $request->requestBody = 'blanditiis';
    $request->version = POSTDefineExpressionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->postDefineExpression($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDefineIndexField

Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineIndexFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineIndexFieldActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineIndexFieldVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDefineIndexFieldRequest();
    $request->action = POSTDefineIndexFieldActionEnum::DEFINE_INDEX_FIELD;
    $request->requestBody = 'omnis';
    $request->version = POSTDefineIndexFieldVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postDefineIndexField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDefineSuggester

Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineSuggesterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineSuggesterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineSuggesterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDefineSuggesterRequest();
    $request->action = POSTDefineSuggesterActionEnum::DEFINE_SUGGESTER;
    $request->requestBody = 'labore';
    $request->version = POSTDefineSuggesterVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postDefineSuggester($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAnalysisScheme

Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAnalysisSchemeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAnalysisSchemeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAnalysisSchemeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAnalysisSchemeRequest();
    $request->action = POSTDeleteAnalysisSchemeActionEnum::DELETE_ANALYSIS_SCHEME;
    $request->requestBody = 'magnam';
    $request->version = POSTDeleteAnalysisSchemeVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->postDeleteAnalysisScheme($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDomain

Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDomainActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDomainVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDomainRequest();
    $request->action = POSTDeleteDomainActionEnum::DELETE_DOMAIN;
    $request->requestBody = 'mollitia';
    $request->version = POSTDeleteDomainVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->postDeleteDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteExpression

Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteExpressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteExpressionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteExpressionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteExpressionRequest();
    $request->action = POSTDeleteExpressionActionEnum::DELETE_EXPRESSION;
    $request->requestBody = 'nemo';
    $request->version = POSTDeleteExpressionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->postDeleteExpression($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteIndexField

Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIndexFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIndexFieldActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIndexFieldVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteIndexFieldRequest();
    $request->action = POSTDeleteIndexFieldActionEnum::DELETE_INDEX_FIELD;
    $request->requestBody = 'facilis';
    $request->version = POSTDeleteIndexFieldVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->postDeleteIndexField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteSuggester

Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSuggesterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSuggesterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSuggesterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteSuggesterRequest();
    $request->action = POSTDeleteSuggesterActionEnum::DELETE_SUGGESTER;
    $request->requestBody = 'repellat';
    $request->version = POSTDeleteSuggesterVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->postDeleteSuggester($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAnalysisSchemes

Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAnalysisSchemesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAnalysisSchemesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAnalysisSchemesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAnalysisSchemesRequest();
    $request->action = POSTDescribeAnalysisSchemesActionEnum::DESCRIBE_ANALYSIS_SCHEMES;
    $request->requestBody = 'natus';
    $request->version = POSTDescribeAnalysisSchemesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postDescribeAnalysisSchemes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAvailabilityOptions

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAvailabilityOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAvailabilityOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAvailabilityOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAvailabilityOptionsRequest();
    $request->action = POSTDescribeAvailabilityOptionsActionEnum::DESCRIBE_AVAILABILITY_OPTIONS;
    $request->requestBody = 'excepturi';
    $request->version = POSTDescribeAvailabilityOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postDescribeAvailabilityOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDomainEndpointOptions

Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDomainEndpointOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDomainEndpointOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDomainEndpointOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDomainEndpointOptionsRequest();
    $request->action = POSTDescribeDomainEndpointOptionsActionEnum::DESCRIBE_DOMAIN_ENDPOINT_OPTIONS;
    $request->requestBody = 'voluptate';
    $request->version = POSTDescribeDomainEndpointOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->postDescribeDomainEndpointOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDomainsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDomainsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDomainsRequest();
    $request->action = POSTDescribeDomainsActionEnum::DESCRIBE_DOMAINS;
    $request->requestBody = 'fugiat';
    $request->version = POSTDescribeDomainsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->postDescribeDomains($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeExpressions

Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeExpressionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeExpressionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeExpressionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeExpressionsRequest();
    $request->action = POSTDescribeExpressionsActionEnum::DESCRIBE_EXPRESSIONS;
    $request->requestBody = 'dolores';
    $request->version = POSTDescribeExpressionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->postDescribeExpressions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeIndexFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeIndexFieldsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeIndexFieldsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeIndexFieldsRequest();
    $request->action = POSTDescribeIndexFieldsActionEnum::DESCRIBE_INDEX_FIELDS;
    $request->requestBody = 'perferendis';
    $request->version = POSTDescribeIndexFieldsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postDescribeIndexFields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeScalingParameters

Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScalingParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeScalingParametersRequest();
    $request->action = POSTDescribeScalingParametersActionEnum::DESCRIBE_SCALING_PARAMETERS;
    $request->requestBody = 'recusandae';
    $request->version = POSTDescribeScalingParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postDescribeScalingParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeServiceAccessPolicies

Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeServiceAccessPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeServiceAccessPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeServiceAccessPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeServiceAccessPoliciesRequest();
    $request->action = POSTDescribeServiceAccessPoliciesActionEnum::DESCRIBE_SERVICE_ACCESS_POLICIES;
    $request->requestBody = 'error';
    $request->version = POSTDescribeServiceAccessPoliciesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->postDescribeServiceAccessPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeSuggesters

Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSuggestersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSuggestersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSuggestersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeSuggestersRequest();
    $request->action = POSTDescribeSuggestersActionEnum::DESCRIBE_SUGGESTERS;
    $request->requestBody = 'iste';
    $request->version = POSTDescribeSuggestersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->postDescribeSuggesters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIndexDocuments

Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTIndexDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTIndexDocumentsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTIndexDocumentsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTIndexDocumentsRequest();
    $request->action = POSTIndexDocumentsActionEnum::INDEX_DOCUMENTS;
    $request->requestBody = 'quaerat';
    $request->version = POSTIndexDocumentsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->postIndexDocuments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListDomainNames

Lists all search domains owned by an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDomainNamesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDomainNamesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDomainNamesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListDomainNamesRequest();
    $request->action = POSTListDomainNamesActionEnum::LIST_DOMAIN_NAMES;
    $request->version = POSTListDomainNamesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->postListDomainNames($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAvailabilityOptions

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAvailabilityOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAvailabilityOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAvailabilityOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateAvailabilityOptionsRequest();
    $request->action = POSTUpdateAvailabilityOptionsActionEnum::UPDATE_AVAILABILITY_OPTIONS;
    $request->requestBody = 'dolorum';
    $request->version = POSTUpdateAvailabilityOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->postUpdateAvailabilityOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateDomainEndpointOptions

Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateDomainEndpointOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateDomainEndpointOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateDomainEndpointOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateDomainEndpointOptionsRequest();
    $request->action = POSTUpdateDomainEndpointOptionsActionEnum::UPDATE_DOMAIN_ENDPOINT_OPTIONS;
    $request->requestBody = 'accusamus';
    $request->version = POSTUpdateDomainEndpointOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->postUpdateDomainEndpointOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateScalingParameters

Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateScalingParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateScalingParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateScalingParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateScalingParametersRequest();
    $request->action = POSTUpdateScalingParametersActionEnum::UPDATE_SCALING_PARAMETERS;
    $request->requestBody = 'fugiat';
    $request->version = POSTUpdateScalingParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->postUpdateScalingParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateServiceAccessPolicies

Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServiceAccessPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServiceAccessPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServiceAccessPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateServiceAccessPoliciesRequest();
    $request->action = POSTUpdateServiceAccessPoliciesActionEnum::UPDATE_SERVICE_ACCESS_POLICIES;
    $request->requestBody = 'omnis';
    $request->version = POSTUpdateServiceAccessPoliciesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postUpdateServiceAccessPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
