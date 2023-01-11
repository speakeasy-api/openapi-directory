import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DatabaseCreateDocumentPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DatabaseCreateDocumentRequestBody:
    data: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    parent_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDocument') }})
    parent_property: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentProperty') }})
    parent_property_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPropertyType') }})
    read: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    write: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclasses.dataclass
class DatabaseCreateDocumentSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DatabaseCreateDocumentRequest:
    path_params: DatabaseCreateDocumentPathParams = dataclasses.field()
    security: DatabaseCreateDocumentSecurity = dataclasses.field()
    request: Optional[DatabaseCreateDocumentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DatabaseCreateDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
