import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class StorageDeleteFilePathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StorageDeleteFileSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class StorageDeleteFileRequest:
    path_params: StorageDeleteFilePathParams = dataclasses.field()
    security: StorageDeleteFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StorageDeleteFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
