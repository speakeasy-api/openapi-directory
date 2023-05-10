# SDK

## Overview

<p>Use Amazon CloudWatch Observability Access Manager to create and manage links between source accounts and monitoring accounts by using <i>CloudWatch cross-account observability</i>. With CloudWatch cross-account observability, you can monitor and troubleshoot applications that span multiple accounts within a Region. Seamlessly search, visualize, and analyze your metrics, logs, and traces in any of the linked accounts without account boundaries.</p> <pre><code> &lt;p&gt;Set up one or more Amazon Web Services accounts as &lt;i&gt;monitoring accounts&lt;/i&gt; and link them with multiple &lt;i&gt;source accounts&lt;/i&gt;. A monitoring account is a central Amazon Web Services account that can view and interact with observability data generated from source accounts. A source account is an individual Amazon Web Services account that generates observability data for the resources that reside in it. Source accounts share their observability data with the monitoring account. The shared observability data can include metrics in Amazon CloudWatch, logs in Amazon CloudWatch Logs, and traces in X-Ray.&lt;/p&gt; </code></pre>

Amazon Web Services documentation
<https://docs.aws.amazon.com/oam/>
### Available Operations

* [createLink](#createlink) - <p>Creates a link between a source account and a sink that you have created in a monitoring account.</p> <p>Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p> <p>Each source account can be linked to as many as five monitoring accounts.</p>
* [createSink](#createsink) - <p>Use this to create a <i>sink</i> in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.</p> <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each account can contain one sink. If you delete a sink, you can then create a new one in that account.</p>
* [deleteLink](#deletelink) - Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.
* [deleteSink](#deletesink) - Deletes a sink. You must delete all links to a sink before you can delete that sink.
* [getLink](#getlink) - <p>Returns complete information about one link.</p> <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
* [getSink](#getsink) - <p>Returns complete information about one monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
* [getSinkPolicy](#getsinkpolicy) - Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.
* [listAttachedLinks](#listattachedlinks) - <p>Returns a list of source account links that are linked to this monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p> <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
* [listLinks](#listlinks) - <p>Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.</p> <p>To find a list of links for one monitoring account sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html">ListAttachedLinks</a> from within the monitoring account.</p>
* [listSinks](#listsinks) - Use this operation in a monitoring account to return the list of sinks created in that account.
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with a resource. Both sinks and links support tagging.
* [putSinkPolicy](#putsinkpolicy) - <p>Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.</p> <p>You can also use a sink policy to limit the types of data that is shared. The three types that you can allow or deny are:</p> <ul> <li> <p> <b>Metrics</b> - Specify with <code>AWS::CloudWatch::Metric</code> </p> </li> <li> <p> <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code> </p> </li> <li> <p> <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code> </p> </li> </ul> <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:ResourceTag</code> permission does not allow you to tag and untag links and sinks.</p> </important>
* [untagResource](#untagresource) - <p>Removes one or more tags from the specified resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:TagResource</code> permission does not allow you to tag and untag links and sinks.</p> </important>
* [updateLink](#updatelink) - <p>Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation.</p> <p>To update the list of tags associated with the sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

## createLink

<p>Creates a link between a source account and a sink that you have created in a monitoring account.</p> <p>Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p> <p>Each source account can be linked to as many as five monitoring accounts.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLinkRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLinkRequest();
    $request->requestBody = new CreateLinkRequestBody();
    $request->requestBody->labelTemplate = 'minus';
    $request->requestBody->resourceTypes = [
        ResourceTypeEnum::AWS_LOGS_LOG_GROUP,
        ResourceTypeEnum::AWS_LOGS_LOG_GROUP,
        ResourceTypeEnum::AWS_LOGS_LOG_GROUP,
        ResourceTypeEnum::AWS_LOGS_LOG_GROUP,
    ];
    $request->requestBody->sinkIdentifier = 'recusandae';
    $request->requestBody->tags = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->createLink($request);

    if ($response->createLinkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSink

<p>Use this to create a <i>sink</i> in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.</p> <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each account can contain one sink. If you delete a sink, you can then create a new one in that account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSinkRequest();
    $request->requestBody = new CreateSinkRequestBody();
    $request->requestBody->name = 'Erik Lebsack';
    $request->requestBody->tags = [
        'nam' => 'officia',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->createSink($request);

    if ($response->createSinkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLink

Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLinkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLinkRequest();
    $request->requestBody = new DeleteLinkRequestBody();
    $request->requestBody->identifier = 'commodi';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->deleteLink($request);

    if ($response->deleteLinkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSink

Deletes a sink. You must delete all links to a sink before you can delete that sink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSinkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSinkRequest();
    $request->requestBody = new DeleteSinkRequestBody();
    $request->requestBody->identifier = 'excepturi';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->deleteSink($request);

    if ($response->deleteSinkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLink

<p>Returns complete information about one link.</p> <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLinkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinkRequest();
    $request->requestBody = new GetLinkRequestBody();
    $request->requestBody->identifier = 'natus';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->getLink($request);

    if ($response->getLinkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSink

<p>Returns complete information about one monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSinkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSinkRequest();
    $request->requestBody = new GetSinkRequestBody();
    $request->requestBody->identifier = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getSink($request);

    if ($response->getSinkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSinkPolicy

Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSinkPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSinkPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSinkPolicyRequest();
    $request->requestBody = new GetSinkPolicyRequestBody();
    $request->requestBody->sinkIdentifier = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getSinkPolicy($request);

    if ($response->getSinkPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAttachedLinks

<p>Returns a list of source account links that are linked to this monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p> <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAttachedLinksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAttachedLinksRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAttachedLinksRequest();
    $request->maxResults = 'nemo';
    $request->nextToken = 'minima';
    $request->requestBody = new ListAttachedLinksRequestBody();
    $request->requestBody->maxResults = 570197;
    $request->requestBody->nextToken = 'accusantium';
    $request->requestBody->sinkIdentifier = 'iure';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->listAttachedLinks($request);

    if ($response->listAttachedLinksOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLinks

<p>Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.</p> <p>To find a list of links for one monitoring account sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html">ListAttachedLinks</a> from within the monitoring account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLinksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLinksRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLinksRequest();
    $request->maxResults = 'consequuntur';
    $request->nextToken = 'repellat';
    $request->requestBody = new ListLinksRequestBody();
    $request->requestBody->maxResults = 653108;
    $request->requestBody->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->listLinks($request);

    if ($response->listLinksOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSinks

Use this operation in a monitoring account to return the list of sinks created in that account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSinksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSinksRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSinksRequest();
    $request->maxResults = 'quis';
    $request->nextToken = 'vitae';
    $request->requestBody = new ListSinksRequestBody();
    $request->requestBody->maxResults = 674752;
    $request->requestBody->nextToken = 'animi';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->listSinks($request);

    if ($response->listSinksOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Displays the tags associated with a resource. Both sinks and links support tagging.

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
    $request->resourceArn = 'possimus';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSinkPolicy

<p>Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.</p> <p>You can also use a sink policy to limit the types of data that is shared. The three types that you can allow or deny are:</p> <ul> <li> <p> <b>Metrics</b> - Specify with <code>AWS::CloudWatch::Metric</code> </p> </li> <li> <p> <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code> </p> </li> <li> <p> <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code> </p> </li> </ul> <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSinkPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutSinkPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSinkPolicyRequest();
    $request->requestBody = new PutSinkPolicyRequestBody();
    $request->requestBody->policy = 'voluptatibus';
    $request->requestBody->sinkIdentifier = 'vero';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->putSinkPolicy($request);

    if ($response->putSinkPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:ResourceTag</code> permission does not allow you to tag and untag links and sinks.</p> </important>

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
        'doloremque' => 'reprehenderit',
    ];
    $request->resourceArn = 'ut';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes one or more tags from the specified resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:TagResource</code> permission does not allow you to tag and untag links and sinks.</p> </important>

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
    $request->resourceArn = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';
    $request->tagKeys = [
        'pariatur',
        'modi',
        'praesentium',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLink

<p>Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation.</p> <p>To update the list of tags associated with the sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLinkRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLinkRequest();
    $request->requestBody = new UpdateLinkRequestBody();
    $request->requestBody->identifier = 'rem';
    $request->requestBody->resourceTypes = [
        ResourceTypeEnum::AWS_CLOUD_WATCH_METRIC,
        ResourceTypeEnum::AWSX_RAY_TRACE,
        ResourceTypeEnum::AWS_LOGS_LOG_GROUP,
        ResourceTypeEnum::AWS_CLOUD_WATCH_METRIC,
    ];
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->updateLink($request);

    if ($response->updateLinkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
