# Avatars

## Overview

The Avatars service aims to help you complete everyday tasks related to your app image, icons, and avatars.

### Available Operations

* [AvatarsGetBrowser](#avatarsgetbrowser) - Get Browser Icon
* [AvatarsGetCreditCard](#avatarsgetcreditcard) - Get Credit Card Icon
* [AvatarsGetFavicon](#avatarsgetfavicon) - Get Favicon
* [AvatarsGetFlag](#avatarsgetflag) - Get Country Flag
* [AvatarsGetImage](#avatarsgetimage) - Get Image from URL
* [AvatarsGetInitials](#avatarsgetinitials) - Get User Initials
* [AvatarsGetQR](#avatarsgetqr) - Get QR Code

## AvatarsGetBrowser

You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Avatars.AvatarsGetBrowser(ctx, operations.AvatarsGetBrowserRequest{
        Code: "ad",
        Height: sdk.Int(617636),
        Quality: sdk.Int(149675),
        Width: sdk.Int(612096),
    }, operations.AvatarsGetBrowserSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AvatarsGetCreditCard

The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Avatars.AvatarsGetCreditCard(ctx, operations.AvatarsGetCreditCardRequest{
        Code: "dolor",
        Height: sdk.Int(616934),
        Quality: sdk.Int(386489),
        Width: sdk.Int(943749),
    }, operations.AvatarsGetCreditCardSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AvatarsGetFavicon

Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Avatars.AvatarsGetFavicon(ctx, operations.AvatarsGetFaviconRequest{
        URL: "saepe",
    }, operations.AvatarsGetFaviconSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AvatarsGetFlag

You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Avatars.AvatarsGetFlag(ctx, operations.AvatarsGetFlagRequest{
        Code: "fuga",
        Height: sdk.Int(449950),
        Quality: sdk.Int(359508),
        Width: sdk.Int(613064),
    }, operations.AvatarsGetFlagSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AvatarsGetImage

Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Avatars.AvatarsGetImage(ctx, operations.AvatarsGetImageRequest{
        Height: sdk.Int(437032),
        URL: "saepe",
        Width: sdk.Int(697631),
    }, operations.AvatarsGetImageSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AvatarsGetInitials

Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Avatars.AvatarsGetInitials(ctx, operations.AvatarsGetInitialsRequest{
        Background: sdk.String("architecto"),
        Color: sdk.String("ipsa"),
        Height: sdk.Int(969810),
        Name: sdk.String("Shaun Osinski"),
        Width: sdk.Int(358152),
    }, operations.AvatarsGetInitialsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AvatarsGetQR

Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Avatars.AvatarsGetQR(ctx, operations.AvatarsGetQRRequest{
        Download: sdk.Bool(false),
        Margin: sdk.Int(128926),
        Size: sdk.Int(750686),
        Text: "enim",
    }, operations.AvatarsGetQRSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
