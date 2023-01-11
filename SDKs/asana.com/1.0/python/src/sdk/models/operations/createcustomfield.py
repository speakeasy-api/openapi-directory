import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customfieldrequest as shared_customfieldrequest
from ..shared import customfieldresponse as shared_customfieldresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateCustomFieldQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCustomFieldRequestBodyInput:
    data: Optional[shared_customfieldrequest.CustomFieldRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCustomField201ApplicationJSON:
    data: Optional[shared_customfieldresponse.CustomFieldResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateCustomFieldRequest:
    query_params: CreateCustomFieldQueryParams = dataclasses.field()
    request: Optional[CreateCustomFieldRequestBodyInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCustomFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_custom_field_201_application_json_object: Optional[CreateCustomField201ApplicationJSON] = dataclasses.field(default=None)
    
