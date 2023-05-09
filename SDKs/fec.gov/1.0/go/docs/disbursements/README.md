# Disbursements

## Overview

Schedule B filings describe itemized disbursements. This data explains how committees and other filers spend their money. These figures are reported as part of forms F3, F3X and F3P.

### Available Operations

* [GetSchedulesScheduleB](#getschedulesscheduleb) - 
Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

* [GetSchedulesScheduleBByPurpose](#getschedulesschedulebbypurpose) - 
Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.

* [GetSchedulesScheduleBByRecipient](#getschedulesschedulebbyrecipient) - 
Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.

* [GetSchedulesScheduleBByRecipientID](#getschedulesschedulebbyrecipientid) - 
Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.

* [GetSchedulesScheduleBEfile](#getschedulesschedulebefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [GetSchedulesScheduleBSubID](#getschedulesschedulebsubid) - 
Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


## GetSchedulesScheduleB


Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Disbursements.GetSchedulesScheduleB(ctx, operations.GetSchedulesScheduleBRequest{
        APIKey: "a",
        CommitteeID: []string{
            "sint",
            "pariatur",
            "possimus",
        },
        DisbursementDescription: []string{
            "eveniet",
        },
        DisbursementPurposeCategory: []string{
            "facere",
            "veritatis",
            "consequuntur",
            "quasi",
        },
        ImageNumber: []string{
            "culpa",
            "aliquid",
            "tenetur",
        },
        LastDisbursementAmount: sdk.Float32(627.13),
        LastDisbursementDate: types.MustDateFromString("2021-09-23"),
        LastIndex: sdk.Int(447378),
        LineNumber: sdk.String("eius"),
        MaxAmount: sdk.String("libero"),
        MaxDate: types.MustDateFromString("2020-10-10"),
        MaxImageNumber: sdk.String("accusantium"),
        MinAmount: sdk.String("aliquam"),
        MinDate: types.MustDateFromString("2022-08-22"),
        MinImageNumber: sdk.String("ullam"),
        PerPage: sdk.Int(443879),
        RecipientCity: []string{
            "nisi",
            "aut",
        },
        RecipientCommitteeID: []string{
            "qui",
            "quibusdam",
            "ex",
        },
        RecipientName: []string{
            "itaque",
            "dolorum",
            "architecto",
        },
        RecipientState: []string{
            "tenetur",
            "quasi",
            "at",
        },
        Sort: sdk.String("et"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SpenderCommitteeDesignation: []GetSchedulesScheduleBSpenderCommitteeDesignationEnum{
            operations.GetSchedulesScheduleBSpenderCommitteeDesignationEnumUnknown,
            operations.GetSchedulesScheduleBSpenderCommitteeDesignationEnumJ,
        },
        SpenderCommitteeOrgType: []GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum{
            operations.GetSchedulesScheduleBSpenderCommitteeOrgTypeEnumC,
        },
        SpenderCommitteeType: []GetSchedulesScheduleBSpenderCommitteeTypeEnum{
            operations.GetSchedulesScheduleBSpenderCommitteeTypeEnumS,
        },
        TwoYearTransactionPeriod: []int{
            33074,
            522371,
            15606,
            513075,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSchedulesScheduleBByPurpose


Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Disbursements.GetSchedulesScheduleBByPurpose(ctx, operations.GetSchedulesScheduleBByPurposeRequest{
        APIKey: "eum",
        CommitteeID: []string{
            "ab",
            "corrupti",
            "non",
        },
        Cycle: []int{
            221161,
        },
        Page: sdk.Int(580152),
        PerPage: sdk.Int(253191),
        Purpose: []string{
            "explicabo",
            "voluptas",
            "aut",
            "dignissimos",
        },
        Sort: sdk.String("dicta"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSchedulesScheduleBByRecipient


Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Disbursements.GetSchedulesScheduleBByRecipient(ctx, operations.GetSchedulesScheduleBByRecipientRequest{
        APIKey: "maiores",
        CommitteeID: []string{
            "velit",
            "voluptatibus",
            "voluptas",
        },
        Cycle: []int{
            45659,
            409054,
            310067,
            162954,
        },
        Page: sdk.Int(831520),
        PerPage: sdk.Int(638762),
        RecipientName: []string{
            "dignissimos",
            "officia",
            "asperiores",
            "nemo",
        },
        Sort: sdk.String("quae"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSchedulesScheduleBByRecipientID


Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Disbursements.GetSchedulesScheduleBByRecipientID(ctx, operations.GetSchedulesScheduleBByRecipientIDRequest{
        APIKey: "quaerat",
        CommitteeID: []string{
            "quod",
            "labore",
            "ab",
            "adipisci",
        },
        Cycle: []int{
            662505,
            380729,
            246063,
        },
        Page: sdk.Int(633931),
        PerPage: sdk.Int(665859),
        RecipientID: []string{
            "totam",
            "fugiat",
            "vel",
            "ducimus",
        },
        Sort: sdk.String("quos"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSchedulesScheduleBEfile


Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Disbursements.GetSchedulesScheduleBEfile(ctx, operations.GetSchedulesScheduleBEfileRequest{
        APIKey: "vel",
        CommitteeID: []string{
            "possimus",
            "facilis",
        },
        DisbursementDescription: []string{
            "commodi",
            "in",
            "corporis",
        },
        ImageNumber: []string{
            "assumenda",
            "nemo",
            "recusandae",
            "aliquid",
        },
        MaxAmount: sdk.String("aperiam"),
        MaxDate: types.MustDateFromString("2022-07-15"),
        MinAmount: sdk.String("in"),
        MinDate: types.MustDateFromString("2022-01-23"),
        Page: sdk.Int(814967),
        PerPage: sdk.Int(257233),
        RecipientCity: []string{
            "suscipit",
            "reiciendis",
            "quidem",
            "saepe",
        },
        RecipientState: []string{
            "dolore",
            "sunt",
            "asperiores",
            "adipisci",
        },
        Sort: sdk.String("non"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSchedulesScheduleBSubID


Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Disbursements.GetSchedulesScheduleBSubID(ctx, operations.GetSchedulesScheduleBSubIDRequest{
        APIKey: "amet",
        CommitteeID: []string{
            "dignissimos",
        },
        DisbursementDescription: []string{
            "debitis",
            "consectetur",
            "corporis",
            "harum",
        },
        DisbursementPurposeCategory: []string{
            "ipsa",
            "voluptates",
        },
        ImageNumber: []string{
            "vitae",
            "accusamus",
            "similique",
        },
        LastDisbursementAmount: sdk.Float32(2724.37),
        LastDisbursementDate: types.MustDateFromString("2022-08-15"),
        LastIndex: sdk.Int(374244),
        LineNumber: sdk.String("voluptas"),
        MaxAmount: sdk.String("minima"),
        MaxDate: types.MustDateFromString("2021-08-22"),
        MaxImageNumber: sdk.String("adipisci"),
        MinAmount: sdk.String("minus"),
        MinDate: types.MustDateFromString("2022-07-01"),
        MinImageNumber: sdk.String("in"),
        PerPage: sdk.Int(296242),
        RecipientCity: []string{
            "officiis",
            "temporibus",
        },
        RecipientCommitteeID: []string{
            "adipisci",
            "cum",
        },
        RecipientName: []string{
            "quas",
            "hic",
            "nesciunt",
        },
        RecipientState: []string{
            "corrupti",
            "pariatur",
            "totam",
        },
        Sort: sdk.String("hic"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SpenderCommitteeDesignation: []GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum{
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumB,
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumUnknown,
        },
        SpenderCommitteeOrgType: []GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum{
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumC,
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumW,
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumUnknown,
        },
        SpenderCommitteeType: []GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum{
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumV,
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumO,
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumV,
            operations.GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumC,
        },
        SubID: "iste",
        TwoYearTransactionPeriod: []int{
            671907,
            152354,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
