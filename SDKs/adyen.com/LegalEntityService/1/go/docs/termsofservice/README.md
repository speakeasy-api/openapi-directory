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
        ID: "4c26071f-93f5-4f06-82da-c7af515cc413",
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
            AcceptedBy: sdk.String("fuga"),
            IPAddress: sdk.String("id"),
        },
        ID: "63aae8d6-7864-4dbb-a75f-d5e60b375ed4",
        Termsofservicedocumentid: "doloribus",
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
            Language: sdk.String("suscipit"),
            Type: shared.GetTermsOfServiceDocumentRequestTypeEnumAdyenIssuing.ToPointer(),
        },
        ID: "bee41f33-317f-4e35-b60e-b1ea426555ba",
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
