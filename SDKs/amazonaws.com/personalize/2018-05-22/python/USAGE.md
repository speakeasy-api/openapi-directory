<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateBatchInferenceJobRequest(
    create_batch_inference_job_request=shared.CreateBatchInferenceJobRequest(
        batch_inference_job_config=shared.BatchInferenceJobConfig(
            item_exploration_config={
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
        ),
        filter_arn="illum",
        job_input=shared.BatchInferenceJobInput(
            s3_data_source=shared.S3DataConfig(
                kms_key_arn="vel",
                path="error",
            ),
        ),
        job_name="deserunt",
        job_output=shared.BatchInferenceJobOutput(
            s3_data_destination=shared.S3DataConfig(
                kms_key_arn="suscipit",
                path="iure",
            ),
        ),
        num_results=297534,
        role_arn="debitis",
        solution_version_arn="ipsa",
        tags=[
            shared.Tag(
                tag_key="tempora",
                tag_value="suscipit",
            ),
            shared.Tag(
                tag_key="molestiae",
                tag_value="minus",
            ),
            shared.Tag(
                tag_key="placeat",
                tag_value="voluptatum",
            ),
            shared.Tag(
                tag_key="iusto",
                tag_value="excepturi",
            ),
        ],
    ),
    x_amz_algorithm="nisi",
    x_amz_content_sha256="recusandae",
    x_amz_credential="temporibus",
    x_amz_date="ab",
    x_amz_security_token="quis",
    x_amz_signature="veritatis",
    x_amz_signed_headers="deserunt",
    x_amz_target="AmazonPersonalize.CreateBatchInferenceJob",
)
    
res = s.create_batch_inference_job(req)

if res.create_batch_inference_job_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->