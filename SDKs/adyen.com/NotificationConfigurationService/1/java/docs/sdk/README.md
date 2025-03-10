# SDK

## Overview

This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/marketplaces-and-platforms) instead.

The Notification Configuration API provides endpoints for setting up and testing notifications that inform you of events on your platform, for example when a verification check or a payout has been completed.

For more information, refer to our [documentation](https://docs.adyen.com/marketplaces-and-platforms/classic/notifications).
## Authentication
Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication. For example:

```
curl
-U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
-H "Content-Type: application/json" \
...
```
When going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The Notification Configuration API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Notification/v1/createNotificationConfiguration
```

### Available Operations

