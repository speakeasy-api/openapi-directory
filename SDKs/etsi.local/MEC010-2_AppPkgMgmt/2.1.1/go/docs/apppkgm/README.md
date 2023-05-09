# AppPkgm

## Overview

App Package management

### Available Operations

* [AppDGET](#appdget) - Reads the content of the AppD of on-boarded individual application package resources.
* [AppDIDGET](#appdidget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [AppDIDPUT](#appdidput) - Uploads the content of application package.
* [AppPkgGET](#apppkgget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [AppPkgIDGET](#apppkgidget) - Reads the content of the AppD of on-boarded individual application package resources.
* [AppPkgPUT](#apppkgput) - Uploads the content of application package.
* [AppPackageDELETE](#apppackagedelete) - Deletes an individual application package resources
* [AppPackageGET](#apppackageget) - Queries the information related to individual application package resources
* [AppPackagePATCH](#apppackagepatch) - Updates the operational state of an individual application package resource
* [AppPackagesGET](#apppackagesget) - Queries information relating to on-boarded application packages in the MEO
* [AppPackagesPOST](#apppackagespost) - Create a resource for on-boarding an application package to a MEO
* [IndividualSubscriptionDELETE](#individualsubscriptiondelete) - Deletes the individual subscription to notifications about application package changes in MEO.
* [IndividualSubscriptionGET](#individualsubscriptionget) - Used to represent an individual subscription to notifications about application package changes.
* [SubscriptionsGET](#subscriptionsget) - used to retrieve the information of subscriptions to individual application package resource in MEO
* [SubscriptionsPOST](#subscriptionspost) - Subscribe to notifications about on-boarding an application package

## AppDGET

Reads the content of the AppD of on-boarded individual application package resources.

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
    res, err := s.AppPkgm.AppDGET(ctx, operations.AppDGETRequest{
        AllFields: sdk.String("corrupti"),
        AppDID: "illum",
        ExcludeDefault: sdk.String("vel"),
        ExcludeFields: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        Filter: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AppDIDGET

Fetch the onboarded application package content identified by appPkgId or appDId.

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
    res, err := s.AppPkgm.AppDIDGET(ctx, operations.AppDIDGETRequest{
        AppDID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppDIDPUT

Uploads the content of application package.

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
    res, err := s.AppPkgm.AppDIDPUT(ctx, operations.AppDIDPUTRequest{
        RequestBody: []byte("magnam"),
        AppDID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppPkgGET

Fetch the onboarded application package content identified by appPkgId or appDId.

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
    res, err := s.AppPkgm.AppPkgGET(ctx, operations.AppPkgGETRequest{
        AppPkgID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppPkgIDGET

Reads the content of the AppD of on-boarded individual application package resources.

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
    res, err := s.AppPkgm.AppPkgIDGET(ctx, operations.AppPkgIDGETRequest{
        AllFields: sdk.String("delectus"),
        AppPkgID: "tempora",
        ExcludeDefault: sdk.String("suscipit"),
        ExcludeFields: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        Filter: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AppPkgPUT

Uploads the content of application package.

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
    res, err := s.AppPkgm.AppPkgPUT(ctx, operations.AppPkgPUTRequest{
        RequestBody: []byte("voluptatum"),
        AppPkgID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppPackageDELETE

Deletes an individual application package resources

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
    res, err := s.AppPkgm.AppPackageDELETE(ctx, operations.AppPackageDELETERequest{
        AppPkgID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppPackageGET

Queries the information related to individual application package resources

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
    res, err := s.AppPkgm.AppPackageGET(ctx, operations.AppPackageGETRequest{
        AppPkgID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppPkgInfo != nil {
        // handle response
    }
}
```

## AppPackagePATCH

Updates the operational state of an individual application package resources

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
    res, err := s.AppPkgm.AppPackagePATCH(ctx, operations.AppPackagePATCHRequest{
        AppPkgInfoModifications: shared.AppPkgInfoModifications{
            OperationState: shared.AppPkgInfoModificationsOperationStateEnumEnabled,
        },
        AppPkgID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppPkgInfoModifications != nil {
        // handle response
    }
}
```

## AppPackagesGET

queries information relating to on-boarded application packages in the MEO

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
    res, err := s.AppPkgm.AppPackagesGET(ctx, operations.AppPackagesGETRequest{
        AllFields: sdk.String("ab"),
        ExcludeDefault: sdk.String("quis"),
        ExcludeFields: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Filter: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppPkgInfos != nil {
        // handle response
    }
}
```

## AppPackagesPOST

Create a resource for on-boarding an application package to a MEO

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AppPkgm.AppPackagesPOST(ctx, shared.CreateAppPkg{
        AppPkgName: "ipsam",
        AppPkgPath: "repellendus",
        AppPkgVersion: "sapiente",
        AppProvider: sdk.String("quo"),
        Checksum: shared.Checksum{
            Algorithm: "odit",
            Hash: "at",
        },
        UserDefinedData: map[string]interface{}{
            "maiores": "molestiae",
            "quod": "quod",
            "esse": "totam",
            "porro": "dolorum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppPkgInfos != nil {
        // handle response
    }
}
```

## IndividualSubscriptionDELETE

Deletes the individual subscription to notifications about application package changes in MEO.

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
    res, err := s.AppPkgm.IndividualSubscriptionDELETE(ctx, operations.IndividualSubscriptionDELETERequest{
        SubscriptionID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IndividualSubscriptionGET

Used to represent an individual subscription to notifications about application package changes.

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
    res, err := s.AppPkgm.IndividualSubscriptionGET(ctx, operations.IndividualSubscriptionGETRequest{
        SubscriptionID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppPkgSubscriptionInfo != nil {
        // handle response
    }
}
```

## SubscriptionsGET

used to retrieve the information of subscriptions to individual application package resource in MEO package

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AppPkgm.SubscriptionsGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppPkgSubscriptionLinkList != nil {
        // handle response
    }
}
```

## SubscriptionsPOST

Subscribe to notifications about on-boarding an application package

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/callbacks"
	"net/http"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AppPkgm.SubscriptionsPOST(ctx, shared.AppPkgSubscription{
        AppPkgFilter: []string{
            "occaecati",
            "fugit",
            "deleniti",
        },
        CallbackURI: "https://sizzling-locust.com",
        SubsctiptionType: shared.SubsctiptionTypeAppPkgEnumAppPacakgeOperationChange,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppPkgSubscriptionInfo != nil {
        // handle response
    }
}
```
