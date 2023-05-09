# queues

## Overview

Queue management, send, get and ack.

### Available Operations

* [ackMessage](#ackmessage) - Acknowledge that Queue Message has been processed.
* [createQueue](#createqueue) - Create new queue.
* [deleteQueue](#deletequeue) - Delete Queue.
* [getListOfQueues](#getlistofqueues) - Get list of all Queues.
* [getMessageData](#getmessagedata) - Get data associated with a Queue Message.
* [getNextMessages](#getnextmessages) - Get next Queue Messages from a Queue
* [getQueueConfig](#getqueueconfig) - Get Queue config.
* [sendMessageBinary](#sendmessagebinary) - Send Queue Message with a binary data (blob) payload.
* [updateQueueConfig](#updatequeueconfig) - Update Queue configuration.

## ackMessage

Acknowledge that Queue Message has been processed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AckMessageRequest;
import org.openapis.openapi.models.operations.AckMessageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AckMessageRequest req = new AckMessageRequest("distinctio", "quibusdam");            

            AckMessageResponse res = sdk.queues.ackMessage(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createQueue

Create new queue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateQueueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateQueueResponse res = sdk.queues.createQueue();

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQueue

Delete Queue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQueueRequest;
import org.openapis.openapi.models.operations.DeleteQueueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQueueRequest req = new DeleteQueueRequest("unde") {{
                confirm = false;
            }};            

            DeleteQueueResponse res = sdk.queues.deleteQueue(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListOfQueues

Get list of all Queues.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListOfQueuesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListOfQueuesResponse res = sdk.queues.getListOfQueues();

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessageData

Get data associated with a Queue Message.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessageDataRequest;
import org.openapis.openapi.models.operations.GetMessageDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessageDataRequest req = new GetMessageDataRequest("nulla", "corrupti");            

            GetMessageDataResponse res = sdk.queues.getMessageData(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNextMessages

Get next Queue Messages from a Queue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNextMessagesRequest;
import org.openapis.openapi.models.operations.GetNextMessagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNextMessagesRequest req = new GetNextMessagesRequest("illum") {{
                count = "vel";
            }};            

            GetNextMessagesResponse res = sdk.queues.getNextMessages(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueueConfig

Get Queue config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueueConfigRequest;
import org.openapis.openapi.models.operations.GetQueueConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQueueConfigRequest req = new GetQueueConfigRequest("error");            

            GetQueueConfigResponse res = sdk.queues.getQueueConfig(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendMessageBinary

Send Queue Message with a binary data (blob) payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendMessageBinaryRequest;
import org.openapis.openapi.models.operations.SendMessageBinaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendMessageBinaryRequest req = new SendMessageBinaryRequest("deserunt".getBytes(), "suscipit", "iure") {{
                delay = "magnam";
                expiration = "debitis";
                regions = "ipsa";
            }};            

            SendMessageBinaryResponse res = sdk.queues.sendMessageBinary(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateQueueConfig

Update Queue configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateQueueConfigRequest;
import org.openapis.openapi.models.operations.UpdateQueueConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateQueueConfigRequest req = new UpdateQueueConfigRequest("delectus");            

            UpdateQueueConfigResponse res = sdk.queues.updateQueueConfig(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
