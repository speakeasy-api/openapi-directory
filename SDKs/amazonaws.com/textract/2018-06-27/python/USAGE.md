<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AnalyzeDocumentRequest(
    analyze_document_request=shared.AnalyzeDocumentRequest(
        document=shared.Document(
            bytes="corrupti",
            s3_object=shared.S3Object(
                bucket="provident",
                name="distinctio",
                version="quibusdam",
            ),
        ),
        feature_types=[
            "SIGNATURES",
            "QUERIES",
            "SIGNATURES",
        ],
        human_loop_config=shared.HumanLoopConfig(
            data_attributes=shared.HumanLoopDataAttributes(
                content_classifiers=[
                    "FreeOfAdultContent",
                    "FreeOfAdultContent",
                ],
            ),
            flow_definition_arn="suscipit",
            human_loop_name="iure",
        ),
        queries_config=shared.QueriesConfig(
            queries=[
                shared.Query(
                    alias="debitis",
                    pages=[
                        "delectus",
                    ],
                    text="tempora",
                ),
                shared.Query(
                    alias="suscipit",
                    pages=[
                        "minus",
                        "placeat",
                    ],
                    text="voluptatum",
                ),
            ],
        ),
    ),
    x_amz_algorithm="iusto",
    x_amz_content_sha256="excepturi",
    x_amz_credential="nisi",
    x_amz_date="recusandae",
    x_amz_security_token="temporibus",
    x_amz_signature="ab",
    x_amz_signed_headers="quis",
    x_amz_target="Textract.AnalyzeDocument",
)
    
res = s.analyze_document(req)

if res.analyze_document_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->