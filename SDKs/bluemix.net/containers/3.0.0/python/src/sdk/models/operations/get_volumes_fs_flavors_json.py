import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetVolumesFsFlavorsJSONHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVolumesFsFlavorsJSONRequest:
    headers: GetVolumesFsFlavorsJSONHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetVolumesFsFlavorsJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_volumes_fs_flavors_json_200_application_json_integers: Optional[list[int]] = dataclasses.field(default=None)
    
