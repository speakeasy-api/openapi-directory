import dataclasses
from ..shared import fileshareparam as shared_fileshareparam


@dataclasses.dataclass
class PostVolumesFsCreateHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostVolumesFsCreateRequest:
    headers: PostVolumesFsCreateHeaders = dataclasses.field()
    request: shared_fileshareparam.FileshareParam = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostVolumesFsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
