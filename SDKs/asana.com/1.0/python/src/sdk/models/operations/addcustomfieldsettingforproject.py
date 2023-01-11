import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addcustomfieldsettingrequest as shared_addcustomfieldsettingrequest
from ..shared import customfieldsettingresponse as shared_customfieldsettingresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class AddCustomFieldSettingForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddCustomFieldSettingForProjectQueryParams:
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AddCustomFieldSettingForProjectRequestBody:
    data: Optional[shared_addcustomfieldsettingrequest.AddCustomFieldSettingRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class AddCustomFieldSettingForProject200ApplicationJSON:
    data: Optional[shared_customfieldsettingresponse.CustomFieldSettingResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class AddCustomFieldSettingForProjectRequest:
    path_params: AddCustomFieldSettingForProjectPathParams = dataclasses.field()
    query_params: AddCustomFieldSettingForProjectQueryParams = dataclasses.field()
    request: AddCustomFieldSettingForProjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddCustomFieldSettingForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    add_custom_field_setting_for_project_200_application_json_object: Optional[AddCustomFieldSettingForProject200ApplicationJSON] = dataclasses.field(default=None)
    
