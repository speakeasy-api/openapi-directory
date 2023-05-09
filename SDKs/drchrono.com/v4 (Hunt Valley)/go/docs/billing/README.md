# Billing

## Overview

Create and manage billing resources

### Available Operations

* [BillingProfilesList](#billingprofileslist) - Retrieve or search billing profiles
* [BillingProfilesRead](#billingprofilesread) - Retrieve an existing billing profiles
* [CommLogsCreate](#commlogscreate) - Create communication (phone call) logs
* [CommLogsList](#commlogslist) - Retrieve or search communicatioin (phone call) logs
* [CommLogsPartialUpdate](#commlogspartialupdate) - Update an existing communication (phone call) logs
* [CommLogsRead](#commlogsread) - Retrieve an existing communication (phone call) logs
* [CommLogsUpdate](#commlogsupdate) - Update an existing communication (phone call) logs
* [CustomInsurancePlanNamesList](#custominsuranceplannameslist) - Retrieve or search custom insurance plan names
* [CustomInsurancePlanNamesRead](#custominsuranceplannamesread) - Retrieve an existing custom insurance plan name
* [EligibilityChecksList](#eligibilitycheckslist) - Retrieve or search past eligibility checks for patient
* [EligibilityChecksRead](#eligibilitychecksread) - Retrieve an existing past eligibility check
* [LineItemsCreate](#lineitemscreate) - Create billing line item for appointments
* [LineItemsDelete](#lineitemsdelete)
* [LineItemsList](#lineitemslist) - Retrieve or search billing line items
* [LineItemsPartialUpdate](#lineitemspartialupdate)
* [LineItemsRead](#lineitemsread) - Retrieve an existing billing line item
* [LineItemsUpdate](#lineitemsupdate)
* [PatientPaymentLogList](#patientpaymentloglist) - Retrieve or search patient payment logs
* [PatientPaymentLogRead](#patientpaymentlogread) - Retrieve an existing patient payment log
* [PatientPaymentsCreate](#patientpaymentscreate) - Create patient payment
* [PatientPaymentsList](#patientpaymentslist) - Retrieve or search patient payments
* [PatientPaymentsRead](#patientpaymentsread) - Retrieve an existing patient payment
* [ProceduresList](#procedureslist)
* [ProceduresRead](#proceduresread)
* [TransactionsList](#transactionslist) - Retrieve or search insurance transactions associated with billing line items
* [TransactionsRead](#transactionsread) - Retrieve an existing insurance transaction

## BillingProfilesList

Retrieve or search billing profiles

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
    res, err := s.Billing.BillingProfilesList(ctx, operations.BillingProfilesListRequest{
        Cursor: sdk.String("dolorem"),
        Doctor: sdk.Int64(635059),
        PageSize: sdk.Int64(161309),
    }, operations.BillingProfilesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingProfilesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BillingProfilesRead

Retrieve an existing billing profiles

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
    res, err := s.Billing.BillingProfilesRead(ctx, operations.BillingProfilesReadRequest{
        Doctor: sdk.Int64(995300),
        ID: "a9467739-251a-4a52-83f5-ad019da1ffe7",
    }, operations.BillingProfilesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingProfile != nil {
        // handle response
    }
}
```

## CommLogsCreate

Create communication (phone call) logs

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
    res, err := s.Billing.CommLogsCreate(ctx, operations.CommLogsCreateRequest{
        Doctor: sdk.Int64(509624),
        Patient: sdk.Int64(976762),
        Since: sdk.String("ipsa"),
    }, operations.CommLogsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhoneCallLog != nil {
        // handle response
    }
}
```

## CommLogsList

Retrieve or search communicatioin (phone call) logs

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
    res, err := s.Billing.CommLogsList(ctx, operations.CommLogsListRequest{
        Cursor: sdk.String("omnis"),
        Doctor: sdk.Int64(451159),
        PageSize: sdk.Int64(739264),
        Patient: sdk.Int64(19987),
        Since: sdk.String("doloremque"),
    }, operations.CommLogsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommLogsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CommLogsPartialUpdate

Update an existing communication (phone call) logs

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
    res, err := s.Billing.CommLogsPartialUpdate(ctx, operations.CommLogsPartialUpdateRequest{
        Doctor: sdk.Int64(441711),
        ID: "4f15471b-5e6e-413b-99d4-88e1e91e450a",
        Patient: sdk.Int64(842342),
        Since: sdk.String("explicabo"),
    }, operations.CommLogsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CommLogsRead

Retrieve an existing communication (phone call) logs

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
    res, err := s.Billing.CommLogsRead(ctx, operations.CommLogsReadRequest{
        Doctor: sdk.Int64(647174),
        ID: "bd442698-02d5-402a-94bb-4f63c969e9a3",
        Patient: sdk.Int64(891555),
        Since: sdk.String("a"),
    }, operations.CommLogsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhoneCallLog != nil {
        // handle response
    }
}
```

## CommLogsUpdate

Update an existing communication (phone call) logs

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
    res, err := s.Billing.CommLogsUpdate(ctx, operations.CommLogsUpdateRequest{
        Doctor: sdk.Int64(680056),
        ID: "77dfb14c-d66a-4e39-9efb-9ba88f3a6699",
        Patient: sdk.Int64(474867),
        Since: sdk.String("perferendis"),
    }, operations.CommLogsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CustomInsurancePlanNamesList

Retrieve or search custom insurance plan names

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
    res, err := s.Billing.CustomInsurancePlanNamesList(ctx, operations.CustomInsurancePlanNamesListRequest{
        Cursor: sdk.String("nihil"),
        Doctor: sdk.Int64(301575),
        Name: sdk.String("Alfonso Green"),
        PageSize: sdk.Int64(618016),
        Since: sdk.String("nobis"),
        User: sdk.Int64(428769),
    }, operations.CustomInsurancePlanNamesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomInsurancePlanNamesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CustomInsurancePlanNamesRead

Retrieve an existing custom insurance plan name

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
    res, err := s.Billing.CustomInsurancePlanNamesRead(ctx, operations.CustomInsurancePlanNamesReadRequest{
        Doctor: sdk.Int64(878453),
        ID: "21419598-90af-4a56-be25-16fe4c8b711e",
        Name: sdk.String("Lola Koss"),
        Since: sdk.String("sed"),
        User: sdk.Int64(904648),
    }, operations.CustomInsurancePlanNamesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomInsurancePlanName != nil {
        // handle response
    }
}
```

## EligibilityChecksList

Retrieve or search past eligibility checks for patient

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
    res, err := s.Billing.EligibilityChecksList(ctx, operations.EligibilityChecksListRequest{
        Appointment: sdk.Int64(868126),
        AppointmentDate: sdk.String("accusantium"),
        AppointmentDateRange: sdk.String("consequuntur"),
        Cursor: sdk.String("praesentium"),
        Doctor: sdk.Int64(615560),
        PageSize: sdk.Int64(166847),
        Patient: sdk.Int64(123820),
        QueryDate: sdk.String("quo"),
        QueryDateRange: sdk.String("illum"),
    }, operations.EligibilityChecksListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EligibilityChecksList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EligibilityChecksRead

Retrieve an existing past eligibility check

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
    res, err := s.Billing.EligibilityChecksRead(ctx, operations.EligibilityChecksReadRequest{
        Appointment: sdk.Int64(864934),
        AppointmentDate: sdk.String("maxime"),
        AppointmentDateRange: sdk.String("ea"),
        Doctor: sdk.Int64(569101),
        ID: "2601fb57-6b0d-45f0-930c-5fbb25870532",
        Patient: sdk.Int64(18521),
        QueryDate: sdk.String("dolores"),
        QueryDateRange: sdk.String("minus"),
    }, operations.EligibilityChecksReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Coverage != nil {
        // handle response
    }
}
```

## LineItemsCreate

Create billing line item for appointments

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
    res, err := s.Billing.LineItemsCreate(ctx, operations.LineItemsCreateRequest{
        Appointment: sdk.Int64(463451),
        Doctor: sdk.Int64(223924),
        Office: sdk.Int64(874573),
        Patient: sdk.Int64(345352),
        PostedDate: sdk.String("hic"),
        ServiceDate: sdk.String("recusandae"),
        Since: sdk.String("omnis"),
    }, operations.LineItemsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingLineItem != nil {
        // handle response
    }
}
```

## LineItemsDelete

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
    res, err := s.Billing.LineItemsDelete(ctx, operations.LineItemsDeleteRequest{
        Appointment: sdk.Int64(704415),
        Doctor: sdk.Int64(596656),
        ID: "0c28909b-3fe4-49a8-99cb-f48633323f9b",
        Office: sdk.Int64(452109),
        Patient: sdk.Int64(490459),
        PostedDate: sdk.String("reiciendis"),
        ServiceDate: sdk.String("amet"),
        Since: sdk.String("dolorum"),
    }, operations.LineItemsDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LineItemsList

Retrieve or search billing line items

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
    res, err := s.Billing.LineItemsList(ctx, operations.LineItemsListRequest{
        Appointment: sdk.Int64(254356),
        Cursor: sdk.String("veritatis"),
        Doctor: sdk.Int64(58029),
        Office: sdk.Int64(56418),
        PageSize: sdk.Int64(434417),
        Patient: sdk.Int64(487838),
        PostedDate: sdk.String("quaerat"),
        ServiceDate: sdk.String("accusamus"),
        Since: sdk.String("quidem"),
    }, operations.LineItemsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LineItemsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LineItemsPartialUpdate

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
    res, err := s.Billing.LineItemsPartialUpdate(ctx, operations.LineItemsPartialUpdateRequest{
        Appointment: sdk.Int64(976405),
        Doctor: sdk.Int64(377752),
        ID: "9280d1ba-77a8-49eb-b737-ae4203ce5e6a",
        Office: sdk.Int64(588317),
        Patient: sdk.Int64(324683),
        PostedDate: sdk.String("repellendus"),
        ServiceDate: sdk.String("totam"),
        Since: sdk.String("similique"),
    }, operations.LineItemsPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LineItemsRead

Retrieve an existing billing line item

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
    res, err := s.Billing.LineItemsRead(ctx, operations.LineItemsReadRequest{
        Appointment: sdk.Int64(55),
        Doctor: sdk.Int64(872651),
        ID: "446ce2af-7a73-4cf3-be45-3f870b326b5a",
        Office: sdk.Int64(463575),
        Patient: sdk.Int64(214880),
        PostedDate: sdk.String("incidunt"),
        ServiceDate: sdk.String("qui"),
        Since: sdk.String("cupiditate"),
    }, operations.LineItemsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingLineItem != nil {
        // handle response
    }
}
```

## LineItemsUpdate

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
    res, err := s.Billing.LineItemsUpdate(ctx, operations.LineItemsUpdateRequest{
        Appointment: sdk.Int64(807581),
        Doctor: sdk.Int64(863856),
        ID: "b1a8422b-b679-4d23-a271-5bf0cbb1e31b",
        Office: sdk.Int64(552193),
        Patient: sdk.Int64(731694),
        PostedDate: sdk.String("cupiditate"),
        ServiceDate: sdk.String("aperiam"),
        Since: sdk.String("delectus"),
    }, operations.LineItemsUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatientPaymentLogList

Retrieve or search patient payment logs

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
    res, err := s.Billing.PatientPaymentLogList(ctx, operations.PatientPaymentLogListRequest{
        Cursor: sdk.String("dolorem"),
        Doctor: sdk.Int64(292147),
        Office: sdk.Int64(286915),
        PageSize: sdk.Int64(240829),
        Since: sdk.String("dolorum"),
    }, operations.PatientPaymentLogListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientPaymentLogList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientPaymentLogRead

Retrieve an existing patient payment log

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
    res, err := s.Billing.PatientPaymentLogRead(ctx, operations.PatientPaymentLogReadRequest{
        Doctor: sdk.Int64(100294),
        ID: "108e0adc-f4b9-4218-b9fc-e953f73ef7fb",
        Office: sdk.Int64(799203),
        Since: sdk.String("odio"),
    }, operations.PatientPaymentLogReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashPaymentLog != nil {
        // handle response
    }
}
```

## PatientPaymentsCreate

Create patient payment

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
    res, err := s.Billing.PatientPaymentsCreate(ctx, operations.PatientPaymentsCreateRequest{
        Doctor: sdk.Int64(630448),
        Patient: sdk.Int64(708548),
        Since: sdk.String("vero"),
    }, operations.PatientPaymentsCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashPayment != nil {
        // handle response
    }
}
```

## PatientPaymentsList

Retrieve or search patient payments

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
    res, err := s.Billing.PatientPaymentsList(ctx, operations.PatientPaymentsListRequest{
        Cursor: sdk.String("ducimus"),
        Doctor: sdk.Int64(293020),
        PageSize: sdk.Int64(844550),
        Patient: sdk.Int64(848944),
        Since: sdk.String("sequi"),
    }, operations.PatientPaymentsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatientPaymentsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatientPaymentsRead

Retrieve an existing patient payment

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
    res, err := s.Billing.PatientPaymentsRead(ctx, operations.PatientPaymentsReadRequest{
        Doctor: sdk.Int64(617877),
        ID: "c0f5d2cf-f7c7-40a4-9626-d436813f16d9",
        Patient: sdk.Int64(972920),
        Since: sdk.String("nostrum"),
    }, operations.PatientPaymentsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashPayment != nil {
        // handle response
    }
}
```

## ProceduresList

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
    res, err := s.Billing.ProceduresList(ctx, operations.ProceduresListRequest{
        Appointment: sdk.Int64(960835),
        Cursor: sdk.String("quisquam"),
        Doctor: sdk.Int64(906556),
        MuDate: sdk.String("ea"),
        MuDateRange: sdk.String("impedit"),
        PageSize: sdk.Int64(359271),
        Patient: sdk.Int64(333145),
        ServiceDate: sdk.String("aliquid"),
    }, operations.ProceduresListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProceduresList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProceduresRead

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
    res, err := s.Billing.ProceduresRead(ctx, operations.ProceduresReadRequest{
        Appointment: sdk.Int64(81101),
        Doctor: sdk.Int64(301831),
        ID: "6c3e250f-b008-4c42-a141-aac366c8dd6b",
        MuDate: sdk.String("quasi"),
        MuDateRange: sdk.String("tempora"),
        Patient: sdk.Int64(256139),
        ServiceDate: sdk.String("explicabo"),
    }, operations.ProceduresReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingLineItem != nil {
        // handle response
    }
}
```

## TransactionsList

Retrieve or search insurance transactions associated with billing line items

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
    res, err := s.Billing.TransactionsList(ctx, operations.TransactionsListRequest{
        Appointment: sdk.Int64(591935),
        Cursor: sdk.String("ipsa"),
        Doctor: sdk.Int64(476477),
        LineItem: sdk.Int64(301598),
        PageSize: sdk.Int64(487935),
        PostedDate: sdk.String("eius"),
        Since: sdk.String("esse"),
    }, operations.TransactionsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TransactionsRead

Retrieve an existing insurance transaction

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
    res, err := s.Billing.TransactionsRead(ctx, operations.TransactionsReadRequest{
        Appointment: sdk.Int64(456141),
        Doctor: sdk.Int64(524593),
        ID: "a7bd466d-28c1-40ab-bcdc-a4251904e523",
        LineItem: sdk.Int64(779192),
        PostedDate: sdk.String("esse"),
        Since: sdk.String("recusandae"),
    }, operations.TransactionsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LineItemTransaction != nil {
        // handle response
    }
}
```
