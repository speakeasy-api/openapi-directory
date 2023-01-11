import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class StorageGetFileViewPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StorageGetFileViewSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class StorageGetFileViewRequest:
    path_params: StorageGetFileViewPathParams = dataclasses.field()
    security: StorageGetFileViewSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StorageGetFileViewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
