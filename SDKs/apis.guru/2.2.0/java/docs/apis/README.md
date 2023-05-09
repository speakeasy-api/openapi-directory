# apIs

## Overview

Actions relating to APIs in the collection

### Available Operations

* [getAPI](#getapi) - Retrieve one version of a particular API
* [getMetrics](#getmetrics) - Get basic metrics
* [getProvider](#getprovider) - List all APIs for a particular provider
* [getProviders](#getproviders) - List all providers
* [getServiceAPI](#getserviceapi) - Retrieve one version of a particular API with a serviceName.
* [getServices](#getservices) - List all serviceNames for a particular provider
* [listAPIs](#listapis) - List all APIs

## getAPI

Returns the API entry for one specific version of an API where there is no serviceName.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAPIRequest;
import org.openapis.openapi.models.operations.GetAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAPIRequest req = new GetAPIRequest("2.1.0", "apis.guru");            

            GetAPIResponse res = sdk.apIs.getAPI(req);

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMetrics

Some basic metrics for the entire directory.
Just stunning numbers to put on a front page and are intended purely for WoW effect :)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMetricsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMetricsResponse res = sdk.apIs.getMetrics();

            if (res.metrics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvider

List all APIs in the directory for a particular providerName
Returns links to the individual API entry for each API.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProviderRequest;
import org.openapis.openapi.models.operations.GetProviderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProviderRequest req = new GetProviderRequest("apis.guru");            

            GetProviderResponse res = sdk.apIs.getProvider(req);

            if (res.apIs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProviders

List all the providers in the directory


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersResponse res = sdk.apIs.getProviders();

            if (res.getProviders200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceAPI

Returns the API entry for one specific version of an API where there is a serviceName.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceAPIRequest;
import org.openapis.openapi.models.operations.GetServiceAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServiceAPIRequest req = new GetServiceAPIRequest("2.1.0", "apis.guru", "graph");            

            GetServiceAPIResponse res = sdk.apIs.getServiceAPI(req);

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServices

List all serviceNames in the directory for a particular providerName


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServicesRequest;
import org.openapis.openapi.models.operations.GetServicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServicesRequest req = new GetServicesRequest("apis.guru");            

            GetServicesResponse res = sdk.apIs.getServices(req);

            if (res.getServices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAPIs

List all APIs in the directory.
Returns links to the OpenAPI definitions for each API in the directory.
If API exist in multiple versions `preferred` one is explicitly marked.
Some basic info from the OpenAPI definition is cached inside each object.
This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAPIsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAPIsResponse res = sdk.apIs.listAPIs();

            if (res.apIs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
