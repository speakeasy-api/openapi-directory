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
        ID: "824d0ab4-0750-488e-9186-2065e904f3b1",
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
            AcceptedBy: sdk.String("architecto"),
            IPAddress: sdk.String("occaecati"),
        },
        ID: "4b8abf60-3a79-4f9d-be0a-b7da8a50ce18",
        Termsofservicedocumentid: "reprehenderit",
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
            Language: sdk.String("asperiores"),
            Type: shared.GetTermsOfServiceDocumentRequestTypeEnumAdyenForPlatformsAdvanced.ToPointer(),
        },
        ID: "6bc173d6-89ee-4e95-a6f8-d986e881ead4",
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
