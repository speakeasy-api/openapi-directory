# CustomerAccount

### Available Operations

* [ActivateUserAccount](#activateuseraccount) - Activate the user account
* [ChangeEmail](#changeemail) - Change user email
* [ChangePassword](#changepassword) - Change user password
* [GetCreditCardInfo](#getcreditcardinfo) - Get credit card information
* [GetProfilePictureInfo](#getprofilepictureinfo) - Get profile picture information
* [GetUserAccountInfo](#getuseraccountinfo) - Get user account information
* [ResendEmailActivation](#resendemailactivation) - Resend email activation
* [SaveCompanyInfo](#savecompanyinfo) - Change company information
* [SaveCreditCardInfo](#savecreditcardinfo) - Save user credit card info
* [SavePersonalInfo](#savepersonalinfo) - Save user personal information
* [SaveProfilePictureInfo](#saveprofilepictureinfo) - Change user picture information

## ActivateUserAccount

Activate the user account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerAccount.ActivateUserAccount(ctx, "quaerat")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeEmail

Change user email

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerAccount.ChangeEmail(ctx, shared.ChangeEmailRequest{
        NewEmail: "paulsimon@mysupercompany.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangePassword

Change user password

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerAccount.ChangePassword(ctx, shared.ChangePasswordRequest{
        NewPassword: "sapiente",
        OldPassword: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCreditCardInfo

Get credit card information

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
    res, err := s.CustomerAccount.GetCreditCardInfo(ctx, operations.GetCreditCardInfoRequest{
        IfNoneMatch: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditCardInfoResponse != nil {
        // handle response
    }
}
```

## GetProfilePictureInfo

Get profile picture information

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
    res, err := s.CustomerAccount.GetProfilePictureInfo(ctx, operations.GetProfilePictureInfoRequest{
        IfNoneMatch: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfilePictureInfoResponse != nil {
        // handle response
    }
}
```

## GetUserAccountInfo

Get user account information

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
    res, err := s.CustomerAccount.GetUserAccountInfo(ctx, operations.GetUserAccountInfoRequest{
        IfNoneMatch: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountInfo != nil {
        // handle response
    }
}
```

## ResendEmailActivation

Resend email activation

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerAccount.ResendEmailActivation(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SaveCompanyInfo

Change company information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerAccount.SaveCompanyInfo(ctx, shared.CompanyInfo{
        AccountingEmails: []string{
            "paulsimon@mysupercompany.com",
            "paulsimon@mysupercompany.com",
            "paulsimon@mysupercompany.com",
            "paulsimon@mysupercompany.com",
        },
        Address: "21 jump street",
        City: "New-York",
        Company: "My super company",
        CountryIsoCodeAlpha3: "FRA",
        PostalCode: "13014",
        VatNumber: sdk.String("1234567890"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SaveCreditCardInfo

Save user credit card info

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerAccount.SaveCreditCardInfo(ctx, shared.CreditCardInfo{
        CardNumber: "1234567890091234",
        CardVerificationCode: "123",
        ExpirationMonth: 12,
        ExpirationYear: 2017,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SavePersonalInfo

Save user personal information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerAccount.SavePersonalInfo(ctx, shared.PersonalInfo{
        BeezUPTimeZoneID: 79,
        FirstName: "Paul",
        LastName: "Simon",
        PhoneNumber: "5551234",
        WhatIDo: sdk.String("I'm the Manager on this company"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SaveProfilePictureInfo

Change user picture information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerAccount.SaveProfilePictureInfo(ctx, shared.ProfilePictureInfo{
        ProfilePictureSelected: shared.ProfilePictureSelectedEnumInitials,
        ProfilePictureURL: sdk.String("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Marlon_Brando_%28cropped%29.jpg/220px-Marlon_Brando_%28cropped%29.jpg"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
