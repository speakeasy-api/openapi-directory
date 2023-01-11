import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import generatorrecipe as shared_generatorrecipe

class FieldPurposeEnum(str, Enum):
    UNKNOWN = ""
    USERNAME = "USERNAME"
    PASSWORD = "PASSWORD"
    NOTES = "NOTES"


@dataclass_json
@dataclasses.dataclass
class FieldSection:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class FieldTypeEnum(str, Enum):
    STRING = "STRING"
    EMAIL = "EMAIL"
    CONCEALED = "CONCEALED"
    URL = "URL"
    TOTP = "TOTP"
    DATE = "DATE"
    MONTH_YEAR = "MONTH_YEAR"
    MENU = "MENU"


@dataclass_json
@dataclasses.dataclass
class FieldInput:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: FieldTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    generate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generate') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    purpose: Optional[FieldPurposeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    recipe: Optional[shared_generatorrecipe.GeneratorRecipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    section: Optional[FieldSection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Field:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: FieldTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    entropy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entropy') }})
    generate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generate') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    purpose: Optional[FieldPurposeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    recipe: Optional[shared_generatorrecipe.GeneratorRecipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    section: Optional[FieldSection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
