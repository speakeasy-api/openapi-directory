<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DescribeStreamRequest(
    describe_stream_input=shared.DescribeStreamInput(
        exclusive_start_shard_id="corrupti",
        limit=592845,
        stream_arn="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    x_amz_target="DynamoDBStreams_20120810.DescribeStream",
)
    
res = s.describe_stream(req)

if res.describe_stream_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->