# Receipts

## Overview

This collection of endpoints includes Schedule A records reported by a committee. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from individuals, use the /schedules/schedule_a/ endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 

 

 

 Schedule A is also available as a database dump file that is updated weekly on Sunday. The database dump files are here: https://www.fec.gov/files/bulk-downloads/index.html?prefix=bulk-downloads/data-dump/schedules/. The instructions are here: https://www.fec.gov/files//bulk-downloads/data-dump/schedules/README.txt. We cannot provide help with restoring the database dump files, but you can refer to this community led [group](https://groups.google.com/forum/#!forum/fec-data) for discussion.

### Available Operations

* [GetSchedulesScheduleA](#getschedulesschedulea) - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.


* [GetSchedulesScheduleAByEmployer](#getschedulesscheduleabyemployer) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [GetSchedulesScheduleAByOccupation](#getschedulesscheduleabyoccupation) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [GetSchedulesScheduleABySize](#getschedulesscheduleabysize) - 
This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.

* [GetSchedulesScheduleABySizeByCandidate](#getschedulesscheduleabysizebycandidate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [GetSchedulesScheduleAByState](#getschedulesscheduleabystate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [GetSchedulesScheduleAByStateByCandidate](#getschedulesscheduleabystatebycandidate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [GetSchedulesScheduleAByStateByCandidateTotals](#getschedulesscheduleabystatebycandidatetotals) - 
Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


* [GetSchedulesScheduleAByStateTotals](#getschedulesscheduleabystatetotals) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [GetSchedulesScheduleAByZip](#getschedulesscheduleabyzip) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [GetSchedulesScheduleAEfile](#getschedulesscheduleaefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [GetSchedulesScheduleASubID](#getschedulesscheduleasubid) - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



## GetSchedulesScheduleA


This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



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
    res, err := s.Receipts.GetSchedulesScheduleA(ctx, operations.GetSchedulesScheduleARequest{
        APIKey: "aspernatur",
        CommitteeID: []string{
            "expedita",
            "quas",
            "provident",
        },
        ContributorCity: []string{
            "rerum",
            "dignissimos",
            "corporis",
            "vero",
        },
        ContributorEmployer: []string{
            "repellendus",
            "iure",
            "dolorem",
        },
        ContributorID: []string{
            "impedit",
            "commodi",
        },
        ContributorName: []string{
            "voluptatem",
        },
        ContributorOccupation: []string{
            "quae",
            "amet",
        },
        ContributorState: []string{
            "praesentium",
            "quidem",
            "cum",
            "amet",
        },
        ContributorType: []GetSchedulesScheduleAContributorTypeEnum{
            operations.GetSchedulesScheduleAContributorTypeEnumIndividual,
        },
        ContributorZip: []string{
            "doloremque",
            "earum",
            "iusto",
        },
        ImageNumber: []string{
            "provident",
        },
        IsIndividual: sdk.Bool(false),
        LastContributionReceiptAmount: sdk.Float32(6771.41),
        LastContributionReceiptDate: types.MustDateFromString("2021-03-22"),
        LastIndex: sdk.Int(920272),
        LineNumber: sdk.String("consequatur"),
        MaxAmount: sdk.String("nemo"),
        MaxDate: types.MustDateFromString("2022-01-26"),
        MaxImageNumber: sdk.String("facilis"),
        MaxLoadDate: types.MustDateFromString("2022-11-29"),
        MinAmount: sdk.String("sint"),
        MinDate: types.MustDateFromString("2022-06-19"),
        MinImageNumber: sdk.String("totam"),
        MinLoadDate: types.MustDateFromString("2022-12-20"),
        PerPage: sdk.Int(244376),
        RecipientCommitteeDesignation: []GetSchedulesScheduleARecipientCommitteeDesignationEnum{
            operations.GetSchedulesScheduleARecipientCommitteeDesignationEnumUnknown,
        },
        RecipientCommitteeOrgType: []GetSchedulesScheduleARecipientCommitteeOrgTypeEnum{
            operations.GetSchedulesScheduleARecipientCommitteeOrgTypeEnumC,
            operations.GetSchedulesScheduleARecipientCommitteeOrgTypeEnumT,
            operations.GetSchedulesScheduleARecipientCommitteeOrgTypeEnumM,
            operations.GetSchedulesScheduleARecipientCommitteeOrgTypeEnumUnknown,
        },
        RecipientCommitteeType: []GetSchedulesScheduleARecipientCommitteeTypeEnum{
            operations.GetSchedulesScheduleARecipientCommitteeTypeEnumH,
            operations.GetSchedulesScheduleARecipientCommitteeTypeEnumW,
            operations.GetSchedulesScheduleARecipientCommitteeTypeEnumO,
            operations.GetSchedulesScheduleARecipientCommitteeTypeEnumUnknown,
        },
        Sort: sdk.String("perferendis"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        TwoYearTransactionPeriod: []int{
            411615,
            46791,
            489459,
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

## GetSchedulesScheduleAByEmployer


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


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
    res, err := s.Receipts.GetSchedulesScheduleAByEmployer(ctx, operations.GetSchedulesScheduleAByEmployerRequest{
        APIKey: "repellat",
        CommitteeID: []string{
            "porro",
        },
        Cycle: []int{
            231382,
            753240,
            490110,
        },
        Employer: []string{
            "soluta",
        },
        Page: sdk.Int(620500),
        PerPage: sdk.Int(839807),
        Sort: sdk.String("officia"),
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

## GetSchedulesScheduleAByOccupation


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


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
    res, err := s.Receipts.GetSchedulesScheduleAByOccupation(ctx, operations.GetSchedulesScheduleAByOccupationRequest{
        APIKey: "amet",
        CommitteeID: []string{
            "aspernatur",
            "quo",
            "itaque",
            "illum",
        },
        Cycle: []int{
            490420,
            876285,
            185348,
        },
        Occupation: []string{
            "repellat",
        },
        Page: sdk.Int(128696),
        PerPage: sdk.Int(129355),
        Sort: sdk.String("exercitationem"),
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

## GetSchedulesScheduleABySize


This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.


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
    res, err := s.Receipts.GetSchedulesScheduleABySize(ctx, operations.GetSchedulesScheduleABySizeRequest{
        APIKey: "nihil",
        CommitteeID: []string{
            "ab",
            "illo",
        },
        Cycle: []int{
            644479,
            964925,
            251212,
            719389,
        },
        Page: sdk.Int(450224),
        PerPage: sdk.Int(349993),
        Size: []GetSchedulesScheduleABySizeSizeEnum{
            operations.GetSchedulesScheduleABySizeSizeEnumTwoHundred,
            operations.GetSchedulesScheduleABySizeSizeEnumTwoThousand,
        },
        Sort: sdk.String("modi"),
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

## GetSchedulesScheduleABySizeByCandidate


This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


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
    res, err := s.Receipts.GetSchedulesScheduleABySizeByCandidate(ctx, operations.GetSchedulesScheduleABySizeByCandidateRequest{
        APIKey: "in",
        CandidateID: []string{
            "accusamus",
        },
        Cycle: []int{
            44016,
            141817,
            535802,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(316730),
        PerPage: sdk.Int(452730),
        Sort: sdk.String("similique"),
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

## GetSchedulesScheduleAByState


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


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
    res, err := s.Receipts.GetSchedulesScheduleAByState(ctx, operations.GetSchedulesScheduleAByStateRequest{
        APIKey: "minima",
        CommitteeID: []string{
            "magnam",
            "sit",
            "modi",
        },
        Cycle: []int{
            199529,
            652125,
        },
        HideNull: sdk.Bool(false),
        Page: sdk.Int(492632),
        PerPage: sdk.Int(853246),
        Sort: sdk.String("nostrum"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "veniam",
            "reiciendis",
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

## GetSchedulesScheduleAByStateByCandidate


This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


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
    res, err := s.Receipts.GetSchedulesScheduleAByStateByCandidate(ctx, operations.GetSchedulesScheduleAByStateByCandidateRequest{
        APIKey: "ab",
        CandidateID: []string{
            "aut",
            "aut",
        },
        Cycle: []int{
            483753,
            413758,
            256114,
            677045,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(823718),
        PerPage: sdk.Int(452399),
        Sort: sdk.String("consectetur"),
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

## GetSchedulesScheduleAByStateByCandidateTotals


Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



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
    res, err := s.Receipts.GetSchedulesScheduleAByStateByCandidateTotals(ctx, operations.GetSchedulesScheduleAByStateByCandidateTotalsRequest{
        APIKey: "nesciunt",
        CandidateID: []string{
            "itaque",
            "minus",
        },
        Cycle: []int{
            715143,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(481375),
        PerPage: sdk.Int(558051),
        Sort: sdk.String("et"),
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

## GetSchedulesScheduleAByStateTotals


This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


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
    res, err := s.Receipts.GetSchedulesScheduleAByStateTotals(ctx, operations.GetSchedulesScheduleAByStateTotalsRequest{
        APIKey: "facilis",
        CommitteeType: []string{
            "autem",
        },
        Cycle: []int{
            5310,
            526413,
            11355,
        },
        Page: sdk.Int(550055),
        PerPage: sdk.Int(511222),
        Sort: sdk.String("repellendus"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "quae",
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

## GetSchedulesScheduleAByZip


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


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
    res, err := s.Receipts.GetSchedulesScheduleAByZip(ctx, operations.GetSchedulesScheduleAByZipRequest{
        APIKey: "eaque",
        CommitteeID: []string{
            "delectus",
            "mollitia",
            "nulla",
            "officia",
        },
        Cycle: []int{
            30208,
        },
        Page: sdk.Int(664),
        PerPage: sdk.Int(910073),
        Sort: sdk.String("hic"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "incidunt",
        },
        Zip: []string{
            "qui",
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

## GetSchedulesScheduleAEfile


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
    res, err := s.Receipts.GetSchedulesScheduleAEfile(ctx, operations.GetSchedulesScheduleAEfileRequest{
        APIKey: "necessitatibus",
        CommitteeID: []string{
            "explicabo",
            "beatae",
            "aliquid",
        },
        ContributorCity: []string{
            "optio",
            "voluptatibus",
        },
        ContributorEmployer: []string{
            "officia",
            "libero",
            "totam",
        },
        ContributorName: []string{
            "aliquid",
        },
        ContributorOccupation: []string{
            "impedit",
            "ducimus",
        },
        ContributorState: []string{
            "velit",
        },
        ImageNumber: []string{
            "repellat",
            "nulla",
            "laborum",
            "natus",
        },
        LineNumber: sdk.String("accusamus"),
        MaxAmount: sdk.String("doloremque"),
        MaxDate: types.MustDateFromString("2022-04-20"),
        MaxImageNumber: sdk.String("recusandae"),
        MinAmount: sdk.String("voluptates"),
        MinDate: types.MustDateFromString("2022-06-23"),
        MinImageNumber: sdk.String("quia"),
        Page: sdk.Int(354225),
        PerPage: sdk.Int(786860),
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

## GetSchedulesScheduleASubID


This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



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
    res, err := s.Receipts.GetSchedulesScheduleASubID(ctx, operations.GetSchedulesScheduleASubIDRequest{
        APIKey: "voluptatibus",
        CommitteeID: []string{
            "quae",
            "officiis",
            "architecto",
            "architecto",
        },
        ContributorCity: []string{
            "optio",
            "rem",
        },
        ContributorEmployer: []string{
            "facilis",
        },
        ContributorID: []string{
            "a",
            "iste",
            "dicta",
            "quos",
        },
        ContributorName: []string{
            "dolore",
            "modi",
        },
        ContributorOccupation: []string{
            "maxime",
            "modi",
            "consequuntur",
            "assumenda",
        },
        ContributorState: []string{
            "doloribus",
            "impedit",
            "porro",
            "accusamus",
        },
        ContributorType: []GetSchedulesScheduleASubIDContributorTypeEnum{
            operations.GetSchedulesScheduleASubIDContributorTypeEnumCommittee,
            operations.GetSchedulesScheduleASubIDContributorTypeEnumIndividual,
            operations.GetSchedulesScheduleASubIDContributorTypeEnumCommittee,
        },
        ContributorZip: []string{
            "esse",
            "iure",
        },
        ImageNumber: []string{
            "nesciunt",
            "debitis",
        },
        IsIndividual: sdk.Bool(false),
        LastContributionReceiptAmount: sdk.Float32(4235.88),
        LastContributionReceiptDate: types.MustDateFromString("2022-08-23"),
        LastIndex: sdk.Int(375350),
        LineNumber: sdk.String("consequuntur"),
        MaxAmount: sdk.String("officia"),
        MaxDate: types.MustDateFromString("2022-04-14"),
        MaxImageNumber: sdk.String("eius"),
        MaxLoadDate: types.MustDateFromString("2022-06-24"),
        MinAmount: sdk.String("maiores"),
        MinDate: types.MustDateFromString("2022-09-02"),
        MinImageNumber: sdk.String("saepe"),
        MinLoadDate: types.MustDateFromString("2022-03-09"),
        PerPage: sdk.Int(307173),
        RecipientCommitteeDesignation: []GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum{
            operations.GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumD,
            operations.GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumB,
            operations.GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumU,
        },
        RecipientCommitteeOrgType: []GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum{
            operations.GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumC,
            operations.GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumUnknown,
            operations.GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumC,
            operations.GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumT,
        },
        RecipientCommitteeType: []GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum{
            operations.GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumZ,
        },
        Sort: sdk.String("nemo"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SubID: "doloribus",
        TwoYearTransactionPeriod: []int{
            603323,
            275425,
            128021,
            368491,
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
