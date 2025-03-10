# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ebay.com/sell-analytics/1.2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.CustomerServiceMetric.GetCustomerServiceMetric(ctx, operations.GetCustomerServiceMetricRequest{
        CustomerServiceMetricType: "corrupti",
        EvaluationMarketplaceID: "provident",
        EvaluationType: "distinctio",
    }, operations.GetCustomerServiceMetricSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerServiceMetricResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [CustomerServiceMetric](docs/customerservicemetric/README.md)

* [GetCustomerServiceMetric](docs/customerservicemetric/README.md#getcustomerservicemetric) - Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.

### [SellerStandardsProfile](docs/sellerstandardsprofile/README.md)

* [FindSellerStandardsProfiles](docs/sellerstandardsprofile/README.md#findsellerstandardsprofiles) - This call retrieves all the standards profiles for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller's multiple profiles are distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation or at the time of the request.
* [GetSellerStandardsProfile](docs/sellerstandardsprofile/README.md#getsellerstandardsprofile) - This call retrieves a single standards profile for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller can have multiple profiles distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation (CURRENT) or at the time of the request (PROJECTED). Both cycle and a program values are required URI parameters for this method.

### [TrafficReport](docs/trafficreport/README.md)

* [GetTrafficReport](docs/trafficreport/README.md#gettrafficreport) - This method returns a report that details the user traffic received by a seller's listings. A traffic report gives sellers the ability to review how often their listings appeared on eBay, how many times their listings are viewed, and how many purchases were made. The report also returns the report's start and end dates, and the date the information was last updated. When using this call: Be sure to URL-encode the values you pass in query parameters, as described in URI parameters. See the request samples below for details. You can only specify a single metric in the sort parameter and the specified metric must be listed in the metric parameter of your request. Parameter names are case sensitive, but metric names are not. For example, the following are correct: sort=LISTING_IMPRESSION_TOTAL sort=lisitng_impression_total metric=lisitng_impression_total However, these are incorrect: SORT=LISTING_IMPRESSION_TOTAL SORT=lisitng_impression_total Metric=lisitng_impression_total For more information, see Traffic report details.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
