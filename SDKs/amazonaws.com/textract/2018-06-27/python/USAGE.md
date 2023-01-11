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
    
req = operations.AnalyzeDocumentRequest(
    headers=operations.AnalyzeDocumentHeaders(
        x_amz_algorithm="repellendus",
        x_amz_content_sha256="corrupti",
        x_amz_credential="ex",
        x_amz_date="voluptatum",
        x_amz_security_token="voluptas",
        x_amz_signature="et",
        x_amz_signed_headers="doloribus",
        x_amz_target="Textract.AnalyzeDocument",
    ),
    request=shared.AnalyzeDocumentRequest(
        document=shared.Document(
            bytes="sunt",
            s3_object=shared.S3Object(
                bucket="et",
                name="ea",
                version="deserunt",
            ),
        ),
        feature_types=[
            "TABLES",
            "FORMS",
        ],
        human_loop_config=shared.HumanLoopConfig(
            data_attributes=shared.HumanLoopDataAttributes(
                content_classifiers=[
                    "FreeOfAdultContent",
                ],
            ),
            flow_definition_arn="magnam",
            human_loop_name="dicta",
        ),
    ),
)
    
res = s.analyze_document(req)

if res.analyze_document_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->