# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/pi/2018-02-27/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DescribeDimensionKeysRequest(
    describe_dimension_keys_request=shared.DescribeDimensionKeysRequest(
        additional_metrics=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        end_time="2021-04-14T16:47:33.722Z",
        filter={
            "illum": "vel",
            "error": "deserunt",
            "suscipit": "iure",
        },
        group_by=shared.DimensionGroup(
            dimensions=[
                "debitis",
                "ipsa",
            ],
            group="delectus",
            limit=272656,
        ),
        identifier="suscipit",
        max_results=477665,
        metric="minus",
        next_token="placeat",
        partition_by=shared.DimensionGroup(
            dimensions=[
                "iusto",
                "excepturi",
                "nisi",
            ],
            group="recusandae",
            limit=836079,
        ),
        period_in_seconds=71036,
        service_type="RDS",
        start_time="2022-05-09T10:00:51.349Z",
    ),
    max_results="perferendis",
    next_token="ipsam",
    x_amz_algorithm="repellendus",
    x_amz_content_sha256="sapiente",
    x_amz_credential="quo",
    x_amz_date="odit",
    x_amz_security_token="at",
    x_amz_signature="at",
    x_amz_signed_headers="maiores",
    x_amz_target="PerformanceInsightsv20180227.DescribeDimensionKeys",
)
    
res = s.describe_dimension_keys(req)

if res.describe_dimension_keys_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `describe_dimension_keys` - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* `get_dimension_key_details` - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
* `get_resource_metadata` - Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
* `get_resource_metrics` - <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* `list_available_resource_dimensions` - Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
* `list_available_resource_metrics` - Retrieve metrics of the specified types that can be queried for a specified DB instance. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
