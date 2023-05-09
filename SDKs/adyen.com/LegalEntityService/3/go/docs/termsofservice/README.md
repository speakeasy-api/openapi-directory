# TermsOfService

### Available Operations

* [GetLegalEntitiesIDTermsOfServiceAcceptanceInfos](#getlegalentitiesidtermsofserviceacceptanceinfos) - Get Terms of Service information for a legal entity
* [PatchLegalEntitiesIDTermsOfServiceTermsofservicedocumentid](#patchlegalentitiesidtermsofservicetermsofservicedocumentid) - Accept Terms of Service
* [PostLegalEntitiesIDTermsOfService](#postlegalentitiesidtermsofservice) - Get Terms of Service document

## GetLegalEntitiesIDTermsOfServiceAcceptanceInfos

Returns Terms of Service information for a legal entity.

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
    res, err := s.TermsOfService.GetLegalEntitiesIDTermsOfServiceAcceptanceInfos(ctx, operations.GetLegalEntitiesIDTermsOfServiceAcceptanceInfosRequest{
        ID: "065e904f-3b11-494b-8abf-603a79f9dfe0",
    }, operations.GetLegalEntitiesIDTermsOfServiceAcceptanceInfosSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTermsOfServiceAcceptanceInfosResponse != nil {
        // handle response
    }
}
```

## PatchLegalEntitiesIDTermsOfServiceTermsofservicedocumentid

Accepts Terms of Service.

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
    res, err := s.TermsOfService.PatchLegalEntitiesIDTermsOfServiceTermsofservicedocumentid(ctx, operations.PatchLegalEntitiesIDTermsOfServiceTermsofservicedocumentidRequest{
        AcceptTermsOfServiceRequest: &shared.AcceptTermsOfServiceRequest{
            AcceptedBy: sdk.String("est"),
            IPAddress: sdk.String("quidem"),
        },
        ID: "7da8a50c-e187-4f86-bc17-3d689eee9526",
        Termsofservicedocumentid: "maiores",
    }, operations.PatchLegalEntitiesIDTermsOfServiceTermsofservicedocumentidSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptTermsOfServiceResponse != nil {
        // handle response
    }
}
```

## PostLegalEntitiesIDTermsOfService

Returns the Terms of Service document for a legal entity.

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
    res, err := s.TermsOfService.PostLegalEntitiesIDTermsOfService(ctx, operations.PostLegalEntitiesIDTermsOfServiceRequest{
        GetTermsOfServiceDocumentRequest: &shared.GetTermsOfServiceDocumentRequest{
            Language: sdk.String("corrupti"),
            Type: shared.GetTermsOfServiceDocumentRequestTypeEnumAdyenIssuing.ToPointer(),
        },
        ID: "986e881e-ad4f-40e1-8125-63f94e29e973",
    }, operations.PostLegalEntitiesIDTermsOfServiceSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTermsOfServiceDocumentResponse != nil {
        // handle response
    }
}
```
