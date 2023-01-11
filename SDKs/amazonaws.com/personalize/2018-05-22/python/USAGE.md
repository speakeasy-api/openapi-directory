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
    
req = operations.CreateBatchInferenceJobRequest(
    headers=operations.CreateBatchInferenceJobHeaders(
        x_amz_algorithm="aut",
        x_amz_content_sha256="laborum",
        x_amz_credential="praesentium",
        x_amz_date="aut",
        x_amz_security_token="ullam",
        x_amz_signature="aspernatur",
        x_amz_signed_headers="laudantium",
        x_amz_target="AmazonPersonalize.CreateBatchInferenceJob",
    ),
    request=shared.CreateBatchInferenceJobRequest(
        batch_inference_job_config=shared.BatchInferenceJobConfig(
            item_exploration_config={
                "doloribus": "rem",
                "sit": "aut",
            },
        ),
        filter_arn="non",
        job_input=shared.BatchInferenceJobInput(
            s3_data_source=shared.S3DataConfig(
                kms_key_arn="quod",
                path="ut",
            ),
        ),
        job_name="voluptas",
        job_output=shared.BatchInferenceJobOutput(
            s3_data_destination=shared.S3DataConfig(
                kms_key_arn="atque",
                path="et",
            ),
        ),
        num_results=7799152415069629267,
        role_arn="ipsum",
        solution_version_arn="dolor",
    ),
)
    
res = s.create_batch_inference_job(req)

if res.create_batch_inference_job_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->