import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import enumoptioninsertrequest as shared_enumoptioninsertrequest
from ..shared import enumoption as shared_enumoption
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class InsertEnumOptionForCustomFieldPathParams:
    custom_field_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'custom_field_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InsertEnumOptionForCustomFieldQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class InsertEnumOptionForCustomFieldRequestBody:
    data: Optional[shared_enumoptioninsertrequest.EnumOptionInsertRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class InsertEnumOptionForCustomField200ApplicationJSON:
    data: Optional[shared_enumoption.EnumOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class InsertEnumOptionForCustomFieldRequest:
    path_params: InsertEnumOptionForCustomFieldPathParams = dataclasses.field()
    query_params: InsertEnumOptionForCustomFieldQueryParams = dataclasses.field()
    request: Optional[InsertEnumOptionForCustomFieldRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InsertEnumOptionForCustomFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    insert_enum_option_for_custom_field_200_application_json_object: Optional[InsertEnumOptionForCustomField200ApplicationJSON] = dataclasses.field(default=None)
    
