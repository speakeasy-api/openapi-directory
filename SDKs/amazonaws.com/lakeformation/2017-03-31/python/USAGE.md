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
    
req = operations.AddLfTagsToResourceRequest(
    headers=operations.AddLfTagsToResourceHeaders(
        x_amz_algorithm="velit",
        x_amz_content_sha256="maiores",
        x_amz_credential="sunt",
        x_amz_date="et",
        x_amz_security_token="est",
        x_amz_signature="reprehenderit",
        x_amz_signed_headers="totam",
        x_amz_target="AWSLakeFormation.AddLFTagsToResource",
    ),
    request=shared.AddLfTagsToResourceRequest(
        catalog_id="voluptas",
        lf_tags=[
            shared.LfTagPair(
                catalog_id="consequatur",
                tag_key="veritatis",
                tag_values=[
                    "et",
                    "nisi",
                    "cupiditate",
                ],
            ),
        ],
        resource=shared.Resource(
            catalog={
                "quos": "et",
            },
            data_location=shared.DataLocationResource(
                catalog_id="perspiciatis",
                resource_arn="quo",
            ),
            database=shared.DatabaseResource(
                catalog_id="nulla",
                name="modi",
            ),
            lf_tag=shared.LfTagKeyResource(
                catalog_id="est",
                tag_key="impedit",
                tag_values=[
                    "qui",
                    "ut",
                ],
            ),
            lf_tag_policy=shared.LfTagPolicyResource(
                catalog_id="possimus",
                expression=[
                    shared.LfTag(
                        tag_key="iusto",
                        tag_values=[
                            "qui",
                        ],
                    ),
                ],
                resource_type="TABLE",
            ),
            table=shared.TableResource(
                catalog_id="totam",
                database_name="at",
                name="aliquam",
                table_wildcard={
                    "inventore": "esse",
                    "consectetur": "cumque",
                    "fugit": "qui",
                },
            ),
            table_with_columns=shared.TableWithColumnsResource(
                catalog_id="quia",
                column_names=[
                    "incidunt",
                ],
                column_wildcard=shared.ColumnWildcard(
                    excluded_column_names=[
                        "neque",
                    ],
                ),
                database_name="alias",
                name="tempore",
            ),
        ),
    ),
)
    
res = s.add_lf_tags_to_resource(req)

if res.add_lf_tags_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->