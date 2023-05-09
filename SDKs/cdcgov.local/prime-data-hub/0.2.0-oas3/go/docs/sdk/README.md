# SDK

## Overview

A router of public health data from multiple senders and receivers

### Available Operations

* [DeleteSettingsOrganizationsOrganizationName](#deletesettingsorganizationsorganizationname) - Delete an organization (and the associated receivers and senders)
* [DeleteSettingsOrganizationsOrganizationNameReceiversReceiverName](#deletesettingsorganizationsorganizationnamereceiversreceivername) - Delete a receiver
* [DeleteSettingsOrganizationsOrganizationNameSendersSenderName](#deletesettingsorganizationsorganizationnamesenderssendername) - Delete a sender
* [GetSettingsOrganizations](#getsettingsorganizations) - The settings for all organizations of the system. Must have admin access.
* [GetSettingsOrganizationsOrganizationName](#getsettingsorganizationsorganizationname) - A single organization settings
* [GetSettingsOrganizationsOrganizationNameReceivers](#getsettingsorganizationsorganizationnamereceivers) - A list of receivers and their current settings
* [GetSettingsOrganizationsOrganizationNameReceiversReceiverName](#getsettingsorganizationsorganizationnamereceiversreceivername) - The settings of a single of receiver
* [GetSettingsOrganizationsOrganizationNameSenders](#getsettingsorganizationsorganizationnamesenders) - A list of senders
* [GetSettingsOrganizationsOrganizationNameSendersSenderName](#getsettingsorganizationsorganizationnamesenderssendername) - The settings of a single of sender
* [HeadSettingsOrganizations](#headsettingsorganizations) - Retrived the last modified for all settings of the system. Must have admin access.
* [PostReports](#postreports) - Post a report to the data hub
* [PutSettingsOrganizationsOrganizationName](#putsettingsorganizationsorganizationname) - Create or update the direct settings associated with an organization
* [PutSettingsOrganizationsOrganizationNameReceiversReceiverName](#putsettingsorganizationsorganizationnamereceiversreceivername) - Update a single reciever
* [PutSettingsOrganizationsOrganizationNameSendersSenderName](#putsettingsorganizationsorganizationnamesenderssendername) - Update a single sender

## DeleteSettingsOrganizationsOrganizationName

Delete an organization (and the associated receivers and senders)

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
    res, err := s.SDK.DeleteSettingsOrganizationsOrganizationName(ctx, operations.DeleteSettingsOrganizationsOrganizationNameRequest{
        OrganizationName: "provident",
    }, operations.DeleteSettingsOrganizationsOrganizationNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## DeleteSettingsOrganizationsOrganizationNameReceiversReceiverName

Delete a receiver

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
    res, err := s.SDK.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverName(ctx, operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest{
        OrganizationName: "distinctio",
        ReceiverName: "quibusdam",
    }, operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Receiver != nil {
        // handle response
    }
}
```

## DeleteSettingsOrganizationsOrganizationNameSendersSenderName

Delete a sender

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
    res, err := s.SDK.DeleteSettingsOrganizationsOrganizationNameSendersSenderName(ctx, operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest{
        OrganizationName: "unde",
        SenderName: "nulla",
    }, operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sender != nil {
        // handle response
    }
}
```

## GetSettingsOrganizations

The settings for all organizations of the system. Must have admin access.

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
    res, err := s.SDK.GetSettingsOrganizations(ctx, operations.GetSettingsOrganizationsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organizations != nil {
        // handle response
    }
}
```

## GetSettingsOrganizationsOrganizationName

A single organization settings

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
    res, err := s.SDK.GetSettingsOrganizationsOrganizationName(ctx, operations.GetSettingsOrganizationsOrganizationNameRequest{
        OrganizationName: "corrupti",
    }, operations.GetSettingsOrganizationsOrganizationNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## GetSettingsOrganizationsOrganizationNameReceivers

A list of receivers and their current settings

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
    res, err := s.SDK.GetSettingsOrganizationsOrganizationNameReceivers(ctx, operations.GetSettingsOrganizationsOrganizationNameReceiversRequest{
        OrganizationName: "illum",
    }, operations.GetSettingsOrganizationsOrganizationNameReceiversSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Receivers != nil {
        // handle response
    }
}
```

## GetSettingsOrganizationsOrganizationNameReceiversReceiverName

The settings of a single of receiver

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
    res, err := s.SDK.GetSettingsOrganizationsOrganizationNameReceiversReceiverName(ctx, operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest{
        OrganizationName: "vel",
        ReceiverName: "error",
    }, operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Receiver != nil {
        // handle response
    }
}
```

## GetSettingsOrganizationsOrganizationNameSenders

A list of senders

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
    res, err := s.SDK.GetSettingsOrganizationsOrganizationNameSenders(ctx, operations.GetSettingsOrganizationsOrganizationNameSendersRequest{
        OrganizationName: "deserunt",
    }, operations.GetSettingsOrganizationsOrganizationNameSendersSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Senders != nil {
        // handle response
    }
}
```

## GetSettingsOrganizationsOrganizationNameSendersSenderName

The settings of a single of sender

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
    res, err := s.SDK.GetSettingsOrganizationsOrganizationNameSendersSenderName(ctx, operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest{
        OrganizationName: "suscipit",
        SenderName: "iure",
    }, operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sender != nil {
        // handle response
    }
}
```

## HeadSettingsOrganizations

Retrived the last modified for all settings of the system. Must have admin access.

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
    res, err := s.SDK.HeadSettingsOrganizations(ctx, operations.HeadSettingsOrganizationsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostReports

Post a report to the data hub

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
    res, err := s.SDK.PostReports(ctx, operations.PostReportsRequest{
        RequestBody: "magnam",
        Client: "debitis",
        Default: []string{
            "delectus",
        },
        Option: operations.PostReportsOptionEnumCheckConnections.ToPointer(),
        RouteTo: []string{
            "molestiae",
            "minus",
        },
    }, operations.PostReportsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## PutSettingsOrganizationsOrganizationName

Create or update the direct settings associated with an organization

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
    res, err := s.SDK.PutSettingsOrganizationsOrganizationName(ctx, operations.PutSettingsOrganizationsOrganizationNameRequest{
        OrganizationInput: &shared.OrganizationInput{
            CountyName: sdk.String("Pima"),
            Description: "Arizona PHD",
            Jurisdiction: shared.OrganizationJurisdictionEnumCounty,
            Name: "az-phd",
            StateCode: sdk.String("AZ"),
        },
        OrganizationName: "voluptatum",
    }, operations.PutSettingsOrganizationsOrganizationNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## PutSettingsOrganizationsOrganizationNameReceiversReceiverName

Update a single reciever

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
    res, err := s.SDK.PutSettingsOrganizationsOrganizationNameReceiversReceiverName(ctx, operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest{
        ReceiverInput: &shared.ReceiverInput{
            Description: "Arizona PHD ELR feed",
            JurisdictionalFilters: []shared.ReceiverJurisdictionalFilters{
                shared.ReceiverJurisdictionalFilters{
                    DoesNotMatch: sdk.Bool(false),
                    MatchFields: shared.ReceiverJurisdictionalFiltersMatchFieldsEnumFacilityName.ToPointer(),
                    MatchValues: []string{
                        "recusandae",
                        "temporibus",
                    },
                },
                shared.ReceiverJurisdictionalFilters{
                    DoesNotMatch: sdk.Bool(false),
                    MatchFields: shared.ReceiverJurisdictionalFiltersMatchFieldsEnumFacilityOrPatientAddress.ToPointer(),
                    MatchValues: []string{
                        "veritatis",
                        "deserunt",
                    },
                },
            },
            Name: "az-phd.elr",
            Timing: shared.ReceiverTiming{
                DailyAt: sdk.Float64(202.18),
                Frequency: shared.ReceiverTimingFrequencyEnumHourly,
            },
            Topic: "covid-19",
            Translations: []interface{}{
                "quo",
                shared.CustomConfiguration{
                    Format: shared.CustomConfigurationFormatEnumHl7,
                    NameFormat: sdk.String("at"),
                    ReceivingOrganization: sdk.String("maiores"),
                    SchemaName: "molestiae",
                    Transport: shared.CustomConfigurationTransport{},
                    Type: "CUSTOM",
                },
                "quod",
                shared.StandardHl7Configuration{
                    ConvertTimestampToDateTime: sdk.String("totam"),
                    DefaultAoeToUnknown: sdk.Bool(false),
                    IncludeAOE: false,
                    NameFormat: sdk.String("porro"),
                    PhoneNumberFormatting: shared.StandardHl7ConfigurationPhoneNumberFormattingEnumAreaLocalInComponentOne.ToPointer(),
                    ReceivingApplicationName: sdk.String("dicta"),
                    ReceivingApplicationOID: sdk.String("nam"),
                    ReceivingFacilityName: sdk.String("officia"),
                    ReceivingFacilityOID: sdk.String("occaecati"),
                    ReceivingOrganization: sdk.String("fugit"),
                    ReportingFacilityID: sdk.String("deleniti"),
                    ReportingFacilityIDType: sdk.String("hic"),
                    ReportingFacilityName: sdk.String("optio"),
                    SuppressAoe: sdk.Bool(false),
                    SuppressHl7Fields: sdk.String("totam"),
                    SuppressQstForAoe: sdk.Bool(false),
                    Transport: shared.StandardHl7ConfigurationTransport{},
                    TruncateHDNamespaceIds: sdk.Bool(false),
                    Type: "STANDARD_HL7",
                    UseBatchHeaders: false,
                    UseBlankInsteadOfUnknown: sdk.String("beatae"),
                    UsePid14ForPatientEmail: sdk.Bool(false),
                    UseTestProcessingMode: sdk.Bool(false),
                },
            },
        },
        OrganizationName: "commodi",
        ReceiverName: "molestiae",
    }, operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Receiver != nil {
        // handle response
    }
}
```

## PutSettingsOrganizationsOrganizationNameSendersSenderName

Update a single sender

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
    res, err := s.SDK.PutSettingsOrganizationsOrganizationNameSendersSenderName(ctx, operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest{
        SenderInput: &shared.SenderInput{
            Description: "modi",
            Format: shared.SenderFormatEnumCsv,
            Name: "simple_report.default",
            Schema: "az-phd-covid-19",
            Topic: "covid-19",
        },
        OrganizationName: "qui",
        SenderName: "impedit",
    }, operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Senders != nil {
        // handle response
    }
}
```
