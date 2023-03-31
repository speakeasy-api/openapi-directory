<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddLFTagsToResourceRequest(
    request_body=operations.AddLFTagsToResourceRequestBody(
        catalog_id="corrupti",
        lf_tags=[
            shared.LFTagPair(
                catalog_id="distinctio",
                tag_key="quibusdam",
                tag_values=[
                    "nulla",
                    "corrupti",
                    "illum",
                ],
            ),
            shared.LFTagPair(
                catalog_id="vel",
                tag_key="error",
                tag_values=[
                    "suscipit",
                    "iure",
                    "magnam",
                ],
            ),
            shared.LFTagPair(
                catalog_id="debitis",
                tag_key="ipsa",
                tag_values=[
                    "tempora",
                    "suscipit",
                    "molestiae",
                    "minus",
                ],
            ),
        ],
        resource=operations.AddLFTagsToResourceRequestBodyResource(
            catalog={
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            data_cells_filter=shared.DataCellsFilterResource(
                database_name="veritatis",
                name="deserunt",
                table_catalog_id="perferendis",
                table_name="ipsam",
            ),
            data_location=shared.DataLocationResource(
                catalog_id="repellendus",
                resource_arn="sapiente",
            ),
            database=shared.DatabaseResource(
                catalog_id="quo",
                name="odit",
            ),
            lf_tag=shared.LFTagKeyResource(
                catalog_id="at",
                tag_key="at",
                tag_values=[
                    "molestiae",
                    "quod",
                    "quod",
                    "esse",
                ],
            ),
            lf_tag_policy=shared.LFTagPolicyResource(
                catalog_id="totam",
                expression=[
                    shared.LFTag(
                        tag_key="dolorum",
                        tag_values=[
                            "nam",
                        ],
                    ),
                    shared.LFTag(
                        tag_key="officia",
                        tag_values=[
                            "fugit",
                            "deleniti",
                            "hic",
                        ],
                    ),
                    shared.LFTag(
                        tag_key="optio",
                        tag_values=[
                            "beatae",
                            "commodi",
                            "molestiae",
                        ],
                    ),
                    shared.LFTag(
                        tag_key="modi",
                        tag_values=[
                            "impedit",
                        ],
                    ),
                ],
                resource_type="TABLE",
            ),
            table=shared.TableResource(
                catalog_id="esse",
                database_name="ipsum",
                name="excepturi",
                table_wildcard={
                    "perferendis": "ad",
                },
            ),
            table_with_columns=shared.TableWithColumnsResource(
                catalog_id="natus",
                column_names=[
                    "iste",
                ],
                column_wildcard=shared.ColumnWildcard(
                    excluded_column_names=[
                        "natus",
                    ],
                ),
                database_name="laboriosam",
                name="hic",
            ),
        ),
    ),
    x_amz_algorithm="saepe",
    x_amz_content_sha256="fuga",
    x_amz_credential="in",
    x_amz_date="corporis",
    x_amz_security_token="iste",
    x_amz_signature="iure",
    x_amz_signed_headers="saepe",
)
    
res = s.add_lf_tags_to_resource(req)

if res.add_lf_tags_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->