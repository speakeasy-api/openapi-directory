# PCIComplianceQuestionnairePage

### Available Operations

* [PostGetPciQuestionnaireURL](#postgetpciquestionnaireurl) - Get a link to a PCI compliance questionnaire

## PostGetPciQuestionnaireURL

Returns a link to a PCI compliance questionnaire that you can send to your account holder.
 > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PCIComplianceQuestionnairePage.PostGetPciQuestionnaireURL(ctx, shared.GetPciURLRequest{
        AccountHolderCode: "deserunt",
        ReturnURL: sdk.String("suscipit"),
    }, operations.PostGetPciQuestionnaireURLSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPciURLResponse != nil {
        // handle response
    }
}
```
