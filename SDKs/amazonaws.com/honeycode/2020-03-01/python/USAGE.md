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
    
req = operations.BatchCreateTableRowsRequest(
    path_params=operations.BatchCreateTableRowsPathParams(
        table_id="praesentium",
        workbook_id="et",
    ),
    headers=operations.BatchCreateTableRowsHeaders(
        x_amz_algorithm="ratione",
        x_amz_content_sha256="est",
        x_amz_credential="in",
        x_amz_date="corporis",
        x_amz_security_token="dolores",
        x_amz_signature="perferendis",
        x_amz_signed_headers="laboriosam",
    ),
    request=operations.BatchCreateTableRowsRequestBody(
        client_request_token="numquam",
        rows_to_create=[
            shared.CreateRowData(
                batch_item_id="aperiam",
                cells_to_create={
                    "velit": shared.CellInput(
                        fact="possimus",
                    ),
                    "hic": shared.CellInput(
                        fact="quis",
                    ),
                    "sunt": shared.CellInput(
                        fact="quo",
                    ),
                },
            ),
            shared.CreateRowData(
                batch_item_id="eveniet",
                cells_to_create={
                    "reiciendis": shared.CellInput(
                        fact="non",
                    ),
                    "dolor": shared.CellInput(
                        fact="maiores",
                    ),
                    "itaque": shared.CellInput(
                        fact="pariatur",
                    ),
                },
            ),
        ],
    ),
)
    
res = s.batch_create_table_rows(req)

if res.batch_create_table_rows_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->