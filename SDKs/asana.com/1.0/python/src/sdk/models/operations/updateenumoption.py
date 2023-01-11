import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import enumoptionrequest as shared_enumoptionrequest
from ..shared import enumoption as shared_enumoption
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class UpdateEnumOptionPathParams:
    enum_option_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enum_option_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEnumOptionQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateEnumOptionRequestBodyInput:
    data: Optional[shared_enumoptionrequest.EnumOptionRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateEnumOption200ApplicationJSON:
    data: Optional[shared_enumoption.EnumOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class UpdateEnumOptionRequest:
    path_params: UpdateEnumOptionPathParams = dataclasses.field()
    query_params: UpdateEnumOptionQueryParams = dataclasses.field()
    request: Optional[UpdateEnumOptionRequestBodyInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateEnumOptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    update_enum_option_200_application_json_object: Optional[UpdateEnumOption200ApplicationJSON] = dataclasses.field(default=None)
    
