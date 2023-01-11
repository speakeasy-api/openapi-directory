import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import collection as shared_collection


@dataclass_json
@dataclasses.dataclass
class DatabaseCreateCollectionRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    rules: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    write: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclasses.dataclass
class DatabaseCreateCollectionSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DatabaseCreateCollectionRequest:
    security: DatabaseCreateCollectionSecurity = dataclasses.field()
    request: Optional[DatabaseCreateCollectionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DatabaseCreateCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection: Optional[shared_collection.Collection] = dataclasses.field(default=None)
    
