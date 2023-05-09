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
        ID: "09b3fe49-a8d9-4cbf-8863-3323f9b77f3a",
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
            Locale: sdk.String("numquam"),
            RedirectURL: sdk.String("veritatis"),
            Settings: map[string]bool{
                "ipsa": false,
            },
            ThemeID: sdk.String("iure"),
        },
        ID: "74ebf692-80d1-4ba7-ba89-ebf737ae4203",
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
