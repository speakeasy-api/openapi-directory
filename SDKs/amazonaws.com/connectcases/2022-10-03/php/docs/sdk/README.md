# SDK

## Overview

With Amazon Connect Cases, your agents can track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center. A case represents a customer issue. It records the issue, the steps and interactions taken to resolve the issue, and the outcome. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the <i>Amazon Connect Administrator Guide</i>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cases/>
### Available Operations

* [batchGetField](#batchgetfield) - Returns the description for the list of fields in the request parameters. 
* [batchPutFieldOptions](#batchputfieldoptions) - Creates and updates a set of field options for a single select field in a Cases domain.
* [createCase](#createcase) - <p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>
* [createDomain](#createdomain) - <p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>
* [createField](#createfield) - Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. 
* [createLayout](#createlayout) - <p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>
* [createRelatedItem](#createrelateditem) - <p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>
* [createTemplate](#createtemplate) - Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.
* [deleteDomain](#deletedomain) - Deletes a domain.
* [getCase](#getcase) - Returns information about a specific case if it exists. 
* [getCaseEventConfiguration](#getcaseeventconfiguration) - Returns the case event publishing configuration.
* [getDomain](#getdomain) - Returns information about a specific domain if it exists. 
* [getLayout](#getlayout) - Returns the details for the requested layout.
* [getTemplate](#gettemplate) - Returns the details for the requested template. 
* [listCasesForContact](#listcasesforcontact) - Lists cases for a given contact.
* [listDomains](#listdomains) - Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.
* [listFieldOptions](#listfieldoptions) - Lists all of the field options for a field identifier in the domain. 
* [listFields](#listfields) - Lists all fields in a Cases domain.
* [listLayouts](#listlayouts) - Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.
* [listTagsForResource](#listtagsforresource) - Lists tags for a resource.
* [listTemplates](#listtemplates) - Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. 
* [putCaseEventConfiguration](#putcaseeventconfiguration) - API for adding case event publishing configuration
* [searchCases](#searchcases) - <p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>
* [searchRelatedItems](#searchrelateditems) - <p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>
* [tagResource](#tagresource) - Adds tags to a resource.
* [untagResource](#untagresource) - Untags a resource.
* [updateCase](#updatecase) - <p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
* [updateField](#updatefield) - Updates the properties of an existing field. 
* [updateLayout](#updatelayout) - <p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>
* [updateTemplate](#updatetemplate) - Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.

## batchGetField

Returns the description for the list of fields in the request parameters. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFieldRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FieldIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetFieldRequest();
    $request->requestBody = new BatchGetFieldRequestBody();
    $request->requestBody->fields = [
        new FieldIdentifier(),
        new FieldIdentifier(),
        new FieldIdentifier(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->domainId = 'tempora';

    $response = $sdk->sdk->batchGetField($request);

    if ($response->batchGetFieldResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchPutFieldOptions

Creates and updates a set of field options for a single select field in a Cases domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutFieldOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutFieldOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FieldOption;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutFieldOptionsRequest();
    $request->requestBody = new BatchPutFieldOptionsRequestBody();
    $request->requestBody->options = [
        new FieldOption(),
        new FieldOption(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->domainId = 'recusandae';
    $request->fieldId = 'temporibus';

    $response = $sdk->sdk->batchPutFieldOptions($request);

    if ($response->batchPutFieldOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCase

<p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCaseRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FieldValue;
use \OpenAPI\OpenAPI\Models\Shared\FieldValueUnion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCaseRequest();
    $request->requestBody = new CreateCaseRequestBody();
    $request->requestBody->clientToken = 'ab';
    $request->requestBody->fields = [
        new FieldValue(),
        new FieldValue(),
    ];
    $request->requestBody->templateId = 'veritatis';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';
    $request->domainId = 'at';

    $response = $sdk->sdk->createCase($request);

    if ($response->createCaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomain

<p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainRequest();
    $request->requestBody = new CreateDomainRequestBody();
    $request->requestBody->name = 'Emilio Krajcik';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->createDomain($request);

    if ($response->createDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createField

Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFieldRequest();
    $request->requestBody = new CreateFieldRequestBody();
    $request->requestBody->description = 'occaecati';
    $request->requestBody->name = 'Cassandra Welch';
    $request->requestBody->type = CreateFieldRequestBodyTypeEnum::TEXT;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';
    $request->domainId = 'ipsum';

    $response = $sdk->sdk->createField($request);

    if ($response->createFieldResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLayout

<p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLayoutRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLayoutRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLayoutRequestBodyContent;
use \OpenAPI\OpenAPI\Models\Shared\BasicLayout;
use \OpenAPI\OpenAPI\Models\Shared\LayoutSections;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\FieldGroup;
use \OpenAPI\OpenAPI\Models\Shared\FieldItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLayoutRequest();
    $request->requestBody = new CreateLayoutRequestBody();
    $request->requestBody->content = new CreateLayoutRequestBodyContent();
    $request->requestBody->content->basic = new BasicLayout();
    $request->requestBody->content->basic->moreInfo = new LayoutSections();
    $request->requestBody->content->basic->moreInfo->sections = [
        new Section(),
        new Section(),
        new Section(),
    ];
    $request->requestBody->content->basic->topPanel = new LayoutSections();
    $request->requestBody->content->basic->topPanel->sections = [
        new Section(),
    ];
    $request->requestBody->name = 'Cathy Mosciski';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->domainId = 'corporis';

    $response = $sdk->sdk->createLayout($request);

    if ($response->createLayoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRelatedItem

<p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelatedItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelatedItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelatedItemRequestBodyContent;
use \OpenAPI\OpenAPI\Models\Shared\CommentContent;
use \OpenAPI\OpenAPI\Models\Shared\CommentBodyTextTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelatedItemRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRelatedItemRequest();
    $request->requestBody = new CreateRelatedItemRequestBody();
    $request->requestBody->content = new CreateRelatedItemRequestBodyContent();
    $request->requestBody->content->comment = new CommentContent();
    $request->requestBody->content->comment->body = 'iste';
    $request->requestBody->content->comment->contentType = CommentBodyTextTypeEnum::TEXT_PLAIN;
    $request->requestBody->content->contact = new Contact();
    $request->requestBody->content->contact->contactArn = 'iure';
    $request->requestBody->type = CreateRelatedItemRequestBodyTypeEnum::COMMENT;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->caseId = 'dolores';
    $request->domainId = 'dolorem';

    $response = $sdk->sdk->createRelatedItem($request);

    if ($response->createRelatedItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTemplate

Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTemplateRequestBodyLayoutConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RequiredField;
use \OpenAPI\OpenAPI\Models\Operations\CreateTemplateRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTemplateRequest();
    $request->requestBody = new CreateTemplateRequestBody();
    $request->requestBody->description = 'corporis';
    $request->requestBody->layoutConfiguration = new CreateTemplateRequestBodyLayoutConfiguration();
    $request->requestBody->layoutConfiguration->defaultLayout = 'explicabo';
    $request->requestBody->name = 'Ronnie Mohr';
    $request->requestBody->requiredFields = [
        new RequiredField(),
        new RequiredField(),
        new RequiredField(),
    ];
    $request->requestBody->status = CreateTemplateRequestBodyStatusEnum::ACTIVE;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->domainId = 'culpa';

    $response = $sdk->sdk->createTemplate($request);

    if ($response->createTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomain

Deletes a domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->domainId = 'molestiae';

    $response = $sdk->sdk->deleteDomain($request);

    if ($response->deleteDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCase

Returns information about a specific case if it exists. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCaseRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FieldIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCaseRequest();
    $request->requestBody = new GetCaseRequestBody();
    $request->requestBody->fields = [
        new FieldIdentifier(),
    ];
    $request->requestBody->nextToken = 'error';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->caseId = 'quo';
    $request->domainId = 'sequi';
    $request->nextToken = 'tenetur';

    $response = $sdk->sdk->getCase($request);

    if ($response->getCaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCaseEventConfiguration

Returns the case event publishing configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCaseEventConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCaseEventConfigurationRequest();
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->domainId = 'laborum';

    $response = $sdk->sdk->getCaseEventConfiguration($request);

    if ($response->getCaseEventConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomain

Returns information about a specific domain if it exists. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->domainId = 'ipsa';

    $response = $sdk->sdk->getDomain($request);

    if ($response->getDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLayout

Returns the details for the requested layout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLayoutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLayoutRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';
    $request->domainId = 'maiores';
    $request->layoutId = 'dicta';

    $response = $sdk->sdk->getLayout($request);

    if ($response->getLayoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplate

Returns the details for the requested template. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplateRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->domainId = 'commodi';
    $request->templateId = 'repudiandae';

    $response = $sdk->sdk->getTemplate($request);

    if ($response->getTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCasesForContact

Lists cases for a given contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCasesForContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCasesForContactRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCasesForContactRequest();
    $request->requestBody = new ListCasesForContactRequestBody();
    $request->requestBody->contactArn = 'quae';
    $request->requestBody->maxResults = 216822;
    $request->requestBody->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->domainId = 'quasi';
    $request->maxResults = 'repudiandae';
    $request->nextToken = 'sint';

    $response = $sdk->sdk->listCasesForContact($request);

    if ($response->listCasesForContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomains

Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainsRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->maxResults = 131797;
    $request->nextToken = 'deserunt';

    $response = $sdk->sdk->listDomains($request);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFieldOptions

Lists all of the field options for a field identifier in the domain. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFieldOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFieldOptionsRequest();
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->domainId = 'quos';
    $request->fieldId = 'perferendis';
    $request->maxResults = 164940;
    $request->nextToken = 'assumenda';
    $request->values = [
        'alias',
        'fugit',
    ];

    $response = $sdk->sdk->listFieldOptions($request);

    if ($response->listFieldOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFields

Lists all fields in a Cases domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFieldsRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';
    $request->domainId = 'eum';
    $request->maxResults = 248753;
    $request->nextToken = 'eligendi';

    $response = $sdk->sdk->listFields($request);

    if ($response->listFieldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLayouts

Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLayoutsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLayoutsRequest();
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->domainId = 'debitis';
    $request->maxResults = 952749;
    $request->nextToken = 'dolorum';

    $response = $sdk->sdk->listLayouts($request);

    if ($response->listLayoutsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists tags for a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->arn = 'cumque';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplates

Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TemplateStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplatesRequest();
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->domainId = 'enim';
    $request->maxResults = 881736;
    $request->nextToken = 'delectus';
    $request->status = [
        TemplateStatusEnum::INACTIVE,
        TemplateStatusEnum::INACTIVE,
        TemplateStatusEnum::INACTIVE,
    ];

    $response = $sdk->sdk->listTemplates($request);

    if ($response->listTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCaseEventConfiguration

API for adding case event publishing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCaseEventConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutCaseEventConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutCaseEventConfigurationRequestBodyEventBridge;
use \OpenAPI\OpenAPI\Models\Shared\EventIncludedData;
use \OpenAPI\OpenAPI\Models\Shared\CaseEventIncludedData;
use \OpenAPI\OpenAPI\Models\Shared\FieldIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\RelatedItemEventIncludedData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCaseEventConfigurationRequest();
    $request->requestBody = new PutCaseEventConfigurationRequestBody();
    $request->requestBody->eventBridge = new PutCaseEventConfigurationRequestBodyEventBridge();
    $request->requestBody->eventBridge->enabled = false;
    $request->requestBody->eventBridge->includedData = new EventIncludedData();
    $request->requestBody->eventBridge->includedData->caseData = new CaseEventIncludedData();
    $request->requestBody->eventBridge->includedData->caseData->fields = [
        new FieldIdentifier(),
        new FieldIdentifier(),
        new FieldIdentifier(),
    ];
    $request->requestBody->eventBridge->includedData->relatedItemData = new RelatedItemEventIncludedData();
    $request->requestBody->eventBridge->includedData->relatedItemData->includeContent = false;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';
    $request->domainId = 'omnis';

    $response = $sdk->sdk->putCaseEventConfiguration($request);

    if ($response->putCaseEventConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchCases

<p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchCasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchCasesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FieldIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\SearchCasesRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\CaseFilter;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilter;
use \OpenAPI\OpenAPI\Models\Shared\FieldValue;
use \OpenAPI\OpenAPI\Models\Shared\FieldValueUnion;
use \OpenAPI\OpenAPI\Models\Shared\Sort;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCasesRequest();
    $request->requestBody = new SearchCasesRequestBody();
    $request->requestBody->fields = [
        new FieldIdentifier(),
        new FieldIdentifier(),
    ];
    $request->requestBody->filter = new SearchCasesRequestBodyFilter();
    $request->requestBody->filter->andAll = [
        new CaseFilter(),
    ];
    $request->requestBody->filter->field = new FieldFilter();
    $request->requestBody->filter->field->contains = new FieldValue();
    $request->requestBody->filter->field->contains->id = '74ba4469-b6e2-4141-9598-90afa563e251';
    $request->requestBody->filter->field->contains->value = new FieldValueUnion();
    $request->requestBody->filter->field->contains->value->booleanValue = false;
    $request->requestBody->filter->field->contains->value->doubleValue = 4358.65;
    $request->requestBody->filter->field->contains->value->stringValue = 'doloribus';
    $request->requestBody->filter->field->equalTo = new FieldValue();
    $request->requestBody->filter->field->equalTo->id = 'e4c8b711-e5b7-4fd2-ad02-8921cddc6926';
    $request->requestBody->filter->field->equalTo->value = new FieldValueUnion();
    $request->requestBody->filter->field->equalTo->value->booleanValue = false;
    $request->requestBody->filter->field->equalTo->value->doubleValue = 332.22;
    $request->requestBody->filter->field->equalTo->value->stringValue = 'ab';
    $request->requestBody->filter->field->greaterThan = new FieldValue();
    $request->requestBody->filter->field->greaterThan->id = 'fb576b0d-5f0d-430c-9fbb-2587053202c7';
    $request->requestBody->filter->field->greaterThan->value = new FieldValueUnion();
    $request->requestBody->filter->field->greaterThan->value->booleanValue = false;
    $request->requestBody->filter->field->greaterThan->value->doubleValue = 2239.24;
    $request->requestBody->filter->field->greaterThan->value->stringValue = 'vero';
    $request->requestBody->filter->field->greaterThanOrEqualTo = new FieldValue();
    $request->requestBody->filter->field->greaterThanOrEqualTo->id = '5fe9b90c-2890-49b3-be49-a8d9cbf48633';
    $request->requestBody->filter->field->greaterThanOrEqualTo->value = new FieldValueUnion();
    $request->requestBody->filter->field->greaterThanOrEqualTo->value->booleanValue = false;
    $request->requestBody->filter->field->greaterThanOrEqualTo->value->doubleValue = 2224.43;
    $request->requestBody->filter->field->greaterThanOrEqualTo->value->stringValue = 'qui';
    $request->requestBody->filter->field->lessThan = new FieldValue();
    $request->requestBody->filter->field->lessThan->id = '3f9b77f3-a410-4067-8ebf-69280d1ba77a';
    $request->requestBody->filter->field->lessThan->value = new FieldValueUnion();
    $request->requestBody->filter->field->lessThan->value->booleanValue = false;
    $request->requestBody->filter->field->lessThan->value->doubleValue = 5365.79;
    $request->requestBody->filter->field->lessThan->value->stringValue = 'omnis';
    $request->requestBody->filter->field->lessThanOrEqualTo = new FieldValue();
    $request->requestBody->filter->field->lessThanOrEqualTo->id = 'ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2';
    $request->requestBody->filter->field->lessThanOrEqualTo->value = new FieldValueUnion();
    $request->requestBody->filter->field->lessThanOrEqualTo->value->booleanValue = false;
    $request->requestBody->filter->field->lessThanOrEqualTo->value->doubleValue = 6798.8;
    $request->requestBody->filter->field->lessThanOrEqualTo->value->stringValue = 'a';
    $request->requestBody->filter->not = new CaseFilter();
    $request->requestBody->filter->not->andAll = [
        new CaseFilter(),
        new CaseFilter(),
    ];
    $request->requestBody->filter->not->field = new FieldFilter();
    $request->requestBody->filter->not->field->contains = new FieldValue();
    $request->requestBody->filter->not->field->contains->id = 'a73cf3be-453f-4870-b326-b5a73429cdb1';
    $request->requestBody->filter->not->field->contains->value = new FieldValueUnion();
    $request->requestBody->filter->not->field->contains->value->booleanValue = false;
    $request->requestBody->filter->not->field->contains->value->doubleValue = 6748.48;
    $request->requestBody->filter->not->field->contains->value->stringValue = 'totam';
    $request->requestBody->filter->not->field->equalTo = new FieldValue();
    $request->requestBody->filter->not->field->equalTo->id = '422bb679-d232-4271-9bf0-cbb1e31b8b90';
    $request->requestBody->filter->not->field->equalTo->value = new FieldValueUnion();
    $request->requestBody->filter->not->field->equalTo->value->booleanValue = false;
    $request->requestBody->filter->not->field->equalTo->value->doubleValue = 9619.37;
    $request->requestBody->filter->not->field->equalTo->value->stringValue = 'dolorem';
    $request->requestBody->filter->not->field->greaterThan = new FieldValue();
    $request->requestBody->filter->not->field->greaterThan->id = '443a1108-e0ad-4cf4-b921-879fce953f73';
    $request->requestBody->filter->not->field->greaterThan->value = new FieldValueUnion();
    $request->requestBody->filter->not->field->greaterThan->value->booleanValue = false;
    $request->requestBody->filter->not->field->greaterThan->value->doubleValue = 8788.7;
    $request->requestBody->filter->not->field->greaterThan->value->stringValue = 'tenetur';
    $request->requestBody->filter->not->field->greaterThanOrEqualTo = new FieldValue();
    $request->requestBody->filter->not->field->greaterThanOrEqualTo->id = '7fbc7abd-74dd-439c-8f5d-2cff7c70a456';
    $request->requestBody->filter->not->field->greaterThanOrEqualTo->value = new FieldValueUnion();
    $request->requestBody->filter->not->field->greaterThanOrEqualTo->value->booleanValue = false;
    $request->requestBody->filter->not->field->greaterThanOrEqualTo->value->doubleValue = 1369;
    $request->requestBody->filter->not->field->greaterThanOrEqualTo->value->stringValue = 'vel';
    $request->requestBody->filter->not->field->lessThan = new FieldValue();
    $request->requestBody->filter->not->field->lessThan->id = 'd436813f-16d9-4f5f-8e6c-556146c3e250';
    $request->requestBody->filter->not->field->lessThan->value = new FieldValueUnion();
    $request->requestBody->filter->not->field->lessThan->value->booleanValue = false;
    $request->requestBody->filter->not->field->lessThan->value->doubleValue = 9528.71;
    $request->requestBody->filter->not->field->lessThan->value->stringValue = 'libero';
    $request->requestBody->filter->not->field->lessThanOrEqualTo = new FieldValue();
    $request->requestBody->filter->not->field->lessThanOrEqualTo->id = '008c42e1-41aa-4c36-ac8d-d6b144290747';
    $request->requestBody->filter->not->field->lessThanOrEqualTo->value = new FieldValueUnion();
    $request->requestBody->filter->not->field->lessThanOrEqualTo->value->booleanValue = false;
    $request->requestBody->filter->not->field->lessThanOrEqualTo->value->doubleValue = 2621.18;
    $request->requestBody->filter->not->field->lessThanOrEqualTo->value->stringValue = 'esse';
    $request->requestBody->filter->not->not = new CaseFilter();
    $request->requestBody->maxResults = 456141;
    $request->requestBody->nextToken = 'rem';
    $request->requestBody->searchTerm = 'fuga';
    $request->requestBody->sorts = [
        new Sort(),
        new Sort(),
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'eos';
    $request->domainId = 'praesentium';
    $request->maxResults = 'quisquam';
    $request->nextToken = 'veritatis';

    $response = $sdk->sdk->searchCases($request);

    if ($response->searchCasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchRelatedItems

<p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchRelatedItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchRelatedItemsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RelatedItemTypeFilter;
use \OpenAPI\OpenAPI\Models\Shared\ContactFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRelatedItemsRequest();
    $request->requestBody = new SearchRelatedItemsRequestBody();
    $request->requestBody->filters = [
        new RelatedItemTypeFilter(),
    ];
    $request->requestBody->maxResults = 660040;
    $request->requestBody->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'eos';
    $request->caseId = 'voluptas';
    $request->domainId = 'ab';
    $request->maxResults = 'cupiditate';
    $request->nextToken = 'consequatur';

    $response = $sdk->sdk->searchRelatedItems($request);

    if ($response->searchRelatedItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'debitis' => 'ipsam',
        'aspernatur' => 'sequi',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->arn = 'inventore';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Untags a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'commodi';
    $request->arn = 'sapiente';
    $request->tagKeys = [
        'deserunt',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCase

<p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCaseRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FieldValue;
use \OpenAPI\OpenAPI\Models\Shared\FieldValueUnion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCaseRequest();
    $request->requestBody = new UpdateCaseRequestBody();
    $request->requestBody->fields = [
        new FieldValue(),
        new FieldValue(),
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->caseId = 'fugit';
    $request->domainId = 'fuga';

    $response = $sdk->sdk->updateCase($request);

    if ($response->updateCaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateField

Updates the properties of an existing field. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFieldRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFieldRequest();
    $request->requestBody = new UpdateFieldRequestBody();
    $request->requestBody->description = 'mollitia';
    $request->requestBody->name = 'Leah Champlin';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->domainId = 'atque';
    $request->fieldId = 'et';

    $response = $sdk->sdk->updateField($request);

    if ($response->updateFieldResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLayout

<p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLayoutRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLayoutRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLayoutRequestBodyContent;
use \OpenAPI\OpenAPI\Models\Shared\BasicLayout;
use \OpenAPI\OpenAPI\Models\Shared\LayoutSections;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\FieldGroup;
use \OpenAPI\OpenAPI\Models\Shared\FieldItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLayoutRequest();
    $request->requestBody = new UpdateLayoutRequestBody();
    $request->requestBody->content = new UpdateLayoutRequestBodyContent();
    $request->requestBody->content->basic = new BasicLayout();
    $request->requestBody->content->basic->moreInfo = new LayoutSections();
    $request->requestBody->content->basic->moreInfo->sections = [
        new Section(),
        new Section(),
    ];
    $request->requestBody->content->basic->topPanel = new LayoutSections();
    $request->requestBody->content->basic->topPanel->sections = [
        new Section(),
        new Section(),
        new Section(),
        new Section(),
    ];
    $request->requestBody->name = 'Patrick Koch';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->domainId = 'rerum';
    $request->layoutId = 'occaecati';

    $response = $sdk->sdk->updateLayout($request);

    if ($response->updateLayoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTemplate

Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateRequestBodyLayoutConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RequiredField;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTemplateRequest();
    $request->requestBody = new UpdateTemplateRequestBody();
    $request->requestBody->description = 'minima';
    $request->requestBody->layoutConfiguration = new UpdateTemplateRequestBodyLayoutConfiguration();
    $request->requestBody->layoutConfiguration->defaultLayout = 'distinctio';
    $request->requestBody->name = 'Mark Nicolas';
    $request->requestBody->requiredFields = [
        new RequiredField(),
        new RequiredField(),
        new RequiredField(),
        new RequiredField(),
    ];
    $request->requestBody->status = UpdateTemplateRequestBodyStatusEnum::ACTIVE;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->domainId = 'provident';
    $request->templateId = 'a';

    $response = $sdk->sdk->updateTemplate($request);

    if ($response->updateTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
