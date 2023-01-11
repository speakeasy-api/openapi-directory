import dataclasses
from typing import Optional
from ..shared import getfilesharedetails as shared_getfilesharedetails


@dataclasses.dataclass
class GetVolumesFsNameJSONPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVolumesFsNameJSONHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVolumesFsNameJSONRequest:
    headers: GetVolumesFsNameJSONHeaders = dataclasses.field()
    path_params: GetVolumesFsNameJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVolumesFsNameJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_fileshare_details: Optional[list[shared_getfilesharedetails.GetFileshareDetails]] = dataclasses.field(default=None)
    
