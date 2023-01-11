import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import querytablerowsresult as shared_querytablerowsresult


@dataclasses.dataclass
class QueryTableRowsPathParams:
    table_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tableId', 'style': 'simple', 'explode': False }})
    workbook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workbookId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QueryTableRowsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QueryTableRowsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class QueryTableRowsRequestBodyFilterFormula:
    r"""QueryTableRowsRequestBodyFilterFormula
     An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
    """
    
    context_row_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextRowId') }})
    formula: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formula') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryTableRowsRequestBody:
    filter_formula: QueryTableRowsRequestBodyFilterFormula = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterFormula') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

@dataclasses.dataclass
class QueryTableRowsRequest:
    headers: QueryTableRowsHeaders = dataclasses.field()
    path_params: QueryTableRowsPathParams = dataclasses.field()
    query_params: QueryTableRowsQueryParams = dataclasses.field()
    request: QueryTableRowsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class QueryTableRowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    query_table_rows_result: Optional[shared_querytablerowsresult.QueryTableRowsResult] = dataclasses.field(default=None)
    request_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
