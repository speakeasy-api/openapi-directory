<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchCreateTableRowsRequest(
    request_body=operations.BatchCreateTableRowsRequestBody(
        client_request_token="corrupti",
        rows_to_create=[
            shared.CreateRowData(
                batch_item_id="distinctio",
                cells_to_create={
                    "unde": shared.CellInput(
                        fact="nulla",
                        facts=[
                            "illum",
                            "vel",
                            "error",
                        ],
                    ),
                    "deserunt": shared.CellInput(
                        fact="suscipit",
                        facts=[
                            "magnam",
                            "debitis",
                        ],
                    ),
                    "ipsa": shared.CellInput(
                        fact="delectus",
                        facts=[
                            "suscipit",
                            "molestiae",
                        ],
                    ),
                    "minus": shared.CellInput(
                        fact="placeat",
                        facts=[
                            "iusto",
                            "excepturi",
                            "nisi",
                        ],
                    ),
                },
            ),
            shared.CreateRowData(
                batch_item_id="recusandae",
                cells_to_create={
                    "ab": shared.CellInput(
                        fact="quis",
                        facts=[
                            "deserunt",
                        ],
                    ),
                    "perferendis": shared.CellInput(
                        fact="ipsam",
                        facts=[
                            "sapiente",
                            "quo",
                            "odit",
                            "at",
                        ],
                    ),
                    "at": shared.CellInput(
                        fact="maiores",
                        facts=[
                            "quod",
                            "quod",
                        ],
                    ),
                    "esse": shared.CellInput(
                        fact="totam",
                        facts=[
                            "dolorum",
                            "dicta",
                            "nam",
                            "officia",
                        ],
                    ),
                },
            ),
            shared.CreateRowData(
                batch_item_id="occaecati",
                cells_to_create={
                    "deleniti": shared.CellInput(
                        fact="hic",
                        facts=[
                            "totam",
                            "beatae",
                            "commodi",
                            "molestiae",
                        ],
                    ),
                },
            ),
        ],
    ),
    x_amz_algorithm="modi",
    x_amz_content_sha256="qui",
    x_amz_credential="impedit",
    x_amz_date="cum",
    x_amz_security_token="esse",
    x_amz_signature="ipsum",
    x_amz_signed_headers="excepturi",
    table_id="aspernatur",
    workbook_id="perferendis",
)
    
res = s.batch_create_table_rows(req)

if res.batch_create_table_rows_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->