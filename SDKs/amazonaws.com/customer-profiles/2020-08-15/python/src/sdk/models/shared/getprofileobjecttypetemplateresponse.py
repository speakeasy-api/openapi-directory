import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objecttypefield as shared_objecttypefield
from ..shared import objecttypekey as shared_objecttypekey


@dataclass_json
@dataclasses.dataclass
class GetProfileObjectTypeTemplateResponse:
    allow_profile_creation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowProfileCreation') }})
    fields: Optional[dict[str, shared_objecttypefield.ObjectTypeField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fields') }})
    keys: Optional[dict[str, list[shared_objecttypekey.ObjectTypeKey]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    source_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceName') }})
    source_object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObject') }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateId') }})
    
