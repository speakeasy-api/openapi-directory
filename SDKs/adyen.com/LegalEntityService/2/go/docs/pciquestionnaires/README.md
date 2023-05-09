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
        ID: "fe35b60e-b1ea-4426-955b-a3c28744ed53",
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
        ID: "b88f3a8d-8f5c-40b2-b2fb-7b194a276b26",
        Pciid: "unde",
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
            Language: sdk.String("architecto"),
        },
        ID: "6fe1f08f-4294-4e36-98f4-47f603e8b445",
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
                "rem",
                "sit",
                "nobis",
                "error",
            },
            SignedBy: "veniam",
        },
        ID: "5efd20e4-57e1-4858-b6a8-9fbe3a5aa8e4",
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
