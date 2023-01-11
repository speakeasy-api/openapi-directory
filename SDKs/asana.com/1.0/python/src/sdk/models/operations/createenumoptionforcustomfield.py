import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import enumoptionrequest as shared_enumoptionrequest
from ..shared import enumoption as shared_enumoption
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateEnumOptionForCustomFieldPathParams:
    custom_field_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'custom_field_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEnumOptionForCustomFieldQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnumOptionForCustomFieldRequestBodyInput:
    data: Optional[shared_enumoptionrequest.EnumOptionRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnumOptionForCustomField201ApplicationJSON:
    data: Optional[shared_enumoption.EnumOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateEnumOptionForCustomFieldRequest:
    path_params: CreateEnumOptionForCustomFieldPathParams = dataclasses.field()
    query_params: CreateEnumOptionForCustomFieldQueryParams = dataclasses.field()
    request: Optional[CreateEnumOptionForCustomFieldRequestBodyInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateEnumOptionForCustomFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_enum_option_for_custom_field_201_application_json_object: Optional[CreateEnumOptionForCustomField201ApplicationJSON] = dataclasses.field(default=None)
    
