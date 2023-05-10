# push

### Available Operations

* [deletePushDeviceDetails](#deletepushdevicedetails) - Delete a registered device's update token
* [getChannelsWithPushSubscribers](#getchannelswithpushsubscribers) - List all channels with at least one subscribed device
* [getPushDeviceDetails](#getpushdevicedetails) - Get a device registration
* [getPushSubscriptionsOnChannels](#getpushsubscriptionsonchannels) - List channel subscriptions
* [getRegisteredPushDevices](#getregisteredpushdevices) - List devices registered for receiving push notifications
* [patchPushDeviceDetailsForm](#patchpushdevicedetailsform) - Update a device registration
* [patchPushDeviceDetailsJson](#patchpushdevicedetailsjson) - Update a device registration
* [patchPushDeviceDetailsRaw](#patchpushdevicedetailsraw) - Update a device registration
* [publishPushNotificationToDevicesForm](#publishpushnotificationtodevicesform) - Publish a push notification to device(s)
* [publishPushNotificationToDevicesJson](#publishpushnotificationtodevicesjson) - Publish a push notification to device(s)
* [publishPushNotificationToDevicesRaw](#publishpushnotificationtodevicesraw) - Publish a push notification to device(s)
* [putPushDeviceDetailsForm](#putpushdevicedetailsform) - Update a device registration
* [putPushDeviceDetailsJson](#putpushdevicedetailsjson) - Update a device registration
* [putPushDeviceDetailsRaw](#putpushdevicedetailsraw) - Update a device registration
* [registerPushDeviceJson](#registerpushdevicejson) - Register a device for receiving push notifications
* [registerPushDeviceRaw](#registerpushdeviceraw) - Register a device for receiving push notifications
* [subscribePushDeviceToChannelForm](#subscribepushdevicetochannelform) - Subscribe a device to a channel
* [subscribePushDeviceToChannelJson](#subscribepushdevicetochanneljson) - Subscribe a device to a channel
* [subscribePushDeviceToChannelRaw](#subscribepushdevicetochannelraw) - Subscribe a device to a channel
* [unregisterAllPushDevices](#unregisterallpushdevices) - Unregister matching devices for push notifications
* [unregisterPushDevice](#unregisterpushdevice) - Unregister a single device for push notifications
* [updatePushDeviceDetails](#updatepushdevicedetails) - Reset a registered device's update token

## deletePushDeviceDetails

Delete a device details object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeletePushDeviceDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePushDeviceDetailsRequest();
    $request->xAblyVersion = 'quam';
    $request->channel = 'molestiae';
    $request->clientId = 'velit';
    $request->deviceId = 'error';
    $request->format = ResponseFormatEnum::JSON;

    $response = $sdk->push->deletePushDeviceDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelsWithPushSubscribers

Returns a paginated response of channel names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelsWithPushSubscribersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelsWithPushSubscribersRequest();
    $request->xAblyVersion = 'quis';
    $request->format = ResponseFormatEnum::JSON;

    $response = $sdk->push->getChannelsWithPushSubscribers($request);

    if ($response->getChannelsWithPushSubscribers2XXApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPushDeviceDetails

Get the full details of a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetPushDeviceDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPushDeviceDetailsRequest();
    $request->xAblyVersion = 'laborum';
    $request->deviceId = 'animi';
    $request->format = ResponseFormatEnum::JSONP;

    $response = $sdk->push->getPushDeviceDetails($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPushSubscriptionsOnChannels

Get a list of push notification subscriptions to channels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetPushSubscriptionsOnChannelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPushSubscriptionsOnChannelsRequest();
    $request->xAblyVersion = 'odit';
    $request->channel = 'quo';
    $request->clientId = 'sequi';
    $request->deviceId = 'tenetur';
    $request->format = ResponseFormatEnum::JSONP;
    $request->limit = 662527;

    $response = $sdk->push->getPushSubscriptionsOnChannels($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegisteredPushDevices

List of device details of devices registed for push notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetRegisteredPushDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegisteredPushDevicesRequest();
    $request->xAblyVersion = 'possimus';
    $request->clientId = 'aut';
    $request->deviceId = 'quasi';
    $request->format = ResponseFormatEnum::MSGPACK;
    $request->limit = 837945;

    $response = $sdk->push->getRegisteredPushDevices($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPushDeviceDetailsForm

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchPushDeviceDetailsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientTransportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPushDeviceDetailsFormRequest();
    $request->deviceDetailsInput = new DeviceDetailsInput();
    $request->deviceDetailsInput->clientId = 'laborum';
    $request->deviceDetailsInput->deviceSecret = 'quasi';
    $request->deviceDetailsInput->formFactor = DeviceDetailsFormFactorEnum::EMBEDDED;
    $request->deviceDetailsInput->id = 'fe78f097-b007-44f1-9471-b5e6e13b99d4';
    $request->deviceDetailsInput->metadata = [
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->deviceDetailsInput->platform = DeviceDetailsPlatformEnum::ANDROID;
    $request->deviceDetailsInput->pushRecipient = new Recipient();
    $request->deviceDetailsInput->pushRecipient->clientId = 'incidunt';
    $request->deviceDetailsInput->pushRecipient->deviceId = 'enim';
    $request->deviceDetailsInput->pushRecipient->deviceToken = 'consequatur';
    $request->deviceDetailsInput->pushRecipient->registrationToken = 'est';
    $request->deviceDetailsInput->pushRecipient->transportType = RecipientTransportTypeEnum::GCM;
    $request->xAblyVersion = 'explicabo';
    $request->deviceId = 'deserunt';
    $request->format = ResponseFormatEnum::MSGPACK;

    $response = $sdk->push->patchPushDeviceDetailsForm($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPushDeviceDetailsJson

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchPushDeviceDetailsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientTransportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPushDeviceDetailsJsonRequest();
    $request->deviceDetailsInput = new DeviceDetailsInput();
    $request->deviceDetailsInput->clientId = 'quibusdam';
    $request->deviceDetailsInput->deviceSecret = 'labore';
    $request->deviceDetailsInput->formFactor = DeviceDetailsFormFactorEnum::TABLET;
    $request->deviceDetailsInput->id = '269802d5-02a9-44bb-8f63-c969e9a3efa7';
    $request->deviceDetailsInput->metadata = [
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->deviceDetailsInput->platform = DeviceDetailsPlatformEnum::IOS;
    $request->deviceDetailsInput->pushRecipient = new Recipient();
    $request->deviceDetailsInput->pushRecipient->clientId = 'cumque';
    $request->deviceDetailsInput->pushRecipient->deviceId = 'facere';
    $request->deviceDetailsInput->pushRecipient->deviceToken = 'ea';
    $request->deviceDetailsInput->pushRecipient->registrationToken = 'aliquid';
    $request->deviceDetailsInput->pushRecipient->transportType = RecipientTransportTypeEnum::GCM;
    $request->xAblyVersion = 'accusamus';
    $request->deviceId = 'non';
    $request->format = ResponseFormatEnum::MSGPACK;

    $response = $sdk->push->patchPushDeviceDetailsJson($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPushDeviceDetailsRaw

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchPushDeviceDetailsRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPushDeviceDetailsRawRequest();
    $request->requestBody = 'enim';
    $request->xAblyVersion = 'accusamus';
    $request->deviceId = 'delectus';
    $request->format = ResponseFormatEnum::MSGPACK;

    $response = $sdk->push->patchPushDeviceDetailsRaw($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishPushNotificationToDevicesForm

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PublishPushNotificationToDevicesFormRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded;
use \OpenAPI\OpenAPI\Models\Shared\Push;
use \OpenAPI\OpenAPI\Models\Shared\PushApns;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\PushFcm;
use \OpenAPI\OpenAPI\Models\Shared\PushWeb;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientTransportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishPushNotificationToDevicesFormRequest();
    $request->requestBody = new PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded();
    $request->requestBody->push = new Push();
    $request->requestBody->push->apns = new PushApns();
    $request->requestBody->push->apns->notification = new Notification();
    $request->requestBody->push->apns->notification->body = 'provident';
    $request->requestBody->push->apns->notification->collapseKey = 'nam';
    $request->requestBody->push->apns->notification->icon = 'id';
    $request->requestBody->push->apns->notification->sound = 'blanditiis';
    $request->requestBody->push->apns->notification->title = 'Ms.';
    $request->requestBody->push->data = 'sapiente';
    $request->requestBody->push->fcm = new PushFcm();
    $request->requestBody->push->fcm->notification = new Notification();
    $request->requestBody->push->fcm->notification->body = 'amet';
    $request->requestBody->push->fcm->notification->collapseKey = 'deserunt';
    $request->requestBody->push->fcm->notification->icon = 'nisi';
    $request->requestBody->push->fcm->notification->sound = 'vel';
    $request->requestBody->push->fcm->notification->title = 'Miss';
    $request->requestBody->push->notification = new Notification();
    $request->requestBody->push->notification->body = 'omnis';
    $request->requestBody->push->notification->collapseKey = 'molestiae';
    $request->requestBody->push->notification->icon = 'perferendis';
    $request->requestBody->push->notification->sound = 'nihil';
    $request->requestBody->push->notification->title = 'Mrs.';
    $request->requestBody->push->web = new PushWeb();
    $request->requestBody->push->web->notification = new Notification();
    $request->requestBody->push->web->notification->body = 'distinctio';
    $request->requestBody->push->web->notification->collapseKey = 'id';
    $request->requestBody->push->web->notification->icon = 'labore';
    $request->requestBody->push->web->notification->sound = 'labore';
    $request->requestBody->push->web->notification->title = 'Mrs.';
    $request->requestBody->recipient = new Recipient();
    $request->requestBody->recipient->clientId = 'natus';
    $request->requestBody->recipient->deviceId = 'nobis';
    $request->requestBody->recipient->deviceToken = 'eum';
    $request->requestBody->recipient->registrationToken = 'vero';
    $request->requestBody->recipient->transportType = RecipientTransportTypeEnum::APNS;
    $request->xAblyVersion = 'architecto';
    $request->format = ResponseFormatEnum::JSONP;

    $response = $sdk->push->publishPushNotificationToDevicesForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishPushNotificationToDevicesJson

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PublishPushNotificationToDevicesJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishPushNotificationToDevicesApplicationJSON;
use \OpenAPI\OpenAPI\Models\Shared\Push;
use \OpenAPI\OpenAPI\Models\Shared\PushApns;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\PushFcm;
use \OpenAPI\OpenAPI\Models\Shared\PushWeb;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientTransportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishPushNotificationToDevicesJsonRequest();
    $request->requestBody = new PublishPushNotificationToDevicesApplicationJSON();
    $request->requestBody->push = new Push();
    $request->requestBody->push->apns = new PushApns();
    $request->requestBody->push->apns->notification = new Notification();
    $request->requestBody->push->apns->notification->body = 'et';
    $request->requestBody->push->apns->notification->collapseKey = 'excepturi';
    $request->requestBody->push->apns->notification->icon = 'ullam';
    $request->requestBody->push->apns->notification->sound = 'provident';
    $request->requestBody->push->apns->notification->title = 'Ms.';
    $request->requestBody->push->data = 'sint';
    $request->requestBody->push->fcm = new PushFcm();
    $request->requestBody->push->fcm->notification = new Notification();
    $request->requestBody->push->fcm->notification->body = 'accusantium';
    $request->requestBody->push->fcm->notification->collapseKey = 'mollitia';
    $request->requestBody->push->fcm->notification->icon = 'reiciendis';
    $request->requestBody->push->fcm->notification->sound = 'mollitia';
    $request->requestBody->push->fcm->notification->title = 'Mrs.';
    $request->requestBody->push->notification = new Notification();
    $request->requestBody->push->notification->body = 'eum';
    $request->requestBody->push->notification->collapseKey = 'dolor';
    $request->requestBody->push->notification->icon = 'necessitatibus';
    $request->requestBody->push->notification->sound = 'odit';
    $request->requestBody->push->notification->title = 'Mrs.';
    $request->requestBody->push->web = new PushWeb();
    $request->requestBody->push->web->notification = new Notification();
    $request->requestBody->push->web->notification->body = 'quasi';
    $request->requestBody->push->web->notification->collapseKey = 'iure';
    $request->requestBody->push->web->notification->icon = 'doloribus';
    $request->requestBody->push->web->notification->sound = 'debitis';
    $request->requestBody->push->web->notification->title = 'Mrs.';
    $request->requestBody->recipient = new Recipient();
    $request->requestBody->recipient->clientId = 'maxime';
    $request->requestBody->recipient->deviceId = 'deleniti';
    $request->requestBody->recipient->deviceToken = 'facilis';
    $request->requestBody->recipient->registrationToken = 'in';
    $request->requestBody->recipient->transportType = RecipientTransportTypeEnum::APNS;
    $request->xAblyVersion = 'architecto';
    $request->format = ResponseFormatEnum::HTML;

    $response = $sdk->push->publishPushNotificationToDevicesJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishPushNotificationToDevicesRaw

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PublishPushNotificationToDevicesRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishPushNotificationToDevicesRawRequest();
    $request->requestBody = 'ullam';
    $request->xAblyVersion = 'expedita';
    $request->format = ResponseFormatEnum::JSONP;

    $response = $sdk->push->publishPushNotificationToDevicesRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPushDeviceDetailsForm

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PutPushDeviceDetailsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientTransportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPushDeviceDetailsFormRequest();
    $request->deviceDetailsInput = new DeviceDetailsInput();
    $request->deviceDetailsInput->clientId = 'repellat';
    $request->deviceDetailsInput->deviceSecret = 'quibusdam';
    $request->deviceDetailsInput->formFactor = DeviceDetailsFormFactorEnum::TABLET;
    $request->deviceDetailsInput->id = 'ed028921-cddc-4692-a01f-b576b0d5f0d3';
    $request->deviceDetailsInput->metadata = [
        'cumque' => 'corporis',
    ];
    $request->deviceDetailsInput->platform = DeviceDetailsPlatformEnum::ANDROID;
    $request->deviceDetailsInput->pushRecipient = new Recipient();
    $request->deviceDetailsInput->pushRecipient->clientId = 'libero';
    $request->deviceDetailsInput->pushRecipient->deviceId = 'nobis';
    $request->deviceDetailsInput->pushRecipient->deviceToken = 'dolores';
    $request->deviceDetailsInput->pushRecipient->registrationToken = 'quis';
    $request->deviceDetailsInput->pushRecipient->transportType = RecipientTransportTypeEnum::FCM;
    $request->xAblyVersion = 'dignissimos';
    $request->deviceId = 'eaque';
    $request->format = ResponseFormatEnum::JSONP;

    $response = $sdk->push->putPushDeviceDetailsForm($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPushDeviceDetailsJson

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PutPushDeviceDetailsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientTransportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPushDeviceDetailsJsonRequest();
    $request->deviceDetailsInput = new DeviceDetailsInput();
    $request->deviceDetailsInput->clientId = 'nesciunt';
    $request->deviceDetailsInput->deviceSecret = 'eos';
    $request->deviceDetailsInput->formFactor = DeviceDetailsFormFactorEnum::PHONE;
    $request->deviceDetailsInput->id = '2c73d5fe-9b90-4c28-909b-3fe49a8d9cbf';
    $request->deviceDetailsInput->metadata = [
        'quos' => 'aliquid',
        'dolorem' => 'dolorem',
    ];
    $request->deviceDetailsInput->platform = DeviceDetailsPlatformEnum::IOS;
    $request->deviceDetailsInput->pushRecipient = new Recipient();
    $request->deviceDetailsInput->pushRecipient->clientId = 'qui';
    $request->deviceDetailsInput->pushRecipient->deviceId = 'ipsum';
    $request->deviceDetailsInput->pushRecipient->deviceToken = 'hic';
    $request->deviceDetailsInput->pushRecipient->registrationToken = 'excepturi';
    $request->deviceDetailsInput->pushRecipient->transportType = RecipientTransportTypeEnum::GCM;
    $request->xAblyVersion = 'voluptate';
    $request->deviceId = 'dignissimos';
    $request->format = ResponseFormatEnum::HTML;

    $response = $sdk->push->putPushDeviceDetailsJson($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPushDeviceDetailsRaw

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PutPushDeviceDetailsRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPushDeviceDetailsRawRequest();
    $request->requestBody = 'amet';
    $request->xAblyVersion = 'dolorum';
    $request->deviceId = 'numquam';
    $request->format = ResponseFormatEnum::JSON;

    $response = $sdk->push->putPushDeviceDetailsRaw($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerPushDeviceJson

Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RegisterPushDeviceJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetailsPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientTransportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterPushDeviceJsonRequest();
    $request->deviceDetailsInput = new DeviceDetailsInput();
    $request->deviceDetailsInput->clientId = 'ipsa';
    $request->deviceDetailsInput->deviceSecret = 'ipsa';
    $request->deviceDetailsInput->formFactor = DeviceDetailsFormFactorEnum::TV;
    $request->deviceDetailsInput->id = '74ebf692-80d1-4ba7-ba89-ebf737ae4203';
    $request->deviceDetailsInput->metadata = [
        'accusamus' => 'ad',
        'saepe' => 'suscipit',
        'deserunt' => 'provident',
        'minima' => 'repellendus',
    ];
    $request->deviceDetailsInput->platform = DeviceDetailsPlatformEnum::ANDROID;
    $request->deviceDetailsInput->pushRecipient = new Recipient();
    $request->deviceDetailsInput->pushRecipient->clientId = 'similique';
    $request->deviceDetailsInput->pushRecipient->deviceId = 'alias';
    $request->deviceDetailsInput->pushRecipient->deviceToken = 'at';
    $request->deviceDetailsInput->pushRecipient->registrationToken = 'quaerat';
    $request->deviceDetailsInput->pushRecipient->transportType = RecipientTransportTypeEnum::APNS;
    $request->xAblyVersion = 'vel';
    $request->format = ResponseFormatEnum::HTML;

    $response = $sdk->push->registerPushDeviceJson($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerPushDeviceRaw

Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RegisterPushDeviceRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterPushDeviceRawRequest();
    $request->requestBody = 'officiis';
    $request->xAblyVersion = 'qui';
    $request->format = ResponseFormatEnum::MSGPACK;

    $response = $sdk->push->registerPushDeviceRaw($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribePushDeviceToChannelForm

Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SubscribePushDeviceToChannelFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribePushDeviceToChannelFormRequest();
    $request->requestBody = new SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2();
    $request->requestBody->channel = 'esse';
    $request->requestBody->clientId = 'harum';
    $request->xAblyVersion = 'iusto';
    $request->format = ResponseFormatEnum::JSON;

    $response = $sdk->push->subscribePushDeviceToChannelForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribePushDeviceToChannelJson

Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SubscribePushDeviceToChannelJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribePushDeviceToChannelJsonRequest();
    $request->requestBody = new SubscribePushDeviceToChannelApplicationJSON2();
    $request->requestBody->channel = 'tenetur';
    $request->requestBody->clientId = 'amet';
    $request->xAblyVersion = 'tempore';
    $request->format = ResponseFormatEnum::HTML;

    $response = $sdk->push->subscribePushDeviceToChannelJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribePushDeviceToChannelRaw

Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SubscribePushDeviceToChannelRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribePushDeviceToChannelRawRequest();
    $request->requestBody = 'numquam';
    $request->xAblyVersion = 'enim';
    $request->format = ResponseFormatEnum::JSON;

    $response = $sdk->push->subscribePushDeviceToChannelRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unregisterAllPushDevices

Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UnregisterAllPushDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnregisterAllPushDevicesRequest();
    $request->xAblyVersion = 'sapiente';
    $request->clientId = 'totam';
    $request->deviceId = 'nihil';
    $request->format = ResponseFormatEnum::JSON;

    $response = $sdk->push->unregisterAllPushDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unregisterPushDevice

Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UnregisterPushDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnregisterPushDeviceRequest();
    $request->xAblyVersion = 'expedita';
    $request->deviceId = 'neque';
    $request->format = ResponseFormatEnum::JSON;

    $response = $sdk->push->unregisterPushDevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePushDeviceDetails

Gets an updated device details object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePushDeviceDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePushDeviceDetailsRequest();
    $request->xAblyVersion = 'vel';
    $request->deviceId = 'libero';
    $request->format = ResponseFormatEnum::JSONP;

    $response = $sdk->push->updatePushDeviceDetails($request);

    if ($response->deviceDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
