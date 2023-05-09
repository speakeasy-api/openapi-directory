# consumers

## Overview

A consumer represents an account or user in your system. All connections to connectors are scoped to a consumer.

### Available Operations

* [consumerRequestCountsAll](#consumerrequestcountsall) - Consumer request counts
* [consumersAdd](#consumersadd) - Create consumer
* [consumersAll](#consumersall) - Get all consumers
* [consumersDelete](#consumersdelete) - Delete consumer
* [consumersOne](#consumersone) - Get consumer
* [consumersUpdate](#consumersupdate) - Update consumer

## consumerRequestCountsAll

Get consumer request counts within a given datetime range.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsumerRequestCountsAllRequest;
import org.openapis.openapi.models.operations.ConsumerRequestCountsAllResponse;
import org.openapis.openapi.models.operations.ConsumerRequestCountsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsumerRequestCountsAllRequest req = new ConsumerRequestCountsAllRequest("error", "eaque", "occaecati", "rerum");            

            ConsumerRequestCountsAllResponse res = sdk.consumers.consumerRequestCountsAll(req, new ConsumerRequestCountsAllSecurity("adipisci") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.consumerRequestCountsInDateRangeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consumersAdd

Create a consumer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsumersAddRequest;
import org.openapis.openapi.models.operations.ConsumersAddResponse;
import org.openapis.openapi.models.operations.ConsumersAddSecurity;
import org.openapis.openapi.models.shared.ConsumerInput;
import org.openapis.openapi.models.shared.ConsumerMetadata;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsumersAddRequest req = new ConsumersAddRequest(                new ConsumerInput("test_consumer_id") {{
                                metadata = new ConsumerMetadata() {{
                                    accountName = "SpaceX";
                                    email = "elon@musk.com";
                                    image = "https://www.spacex.com/static/images/share.jpg";
                                    userName = "Elon Musk";
                                }};;
                            }};, "asperiores");            

            ConsumersAddResponse res = sdk.consumers.consumersAdd(req, new ConsumersAddSecurity("earum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createConsumerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consumersAll

This endpoint includes all application consumers, along with an aggregated count of requests made.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsumersAllRequest;
import org.openapis.openapi.models.operations.ConsumersAllResponse;
import org.openapis.openapi.models.operations.ConsumersAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsumersAllRequest req = new ConsumersAllRequest("modi") {{
                cursor = "iste";
                limit = 679091L;
            }};            

            ConsumersAllResponse res = sdk.consumers.consumersAll(req, new ConsumersAllSecurity("deleniti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConsumersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consumersDelete

Delete consumer and all their connections, including credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsumersDeleteRequest;
import org.openapis.openapi.models.operations.ConsumersDeleteResponse;
import org.openapis.openapi.models.operations.ConsumersDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsumersDeleteRequest req = new ConsumersDeleteRequest("pariatur", "provident");            

            ConsumersDeleteResponse res = sdk.consumers.consumersDelete(req, new ConsumersDeleteSecurity("nobis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteConsumerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consumersOne

Consumer detail including their aggregated counts with the connections they have authorized.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsumersOneRequest;
import org.openapis.openapi.models.operations.ConsumersOneResponse;
import org.openapis.openapi.models.operations.ConsumersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsumersOneRequest req = new ConsumersOneRequest("libero", "delectus");            

            ConsumersOneResponse res = sdk.consumers.consumersOne(req, new ConsumersOneSecurity("quaerat") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConsumerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## consumersUpdate

Update consumer metadata such as name and email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConsumersUpdateRequest;
import org.openapis.openapi.models.operations.ConsumersUpdateResponse;
import org.openapis.openapi.models.operations.ConsumersUpdateSecurity;
import org.openapis.openapi.models.shared.ConsumerMetadata;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConsumerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConsumersUpdateRequest req = new ConsumersUpdateRequest(                new UpdateConsumerRequest() {{
                                metadata = new ConsumerMetadata() {{
                                    accountName = "SpaceX";
                                    email = "elon@musk.com";
                                    image = "https://www.spacex.com/static/images/share.jpg";
                                    userName = "Elon Musk";
                                }};;
                            }};, "quos", "aliquid");            

            ConsumersUpdateResponse res = sdk.consumers.consumersUpdate(req, new ConsumersUpdateSecurity("dolorem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateConsumerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
