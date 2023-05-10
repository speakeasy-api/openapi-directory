# SDK

## Overview

<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region">Regions and Endpoints</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudsearch/>
### Available Operations

* [getCreateDomain](#getcreatedomain) - Creates a new search domain.
* [getDefineRankExpression](#getdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [getDeleteDomain](#getdeletedomain) - Permanently deletes a search domain and all of its data.
* [getDeleteIndexField](#getdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [getDeleteRankExpression](#getdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [getDescribeAvailabilityOptions](#getdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeDefaultSearchField](#getdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [getDescribeDomains](#getdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [getDescribeIndexFields](#getdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [getDescribeRankExpressions](#getdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [getDescribeServiceAccessPolicies](#getdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [getDescribeStemmingOptions](#getdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [getDescribeStopwordOptions](#getdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [getDescribeSynonymOptions](#getdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [getIndexDocuments](#getindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [getUpdateAvailabilityOptions](#getupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getUpdateDefaultSearchField](#getupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [getUpdateServiceAccessPolicies](#getupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [getUpdateStemmingOptions](#getupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [getUpdateStopwordOptions](#getupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [getUpdateSynonymOptions](#getupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* [postCreateDomain](#postcreatedomain) - Creates a new search domain.
* [postDefineIndexField](#postdefineindexfield) - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* [postDefineRankExpression](#postdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [postDeleteDomain](#postdeletedomain) - Permanently deletes a search domain and all of its data.
* [postDeleteIndexField](#postdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [postDeleteRankExpression](#postdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [postDescribeAvailabilityOptions](#postdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeDefaultSearchField](#postdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [postDescribeDomains](#postdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [postDescribeIndexFields](#postdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [postDescribeRankExpressions](#postdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [postDescribeServiceAccessPolicies](#postdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [postDescribeStemmingOptions](#postdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [postDescribeStopwordOptions](#postdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [postDescribeSynonymOptions](#postdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [postIndexDocuments](#postindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [postUpdateAvailabilityOptions](#postupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postUpdateDefaultSearchField](#postupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [postUpdateServiceAccessPolicies](#postupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [postUpdateStemmingOptions](#postupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [postUpdateStopwordOptions](#postupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [postUpdateSynonymOptions](#postupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

## getCreateDomain

Creates a new search domain.

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
    $request->domainName = 'vel';
    $request->version = GETCreateDomainVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getCreateDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDefineRankExpression

Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDefineRankExpressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDefineRankExpressionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDefineRankExpressionRankExpression;
use \OpenAPI\OpenAPI\Models\Operations\GETDefineRankExpressionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDefineRankExpressionRequest();
    $request->action = GETDefineRankExpressionActionEnum::DEFINE_RANK_EXPRESSION;
    $request->domainName = 'delectus';
    $request->rankExpression = new GETDefineRankExpressionRankExpression();
    $request->rankExpression->rankExpression = 'tempora';
    $request->rankExpression->rankName = 'suscipit';
    $request->version = GETDefineRankExpressionVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->getDefineRankExpression($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDomain

Permanently deletes a search domain and all of its data.

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
    $request->domainName = 'recusandae';
    $request->version = GETDeleteDomainVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getDeleteDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteIndexField

Removes an <code>IndexField</code> from the search domain.

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
    $request->domainName = 'repellendus';
    $request->indexFieldName = 'sapiente';
    $request->version = GETDeleteIndexFieldVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->getDeleteIndexField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteRankExpression

Removes a <code>RankExpression</code> from the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRankExpressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRankExpressionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRankExpressionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteRankExpressionRequest();
    $request->action = GETDeleteRankExpressionActionEnum::DELETE_RANK_EXPRESSION;
    $request->domainName = 'quod';
    $request->rankName = 'esse';
    $request->version = GETDeleteRankExpressionVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getDeleteRankExpression($request);

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
    $request->domainName = 'fugit';
    $request->version = GETDescribeAvailabilityOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getDescribeAvailabilityOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDefaultSearchField

Gets the default search field configured for the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDefaultSearchFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDefaultSearchFieldActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDefaultSearchFieldVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDefaultSearchFieldRequest();
    $request->action = GETDescribeDefaultSearchFieldActionEnum::DESCRIBE_DEFAULT_SEARCH_FIELD;
    $request->domainName = 'modi';
    $request->version = GETDescribeDefaultSearchFieldVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->getDescribeDefaultSearchField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.

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
        'ad',
    ];
    $request->version = GETDescribeDomainsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getDescribeDomains($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.

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
    $request->domainName = 'saepe';
    $request->fieldNames = [
        'in',
        'corporis',
        'iste',
    ];
    $request->version = GETDescribeIndexFieldsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getDescribeIndexFields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeRankExpressions

Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeRankExpressionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeRankExpressionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeRankExpressionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeRankExpressionsRequest();
    $request->action = GETDescribeRankExpressionsActionEnum::DESCRIBE_RANK_EXPRESSIONS;
    $request->domainName = 'mollitia';
    $request->rankNames = [
        'dolores',
        'dolorem',
        'corporis',
    ];
    $request->version = GETDescribeRankExpressionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDescribeRankExpressions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeServiceAccessPolicies

Gets information about the resource-based policies that control access to the domain's document and search services.

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
    $request->domainName = 'accusantium';
    $request->version = GETDescribeServiceAccessPoliciesVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->getDescribeServiceAccessPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStemmingOptions

Gets the stemming dictionary configured for the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStemmingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStemmingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStemmingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStemmingOptionsRequest();
    $request->action = GETDescribeStemmingOptionsActionEnum::DESCRIBE_STEMMING_OPTIONS;
    $request->domainName = 'culpa';
    $request->version = GETDescribeStemmingOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->getDescribeStemmingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStopwordOptions

Gets the stopwords configured for the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStopwordOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStopwordOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStopwordOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStopwordOptionsRequest();
    $request->action = GETDescribeStopwordOptionsActionEnum::DESCRIBE_STOPWORD_OPTIONS;
    $request->domainName = 'molestiae';
    $request->version = GETDescribeStopwordOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';

    $response = $sdk->sdk->getDescribeStopwordOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeSynonymOptions

Gets the synonym dictionary configured for the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSynonymOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSynonymOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSynonymOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeSynonymOptionsRequest();
    $request->action = GETDescribeSynonymOptionsActionEnum::DESCRIBE_SYNONYM_OPTIONS;
    $request->domainName = 'enim';
    $request->version = GETDescribeSynonymOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->getDescribeSynonymOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndexDocuments

Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.

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
    $request->domainName = 'aut';
    $request->version = GETIndexDocumentsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->getIndexDocuments($request);

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
    $request->domainName = 'vero';
    $request->multiAZ = false;
    $request->version = GETUpdateAvailabilityOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->getUpdateAvailabilityOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateDefaultSearchField

Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateDefaultSearchFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateDefaultSearchFieldActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateDefaultSearchFieldVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateDefaultSearchFieldRequest();
    $request->action = GETUpdateDefaultSearchFieldActionEnum::UPDATE_DEFAULT_SEARCH_FIELD;
    $request->defaultSearchField = 'perferendis';
    $request->domainName = 'doloremque';
    $request->version = GETUpdateDefaultSearchFieldVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getUpdateDefaultSearchField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateServiceAccessPolicies

Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.

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
    $request->accessPolicies = 'dicta';
    $request->action = GETUpdateServiceAccessPoliciesActionEnum::UPDATE_SERVICE_ACCESS_POLICIES;
    $request->domainName = 'harum';
    $request->version = GETUpdateServiceAccessPoliciesVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getUpdateServiceAccessPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateStemmingOptions

Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateStemmingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateStemmingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateStemmingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateStemmingOptionsRequest();
    $request->action = GETUpdateStemmingOptionsActionEnum::UPDATE_STEMMING_OPTIONS;
    $request->domainName = 'molestias';
    $request->stems = 'excepturi';
    $request->version = GETUpdateStemmingOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->getUpdateStemmingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateStopwordOptions

Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateStopwordOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateStopwordOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateStopwordOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateStopwordOptionsRequest();
    $request->action = GETUpdateStopwordOptionsActionEnum::UPDATE_STOPWORD_OPTIONS;
    $request->domainName = 'sint';
    $request->stopwords = 'veritatis';
    $request->version = GETUpdateStopwordOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->getUpdateStopwordOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateSynonymOptions

Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSynonymOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSynonymOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSynonymOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateSynonymOptionsRequest();
    $request->action = GETUpdateSynonymOptionsActionEnum::UPDATE_SYNONYM_OPTIONS;
    $request->domainName = 'deserunt';
    $request->synonyms = 'distinctio';
    $request->version = GETUpdateSynonymOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->getUpdateSynonymOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDomain

Creates a new search domain.

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
    $request->requestBody = 'perferendis';
    $request->version = POSTCreateDomainVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->postCreateDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDefineIndexField

Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.

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
    $request->requestBody = 'tempora';
    $request->version = POSTDefineIndexFieldVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->postDefineIndexField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDefineRankExpression

Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineRankExpressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineRankExpressionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDefineRankExpressionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDefineRankExpressionRequest();
    $request->action = POSTDefineRankExpressionActionEnum::DEFINE_RANK_EXPRESSION;
    $request->requestBody = 'sint';
    $request->version = POSTDefineRankExpressionVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->postDefineRankExpression($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDomain

Permanently deletes a search domain and all of its data.

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
    $request->requestBody = 'a';
    $request->version = POSTDeleteDomainVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postDeleteDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteIndexField

Removes an <code>IndexField</code> from the search domain.

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
    $request->requestBody = 'magnam';
    $request->version = POSTDeleteIndexFieldVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postDeleteIndexField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteRankExpression

Removes a <code>RankExpression</code> from the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRankExpressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRankExpressionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRankExpressionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteRankExpressionRequest();
    $request->action = POSTDeleteRankExpressionActionEnum::DELETE_RANK_EXPRESSION;
    $request->requestBody = 'occaecati';
    $request->version = POSTDeleteRankExpressionVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postDeleteRankExpression($request);

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
    $request->requestBody = 'blanditiis';
    $request->version = POSTDescribeAvailabilityOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->postDescribeAvailabilityOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDefaultSearchField

Gets the default search field configured for the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDefaultSearchFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDefaultSearchFieldActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDefaultSearchFieldVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDefaultSearchFieldRequest();
    $request->action = POSTDescribeDefaultSearchFieldActionEnum::DESCRIBE_DEFAULT_SEARCH_FIELD;
    $request->requestBody = 'omnis';
    $request->version = POSTDescribeDefaultSearchFieldVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postDescribeDefaultSearchField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.

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
    $request->requestBody = 'labore';
    $request->version = POSTDescribeDomainsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postDescribeDomains($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.

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
    $request->requestBody = 'magnam';
    $request->version = POSTDescribeIndexFieldsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->postDescribeIndexFields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeRankExpressions

Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeRankExpressionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeRankExpressionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeRankExpressionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeRankExpressionsRequest();
    $request->action = POSTDescribeRankExpressionsActionEnum::DESCRIBE_RANK_EXPRESSIONS;
    $request->requestBody = 'mollitia';
    $request->version = POSTDescribeRankExpressionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->postDescribeRankExpressions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeServiceAccessPolicies

Gets information about the resource-based policies that control access to the domain's document and search services.

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
    $request->requestBody = 'nemo';
    $request->version = POSTDescribeServiceAccessPoliciesVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->postDescribeServiceAccessPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStemmingOptions

Gets the stemming dictionary configured for the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStemmingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStemmingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStemmingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStemmingOptionsRequest();
    $request->action = POSTDescribeStemmingOptionsActionEnum::DESCRIBE_STEMMING_OPTIONS;
    $request->requestBody = 'facilis';
    $request->version = POSTDescribeStemmingOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->postDescribeStemmingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStopwordOptions

Gets the stopwords configured for the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStopwordOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStopwordOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStopwordOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStopwordOptionsRequest();
    $request->action = POSTDescribeStopwordOptionsActionEnum::DESCRIBE_STOPWORD_OPTIONS;
    $request->requestBody = 'repellat';
    $request->version = POSTDescribeStopwordOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->postDescribeStopwordOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeSynonymOptions

Gets the synonym dictionary configured for the search domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSynonymOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSynonymOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSynonymOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeSynonymOptionsRequest();
    $request->action = POSTDescribeSynonymOptionsActionEnum::DESCRIBE_SYNONYM_OPTIONS;
    $request->requestBody = 'natus';
    $request->version = POSTDescribeSynonymOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postDescribeSynonymOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIndexDocuments

Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.

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
    $request->requestBody = 'excepturi';
    $request->version = POSTIndexDocumentsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postIndexDocuments($request);

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
    $request->requestBody = 'voluptate';
    $request->version = POSTUpdateAvailabilityOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->postUpdateAvailabilityOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateDefaultSearchField

Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateDefaultSearchFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateDefaultSearchFieldActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateDefaultSearchFieldVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateDefaultSearchFieldRequest();
    $request->action = POSTUpdateDefaultSearchFieldActionEnum::UPDATE_DEFAULT_SEARCH_FIELD;
    $request->requestBody = 'fugiat';
    $request->version = POSTUpdateDefaultSearchFieldVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->postUpdateDefaultSearchField($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateServiceAccessPolicies

Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.

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
    $request->requestBody = 'dolores';
    $request->version = POSTUpdateServiceAccessPoliciesVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->postUpdateServiceAccessPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateStemmingOptions

Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStemmingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStemmingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStemmingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateStemmingOptionsRequest();
    $request->action = POSTUpdateStemmingOptionsActionEnum::UPDATE_STEMMING_OPTIONS;
    $request->requestBody = 'perferendis';
    $request->version = POSTUpdateStemmingOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postUpdateStemmingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateStopwordOptions

Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStopwordOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStopwordOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStopwordOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateStopwordOptionsRequest();
    $request->action = POSTUpdateStopwordOptionsActionEnum::UPDATE_STOPWORD_OPTIONS;
    $request->requestBody = 'recusandae';
    $request->version = POSTUpdateStopwordOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postUpdateStopwordOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateSynonymOptions

Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSynonymOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSynonymOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSynonymOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateSynonymOptionsRequest();
    $request->action = POSTUpdateSynonymOptionsActionEnum::UPDATE_SYNONYM_OPTIONS;
    $request->requestBody = 'error';
    $request->version = POSTUpdateSynonymOptionsVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->postUpdateSynonymOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
