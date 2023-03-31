# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/sagemaker-featurestore-runtime/2020-07-01/python
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


req = operations.BatchGetRecordRequest(
    request_body=operations.BatchGetRecordRequestBody(
        identifiers=[
            shared.BatchGetRecordIdentifier(
                feature_group_name="provident",
                feature_names=[
                    "quibusdam",
                    "unde",
                    "nulla",
                ],
                record_identifiers_value_as_string=[
                    "illum",
                    "vel",
                    "error",
                ],
            ),
            shared.BatchGetRecordIdentifier(
                feature_group_name="deserunt",
                feature_names=[
                    "iure",
                    "magnam",
                ],
                record_identifiers_value_as_string=[
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                ],
            ),
            shared.BatchGetRecordIdentifier(
                feature_group_name="molestiae",
                feature_names=[
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                ],
                record_identifiers_value_as_string=[
                    "recusandae",
                    "temporibus",
                ],
            ),
        ],
    ),
    x_amz_algorithm="ab",
    x_amz_content_sha256="quis",
    x_amz_credential="veritatis",
    x_amz_date="deserunt",
    x_amz_security_token="perferendis",
    x_amz_signature="ipsam",
    x_amz_signed_headers="repellendus",
)
    
res = s.batch_get_record(req)

if res.batch_get_record_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batch_get_record` - Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
* `delete_record` - Deletes a <code>Record</code> from a <code>FeatureGroup</code>. When the <code>DeleteRecord</code> API is called a new record will be added to the <code>OfflineStore</code> and the <code>Record</code> will be removed from the <code>OnlineStore</code>. This record will have a value of <code>True</code> in the <code>is_deleted</code> column.
* `get_record` - Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 
* `put_record` - Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
