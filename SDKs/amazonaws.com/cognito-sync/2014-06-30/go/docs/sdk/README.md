# SDK

## Overview

<fullname>Amazon Cognito Sync</fullname> <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity.</p> <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to credentials assigned to that identity. In order to use the Cognito Sync service, you need to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p> <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cognito-sync/>
### Available Operations

* [BulkPublish](#bulkpublish) - <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [DeleteDataset](#deletedataset) - <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
* [DescribeDataset](#describedataset) - <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
* [DescribeIdentityPoolUsage](#describeidentitypoolusage) - <p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [DescribeIdentityUsage](#describeidentityusage) - <p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
* [GetBulkPublishDetails](#getbulkpublishdetails) - <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [GetCognitoEvents](#getcognitoevents) - <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [GetIdentityPoolConfiguration](#getidentitypoolconfiguration) - <p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [ListDatasets](#listdatasets) - <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>
* [ListIdentityPoolUsage](#listidentitypoolusage) - <p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>
* [ListRecords](#listrecords) - <p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
* [RegisterDevice](#registerdevice) - <p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [SetCognitoEvents](#setcognitoevents) - <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [SetIdentityPoolConfiguration](#setidentitypoolconfiguration) - <p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [SubscribeToDataset](#subscribetodataset) - <p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [UnsubscribeFromDataset](#unsubscribefromdataset) - <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [UpdateRecords](#updaterecords) - <p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

## BulkPublish

<p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BulkPublish(ctx, operations.BulkPublishRequest{
        IdentityPoolID: "vel",
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkPublishResponse != nil {
        // handle response
    }
}
```

## DeleteDataset

<p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDataset(ctx, operations.DeleteDatasetRequest{
        DatasetName: "delectus",
        IdentityID: "tempora",
        IdentityPoolID: "suscipit",
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDatasetResponse != nil {
        // handle response
    }
}
```

## DescribeDataset

<p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDataset(ctx, operations.DescribeDatasetRequest{
        DatasetName: "recusandae",
        IdentityID: "temporibus",
        IdentityPoolID: "ab",
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetResponse != nil {
        // handle response
    }
}
```

## DescribeIdentityPoolUsage

<p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeIdentityPoolUsage(ctx, operations.DescribeIdentityPoolUsageRequest{
        IdentityPoolID: "quo",
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIdentityPoolUsageResponse != nil {
        // handle response
    }
}
```

## DescribeIdentityUsage

<p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeIdentityUsage(ctx, operations.DescribeIdentityUsageRequest{
        IdentityID: "esse",
        IdentityPoolID: "totam",
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIdentityUsageResponse != nil {
        // handle response
    }
}
```

## GetBulkPublishDetails

<p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBulkPublishDetails(ctx, operations.GetBulkPublishDetailsRequest{
        IdentityPoolID: "deleniti",
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBulkPublishDetailsResponse != nil {
        // handle response
    }
}
```

## GetCognitoEvents

<p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCognitoEvents(ctx, operations.GetCognitoEventsRequest{
        IdentityPoolID: "qui",
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCognitoEventsResponse != nil {
        // handle response
    }
}
```

## GetIdentityPoolConfiguration

<p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetIdentityPoolConfiguration(ctx, operations.GetIdentityPoolConfigurationRequest{
        IdentityPoolID: "ad",
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIdentityPoolConfigurationResponse != nil {
        // handle response
    }
}
```

## ListDatasets

<p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDatasets(ctx, operations.ListDatasetsRequest{
        IdentityID: "saepe",
        IdentityPoolID: "fuga",
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
        MaxResults: sdk.Int64(60225),
        NextToken: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetsResponse != nil {
        // handle response
    }
}
```

## ListIdentityPoolUsage

<p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListIdentityPoolUsage(ctx, operations.ListIdentityPoolUsageRequest{
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        MaxResults: sdk.Int64(750686),
        NextToken: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentityPoolUsageResponse != nil {
        // handle response
    }
}
```

## ListRecords

<p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRecords(ctx, operations.ListRecordsRequest{
        DatasetName: "omnis",
        IdentityID: "nemo",
        IdentityPoolID: "minima",
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
        LastSyncCount: sdk.Int64(652790),
        MaxResults: sdk.Int64(208876),
        NextToken: sdk.String("culpa"),
        SyncSessionToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecordsResponse != nil {
        // handle response
    }
}
```

## RegisterDevice

<p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterDevice(ctx, operations.RegisterDeviceRequest{
        IdentityID: "repellat",
        IdentityPoolID: "mollitia",
        RequestBody: operations.RegisterDeviceRequestBody{
            Platform: operations.RegisterDeviceRequestBodyPlatformEnumGcm,
            Token: "numquam",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterDeviceResponse != nil {
        // handle response
    }
}
```

## SetCognitoEvents

<p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetCognitoEvents(ctx, operations.SetCognitoEventsRequest{
        IdentityPoolID: "vitae",
        RequestBody: operations.SetCognitoEventsRequestBody{
            Events: map[string]string{
                "animi": "enim",
                "odit": "quo",
                "sequi": "tenetur",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetIdentityPoolConfiguration

<p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetIdentityPoolConfiguration(ctx, operations.SetIdentityPoolConfigurationRequest{
        IdentityPoolID: "laborum",
        RequestBody: operations.SetIdentityPoolConfigurationRequestBody{
            CognitoStreams: &operations.SetIdentityPoolConfigurationRequestBodyCognitoStreams{
                RoleArn: sdk.String("quasi"),
                StreamName: sdk.String("reiciendis"),
                StreamingStatus: shared.StreamingStatusEnumDisabled.ToPointer(),
            },
            PushSync: &operations.SetIdentityPoolConfigurationRequestBodyPushSync{
                ApplicationArns: []string{
                    "nihil",
                    "praesentium",
                    "voluptatibus",
                    "ipsa",
                },
                RoleArn: sdk.String("omnis"),
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetIdentityPoolConfigurationResponse != nil {
        // handle response
    }
}
```

## SubscribeToDataset

<p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SubscribeToDataset(ctx, operations.SubscribeToDatasetRequest{
        DatasetName: "dicta",
        DeviceID: "corporis",
        IdentityID: "dolore",
        IdentityPoolID: "iusto",
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribeToDatasetResponse != nil {
        // handle response
    }
}
```

## UnsubscribeFromDataset

<p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UnsubscribeFromDataset(ctx, operations.UnsubscribeFromDatasetRequest{
        DatasetName: "ipsum",
        DeviceID: "quidem",
        IdentityID: "molestias",
        IdentityPoolID: "excepturi",
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnsubscribeFromDatasetResponse != nil {
        // handle response
    }
}
```

## UpdateRecords

<p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRecords(ctx, operations.UpdateRecordsRequest{
        DatasetName: "sint",
        IdentityID: "veritatis",
        IdentityPoolID: "itaque",
        RequestBody: operations.UpdateRecordsRequestBody{
            DeviceID: sdk.String("incidunt"),
            RecordPatches: []shared.RecordPatch{
                shared.RecordPatch{
                    DeviceLastModifiedDate: types.MustTimeFromString("2022-05-02T09:29:06.042Z"),
                    Key: "quibusdam",
                    Op: shared.OperationEnumReplace,
                    SyncCount: 647174,
                    Value: sdk.String("distinctio"),
                },
                shared.RecordPatch{
                    DeviceLastModifiedDate: types.MustTimeFromString("2022-02-18T02:24:27.835Z"),
                    Key: "modi",
                    Op: shared.OperationEnumReplace,
                    SyncCount: 397821,
                    Value: sdk.String("cupiditate"),
                },
            },
            SyncSessionToken: "quos",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzClientContext: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRecordsResponse != nil {
        // handle response
    }
}
```
