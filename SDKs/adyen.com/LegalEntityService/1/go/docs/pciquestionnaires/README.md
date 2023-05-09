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
        ID: "70c68828-2aa4-4825-a2f2-22e9817ee17c",
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
        ID: "be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87",
        Pciid: "quasi",
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
            Language: sdk.String("a"),
        },
        ID: "99dd2efd-121a-4a6f-9e67-4bdb04f15756",
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
                "voluptatum",
            },
            SignedBy: "qui",
        },
        ID: "d68ea19f-1d17-4051-b39d-08086a184039",
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
