# Numbers

### Available Operations

* [FindNumberLeaseConfigs](#findnumberleaseconfigs) - Find lease configs
* [FindNumberLeases](#findnumberleases) - Find leases
* [FindNumberRegions](#findnumberregions) - Find number regions
* [FindNumbersLocal](#findnumberslocal) - Find local numbers
* [FindNumbersTollfree](#findnumberstollfree) - Find tollfree numbers
* [GetNumberLease](#getnumberlease) - Find a specific lease
* [GetNumberLeaseConfig](#getnumberleaseconfig) - Find a specific lease config
* [UpdateNumberLease](#updatenumberlease) - Update a lease
* [UpdateNumberLeaseConfig](#updatenumberleaseconfig) - Update a lease config

## FindNumberLeaseConfigs

Searches for all number lease configs for the user. Returns a paged list of NumberConfig

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
    res, err := s.Numbers.FindNumberLeaseConfigs(ctx, operations.FindNumberLeaseConfigsRequest{
        City: sdk.String("O'Reillyshire"),
        Fields: sdk.String("totam"),
        LabelName: sdk.String("fugiat"),
        Limit: sdk.Int(424089),
        Offset: sdk.Int(497678),
        Prefix: sdk.String("quos"),
        State: sdk.String("vel"),
        Zipcode: sdk.String("87744"),
    }, operations.FindNumberLeaseConfigsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumberConfigPage != nil {
        // handle response
    }
}
```

## FindNumberLeases

Searches for all numbers leased by account user. This API is useful for finding all numbers currently owned by the user. Returns a paged list of number leases.

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
    res, err := s.Numbers.FindNumberLeases(ctx, operations.FindNumberLeasesRequest{
        City: sdk.String("Fort Rhoda"),
        Fields: sdk.String("nemo"),
        LabelName: sdk.String("recusandae"),
        Limit: sdk.Int(397533),
        Offset: sdk.Int(46007),
        Prefix: sdk.String("cum"),
        State: sdk.String("consectetur"),
        TollFree: sdk.Bool(false),
        Zipcode: sdk.String("39829"),
    }, operations.FindNumberLeasesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumberLeasePage != nil {
        // handle response
    }
}
```

## FindNumberRegions

Searches for region information. Use this API to obtain detailed region information that can be used to query for more specific phone numbers than a general query.

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
    res, err := s.Numbers.FindNumberRegions(ctx, operations.FindNumberRegionsRequest{
        City: sdk.String("Fort Mavis"),
        CityPrefix: sdk.String("saepe"),
        Country: sdk.String("Tokelau"),
        Fields: sdk.String("dolore"),
        Limit: sdk.Int(121059),
        Offset: sdk.Int(992012),
        Prefix: sdk.String("adipisci"),
        State: sdk.String("non"),
        Zipcode: sdk.String("14982"),
    }, operations.FindNumberRegionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionPage != nil {
        // handle response
    }
}
```

## FindNumbersLocal

Searches for numbers available for purchase in CallFire local numbers catalog . At least one additional parameter is required. User may filter local numbers by their region information. If all numbers with desirable zip code is already busy search will return available numbers with nearest zip code.

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
    res, err := s.Numbers.FindNumbersLocal(ctx, operations.FindNumbersLocalRequest{
        City: sdk.String("Lake Germaine"),
        Fields: sdk.String("ipsa"),
        Limit: sdk.Int(916727),
        Prefix: sdk.String("libero"),
        State: sdk.String("vitae"),
        Zipcode: sdk.String("62133-3376"),
    }, operations.FindNumbersLocalSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumberList != nil {
        // handle response
    }
}
```

## FindNumbersTollfree

Searches for the toll free numbers which are available for purchase in the CallFire catalog

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
    res, err := s.Numbers.FindNumbersTollfree(ctx, operations.FindNumbersTollfreeRequest{
        Fields: sdk.String("adipisci"),
        Limit: sdk.Int(795535),
        Pattern: sdk.String("dolores"),
    }, operations.FindNumbersTollfreeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumberList != nil {
        // handle response
    }
}
```

## GetNumberLease

Returns a single NumberLease instance for a given number

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
    res, err := s.Numbers.GetNumberLease(ctx, operations.GetNumberLeaseRequest{
        Fields: sdk.String("blanditiis"),
        Number: "in",
    }, operations.GetNumberLeaseSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumberLease != nil {
        // handle response
    }
}
```

## GetNumberLeaseConfig

Returns a single NumberConfig instance for a given number lease

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
    res, err := s.Numbers.GetNumberLeaseConfig(ctx, operations.GetNumberLeaseConfigRequest{
        Fields: sdk.String("dolore"),
        Number: "aliquam",
    }, operations.GetNumberLeaseConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumberConfig != nil {
        // handle response
    }
}
```

## UpdateNumberLease

Updates a number lease instance. Ability to turn on/off autoRenew and toggle call/text features for a particular number

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
    res, err := s.Numbers.UpdateNumberLease(ctx, operations.UpdateNumberLeaseRequest{
        NumberLeaseInput: &shared.NumberLeaseInput{
            AutoRenew: sdk.Bool(false),
            CallFeatureStatus: shared.NumberLeaseCallFeatureStatusEnumEnabled.ToPointer(),
            Labels: []string{
                "ullam",
                "adipisci",
                "cum",
                "blanditiis",
            },
            LeaseBegin: sdk.Int64(555361),
            LeaseEnd: sdk.Int64(942584),
            NationalFormat: sdk.String("nesciunt"),
            Number: sdk.String("culpa"),
            Region: &shared.Region{
                City: sdk.String("Sandrinemouth"),
                Country: sdk.String("United Kingdom"),
                Latitude: sdk.Float32(3487.83),
                Longitude: sdk.Float32(7507.65),
                Prefix: sdk.String("sit"),
                State: sdk.String("rerum"),
                TimeZone: sdk.String("sed"),
                Zipcode: sdk.String("19747-0626"),
            },
            SendEmailOnCreate: sdk.Bool(false),
            TextFeatureStatus: shared.NumberLeaseTextFeatureStatusEnumUnsupported.ToPointer(),
            TollFree: sdk.Bool(false),
            Type: shared.NumberLeaseTypeEnumPlan.ToPointer(),
        },
        Number: "commodi",
    }, operations.UpdateNumberLeaseSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateNumberLeaseConfig

Updates a phone number lease configuration. Use this API endpoint to add an Inbound IVR or Call Tracking feature to a CallFire phone number. Call tracking configuration allows you to track the incoming calls, to analyze and to respond customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)

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
    res, err := s.Numbers.UpdateNumberLeaseConfig(ctx, operations.UpdateNumberLeaseConfigRequest{
        NumberConfig: &shared.NumberConfig{
            CallTrackingConfig: &shared.CallTrackingConfig{
                FailedTransferSoundID: sdk.Int64(696077),
                GoogleAnalytics: &shared.GoogleAnalytics{
                    Category: sdk.String("explicabo"),
                    Domain: sdk.String("voluptas"),
                    GoogleAccountID: sdk.String("unde"),
                },
                IntroSoundID: sdk.Int64(100032),
                Recorded: sdk.Bool(false),
                Screen: sdk.Bool(false),
                TransferNumbers: []string{
                    "sapiente",
                    "debitis",
                },
                Voicemail: sdk.Bool(false),
                VoicemailSoundID: sdk.Int64(72434),
                WeeklySchedule: &shared.WeeklySchedule{
                    DaysOfWeek: []string{
                        "perferendis",
                        "corrupti",
                        "maiores",
                        "incidunt",
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(148478),
                        Minute: sdk.Int(592231),
                        Nano: sdk.Int(258702),
                        Second: sdk.Int(896762),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(215529),
                        Minute: sdk.Int(406733),
                        Nano: sdk.Int(579912),
                        Second: sdk.Int(552078),
                    },
                    TimeZone: sdk.String("voluptatibus"),
                },
                WhisperSoundID: sdk.Int64(271653),
            },
            ConfigType: shared.NumberConfigConfigTypeEnumIvr.ToPointer(),
            IvrInboundConfig: &shared.IvrInboundConfig{
                DialplanXML: sdk.String("voluptate"),
            },
            Number: sdk.String("reiciendis"),
            TextInboundConfig: &shared.TextInboundConfig{
                ForwardEnabled: sdk.Bool(false),
                ForwardNumber: sdk.String("ex"),
            },
        },
        Number: "sit",
    }, operations.UpdateNumberLeaseConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
