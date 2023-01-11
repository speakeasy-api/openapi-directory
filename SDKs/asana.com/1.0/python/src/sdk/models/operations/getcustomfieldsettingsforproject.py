import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customfieldsettingresponse as shared_customfieldsettingresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetCustomFieldSettingsForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomFieldSettingsForProjectQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomFieldSettingsForProject200ApplicationJSON:
    data: Optional[list[shared_customfieldsettingresponse.CustomFieldSettingResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetCustomFieldSettingsForProjectRequest:
    path_params: GetCustomFieldSettingsForProjectPathParams = dataclasses.field()
    query_params: GetCustomFieldSettingsForProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomFieldSettingsForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_custom_field_settings_for_project_200_application_json_object: Optional[GetCustomFieldSettingsForProject200ApplicationJSON] = dataclasses.field(default=None)
    
