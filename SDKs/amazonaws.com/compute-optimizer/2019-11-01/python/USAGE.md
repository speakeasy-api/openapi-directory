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
    
req = operations.DescribeRecommendationExportJobsRequest(
    headers=operations.DescribeRecommendationExportJobsHeaders(
        x_amz_algorithm="itaque",
        x_amz_content_sha256="corrupti",
        x_amz_credential="voluptatem",
        x_amz_date="quasi",
        x_amz_security_token="repellat",
        x_amz_signature="rem",
        x_amz_signed_headers="nisi",
        x_amz_target="ComputeOptimizerService.DescribeRecommendationExportJobs",
    ),
    request=shared.DescribeRecommendationExportJobsRequest(
        filters=[
            shared.JobFilter(
                name="JobStatus",
                values=[
                    "soluta",
                    "laudantium",
                ],
            ),
        ],
        job_ids=[
            "eaque",
            "ex",
            "cum",
        ],
        max_results=7436471626629558277,
        next_token="sunt",
    ),
)
    
res = s.describe_recommendation_export_jobs(req)

if res.describe_recommendation_export_jobs_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->