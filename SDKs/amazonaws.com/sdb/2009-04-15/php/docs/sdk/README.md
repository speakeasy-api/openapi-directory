# SDK

## Overview

Amazon SimpleDB is a web service providing the core database functions of data indexing and querying in the cloud. By offloading the time and effort associated with building and operating a web-scale database, SimpleDB provides developers the freedom to focus on application development. <p> A traditional, clustered relational database requires a sizable upfront capital outlay, is complex to design, and often requires extensive and repetitive database administration. Amazon SimpleDB is dramatically simpler, requiring no schema, automatically indexing your data and providing a simple API for storage and access. This approach eliminates the administrative burden of data modeling, index maintenance, and performance tuning. Developers gain access to this functionality within Amazon's proven computing environment, are able to scale instantly, and pay only for what they use. </p> <p> Visit <a href="http://aws.amazon.com/simpledb/">http://aws.amazon.com/simpledb/</a> for more information. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sdb/>
### Available Operations

* [getCreateDomain](#getcreatedomain) - <p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>
* [getDeleteDomain](#getdeletedomain) - <p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>
* [getDomainMetadata](#getdomainmetadata) -  Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 
* [getGETAttributes](#getgetattributes) - <p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>
* [getListDomains](#getlistdomains) -  The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 
* [getSelect](#getselect) - <p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>
* [postBatchDeleteAttributes](#postbatchdeleteattributes) - <p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>
* [postBatchPutAttributes](#postbatchputattributes) - <p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>
* [postCreateDomain](#postcreatedomain) - <p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>
* [postDeleteAttributes](#postdeleteattributes) - <p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>
* [postDeleteDomain](#postdeletedomain) - <p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>
* [postDomainMetadata](#postdomainmetadata) -  Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 
* [postGetAttributes](#postgetattributes) - <p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>
* [postListDomains](#postlistdomains) -  The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 
* [postPutAttributes](#postputattributes) - <p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", second_value" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>
* [postSelect](#postselect) - <p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

## getCreateDomain

<p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>

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
    $request->awsAccessKeyId = 'corrupti';
    $request->action = GETCreateDomainActionEnum::CREATE_DOMAIN;
    $request->domainName = 'illum';
    $request->signature = 'vel';
    $request->signatureMethod = 'error';
    $request->signatureVersion = 'deserunt';
    $request->timestamp = 'suscipit';
    $request->version = GETCreateDomainVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->getCreateDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDomain

<p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>

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
    $request->awsAccessKeyId = 'iure';
    $request->action = GETDeleteDomainActionEnum::DELETE_DOMAIN;
    $request->domainName = 'magnam';
    $request->signature = 'debitis';
    $request->signatureMethod = 'ipsa';
    $request->signatureVersion = 'delectus';
    $request->timestamp = 'tempora';
    $request->version = GETDeleteDomainVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->getDeleteDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainMetadata

 Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDomainMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDomainMetadataActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDomainMetadataVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDomainMetadataRequest();
    $request->awsAccessKeyId = 'suscipit';
    $request->action = GETDomainMetadataActionEnum::DOMAIN_METADATA;
    $request->domainName = 'molestiae';
    $request->signature = 'minus';
    $request->signatureMethod = 'placeat';
    $request->signatureVersion = 'voluptatum';
    $request->timestamp = 'iusto';
    $request->version = GETDomainMetadataVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->getDomainMetadata($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETAttributes

<p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETAttributesRequest();
    $request->awsAccessKeyId = 'excepturi';
    $request->action = GETGETAttributesActionEnum::GET_ATTRIBUTES;
    $request->attributeNames = [
        'recusandae',
        'temporibus',
    ];
    $request->consistentRead = false;
    $request->domainName = 'ab';
    $request->itemName = 'quis';
    $request->signature = 'veritatis';
    $request->signatureMethod = 'deserunt';
    $request->signatureVersion = 'perferendis';
    $request->timestamp = 'ipsam';
    $request->version = GETGETAttributesVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->getGETAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListDomains

 The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListDomainsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListDomainsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListDomainsRequest();
    $request->awsAccessKeyId = 'repellendus';
    $request->action = GETListDomainsActionEnum::LIST_DOMAINS;
    $request->maxNumberOfDomains = 957156;
    $request->nextToken = 'quo';
    $request->signature = 'odit';
    $request->signatureMethod = 'at';
    $request->signatureVersion = 'at';
    $request->timestamp = 'maiores';
    $request->version = GETListDomainsVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->getListDomains($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSelect

<p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSelectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSelectActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSelectVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSelectRequest();
    $request->awsAccessKeyId = 'molestiae';
    $request->action = GETSelectActionEnum::SELECT;
    $request->consistentRead = false;
    $request->nextToken = 'quod';
    $request->selectExpression = 'quod';
    $request->signature = 'esse';
    $request->signatureMethod = 'totam';
    $request->signatureVersion = 'porro';
    $request->timestamp = 'dolorum';
    $request->version = GETSelectVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->getSelect($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchDeleteAttributes

<p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchDeleteAttributesRequest();
    $request->awsAccessKeyId = 'dicta';
    $request->action = POSTBatchDeleteAttributesActionEnum::BATCH_DELETE_ATTRIBUTES;
    $request->requestBody = 'nam';
    $request->signature = 'officia';
    $request->signatureMethod = 'occaecati';
    $request->signatureVersion = 'fugit';
    $request->timestamp = 'deleniti';
    $request->version = POSTBatchDeleteAttributesVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postBatchDeleteAttributes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchPutAttributes

<p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchPutAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchPutAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchPutAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchPutAttributesRequest();
    $request->awsAccessKeyId = 'hic';
    $request->action = POSTBatchPutAttributesActionEnum::BATCH_PUT_ATTRIBUTES;
    $request->requestBody = 'optio';
    $request->signature = 'totam';
    $request->signatureMethod = 'beatae';
    $request->signatureVersion = 'commodi';
    $request->timestamp = 'molestiae';
    $request->version = POSTBatchPutAttributesVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postBatchPutAttributes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDomain

<p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>

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
    $request->awsAccessKeyId = 'modi';
    $request->action = POSTCreateDomainActionEnum::CREATE_DOMAIN;
    $request->requestBody = 'qui';
    $request->signature = 'impedit';
    $request->signatureMethod = 'cum';
    $request->signatureVersion = 'esse';
    $request->timestamp = 'ipsum';
    $request->version = POSTCreateDomainVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postCreateDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAttributes

<p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAttributesRequest();
    $request->awsAccessKeyId = 'excepturi';
    $request->action = POSTDeleteAttributesActionEnum::DELETE_ATTRIBUTES;
    $request->requestBody = 'aspernatur';
    $request->signature = 'perferendis';
    $request->signatureMethod = 'ad';
    $request->signatureVersion = 'natus';
    $request->timestamp = 'sed';
    $request->version = POSTDeleteAttributesVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postDeleteAttributes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDomain

<p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>

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
    $request->awsAccessKeyId = 'iste';
    $request->action = POSTDeleteDomainActionEnum::DELETE_DOMAIN;
    $request->requestBody = 'dolor';
    $request->signature = 'natus';
    $request->signatureMethod = 'laboriosam';
    $request->signatureVersion = 'hic';
    $request->timestamp = 'saepe';
    $request->version = POSTDeleteDomainVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postDeleteDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDomainMetadata

 Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDomainMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDomainMetadataActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDomainMetadataVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDomainMetadataRequest();
    $request->awsAccessKeyId = 'fuga';
    $request->action = POSTDomainMetadataActionEnum::DOMAIN_METADATA;
    $request->requestBody = 'in';
    $request->signature = 'corporis';
    $request->signatureMethod = 'iste';
    $request->signatureVersion = 'iure';
    $request->timestamp = 'saepe';
    $request->version = POSTDomainMetadataVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postDomainMetadata($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetAttributes

<p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetAttributesRequest();
    $request->awsAccessKeyId = 'quidem';
    $request->action = POSTGetAttributesActionEnum::GET_ATTRIBUTES;
    $request->requestBody = 'architecto';
    $request->signature = 'ipsa';
    $request->signatureMethod = 'reiciendis';
    $request->signatureVersion = 'est';
    $request->timestamp = 'mollitia';
    $request->version = POSTGetAttributesVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postGetAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListDomains

 The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDomainsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDomainsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListDomainsRequest();
    $request->awsAccessKeyId = 'laborum';
    $request->action = POSTListDomainsActionEnum::LIST_DOMAINS;
    $request->maxNumberOfDomains = 'dolores';
    $request->nextToken = 'dolorem';
    $request->requestBody = 'corporis';
    $request->signature = 'explicabo';
    $request->signatureMethod = 'nobis';
    $request->signatureVersion = 'enim';
    $request->timestamp = 'omnis';
    $request->version = POSTListDomainsVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postListDomains($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutAttributes

<p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", second_value" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutAttributesRequest();
    $request->awsAccessKeyId = 'nemo';
    $request->action = POSTPutAttributesActionEnum::PUT_ATTRIBUTES;
    $request->requestBody = 'minima';
    $request->signature = 'excepturi';
    $request->signatureMethod = 'accusantium';
    $request->signatureVersion = 'iure';
    $request->timestamp = 'culpa';
    $request->version = POSTPutAttributesVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postPutAttributes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSelect

<p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSelectRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSelectActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSelectVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSelectRequest();
    $request->awsAccessKeyId = 'doloribus';
    $request->action = POSTSelectActionEnum::SELECT;
    $request->nextToken = 'sapiente';
    $request->requestBody = 'architecto';
    $request->signature = 'mollitia';
    $request->signatureMethod = 'dolorem';
    $request->signatureVersion = 'culpa';
    $request->timestamp = 'consequuntur';
    $request->version = POSTSelectVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->sdk->postSelect($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
