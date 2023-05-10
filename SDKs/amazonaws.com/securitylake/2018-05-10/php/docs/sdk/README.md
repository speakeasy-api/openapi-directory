# SDK

## Overview

<note> <p>Amazon Security Lake is in preview release. Your use of the Security Lake preview is subject to Section 2 of the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a>("Betas and Previews").</p> </note> <p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to automatically centralize security data from cloud, on-premises, and custom sources into a data lake that's stored in your Amazon Web Servicesaccount. Amazon Web Services Organizations is an account management service that lets you consolidate multiple Amazon Web Services accounts into an organization that you create and centrally manage. With Organizations, you can create member accounts and invite existing accounts to join your organization. Security Lake helps you analyze security data for a more complete understanding of your security posture across the entire organization. It can also help you improve the protection of your workloads, applications, and data.</p> <p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you retain ownership over your data. </p> <p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of actions taken by a user, role, or an Amazon Web Services service in Security Lake CloudTrail captures API calls for Security Lake as events. The calls captured include calls from the Security Lake console and code calls to the Security Lake API operations. If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Security Lake. If you don't configure a trail, you can still view the most recent events in the CloudTrail console in Event history. Using the information collected by CloudTrail you can determine the request that was made to Security Lake, the IP address from which the request was made, who made the request, when it was made, and additional details. To learn more about Security Lake information in CloudTrail, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/securitylake-cloudtrail.html">Amazon Security Lake User Guide</a>.</p> <p>Security Lake automates the collection of security-related log and event data from integrated Amazon Web Services and third-party services. It also helps you manage the lifecycle of data with customizable retention and replication settings. Security Lake converts ingested data into Apache Parquet format and a standard open-source schema called the Open Cybersecurity Schema Framework (OCSF).</p> <p>Other Amazon Web Services and third-party services can subscribe to the data that's stored in Security Lake for incident response and security data analytics.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/securitylake/>
### Available Operations

* [createAwsLogSource](#createawslogsource) - <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source. </p>
* [createCustomLogSource](#createcustomlogsource) - Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.
* [createDatalake](#createdatalake) - <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the <code>Regions</code> parameter and then configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>
* [createDatalakeAutoEnable](#createdatalakeautoenable) - Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.
* [createDatalakeDelegatedAdmin](#createdatalakedelegatedadmin) - Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
* [createDatalakeExceptionsSubscription](#createdatalakeexceptionssubscription) - Creates the specified notification subscription in Amazon Security Lake for the organization you specify.
* [createSubscriber](#createsubscriber) - Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.
* [createSubscriptionNotificationConfiguration](#createsubscriptionnotificationconfiguration) - Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
* [deleteAwsLogSource](#deleteawslogsource) - <p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service.</p> <p>When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.</p>
* [deleteCustomLogSource](#deletecustomlogsource) - Removes a custom log source from Amazon Security Lake.
* [deleteDatalake](#deletedatalake) - <p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake . </p> <p>This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The <code>DeleteDatalake</code> operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>
* [deleteDatalakeAutoEnable](#deletedatalakeautoenable) -  <code>DeleteDatalakeAutoEnable</code> removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.
* [deleteDatalakeDelegatedAdmin](#deletedatalakedelegatedadmin) - Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
* [deleteDatalakeExceptionsSubscription](#deletedatalakeexceptionssubscription) - Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
* [deleteSubscriber](#deletesubscriber) - Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.
* [deleteSubscriptionNotificationConfiguration](#deletesubscriptionnotificationconfiguration) - Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
* [getDatalake](#getdatalake) - Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 
* [getDatalakeAutoEnable](#getdatalakeautoenable) - Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.
* [getDatalakeExceptionsExpiry](#getdatalakeexceptionsexpiry) - Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.
* [getDatalakeExceptionsSubscription](#getdatalakeexceptionssubscription) - Retrieves the details of exception notifications for the account in Amazon Security Lake.
* [getDatalakeStatus](#getdatalakestatus) - Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 
* [getSubscriber](#getsubscriber) - Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.
* [listDatalakeExceptions](#listdatalakeexceptions) - Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
* [listLogSources](#listlogsources) - Retrieves the log sources in the current Amazon Web Services Region. 
* [listSubscribers](#listsubscribers) - List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.
* [updateDatalake](#updatedatalake) - Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 
* [updateDatalakeExceptionsExpiry](#updatedatalakeexceptionsexpiry) - Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 
* [updateDatalakeExceptionsSubscription](#updatedatalakeexceptionssubscription) - Updates the specified notification subscription in Amazon Security Lake for the organization you specify.
* [updateSubscriber](#updatesubscriber) - Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 
* [updateSubscriptionNotificationConfiguration](#updatesubscriptionnotificationconfiguration) - Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.

## createAwsLogSource

<p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAwsLogSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAwsLogSourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAwsLogSourceRequest();
    $request->requestBody = new CreateAwsLogSourceRequestBody();
    $request->requestBody->enableAllDimensions = [
        'saepe' => [
            'architecto' => [
                'reiciendis',
            ],
            'est' => [
                'laborum',
                'dolores',
                'dolorem',
            ],
            'corporis' => [
                'nobis',
            ],
        ],
        'enim' => [
            'nemo' => [
                'excepturi',
                'accusantium',
            ],
            'iure' => [
                'doloribus',
                'sapiente',
                'architecto',
            ],
            'mollitia' => [
                'culpa',
            ],
        ],
    ];
    $request->requestBody->enableSingleDimension = [
        'repellat',
    ];
    $request->requestBody->enableTwoDimensions = [
        'occaecati' => [
            'commodi',
            'quam',
        ],
        'molestiae' => [
            'error',
        ],
        'quia' => [
            'vitae',
            'laborum',
        ],
    ];
    $request->requestBody->inputOrder = [
        DimensionEnum::REGION,
        DimensionEnum::REGION,
        DimensionEnum::MEMBER,
    ];
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->createAwsLogSource($request);

    if ($response->createAwsLogSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomLogSource

Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomLogSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomLogSourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomLogSourceRequestBodyEventClassEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomLogSourceRequest();
    $request->requestBody = new CreateCustomLogSourceRequestBody();
    $request->requestBody->customSourceName = 'error';
    $request->requestBody->eventClass = CreateCustomLogSourceRequestBodyEventClassEnum::CONFIG_STATE;
    $request->requestBody->glueInvocationRoleArn = 'laborum';
    $request->requestBody->logProviderAccountId = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->createCustomLogSource($request);

    if ($response->createCustomLogSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatalake

<p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the <code>Regions</code> parameter and then configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LakeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RetentionSetting;
use \OpenAPI\OpenAPI\Models\Shared\StorageClassEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatalakeRequest();
    $request->requestBody = new CreateDatalakeRequestBody();
    $request->requestBody->configurations = [
        'voluptate' => new LakeConfigurationRequest(),
        'cum' => new LakeConfigurationRequest(),
        'perferendis' => new LakeConfigurationRequest(),
    ];
    $request->requestBody->enableAll = false;
    $request->requestBody->metaStoreManagerRoleArn = 'doloremque';
    $request->requestBody->regions = [
        RegionEnum::US_WEST2,
        RegionEnum::AP_SOUTHEAST2,
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->createDatalake($request);

    if ($response->createDatalakeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatalakeAutoEnable

Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeAutoEnableRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeAutoEnableRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AutoEnableNewRegionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AwsLogSourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatalakeAutoEnableRequest();
    $request->requestBody = new CreateDatalakeAutoEnableRequestBody();
    $request->requestBody->configurationForNewAccounts = [
        new AutoEnableNewRegionConfiguration(),
        new AutoEnableNewRegionConfiguration(),
        new AutoEnableNewRegionConfiguration(),
        new AutoEnableNewRegionConfiguration(),
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->createDatalakeAutoEnable($request);

    if ($response->createDatalakeAutoEnableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatalakeDelegatedAdmin

Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeDelegatedAdminRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeDelegatedAdminRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatalakeDelegatedAdminRequest();
    $request->requestBody = new CreateDatalakeDelegatedAdminRequestBody();
    $request->requestBody->account = 'pariatur';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->createDatalakeDelegatedAdmin($request);

    if ($response->createDatalakeDelegatedAdminResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatalakeExceptionsSubscription

Creates the specified notification subscription in Amazon Security Lake for the organization you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeExceptionsSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeExceptionsSubscriptionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatalakeExceptionsSubscriptionRequest();
    $request->requestBody = new CreateDatalakeExceptionsSubscriptionRequestBody();
    $request->requestBody->notificationEndpoint = 'veritatis';
    $request->requestBody->subscriptionProtocol = CreateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum::FIREHOSE;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->createDatalakeExceptionsSubscription($request);

    if ($response->createDatalakeExceptionsSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscriber

Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriberRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceType;
use \OpenAPI\OpenAPI\Models\Shared\AwsLogSourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriberRequest();
    $request->requestBody = new CreateSubscriberRequestBody();
    $request->requestBody->accessTypes = [
        AccessTypeEnum::S3,
        AccessTypeEnum::LAKEFORMATION,
        AccessTypeEnum::LAKEFORMATION,
    ];
    $request->requestBody->accountId = 'qui';
    $request->requestBody->externalId = 'aliquid';
    $request->requestBody->sourceTypes = [
        new SourceType(),
        new SourceType(),
        new SourceType(),
    ];
    $request->requestBody->subscriberDescription = 'quos';
    $request->requestBody->subscriberName = 'perferendis';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->createSubscriber($request);

    if ($response->createSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscriptionNotificationConfiguration

Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionNotificationConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriptionNotificationConfigurationRequest();
    $request->requestBody = new CreateSubscriptionNotificationConfigurationRequestBody();
    $request->requestBody->createSqs = false;
    $request->requestBody->httpsApiKeyName = 'tempora';
    $request->requestBody->httpsApiKeyValue = 'facilis';
    $request->requestBody->httpsMethod = CreateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum::PUT;
    $request->requestBody->roleArn = 'labore';
    $request->requestBody->subscriptionEndpoint = 'delectus';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->subscriptionId = 'sint';

    $response = $sdk->sdk->createSubscriptionNotificationConfiguration($request);

    if ($response->createSubscriptionNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAwsLogSource

<p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service.</p> <p>When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAwsLogSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAwsLogSourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAwsLogSourceRequest();
    $request->requestBody = new DeleteAwsLogSourceRequestBody();
    $request->requestBody->disableAllDimensions = [
        'dolor' => [
            'a' => [
                'in',
                'in',
                'illum',
            ],
            'maiores' => [
                'dicta',
                'magnam',
                'cumque',
            ],
            'facere' => [
                'aliquid',
                'laborum',
            ],
            'accusamus' => [
                'occaecati',
            ],
        ],
        'enim' => [
            'delectus' => [
                'provident',
                'nam',
                'id',
            ],
            'blanditiis' => [
                'sapiente',
                'amet',
                'deserunt',
            ],
            'nisi' => [
                'natus',
                'omnis',
            ],
            'molestiae' => [
                'nihil',
            ],
        ],
        'magnam' => [
            'id' => [
                'labore',
                'suscipit',
            ],
            'natus' => [
                'eum',
                'vero',
                'aspernatur',
            ],
            'architecto' => [
                'et',
                'excepturi',
            ],
        ],
    ];
    $request->requestBody->disableSingleDimension = [
        'provident',
        'quos',
    ];
    $request->requestBody->disableTwoDimensions = [
        'accusantium' => [
            'reiciendis',
            'mollitia',
            'ad',
        ],
        'eum' => [
            'necessitatibus',
        ],
        'odit' => [
            'quasi',
            'iure',
        ],
    ];
    $request->requestBody->inputOrder = [
        DimensionEnum::MEMBER,
        DimensionEnum::REGION,
        DimensionEnum::MEMBER,
        DimensionEnum::SOURCE_TYPE,
    ];
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->deleteAwsLogSource($request);

    if ($response->deleteAwsLogSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomLogSource

Removes a custom log source from Amazon Security Lake.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomLogSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomLogSourceRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->customSourceName = 'consequuntur';

    $response = $sdk->sdk->deleteCustomLogSource($request);

    if ($response->deleteCustomLogSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatalake

<p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake . </p> <p>This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The <code>DeleteDatalake</code> operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatalakeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatalakeRequest();
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->deleteDatalake($request);

    if ($response->deleteDatalakeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatalakeAutoEnable

 <code>DeleteDatalakeAutoEnable</code> removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatalakeAutoEnableRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatalakeAutoEnableRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AutoEnableNewRegionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AwsLogSourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatalakeAutoEnableRequest();
    $request->requestBody = new DeleteDatalakeAutoEnableRequestBody();
    $request->requestBody->removeFromConfigurationForNewAccounts = [
        new AutoEnableNewRegionConfiguration(),
        new AutoEnableNewRegionConfiguration(),
        new AutoEnableNewRegionConfiguration(),
        new AutoEnableNewRegionConfiguration(),
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->deleteDatalakeAutoEnable($request);

    if ($response->deleteDatalakeAutoEnableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatalakeDelegatedAdmin

Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatalakeDelegatedAdminRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatalakeDelegatedAdminRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->account = 'nemo';

    $response = $sdk->sdk->deleteDatalakeDelegatedAdmin($request);

    if ($response->deleteDatalakeDelegatedAdminResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatalakeExceptionsSubscription

Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatalakeExceptionsSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatalakeExceptionsSubscriptionRequest();
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->deleteDatalakeExceptionsSubscription($request);

    if ($response->deleteDatalakeExceptionsSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscriber

Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriberRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->id = '053202c7-3d5f-4e9b-90c2-8909b3fe49a8';

    $response = $sdk->sdk->deleteSubscriber($request);

    if ($response->deleteSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscriptionNotificationConfiguration

Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionNotificationConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionNotificationConfigurationRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';
    $request->subscriptionId = 'aliquid';

    $response = $sdk->sdk->deleteSubscriptionNotificationConfiguration($request);

    if ($response->deleteSubscriptionNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatalake

Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatalakeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatalakeRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDatalake($request);

    if ($response->getDatalakeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatalakeAutoEnable

Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatalakeAutoEnableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatalakeAutoEnableRequest();
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getDatalakeAutoEnable($request);

    if ($response->getDatalakeAutoEnableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatalakeExceptionsExpiry

Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatalakeExceptionsExpiryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatalakeExceptionsExpiryRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->getDatalakeExceptionsExpiry($request);

    if ($response->getDatalakeExceptionsExpiryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatalakeExceptionsSubscription

Retrieves the details of exception notifications for the account in Amazon Security Lake.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatalakeExceptionsSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatalakeExceptionsSubscriptionRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->getDatalakeExceptionsSubscription($request);

    if ($response->getDatalakeExceptionsSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatalakeStatus

Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatalakeStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDatalakeStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatalakeStatusRequest();
    $request->requestBody = new GetDatalakeStatusRequestBody();
    $request->requestBody->accountSet = [
        'ab',
        'soluta',
        'dolorum',
        'iusto',
    ];
    $request->requestBody->maxAccountResults = 453697;
    $request->requestBody->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->maxAccountResults = 'voluptate';
    $request->nextToken = 'id';

    $response = $sdk->sdk->getDatalakeStatus($request);

    if ($response->getDatalakeStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriber

Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriberRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->id = '5e6a95d8-a0d4-446c-a2af-7a73cf3be453';

    $response = $sdk->sdk->getSubscriber($request);

    if ($response->getSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatalakeExceptions

Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatalakeExceptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatalakeExceptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RegionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatalakeExceptionsRequest();
    $request->requestBody = new ListDatalakeExceptionsRequestBody();
    $request->requestBody->maxFailures = 957451;
    $request->requestBody->nextToken = 'totam';
    $request->requestBody->regionSet = [
        RegionEnum::US_EAST1,
        RegionEnum::EU_WEST1,
    ];
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';
    $request->maxFailures = 'ipsum';
    $request->nextToken = 'incidunt';

    $response = $sdk->sdk->listDatalakeExceptions($request);

    if ($response->listDatalakeExceptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLogSources

Retrieves the log sources in the current Amazon Web Services Region. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLogSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLogSourcesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLogSourcesRequest();
    $request->requestBody = new ListLogSourcesRequestBody();
    $request->requestBody->inputOrder = [
        DimensionEnum::SOURCE_TYPE,
    ];
    $request->requestBody->listAllDimensions = [
        'pariatur' => [
            'dicta' => [
                'totam',
                'incidunt',
                'aspernatur',
            ],
            'dolores' => [
                'facilis',
                'aliquid',
                'quam',
            ],
            'molestias' => [
                'qui',
                'neque',
                'fugit',
                'magni',
            ],
        ],
        'odio' => [
            'ullam' => [
                'hic',
                'voluptatem',
                'cumque',
            ],
        ],
        'soluta' => [
            'et' => [
                'ipsum',
                'veritatis',
                'nobis',
                'quos',
            ],
            'tempore' => [
                'aperiam',
                'delectus',
                'dolorem',
            ],
            'dolore' => [
                'adipisci',
                'dolorum',
            ],
        ],
        'architecto' => [
            'aut' => [
                'itaque',
                'consequatur',
                'est',
            ],
        ],
    ];
    $request->requestBody->listSingleDimension = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->requestBody->listTwoDimensions = [
        'qui' => [
            'laudantium',
        ],
        'odio' => [
            'voluptatibus',
            'quisquam',
            'vero',
        ],
        'omnis' => [
            'ipsum',
            'delectus',
        ],
    ];
    $request->requestBody->maxResults = 455169;
    $request->requestBody->nextToken = 'consectetur';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->maxResults = 'similique';
    $request->nextToken = 'facilis';

    $response = $sdk->sdk->listLogSources($request);

    if ($response->listLogSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubscribers

List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscribersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubscribersRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'natus';
    $request->maxResults = 773326;
    $request->nextToken = 'aut';

    $response = $sdk->sdk->listSubscribers($request);

    if ($response->listSubscribersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatalake

Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatalakeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatalakeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LakeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RetentionSetting;
use \OpenAPI\OpenAPI\Models\Shared\StorageClassEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatalakeRequest();
    $request->requestBody = new UpdateDatalakeRequestBody();
    $request->requestBody->configurations = [
        'exercitationem' => new LakeConfigurationRequest(),
        'nulla' => new LakeConfigurationRequest(),
        'fugit' => new LakeConfigurationRequest(),
        'porro' => new LakeConfigurationRequest(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->updateDatalake($request);

    if ($response->updateDatalakeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatalakeExceptionsExpiry

Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatalakeExceptionsExpiryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatalakeExceptionsExpiryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatalakeExceptionsExpiryRequest();
    $request->requestBody = new UpdateDatalakeExceptionsExpiryRequestBody();
    $request->requestBody->exceptionMessageExpiry = 269479;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->updateDatalakeExceptionsExpiry($request);

    if ($response->updateDatalakeExceptionsExpiryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatalakeExceptionsSubscription

Updates the specified notification subscription in Amazon Security Lake for the organization you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatalakeExceptionsSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatalakeExceptionsSubscriptionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatalakeExceptionsSubscriptionRequest();
    $request->requestBody = new UpdateDatalakeExceptionsSubscriptionRequestBody();
    $request->requestBody->notificationEndpoint = 'ex';
    $request->requestBody->subscriptionProtocol = UpdateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum::SMS;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->updateDatalakeExceptionsSubscription($request);

    if ($response->updateDatalakeExceptionsSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscriber

Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriberRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SourceType;
use \OpenAPI\OpenAPI\Models\Shared\AwsLogSourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriberRequest();
    $request->requestBody = new UpdateSubscriberRequestBody();
    $request->requestBody->externalId = 'voluptatibus';
    $request->requestBody->sourceTypes = [
        new SourceType(),
        new SourceType(),
    ];
    $request->requestBody->subscriberDescription = 'sapiente';
    $request->requestBody->subscriberName = 'quisquam';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'inventore';
    $request->id = '46c3e250-fb00-48c4-ae14-1aac366c8dd6';

    $response = $sdk->sdk->updateSubscriber($request);

    if ($response->updateSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscriptionNotificationConfiguration

Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionNotificationConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionNotificationConfigurationRequest();
    $request->requestBody = new UpdateSubscriptionNotificationConfigurationRequestBody();
    $request->requestBody->createSqs = false;
    $request->requestBody->httpsApiKeyName = 'libero';
    $request->requestBody->httpsApiKeyValue = 'quasi';
    $request->requestBody->httpsMethod = UpdateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum::POST;
    $request->requestBody->roleArn = 'numquam';
    $request->requestBody->subscriptionEndpoint = 'explicabo';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'esse';
    $request->subscriptionId = 'esse';

    $response = $sdk->sdk->updateSubscriptionNotificationConfiguration($request);

    if ($response->updateSubscriptionNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
