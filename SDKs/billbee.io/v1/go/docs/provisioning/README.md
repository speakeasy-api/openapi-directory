# Provisioning

### Available Operations

* [AutomaticProvisioningCreateAccountForm](#automaticprovisioningcreateaccountform) - Creates a new Billbee user account with the data passed
* [AutomaticProvisioningCreateAccountJSON](#automaticprovisioningcreateaccountjson) - Creates a new Billbee user account with the data passed
* [AutomaticProvisioningCreateAccountRaw](#automaticprovisioningcreateaccountraw) - Creates a new Billbee user account with the data passed
* [AutomaticProvisioningTermsInfo](#automaticprovisioningtermsinfo) - Returns infos about Billbee terms and conditions

## AutomaticProvisioningCreateAccountForm

Creates a new Billbee user account with the data passed

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
    res, err := s.Provisioning.AutomaticProvisioningCreateAccountForm(ctx, shared.RechnungsdruckWebAppControllersAPIAutomaticProvisioningControllerCreateAccountContainer{
        AcceptTerms: sdk.Bool(false),
        Address: &shared.RechnungsdruckWebAppControllersAPIAutomaticProvisioningControllerCreateAccountContainerUserAddress{
            Address1: sdk.String("quam"),
            Address2: sdk.String("est"),
            City: sdk.String("Fort Lottie"),
            Company: sdk.String("Kub - Schmitt"),
            Country: sdk.String("Virgin Islands, U.S."),
            Name: sdk.String("Sheila Hermann"),
            VatID: sdk.String("doloribus"),
            Zip: sdk.String("animi"),
        },
        AffiliateCouponCode: sdk.String("recusandae"),
        DefaultCurrrency: sdk.String("corporis"),
        DefaultVatIndex: sdk.Int(252567),
        DefaultVatMode: shared.RechnungsdruckWebAppControllersAPIAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnumFive.ToPointer(),
        EMail: "Wilma75@hotmail.com",
        Password: sdk.String("sequi"),
        Vat1Rate: sdk.Float64(1257.07),
        Vat2Rate: sdk.Float64(1122.5),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomaticProvisioningCreateAccountForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AutomaticProvisioningCreateAccountJSON

Creates a new Billbee user account with the data passed

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
    res, err := s.Provisioning.AutomaticProvisioningCreateAccountJSON(ctx, shared.RechnungsdruckWebAppControllersAPIAutomaticProvisioningControllerCreateAccountContainer{
        AcceptTerms: sdk.Bool(false),
        Address: &shared.RechnungsdruckWebAppControllersAPIAutomaticProvisioningControllerCreateAccountContainerUserAddress{
            Address1: sdk.String("voluptatibus"),
            Address2: sdk.String("doloremque"),
            City: sdk.String("East Maximusport"),
            Company: sdk.String("Smith - Dibbert"),
            Country: sdk.String("Cyprus"),
            Name: sdk.String("Stella Witting MD"),
            VatID: sdk.String("accusantium"),
            Zip: sdk.String("quod"),
        },
        AffiliateCouponCode: sdk.String("minus"),
        DefaultCurrrency: sdk.String("quos"),
        DefaultVatIndex: sdk.Int(819996),
        DefaultVatMode: shared.RechnungsdruckWebAppControllersAPIAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnumFive.ToPointer(),
        EMail: "Lafayette62@yahoo.com",
        Password: sdk.String("nesciunt"),
        Vat1Rate: sdk.Float64(5909.98),
        Vat2Rate: sdk.Float64(4047.74),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomaticProvisioningCreateAccountJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AutomaticProvisioningCreateAccountRaw

Creates a new Billbee user account with the data passed

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
    res, err := s.Provisioning.AutomaticProvisioningCreateAccountRaw(ctx, []byte("repellendus"))
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomaticProvisioningCreateAccountRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AutomaticProvisioningTermsInfo

Returns infos about Billbee terms and conditions

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
    res, err := s.Provisioning.AutomaticProvisioningTermsInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomaticProvisioningTermsInfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
