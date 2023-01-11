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
    
req = operations.AssociateRepositoryRequest(
    headers=operations.AssociateRepositoryHeaders(
        x_amz_algorithm="voluptas",
        x_amz_content_sha256="nulla",
        x_amz_credential="numquam",
        x_amz_date="et",
        x_amz_security_token="officiis",
        x_amz_signature="sequi",
        x_amz_signed_headers="vel",
    ),
    request=operations.AssociateRepositoryRequestBody(
        client_request_token="et",
        kms_key_details=operations.AssociateRepositoryRequestBodyKmsKeyDetails(
            encryption_option="AWS_OWNED_CMK",
            kms_key_id="aliquid",
        ),
        repository=operations.AssociateRepositoryRequestBodyRepository(
            bitbucket=shared.ThirdPartySourceRepository(
                connection_arn="autem",
                name="asperiores",
                owner="tempora",
            ),
            code_commit=shared.CodeCommitRepository(
                name="voluptate",
            ),
            git_hub_enterprise_server=shared.ThirdPartySourceRepository(
                connection_arn="est",
                name="nostrum",
                owner="mollitia",
            ),
            s3_bucket=shared.S3Repository(
                bucket_name="aut",
                name="recusandae",
            ),
        ),
        tags={
            "quas": "repellendus",
        },
    ),
)
    
res = s.associate_repository(req)

if res.associate_repository_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->