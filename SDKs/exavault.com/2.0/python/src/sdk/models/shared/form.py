import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formattributes as shared_formattributes

class FormRelationshipsShareDataTypeEnum(str, Enum):
    SHARE = "share"


@dataclass_json
@dataclasses.dataclass
class FormRelationshipsShareData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[FormRelationshipsShareDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class FormRelationshipsShare:
    data: Optional[FormRelationshipsShareData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class FormRelationships:
    r"""FormRelationships
    Share relationship data of the form. 
    """
    
    share: Optional[FormRelationshipsShare] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    

@dataclass_json
@dataclasses.dataclass
class Form:
    r"""Form
    Regular form object.
    """
    
    attributes: Optional[shared_formattributes.FormAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[FormRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
