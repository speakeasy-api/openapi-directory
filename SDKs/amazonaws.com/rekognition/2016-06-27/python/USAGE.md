<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CompareFacesRequest(
    compare_faces_request=shared.CompareFacesRequest(
        quality_filter="LOW",
        similarity_threshold=5928.45,
        source_image=shared.Image(
            bytes="distinctio",
            s3_object=shared.S3Object(
                bucket="quibusdam",
                name="unde",
                version="nulla",
            ),
        ),
        target_image=shared.Image(
            bytes="corrupti",
            s3_object=shared.S3Object(
                bucket="illum",
                name="vel",
                version="error",
            ),
        ),
    ),
    x_amz_algorithm="deserunt",
    x_amz_content_sha256="suscipit",
    x_amz_credential="iure",
    x_amz_date="magnam",
    x_amz_security_token="debitis",
    x_amz_signature="ipsa",
    x_amz_signed_headers="delectus",
    x_amz_target="RekognitionService.CompareFaces",
)
    
res = s.compare_faces(req)

if res.compare_faces_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->