<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateRepositoryRequest(
    request_body=operations.AssociateRepositoryRequestBody(
        client_request_token="corrupti",
        kms_key_details=operations.AssociateRepositoryRequestBodyKMSKeyDetails(
            encryption_option="CUSTOMER_MANAGED_CMK",
            kms_key_id="distinctio",
        ),
        repository=operations.AssociateRepositoryRequestBodyRepository(
            bitbucket=shared.ThirdPartySourceRepository(
                connection_arn="quibusdam",
                name="unde",
                owner="nulla",
            ),
            code_commit=shared.CodeCommitRepository(
                name="corrupti",
            ),
            git_hub_enterprise_server=shared.ThirdPartySourceRepository(
                connection_arn="illum",
                name="vel",
                owner="error",
            ),
            s3_bucket=shared.S3Repository(
                bucket_name="deserunt",
                name="suscipit",
            ),
        ),
        tags={
            "magnam": "debitis",
            "ipsa": "delectus",
        },
    ),
    x_amz_algorithm="tempora",
    x_amz_content_sha256="suscipit",
    x_amz_credential="molestiae",
    x_amz_date="minus",
    x_amz_security_token="placeat",
    x_amz_signature="voluptatum",
    x_amz_signed_headers="iusto",
)
    
res = s.associate_repository(req)

if res.associate_repository_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->