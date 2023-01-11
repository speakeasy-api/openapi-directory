import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchrequest as shared_batchrequest
from ..shared import batchresponse as shared_batchresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateBatchRequestQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBatchRequestRequestBody:
    data: Optional[shared_batchrequest.BatchRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBatchRequest200ApplicationJSON:
    data: Optional[list[shared_batchresponse.BatchResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateBatchRequestRequest:
    query_params: CreateBatchRequestQueryParams = dataclasses.field()
    request: CreateBatchRequestRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBatchRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_batch_request_200_application_json_object: Optional[CreateBatchRequest200ApplicationJSON] = dataclasses.field(default=None)
    
