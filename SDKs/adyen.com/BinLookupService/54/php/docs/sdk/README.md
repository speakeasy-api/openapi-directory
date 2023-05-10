# SDK

## Overview

The BIN Lookup API provides endpoints for retrieving information, such as cost estimates, and 3D Secure supported version based on a given BIN.

## Authentication
You need an [API credential](https://docs.adyen.com/development-resources/api-credentials) to authenticate to the API.

If using an API key, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication, for example:

```
curl
-U "ws@Company.YOUR_COMPANY_ACCOUNT":"YOUR_BASIC_AUTHENTICATION_PASSWORD" \
-H "Content-Type: application/json" \
...
```

## Versioning
The BinLookup API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://pal-test.adyen.com/pal/servlet/BinLookup/v54/get3dsAvailability
```## Going live

To authneticate to the live endpoints, you need an [API credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer Area.

The live endpoint URLs contain a prefix which is unique to your company account:
```

https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/BinLookup/v54/get3dsAvailability
```

Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.

### Available Operations

