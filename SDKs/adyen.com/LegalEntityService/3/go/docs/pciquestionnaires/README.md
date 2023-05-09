# PCIQuestionnaires

### Available Operations

* [GetLegalEntitiesIDPciQuestionnaires](#getlegalentitiesidpciquestionnaires) - Get PCI questionnaire details
* [GetLegalEntitiesIDPciQuestionnairesPciid](#getlegalentitiesidpciquestionnairespciid) - Get PCI questionnaire
* [PostLegalEntitiesIDPciQuestionnairesGeneratePciTemplates](#postlegalentitiesidpciquestionnairesgeneratepcitemplates) - Generate PCI questionnaire
* [PostLegalEntitiesIDPciQuestionnairesSignPciTemplates](#postlegalentitiesidpciquestionnairessignpcitemplates) - Sign PCI questionnaire

## GetLegalEntitiesIDPciQuestionnaires

Get a list of signed PCI questionnaires.

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
    res, err := s.PCIQuestionnaires.GetLegalEntitiesIDPciQuestionnaires(ctx, operations.GetLegalEntitiesIDPciQuestionnairesRequest{
        ID: "c28744ed-53b8-48f3-a8d8-f5c0b2f2fb7b",
    }, operations.GetLegalEntitiesIDPciQuestionnairesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPciQuestionnaireInfosResponse != nil {
        // handle response
    }
}
```

## GetLegalEntitiesIDPciQuestionnairesPciid

Returns the signed PCI questionnaire.

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
    res, err := s.PCIQuestionnaires.GetLegalEntitiesIDPciQuestionnairesPciid(ctx, operations.GetLegalEntitiesIDPciQuestionnairesPciidRequest{
        ID: "194a276b-2691-46fe-9f08-f4294e3698f4",
        Pciid: "tempora",
    }, operations.GetLegalEntitiesIDPciQuestionnairesPciidSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPciQuestionnaireResponse != nil {
        // handle response
    }
}
```

## PostLegalEntitiesIDPciQuestionnairesGeneratePciTemplates

Generates the required PCI questionnaire based on the user's [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels). If multiple questionnaires are required, this request creates a single consodilated document to be signed.

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
    res, err := s.PCIQuestionnaires.PostLegalEntitiesIDPciQuestionnairesGeneratePciTemplates(ctx, operations.PostLegalEntitiesIDPciQuestionnairesGeneratePciTemplatesRequest{
        GeneratePciDescriptionRequest: &shared.GeneratePciDescriptionRequest{
            Language: sdk.String("voluptate"),
        },
        ID: "f603e8b4-45e8-40ca-95ef-d20e457e1858",
    }, operations.PostLegalEntitiesIDPciQuestionnairesGeneratePciTemplatesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneratePciDescriptionResponse != nil {
        // handle response
    }
}
```

## PostLegalEntitiesIDPciQuestionnairesSignPciTemplates

Signs the required PCI questionnaire.

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
    res, err := s.PCIQuestionnaires.PostLegalEntitiesIDPciQuestionnairesSignPciTemplates(ctx, operations.PostLegalEntitiesIDPciQuestionnairesSignPciTemplatesRequest{
        PciSigningRequest: &shared.PciSigningRequest{
            PciTemplateReferences: []string{
                "laboriosam",
                "dolorum",
                "voluptatum",
            },
            SignedBy: "error",
        },
        ID: "fbe3a5aa-8e48-424d-8ab4-075088e51862",
    }, operations.PostLegalEntitiesIDPciQuestionnairesSignPciTemplatesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PciSigningResponse != nil {
        // handle response
    }
}
```
