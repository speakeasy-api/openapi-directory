# TimeOffRequests

### Available Operations

* [TimeOffRequestsAdd](#timeoffrequestsadd) - Create Time Off Request
* [TimeOffRequestsAll](#timeoffrequestsall) - List Time Off Requests
* [TimeOffRequestsDelete](#timeoffrequestsdelete) - Delete Time Off Request
* [TimeOffRequestsOne](#timeoffrequestsone) - Get Time Off Request
* [TimeOffRequestsUpdate](#timeoffrequestsupdate) - Update Time Off Request

## TimeOffRequestsAdd

Create Time Off Request

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
    res, err := s.TimeOffRequests.TimeOffRequestsAdd(ctx, operations.TimeOffRequestsAddRequest{
        TimeOffRequestInput: shared.TimeOffRequestInput{
            Amount: sdk.Float64(3.5),
            ApprovalDate: sdk.String("2022-03-21"),
            Description: sdk.String("Enjoying some sun."),
            EmployeeID: sdk.String("12345"),
            EndDate: sdk.String("2022-04-01"),
            Notes: &shared.TimeOffRequestNotes{
                Employee: sdk.String("Relaxing on the beach for a few hours."),
                Manager: sdk.String("Enjoy!"),
            },
            PolicyID: sdk.String("12345"),
            RequestDate: sdk.String("2022-03-21"),
            RequestType: shared.TimeOffRequestRequestTypeEnumVacation.ToPointer(),
            StartDate: sdk.String("2022-04-01"),
            Status: shared.TimeOffRequestStatusEnumApproved.ToPointer(),
            Units: shared.TimeOffRequestUnitsEnumHours.ToPointer(),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "a",
        XApideckConsumerID: "esse",
        XApideckServiceID: sdk.String("harum"),
    }, operations.TimeOffRequestsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTimeOffRequestResponse != nil {
        // handle response
    }
}
```

## TimeOffRequestsAll

List Time Off Requests

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
    res, err := s.TimeOffRequests.TimeOffRequestsAll(ctx, operations.TimeOffRequestsAllRequest{
        Cursor: sdk.String("iusto"),
        Fields: sdk.String("ipsum"),
        Filter: &shared.TimeOffRequestsFilter{
            EmployeeID: sdk.String("1234"),
            EndDate: sdk.String("2022-04-21"),
            StartDate: sdk.String("2022-04-08"),
            TimeOffRequestStatus: shared.TimeOffRequestsFilterTimeOffRequestStatusEnumDeleted.ToPointer(),
        },
        Limit: sdk.Int64(947371),
        Raw: sdk.Bool(false),
        XApideckAppID: "amet",
        XApideckConsumerID: "tempore",
        XApideckServiceID: sdk.String("accusamus"),
    }, operations.TimeOffRequestsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimeOffRequestsResponse != nil {
        // handle response
    }
}
```

## TimeOffRequestsDelete

Delete Time Off Request

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
    res, err := s.TimeOffRequests.TimeOffRequestsDelete(ctx, operations.TimeOffRequestsDeleteRequest{
        ID: "453f870b-326b-45a7-b429-cdb1a8422bb6",
        Raw: sdk.Bool(false),
        XApideckAppID: "quam",
        XApideckConsumerID: "molestias",
        XApideckServiceID: sdk.String("temporibus"),
    }, operations.TimeOffRequestsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTimeOffRequestResponse != nil {
        // handle response
    }
}
```

## TimeOffRequestsOne

Get Time Off Request

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
    res, err := s.TimeOffRequests.TimeOffRequestsOne(ctx, operations.TimeOffRequestsOneRequest{
        Fields: sdk.String("qui"),
        ID: "322715bf-0cbb-41e3-9b8b-90f3443a1108",
        Raw: sdk.Bool(false),
        XApideckAppID: "itaque",
        XApideckConsumerID: "consequatur",
        XApideckServiceID: sdk.String("est"),
    }, operations.TimeOffRequestsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimeOffRequestResponse != nil {
        // handle response
    }
}
```

## TimeOffRequestsUpdate

Update Time Off Request

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
    res, err := s.TimeOffRequests.TimeOffRequestsUpdate(ctx, operations.TimeOffRequestsUpdateRequest{
        TimeOffRequestInput: shared.TimeOffRequestInput{
            Amount: sdk.Float64(3.5),
            ApprovalDate: sdk.String("2022-03-21"),
            Description: sdk.String("Enjoying some sun."),
            EmployeeID: sdk.String("12345"),
            EndDate: sdk.String("2022-04-01"),
            Notes: &shared.TimeOffRequestNotes{
                Employee: sdk.String("Relaxing on the beach for a few hours."),
                Manager: sdk.String("Enjoy!"),
            },
            PolicyID: sdk.String("12345"),
            RequestDate: sdk.String("2022-03-21"),
            RequestType: shared.TimeOffRequestRequestTypeEnumVacation.ToPointer(),
            StartDate: sdk.String("2022-04-01"),
            Status: shared.TimeOffRequestStatusEnumApproved.ToPointer(),
            Units: shared.TimeOffRequestUnitsEnumHours.ToPointer(),
        },
        ID: "dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7",
        Raw: sdk.Bool(false),
        XApideckAppID: "dolore",
        XApideckConsumerID: "quibusdam",
        XApideckServiceID: sdk.String("illum"),
    }, operations.TimeOffRequestsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTimeOffRequestResponse != nil {
        // handle response
    }
}
```
