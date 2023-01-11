import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customfieldresponse as shared_customfieldresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetCustomFieldPathParams:
    custom_field_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'custom_field_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomFieldQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomField200ApplicationJSON:
    data: Optional[shared_customfieldresponse.CustomFieldResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetCustomFieldRequest:
    path_params: GetCustomFieldPathParams = dataclasses.field()
    query_params: GetCustomFieldQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_custom_field_200_application_json_object: Optional[GetCustomField200ApplicationJSON] = dataclasses.field(default=None)
    
