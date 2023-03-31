<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddDraftAppVersionResourceMappingsRequest(
    request_body=operations.AddDraftAppVersionResourceMappingsRequestBody(
        app_arn="corrupti",
        resource_mappings=[
            shared.ResourceMapping(
                app_registry_app_name="distinctio",
                eks_source_name="quibusdam",
                logical_stack_name="unde",
                mapping_type="EKS",
                physical_resource_id=shared.PhysicalResourceID(
                    aws_account_id="corrupti",
                    aws_region="illum",
                    identifier="vel",
                    type="Native",
                ),
                resource_group_name="deserunt",
                resource_name="suscipit",
                terraform_source_name="iure",
            ),
            shared.ResourceMapping(
                app_registry_app_name="magnam",
                eks_source_name="debitis",
                logical_stack_name="ipsa",
                mapping_type="EKS",
                physical_resource_id=shared.PhysicalResourceID(
                    aws_account_id="tempora",
                    aws_region="suscipit",
                    identifier="molestiae",
                    type="Native",
                ),
                resource_group_name="placeat",
                resource_name="voluptatum",
                terraform_source_name="iusto",
            ),
            shared.ResourceMapping(
                app_registry_app_name="excepturi",
                eks_source_name="nisi",
                logical_stack_name="recusandae",
                mapping_type="EKS",
                physical_resource_id=shared.PhysicalResourceID(
                    aws_account_id="ab",
                    aws_region="quis",
                    identifier="veritatis",
                    type="Native",
                ),
                resource_group_name="perferendis",
                resource_name="ipsam",
                terraform_source_name="repellendus",
            ),
        ],
    ),
    x_amz_algorithm="sapiente",
    x_amz_content_sha256="quo",
    x_amz_credential="odit",
    x_amz_date="at",
    x_amz_security_token="at",
    x_amz_signature="maiores",
    x_amz_signed_headers="molestiae",
)
    
res = s.add_draft_app_version_resource_mappings(req)

if res.add_draft_app_version_resource_mappings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->