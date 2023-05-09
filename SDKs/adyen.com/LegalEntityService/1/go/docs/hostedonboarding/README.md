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
        ID: "c692601f-b576-4b0d-9f0d-30c5fbb25870",
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
            Locale: sdk.String("quis"),
            RedirectURL: sdk.String("nesciunt"),
            Settings: map[string]bool{
                "perferendis": false,
            },
            ThemeID: sdk.String("dolores"),
        },
        ID: "c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4",
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
