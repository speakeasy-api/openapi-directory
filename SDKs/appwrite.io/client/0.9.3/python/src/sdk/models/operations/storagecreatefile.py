import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import file as shared_file


@dataclasses.dataclass
class StorageCreateFileRequestBody:
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    read: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'read', 'json': True }})
    write: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'write', 'json': True }})
    

@dataclasses.dataclass
class StorageCreateFileSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class StorageCreateFileRequest:
    security: StorageCreateFileSecurity = dataclasses.field()
    request: Optional[StorageCreateFileRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class StorageCreateFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file: Optional[shared_file.File] = dataclasses.field(default=None)
    
