import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updaterowdata as shared_updaterowdata
from ..shared import batchupdatetablerowsresult as shared_batchupdatetablerowsresult


@dataclasses.dataclass
class BatchUpdateTableRowsPathParams:
    table_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tableId', 'style': 'simple', 'explode': False }})
    workbook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workbookId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchUpdateTableRowsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BatchUpdateTableRowsRequestBody:
    rows_to_update: list[shared_updaterowdata.UpdateRowData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowsToUpdate') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    

@dataclasses.dataclass
class BatchUpdateTableRowsRequest:
    headers: BatchUpdateTableRowsHeaders = dataclasses.field()
    path_params: BatchUpdateTableRowsPathParams = dataclasses.field()
    request: BatchUpdateTableRowsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchUpdateTableRowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    batch_update_table_rows_result: Optional[shared_batchupdatetablerowsresult.BatchUpdateTableRowsResult] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    request_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
