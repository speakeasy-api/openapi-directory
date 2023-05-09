# SDK

## Overview

<fullname>Amazon Cognito Sync</fullname> <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity.</p> <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to credentials assigned to that identity. In order to use the Cognito Sync service, you need to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p> <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cognito-sync/>
### Available Operations

* [bulkPublish](#bulkpublish) - <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [deleteDataset](#deletedataset) - <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
* [describeDataset](#describedataset) - <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
* [describeIdentityPoolUsage](#describeidentitypoolusage) - <p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [describeIdentityUsage](#describeidentityusage) - <p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
* [getBulkPublishDetails](#getbulkpublishdetails) - <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [getCognitoEvents](#getcognitoevents) - <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [getIdentityPoolConfiguration](#getidentitypoolconfiguration) - <p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [listDatasets](#listdatasets) - <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>
* [listIdentityPoolUsage](#listidentitypoolusage) - <p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>
* [listRecords](#listrecords) - <p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
* [registerDevice](#registerdevice) - <p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [setCognitoEvents](#setcognitoevents) - <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [setIdentityPoolConfiguration](#setidentitypoolconfiguration) - <p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [subscribeToDataset](#subscribetodataset) - <p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [unsubscribeFromDataset](#unsubscribefromdataset) - <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [updateRecords](#updaterecords) - <p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

## bulkPublish

<p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkPublishRequest;
import org.openapis.openapi.models.operations.BulkPublishResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BulkPublishRequest req = new BulkPublishRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            BulkPublishResponse res = sdk.sdk.bulkPublish(req);

            if (res.bulkPublishResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataset

<p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetRequest;
import org.openapis.openapi.models.operations.DeleteDatasetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetRequest req = new DeleteDatasetRequest("molestiae", "minus", "placeat") {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            DeleteDatasetResponse res = sdk.sdk.deleteDataset(req);

            if (res.deleteDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataset

<p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetRequest;
import org.openapis.openapi.models.operations.DescribeDatasetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetRequest req = new DescribeDatasetRequest("veritatis", "deserunt", "perferendis") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            DescribeDatasetResponse res = sdk.sdk.describeDataset(req);

            if (res.describeDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIdentityPoolUsage

<p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIdentityPoolUsageRequest;
import org.openapis.openapi.models.operations.DescribeIdentityPoolUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIdentityPoolUsageRequest req = new DescribeIdentityPoolUsageRequest("molestiae") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "quod";
                xAmzCredential = "esse";
                xAmzDate = "totam";
                xAmzSecurityToken = "porro";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "dicta";
            }};            

            DescribeIdentityPoolUsageResponse res = sdk.sdk.describeIdentityPoolUsage(req);

            if (res.describeIdentityPoolUsageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIdentityUsage

<p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIdentityUsageRequest;
import org.openapis.openapi.models.operations.DescribeIdentityUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIdentityUsageRequest req = new DescribeIdentityUsageRequest("officia", "occaecati") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            DescribeIdentityUsageResponse res = sdk.sdk.describeIdentityUsage(req);

            if (res.describeIdentityUsageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBulkPublishDetails

<p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBulkPublishDetailsRequest;
import org.openapis.openapi.models.operations.GetBulkPublishDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBulkPublishDetailsRequest req = new GetBulkPublishDetailsRequest("modi") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetBulkPublishDetailsResponse res = sdk.sdk.getBulkPublishDetails(req);

            if (res.getBulkPublishDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCognitoEvents

<p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCognitoEventsRequest;
import org.openapis.openapi.models.operations.GetCognitoEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCognitoEventsRequest req = new GetCognitoEventsRequest("ad") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            GetCognitoEventsResponse res = sdk.sdk.getCognitoEvents(req);

            if (res.getCognitoEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIdentityPoolConfiguration

<p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdentityPoolConfigurationRequest;
import org.openapis.openapi.models.operations.GetIdentityPoolConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIdentityPoolConfigurationRequest req = new GetIdentityPoolConfigurationRequest("fuga") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            GetIdentityPoolConfigurationResponse res = sdk.sdk.getIdentityPoolConfiguration(req);

            if (res.getIdentityPoolConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasets

<p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetsRequest;
import org.openapis.openapi.models.operations.ListDatasetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetsRequest req = new ListDatasetsRequest("reiciendis", "est") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
                maxResults = 315428L;
                nextToken = "omnis";
            }};            

            ListDatasetsResponse res = sdk.sdk.listDatasets(req);

            if (res.listDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIdentityPoolUsage

<p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIdentityPoolUsageRequest;
import org.openapis.openapi.models.operations.ListIdentityPoolUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIdentityPoolUsageRequest req = new ListIdentityPoolUsageRequest() {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
                maxResults = 102044L;
                nextToken = "mollitia";
            }};            

            ListIdentityPoolUsageResponse res = sdk.sdk.listIdentityPoolUsage(req);

            if (res.listIdentityPoolUsageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecords

<p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecordsRequest;
import org.openapis.openapi.models.operations.ListRecordsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecordsRequest req = new ListRecordsRequest("culpa", "consequuntur", "repellat") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
                lastSyncCount = 623510L;
                maxResults = 158969L;
                nextToken = "quis";
                syncSessionToken = "vitae";
            }};            

            ListRecordsResponse res = sdk.sdk.listRecords(req);

            if (res.listRecordsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerDevice

<p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterDeviceRequest;
import org.openapis.openapi.models.operations.RegisterDeviceRequestBody;
import org.openapis.openapi.models.operations.RegisterDeviceRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.RegisterDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterDeviceRequest req = new RegisterDeviceRequest("animi", "enim",                 new RegisterDeviceRequestBody(RegisterDeviceRequestBodyPlatformEnum.APNS, "quo");) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
            }};            

            RegisterDeviceResponse res = sdk.sdk.registerDevice(req);

            if (res.registerDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setCognitoEvents

<p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetCognitoEventsRequest;
import org.openapis.openapi.models.operations.SetCognitoEventsRequestBody;
import org.openapis.openapi.models.operations.SetCognitoEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetCognitoEventsRequest req = new SetCognitoEventsRequest("temporibus",                 new SetCognitoEventsRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("quasi", "reiciendis");
                                                put("voluptatibus", "vero");
                                                put("nihil", "praesentium");
                                            }});) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            SetCognitoEventsResponse res = sdk.sdk.setCognitoEvents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setIdentityPoolConfiguration

<p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetIdentityPoolConfigurationRequest;
import org.openapis.openapi.models.operations.SetIdentityPoolConfigurationRequestBody;
import org.openapis.openapi.models.operations.SetIdentityPoolConfigurationRequestBodyCognitoStreams;
import org.openapis.openapi.models.operations.SetIdentityPoolConfigurationRequestBodyPushSync;
import org.openapis.openapi.models.operations.SetIdentityPoolConfigurationResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StreamingStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetIdentityPoolConfigurationRequest req = new SetIdentityPoolConfigurationRequest("ut",                 new SetIdentityPoolConfigurationRequestBody() {{
                                cognitoStreams = new SetIdentityPoolConfigurationRequestBodyCognitoStreams() {{
                                    roleArn = "maiores";
                                    streamName = "dicta";
                                    streamingStatus = StreamingStatusEnum.ENABLED;
                                }};;
                                pushSync = new SetIdentityPoolConfigurationRequestBodyPushSync() {{
                                    applicationArns = new String[]{{
                                        add("iusto"),
                                        add("dicta"),
                                    }};
                                    roleArn = "harum";
                                }};;
                            }};) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            SetIdentityPoolConfigurationResponse res = sdk.sdk.setIdentityPoolConfiguration(req);

            if (res.setIdentityPoolConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeToDataset

<p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribeToDatasetRequest;
import org.openapis.openapi.models.operations.SubscribeToDatasetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SubscribeToDatasetRequest req = new SubscribeToDatasetRequest("excepturi", "pariatur", "modi", "praesentium") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            SubscribeToDatasetResponse res = sdk.sdk.subscribeToDataset(req);

            if (res.subscribeToDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeFromDataset

<p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsubscribeFromDatasetRequest;
import org.openapis.openapi.models.operations.UnsubscribeFromDatasetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnsubscribeFromDatasetRequest req = new UnsubscribeFromDatasetRequest("enim", "consequatur", "est", "quibusdam") {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            UnsubscribeFromDatasetResponse res = sdk.sdk.unsubscribeFromDataset(req);

            if (res.unsubscribeFromDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRecords

<p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRecordsRequest;
import org.openapis.openapi.models.operations.UpdateRecordsRequestBody;
import org.openapis.openapi.models.operations.UpdateRecordsResponse;
import org.openapis.openapi.models.shared.OperationEnum;
import org.openapis.openapi.models.shared.RecordPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRecordsRequest req = new UpdateRecordsRequest("cupiditate", "quos", "perferendis",                 new UpdateRecordsRequestBody("magni") {{
                                deviceId = "assumenda";
                                recordPatches = new org.openapis.openapi.models.shared.RecordPatch[]{{
                                    add(new RecordPatch("tempore", OperationEnum.REPLACE, 962189L) {{
                                        deviceLastModifiedDate = OffsetDateTime.parse("2022-11-08T13:10:11.700Z");
                                        key = "dolorum";
                                        op = OperationEnum.REMOVE;
                                        syncCount = 270008L;
                                        value = "facilis";
                                    }}),
                                    add(new RecordPatch("necessitatibus", OperationEnum.REMOVE, 638921L) {{
                                        deviceLastModifiedDate = OffsetDateTime.parse("2022-10-02T04:55:20.234Z");
                                        key = "eligendi";
                                        op = OperationEnum.REMOVE;
                                        syncCount = 396098L;
                                        value = "provident";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
                xAmzClientContext = "maiores";
            }};            

            UpdateRecordsResponse res = sdk.sdk.updateRecords(req);

            if (res.updateRecordsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
