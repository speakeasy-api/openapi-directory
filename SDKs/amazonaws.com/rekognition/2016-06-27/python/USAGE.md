<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CompareFacesRequest(
    headers=operations.CompareFacesHeaders(
        x_amz_algorithm="dolorum",
        x_amz_content_sha256="blanditiis",
        x_amz_credential="culpa",
        x_amz_date="est",
        x_amz_security_token="soluta",
        x_amz_signature="omnis",
        x_amz_signed_headers="sint",
        x_amz_target="RekognitionService.CompareFaces",
    ),
    request=shared.CompareFacesRequest(
        quality_filter="NONE",
        similarity_threshold=87.099998,
        source_image=shared.Image(
            bytes="labore",
            s3_object=shared.S3Object(
                bucket="maxime",
                name="eaque",
                version="sed",
            ),
        ),
        target_image=shared.Image(
            bytes="ut",
            s3_object=shared.S3Object(
                bucket="expedita",
                name="modi",
                version="aliquam",
            ),
        ),
    ),
)
    
res = s.compare_faces(req)

if res.compare_faces_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->