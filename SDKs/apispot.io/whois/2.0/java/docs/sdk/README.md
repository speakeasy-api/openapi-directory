# SDK

## Overview

Domain API (WHOIS, Check, Batch)

### Available Operations

* [checkDomain](#checkdomain) - Check domain availability
* [createBatch](#createbatch) - Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
* [deleteBatch](#deletebatch) - Delete batch
* [domainRank](#domainrank) - Check domain rank (authority).
* [getBatch](#getbatch) - Get batch
* [getBatches](#getbatches) - Get your batches
* [queryDb](#querydb) - Query domain database
* [whois](#whois) - WHOIS query for a domain

## checkDomain

Check domain availability

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckDomainRequest;
import org.openapis.openapi.models.operations.CheckDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckDomainRequest req = new CheckDomainRequest("quibusdam");            

            CheckDomainResponse res = sdk.sdk.checkDomain(req);

            if (res.checkDomain200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBatch

Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchRequestBody;
import org.openapis.openapi.models.operations.CreateBatchRequestBodyOperationEnum;
import org.openapis.openapi.models.operations.CreateBatchRequestBodyOptions;
import org.openapis.openapi.models.operations.CreateBatchRequestBodyOptionsFormatEnum;
import org.openapis.openapi.models.operations.CreateBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchRequestBody req = new CreateBatchRequestBody(                new String[]{{
                                add("corrupti"),
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }}, CreateBatchRequestBodyOperationEnum.CHECK) {{
                options = new CreateBatchRequestBodyOptions() {{
                    format = CreateBatchRequestBodyOptionsFormatEnum.FORMATTED;
                }};;
            }};            

            CreateBatchResponse res = sdk.sdk.createBatch(req);

            if (res.batch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBatch

Delete batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBatchRequest;
import org.openapis.openapi.models.operations.DeleteBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBatchRequest req = new DeleteBatchRequest("magnam");            

            DeleteBatchResponse res = sdk.sdk.deleteBatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainRank

Check domain rank (authority).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainRankRequest;
import org.openapis.openapi.models.operations.DomainRankResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            DomainRankRequest req = new DomainRankRequest("ipsa");            

            DomainRankResponse res = sdk.sdk.domainRank(req);

            if (res.domainRank200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatch

Get batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchRequest;
import org.openapis.openapi.models.operations.GetBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBatchRequest req = new GetBatchRequest("tempora");            

            GetBatchResponse res = sdk.sdk.getBatch(req);

            if (res.batch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatches

Get your batches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBatchesResponse res = sdk.sdk.getBatches();

            if (res.arrayOfBatch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryDb

Query domain database

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryDbRequest;
import org.openapis.openapi.models.operations.QueryDbResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryDbRequest req = new QueryDbRequest("minus");            

            QueryDbResponse res = sdk.sdk.queryDb(req);

            if (res.queryDb200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## whois

WHOIS query for a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WhoisFormatEnum;
import org.openapis.openapi.models.operations.WhoisRequest;
import org.openapis.openapi.models.operations.WhoisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            WhoisRequest req = new WhoisRequest("voluptatum") {{
                format = WhoisFormatEnum.FORMATTED;
            }};            

            WhoisResponse res = sdk.sdk.whois(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
