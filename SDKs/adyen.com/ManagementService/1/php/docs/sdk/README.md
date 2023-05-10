# SDK

## Overview

Configure and manage your Adyen company and merchant accounts, stores, and payment terminals.
## Authentication
Each request to the Management API must be signed with an API key. [Generate your API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the Customer Area and then set this key to the `X-API-Key` header value.

To access the live endpoints, you need to generate a new API key in your live Customer Area.
## Versioning

Management API handles versioning as part of the endpoint URL. For example, to send a request to version 1 of the `/companies/{companyId}/webhooks` endpoint, use:

```text
https://management-test.adyen.com/v1/companies/{companyId}/webhooks
```

## Going live

To access the live endpoints, you need an API key from your live Customer Area. Use this API key to make requests to:

```text
https://management-live.adyen.com/v1
```

### Available Operations

