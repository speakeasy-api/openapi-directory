import dataclasses
from typing import Optional
from ..shared import fileshare as shared_fileshare


@dataclasses.dataclass
class GetVolumesFsJSONHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVolumesFsJSONRequest:
    headers: GetVolumesFsJSONHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetVolumesFsJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fileshares: Optional[list[shared_fileshare.Fileshare]] = dataclasses.field(default=None)
    
