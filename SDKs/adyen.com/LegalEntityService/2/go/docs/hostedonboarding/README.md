# HostedOnboarding

### Available Operations

* [GetThemes](#getthemes) - Get a list of hosted onboarding page themes
* [GetThemesID](#getthemesid) - Get an onboarding link theme
* [PostLegalEntitiesIDOnboardingLinks](#postlegalentitiesidonboardinglinks) - Get a link to an Adyen-hosted onboarding page

## GetThemes

Returns a list of hosted onboarding page themes.

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



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
    res, err := s.HostedOnboarding.GetThemes(ctx, operations.GetThemesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OnboardingThemes != nil {
        // handle response
    }
}
```

## GetThemesID

Returns the details of the theme identified in the path.>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



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
    res, err := s.HostedOnboarding.GetThemesID(ctx, operations.GetThemesIDRequest{
        ID: "28909b3f-e49a-48d9-8bf4-8633323f9b77",
    }, operations.GetThemesIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OnboardingTheme != nil {
        // handle response
    }
}
```

## PostLegalEntitiesIDOnboardingLinks

Returns a link to an Adyen-hosted onboarding page where you need to redirect your user.

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



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
    res, err := s.HostedOnboarding.PostLegalEntitiesIDOnboardingLinks(ctx, operations.PostLegalEntitiesIDOnboardingLinksRequest{
        OnboardingLinkInfo: &shared.OnboardingLinkInfo{
            Locale: sdk.String("reiciendis"),
            RedirectURL: sdk.String("amet"),
            Settings: map[string]bool{
                "numquam": false,
                "veritatis": false,
                "ipsa": false,
            },
            ThemeID: sdk.String("ipsa"),
        },
        ID: "674ebf69-280d-41ba-b7a8-9ebf737ae420",
    }, operations.PostLegalEntitiesIDOnboardingLinksSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OnboardingLink != nil {
        // handle response
    }
}
```
