# SDK

## Overview

<fullname>Amazon Macie Classic</fullname> <p>Amazon Macie Classic has been discontinued and is no longer available.</p> <p>A new Amazon Macie is now available with significant design improvements and additional features, at a lower price and in most Amazon Web Services Regions. We encourage you to take advantage of the new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Macie, see <a href="http://aws.amazon.com/macie/">Amazon Macie</a>. To learn how to use the new Macie, see the <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html">Amazon Macie User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/macie/>
### Available Operations

* [associateMemberAccount](#associatememberaccount) - (Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.
* [associateS3Resources](#associates3resources) - (Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
* [disassociateMemberAccount](#disassociatememberaccount) - (Discontinued) Removes the specified member account from Amazon Macie Classic.
* [disassociateS3Resources](#disassociates3resources) - (Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
* [listMemberAccounts](#listmemberaccounts) - (Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
* [listS3Resources](#lists3resources) - (Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 
* [updateS3Resources](#updates3resources) - (Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.

## associateMemberAccount

(Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateMemberAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateMemberAccountRequest();
    $request->associateMemberAccountRequest = new AssociateMemberAccountRequest();
    $request->associateMemberAccountRequest->memberAccountId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = AssociateMemberAccountXAmzTargetEnum::MACIE_SERVICE_ASSOCIATE_MEMBER_ACCOUNT;

    $response = $sdk->sdk->associateMemberAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateS3Resources

(Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateS3ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateS3ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3ResourceClassification;
use \OpenAPI\OpenAPI\Models\Shared\ClassificationType;
use \OpenAPI\OpenAPI\Models\Shared\S3ContinuousClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3OneTimeClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociateS3ResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateS3ResourcesRequest();
    $request->associateS3ResourcesRequest = new AssociateS3ResourcesRequest();
    $request->associateS3ResourcesRequest->memberAccountId = 'delectus';
    $request->associateS3ResourcesRequest->s3Resources = [
        new S3ResourceClassification(),
        new S3ResourceClassification(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = AssociateS3ResourcesXAmzTargetEnum::MACIE_SERVICE_ASSOCIATE_S3_RESOURCES;

    $response = $sdk->sdk->associateS3Resources($request);

    if ($response->associateS3ResourcesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateMemberAccount

(Discontinued) Removes the specified member account from Amazon Macie Classic.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMemberAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateMemberAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMemberAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateMemberAccountRequest();
    $request->disassociateMemberAccountRequest = new DisassociateMemberAccountRequest();
    $request->disassociateMemberAccountRequest->memberAccountId = 'nisi';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DisassociateMemberAccountXAmzTargetEnum::MACIE_SERVICE_DISASSOCIATE_MEMBER_ACCOUNT;

    $response = $sdk->sdk->disassociateMemberAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateS3Resources

(Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateS3ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateS3ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3Resource;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateS3ResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateS3ResourcesRequest();
    $request->disassociateS3ResourcesRequest = new DisassociateS3ResourcesRequest();
    $request->disassociateS3ResourcesRequest->associatedS3Resources = [
        new S3Resource(),
        new S3Resource(),
    ];
    $request->disassociateS3ResourcesRequest->memberAccountId = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DisassociateS3ResourcesXAmzTargetEnum::MACIE_SERVICE_DISASSOCIATE_S3_RESOURCES;

    $response = $sdk->sdk->disassociateS3Resources($request);

    if ($response->disassociateS3ResourcesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMemberAccounts

(Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMemberAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMemberAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMemberAccountsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMemberAccountsRequest();
    $request->listMemberAccountsRequest = new ListMemberAccountsRequest();
    $request->listMemberAccountsRequest->maxResults = 799159;
    $request->listMemberAccountsRequest->nextToken = 'quod';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = ListMemberAccountsXAmzTargetEnum::MACIE_SERVICE_LIST_MEMBER_ACCOUNTS;
    $request->maxResults = 'occaecati';
    $request->nextToken = 'fugit';

    $response = $sdk->sdk->listMemberAccounts($request);

    if ($response->listMemberAccountsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listS3Resources

(Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListS3ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListS3ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListS3ResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListS3ResourcesRequest();
    $request->listS3ResourcesRequest = new ListS3ResourcesRequest();
    $request->listS3ResourcesRequest->maxResults = 537373;
    $request->listS3ResourcesRequest->memberAccountId = 'hic';
    $request->listS3ResourcesRequest->nextToken = 'optio';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = ListS3ResourcesXAmzTargetEnum::MACIE_SERVICE_LIST_S3_RESOURCES;
    $request->maxResults = 'cum';
    $request->nextToken = 'esse';

    $response = $sdk->sdk->listS3Resources($request);

    if ($response->listS3ResourcesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateS3Resources

(Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateS3ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateS3ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3ResourceClassificationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ClassificationTypeUpdate;
use \OpenAPI\OpenAPI\Models\Shared\S3ContinuousClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3OneTimeClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateS3ResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateS3ResourcesRequest();
    $request->updateS3ResourcesRequest = new UpdateS3ResourcesRequest();
    $request->updateS3ResourcesRequest->memberAccountId = 'ipsum';
    $request->updateS3ResourcesRequest->s3ResourcesUpdate = [
        new S3ResourceClassificationUpdate(),
        new S3ResourceClassificationUpdate(),
        new S3ResourceClassificationUpdate(),
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = UpdateS3ResourcesXAmzTargetEnum::MACIE_SERVICE_UPDATE_S3_RESOURCES;

    $response = $sdk->sdk->updateS3Resources($request);

    if ($response->updateS3ResourcesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
