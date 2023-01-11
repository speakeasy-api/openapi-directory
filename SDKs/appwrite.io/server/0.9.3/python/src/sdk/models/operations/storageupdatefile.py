import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import file as shared_file


@dataclasses.dataclass
class StorageUpdateFilePathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class StorageUpdateFileRequestBody:
    read: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    write: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclasses.dataclass
class StorageUpdateFileSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class StorageUpdateFileRequest:
    path_params: StorageUpdateFilePathParams = dataclasses.field()
    security: StorageUpdateFileSecurity = dataclasses.field()
    request: Optional[StorageUpdateFileRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StorageUpdateFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file: Optional[shared_file.File] = dataclasses.field(default=None)
    
