# SDK

## Overview

<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

Amazon Web Services documentation
<https://docs.aws.amazon.com/importexport/>
### Available Operations

* [GETCancelJob](#getcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [GETCreateJob](#getcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [GETGETShippingLabel](#getgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [GETGETStatus](#getgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [GETListJobs](#getlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [GETUpdateJob](#getupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
* [POSTCancelJob](#postcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [POSTCreateJob](#postcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [POSTGetShippingLabel](#postgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [POSTGetStatus](#postgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [POSTListJobs](#postlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [POSTUpdateJob](#postupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

## GETCancelJob

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

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
    res, err := s.SDK.GETCancelJob(ctx, operations.GETCancelJobRequest{
        APIVersion: sdk.String("illum"),
        AWSAccessKeyID: "vel",
        Action: operations.GETCancelJobActionEnumCancelJob,
        JobID: "error",
        Operation: operations.GETCancelJobOperationEnumCancelJob,
        Signature: "deserunt",
        SignatureMethod: "suscipit",
        SignatureVersion: "iure",
        Timestamp: "magnam",
        Version: operations.GETCancelJobVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateJob

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

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
    res, err := s.SDK.GETCreateJob(ctx, operations.GETCreateJobRequest{
        APIVersion: sdk.String("debitis"),
        AWSAccessKeyID: "ipsa",
        Action: operations.GETCreateJobActionEnumCreateJob,
        JobType: operations.GETCreateJobJobTypeEnumExport,
        Manifest: "tempora",
        ManifestAddendum: sdk.String("suscipit"),
        Operation: operations.GETCreateJobOperationEnumCreateJob,
        Signature: "molestiae",
        SignatureMethod: "minus",
        SignatureVersion: "placeat",
        Timestamp: "voluptatum",
        ValidateOnly: false,
        Version: operations.GETCreateJobVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETShippingLabel

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

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
    res, err := s.SDK.GETGETShippingLabel(ctx, operations.GETGETShippingLabelRequest{
        APIVersion: sdk.String("iusto"),
        AWSAccessKeyID: "excepturi",
        Action: operations.GETGETShippingLabelActionEnumGetShippingLabel,
        Operation: operations.GETGETShippingLabelOperationEnumGetShippingLabel,
        Signature: "nisi",
        SignatureMethod: "recusandae",
        SignatureVersion: "temporibus",
        Timestamp: "ab",
        Version: operations.GETGETShippingLabelVersionEnumTwoThousandAndTen0601,
        City: sdk.String("North Lydia"),
        Company: sdk.String("Hills Group"),
        Country: sdk.String("Uzbekistan"),
        JobIds: []string{
            "odit",
            "at",
            "at",
            "maiores",
        },
        Name: sdk.String("Bernadette Schmidt"),
        PhoneNumber: sdk.String("porro"),
        PostalCode: sdk.String("17651-5975"),
        StateOrProvince: sdk.String("beatae"),
        Street1: sdk.String("commodi"),
        Street2: sdk.String("molestiae"),
        Street3: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETStatus

This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

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
    res, err := s.SDK.GETGETStatus(ctx, operations.GETGETStatusRequest{
        APIVersion: sdk.String("qui"),
        AWSAccessKeyID: "impedit",
        Action: operations.GETGETStatusActionEnumGetStatus,
        JobID: "cum",
        Operation: operations.GETGETStatusOperationEnumGetStatus,
        Signature: "esse",
        SignatureMethod: "ipsum",
        SignatureVersion: "excepturi",
        Timestamp: "aspernatur",
        Version: operations.GETGETStatusVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListJobs

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

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
    res, err := s.SDK.GETListJobs(ctx, operations.GETListJobsRequest{
        APIVersion: sdk.String("perferendis"),
        AWSAccessKeyID: "ad",
        Action: operations.GETListJobsActionEnumListJobs,
        Marker: sdk.String("natus"),
        MaxJobs: sdk.Int64(149675),
        Operation: operations.GETListJobsOperationEnumListJobs,
        Signature: "iste",
        SignatureMethod: "dolor",
        SignatureVersion: "natus",
        Timestamp: "laboriosam",
        Version: operations.GETListJobsVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateJob

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

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
    res, err := s.SDK.GETUpdateJob(ctx, operations.GETUpdateJobRequest{
        APIVersion: sdk.String("hic"),
        AWSAccessKeyID: "saepe",
        Action: operations.GETUpdateJobActionEnumUpdateJob,
        JobID: "fuga",
        JobType: operations.GETUpdateJobJobTypeEnumImport,
        Manifest: "corporis",
        Operation: operations.GETUpdateJobOperationEnumUpdateJob,
        Signature: "iste",
        SignatureMethod: "iure",
        SignatureVersion: "saepe",
        Timestamp: "quidem",
        ValidateOnly: false,
        Version: operations.GETUpdateJobVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCancelJob

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

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
    res, err := s.SDK.POSTCancelJob(ctx, operations.POSTCancelJobRequest{
        AWSAccessKeyID: "architecto",
        Action: operations.POSTCancelJobActionEnumCancelJob,
        Operation: operations.POSTCancelJobOperationEnumCancelJob,
        RequestBody: []byte("ipsa"),
        Signature: "reiciendis",
        SignatureMethod: "est",
        SignatureVersion: "mollitia",
        Timestamp: "laborum",
        Version: operations.POSTCancelJobVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateJob

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

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
    res, err := s.SDK.POSTCreateJob(ctx, operations.POSTCreateJobRequest{
        AWSAccessKeyID: "dolores",
        Action: operations.POSTCreateJobActionEnumCreateJob,
        Operation: operations.POSTCreateJobOperationEnumCreateJob,
        RequestBody: []byte("dolorem"),
        Signature: "corporis",
        SignatureMethod: "explicabo",
        SignatureVersion: "nobis",
        Timestamp: "enim",
        Version: operations.POSTCreateJobVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetShippingLabel

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

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
    res, err := s.SDK.POSTGetShippingLabel(ctx, operations.POSTGetShippingLabelRequest{
        AWSAccessKeyID: "omnis",
        Action: operations.POSTGetShippingLabelActionEnumGetShippingLabel,
        Operation: operations.POSTGetShippingLabelOperationEnumGetShippingLabel,
        RequestBody: []byte("nemo"),
        Signature: "minima",
        SignatureMethod: "excepturi",
        SignatureVersion: "accusantium",
        Timestamp: "iure",
        Version: operations.POSTGetShippingLabelVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetStatus

This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

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
    res, err := s.SDK.POSTGetStatus(ctx, operations.POSTGetStatusRequest{
        AWSAccessKeyID: "culpa",
        Action: operations.POSTGetStatusActionEnumGetStatus,
        Operation: operations.POSTGetStatusOperationEnumGetStatus,
        RequestBody: []byte("doloribus"),
        Signature: "sapiente",
        SignatureMethod: "architecto",
        SignatureVersion: "mollitia",
        Timestamp: "dolorem",
        Version: operations.POSTGetStatusVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListJobs

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

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
    res, err := s.SDK.POSTListJobs(ctx, operations.POSTListJobsRequest{
        AWSAccessKeyID: "culpa",
        Action: operations.POSTListJobsActionEnumListJobs,
        Marker: sdk.String("consequuntur"),
        MaxJobs: sdk.String("repellat"),
        Operation: operations.POSTListJobsOperationEnumListJobs,
        RequestBody: []byte("mollitia"),
        Signature: "occaecati",
        SignatureMethod: "numquam",
        SignatureVersion: "commodi",
        Timestamp: "quam",
        Version: operations.POSTListJobsVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateJob

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

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
    res, err := s.SDK.POSTUpdateJob(ctx, operations.POSTUpdateJobRequest{
        AWSAccessKeyID: "molestiae",
        Action: operations.POSTUpdateJobActionEnumUpdateJob,
        Operation: operations.POSTUpdateJobOperationEnumUpdateJob,
        RequestBody: []byte("velit"),
        Signature: "error",
        SignatureMethod: "quia",
        SignatureVersion: "quis",
        Timestamp: "vitae",
        Version: operations.POSTUpdateJobVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
