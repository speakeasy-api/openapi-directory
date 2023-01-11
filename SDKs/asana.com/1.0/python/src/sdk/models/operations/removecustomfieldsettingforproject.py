import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import removecustomfieldsettingrequest as shared_removecustomfieldsettingrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveCustomFieldSettingForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveCustomFieldSettingForProjectQueryParams:
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveCustomFieldSettingForProjectRequestBody:
    data: Optional[shared_removecustomfieldsettingrequest.RemoveCustomFieldSettingRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveCustomFieldSettingForProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveCustomFieldSettingForProjectRequest:
    path_params: RemoveCustomFieldSettingForProjectPathParams = dataclasses.field()
    query_params: RemoveCustomFieldSettingForProjectQueryParams = dataclasses.field()
    request: RemoveCustomFieldSettingForProjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveCustomFieldSettingForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_custom_field_setting_for_project_200_application_json_object: Optional[RemoveCustomFieldSettingForProject200ApplicationJSON] = dataclasses.field(default=None)
    
