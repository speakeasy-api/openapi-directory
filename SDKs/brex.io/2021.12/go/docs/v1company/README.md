# V1Company

## Overview

Company Search methods

### Available Operations

* [CompanyAlternativeSearch](#companyalternativesearch) - Retrieves a list of companies from the KYC API company index
* [CompanyAnnouncement](#companyannouncement) - Retrieves announcement data
* [CompanyDeepsearchISIN](#companydeepsearchisin) - Retrieves a list of stock exchange listings
* [CompanyDeepsearchLEI](#companydeepsearchlei) - Retrieves a list of companies
* [CompanyDeepsearchName](#companydeepsearchname) - Retrieves a list of companies from the official business register
* [CompanyDeepsearchNumber](#companydeepsearchnumber) - Retrieves a list of companies from the official business register
* [CompanyIDAnnouncements](#companyidannouncements) - Retrieves company announcements
* [CompanyIDDataset](#companyiddataset) - Retrieves company details
* [CompanyIDSuper](#companyidsuper) - Retrieves structured data extracted from a company document
* [CompanyMonitorChangeTypesList](#companymonitorchangetypeslist) - Get available ChangeTypes
* [CompanyMonitorID](#companymonitorid) - Get monitor status for specific company id
* [CompanyMonitorList](#companymonitorlist) - Retrieves a list of registered monitors
* [CompanyMonitorRegister](#companymonitorregister) - Register a Company for monitoring
* [CompanyMonitorUnregister](#companymonitorunregister) - Deactivates an active notification
* [CompanyNotificationID](#companynotificationid) - Retrieves a list of registered notifications
* [CompanyNotificationList](#companynotificationlist) - Retrieves a list of registered notifications
* [CompanyNotificationRegister](#companynotificationregister) - Creates a new notification
* [CompanyNotificationUnregister](#companynotificationunregister) - Unregister a company from Monitoring
* [CompanySearchName](#companysearchname) - Retrieves a list of companies from the KYC API company index
* [CompanySearchNumber](#companysearchnumber) - Retrieves a list of companies from the KYC API company index

## CompanyAlternativeSearch

KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name

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
    res, err := s.V1Company.CompanyAlternativeSearch(ctx, operations.CompanyAlternativeSearchRequest{
        RequestBody: &operations.CompanyAlternativeSearchRequestBody{
            Address: sdk.String("8971 Strosin Wall"),
            Name: sdk.String("Bernadette Schmidt"),
            Number: sdk.String("porro"),
            Phone: sdk.String("1-276-615-9751 x4421"),
            URL: sdk.String("impedit"),
            Vat: sdk.String("cum"),
        },
        Country: "esse",
    }, operations.CompanyAlternativeSearchSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyAlternativeSearch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyAnnouncement

Request full announcement data identified by announcement id

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
    res, err := s.V1Company.CompanyAnnouncement(ctx, operations.CompanyAnnouncementRequest{
        ID: "ipsum",
    }, operations.CompanyAnnouncementSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyAnnouncement200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyDeepsearchISIN

Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.

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
    res, err := s.V1Company.CompanyDeepsearchISIN(ctx, operations.CompanyDeepsearchISINRequestBody{
        Isin: sdk.String("excepturi"),
    }, operations.CompanyDeepsearchISINSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDeepsearchISIN200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyDeepsearchLEI

Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.

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
    res, err := s.V1Company.CompanyDeepsearchLEI(ctx, operations.CompanyDeepsearchLEIRequest{
        Number: "aspernatur",
        Page: sdk.Int(18789),
    }, operations.CompanyDeepsearchLEISecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDeepsearchLEI200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CompanyDeepsearchName

Search for companies with a certain name. Search is forwarded to the respective business register of the country.

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
    res, err := s.V1Company.CompanyDeepsearchName(ctx, operations.CompanyDeepsearchNameRequest{
        Country: "ad",
        Name: "natus",
    }, operations.CompanyDeepsearchNameSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDeepsearchName200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyDeepsearchNumber

Search for companies with a certain register number. Search is forwarded to the respective business register of the country.

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
    res, err := s.V1Company.CompanyDeepsearchNumber(ctx, operations.CompanyDeepsearchNumberRequest{
        Country: "sed",
        Number: "iste",
    }, operations.CompanyDeepsearchNumberSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyDeepsearchNumber200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyIDAnnouncements

Search announcements filed to the business register from a company identified by an id

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
    res, err := s.V1Company.CompanyIDAnnouncements(ctx, operations.CompanyIDAnnouncementsRequest{
        Data: sdk.Bool(false),
        ID: "dolor",
        Limit: sdk.Int(616934),
        Offset: sdk.Int(386489),
    }, operations.CompanyIDAnnouncementsSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyIDAnnouncements200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyIDDataset

Get company details by id. The level of details is defined by the dataset parameter

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
    res, err := s.V1Company.CompanyIDDataset(ctx, operations.CompanyIDDatasetRequest{
        CheckStockListing: sdk.Bool(false),
        Dataset: operations.CompanyIDDatasetDatasetEnumRefresh,
        ID: "saepe",
        Lang: operations.CompanyIDDatasetLangEnumEs.ToPointer(),
    }, operations.CompanyIDDatasetSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany != nil {
        // handle response
    }
}
```

## CompanyIDSuper

Request company superdata identified by company id

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
    res, err := s.V1Company.CompanyIDSuper(ctx, operations.CompanyIDSuperRequest{
        Country: "in",
        ID: "corporis",
        Lang: operations.CompanyIDSuperLangEnumOg.ToPointer(),
    }, operations.CompanyIDSuperSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyIDSuper200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyMonitorChangeTypesList

Get current list of available ChangeTypes to subscribe to

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
    res, err := s.V1Company.CompanyMonitorChangeTypesList(ctx, operations.CompanyMonitorChangeTypesListSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyMonitorChangeTypesList200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## CompanyMonitorID

Query status of registered monitors for a specific company identified by a company id

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
    res, err := s.V1Company.CompanyMonitorID(ctx, operations.CompanyMonitorIDRequest{
        ID: "iure",
    }, operations.CompanyMonitorIDSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyMonitorID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyMonitorList

Query list of all registered monitors for logged in user

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
    res, err := s.V1Company.CompanyMonitorList(ctx, operations.CompanyMonitorListSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyMonitorList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyMonitorRegister

Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.

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
    res, err := s.V1Company.CompanyMonitorRegister(ctx, operations.CompanyMonitorRegisterRequest{
        RequestBody: &operations.CompanyMonitorRegisterRequestBody{
            CallbackURL: "saepe",
            ChangeType: "quidem",
        },
        ID: "architecto",
    }, operations.CompanyMonitorRegisterSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyMonitorRegister200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CompanyMonitorUnregister

Deactivate a previously registered company monitor identified by the notifier id

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
    res, err := s.V1Company.CompanyMonitorUnregister(ctx, operations.CompanyMonitorUnregisterRequest{
        ID: "ipsa",
    }, operations.CompanyMonitorUnregisterSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CompanyNotificationID

Query list of registered notifications for a specific company identified by a company id

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
    res, err := s.V1Company.CompanyNotificationID(ctx, operations.CompanyNotificationIDRequest{
        ID: "reiciendis",
    }, operations.CompanyNotificationIDSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyNotificationID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyNotificationList

Query list of registered callback URLs for logged in user

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
    res, err := s.V1Company.CompanyNotificationList(ctx, operations.CompanyNotificationListSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyNotificationList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanyNotificationRegister

Register a new callback URL to get notifications about companies.

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
    res, err := s.V1Company.CompanyNotificationRegister(ctx, operations.CompanyNotificationRegisterRequest{
        RequestBody: &operations.CompanyNotificationRegisterRequestBody{
            CallbackURL: "est",
        },
        ID: "mollitia",
    }, operations.CompanyNotificationRegisterSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyNotificationRegister200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CompanyNotificationUnregister

Deactivate a previously registered company monitor identified by the notifier id

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
    res, err := s.V1Company.CompanyNotificationUnregister(ctx, operations.CompanyNotificationUnregisterRequest{
        ID: "laborum",
    }, operations.CompanyNotificationUnregisterSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CompanySearchName

KYC API company index lookup for companies with a certain name in a country.

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
    res, err := s.V1Company.CompanySearchName(ctx, operations.CompanySearchNameRequest{
        Country: "dolores",
        Limit: sdk.Int64(210382),
        Name: "corporis",
    }, operations.CompanySearchNameSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanySearchName200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CompanySearchNumber

KYC API company index lookup for companies with a certain register number in a country.

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
    res, err := s.V1Company.CompanySearchNumber(ctx, operations.CompanySearchNumberRequest{
        Country: "explicabo",
        Limit: sdk.Int64(750686),
        Number: "enim",
    }, operations.CompanySearchNumberSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanySearchNumber200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
