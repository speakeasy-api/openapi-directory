# Quota

### Available Operations

* [GetContainersQuota](#getcontainersquota) - Retrieve organization and space specific quota
* [GetContainersUsage](#getcontainersusage) - List container sizes and quota limits
* [PutContainersQuota](#putcontainersquota) - Update space quota

## GetContainersQuota

Retrieve the quota that is assigned to the organization and space.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Quota.GetContainersQuota(ctx, operations.GetContainersQuotaRequest{
        XAuthProjectID: "ut",
        XAuthToken: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainersQuotaInfo != nil {
        // handle response
    }
}
```

## GetContainersUsage

This endpoint returns a list of available container sizes and the quota limit and usage for the space. 

- Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
- Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space. 
- Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit. 

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Quota.GetContainersUsage(ctx, operations.GetContainersUsageRequest{
        XAuthProjectID: "dicta",
        XAuthToken: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainersUsageInfo != nil {
        // handle response
    }
}
```

## PutContainersQuota

This endpoint updates the quota that is allocated to a Bluemix space. 

 **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Quota.PutContainersQuota(ctx, operations.PutContainersQuotaRequest{
        ContainersQuotaList: shared.ContainersQuotaList{
            FloatingIps: sdk.Int(296140),
            RAM: sdk.Int(480894),
        },
        XAuthProjectID: "dicta",
        XAuthToken: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
