import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact
from ..shared import enumoption as shared_enumoption

class CustomFieldResponseCustomLabelPositionEnum(str, Enum):
    PREFIX = "prefix"
    SUFFIX = "suffix"


@dataclass_json
@dataclasses.dataclass
class CustomFieldResponseEnumValue:
    r"""CustomFieldResponseEnumValue
    *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
    """
    
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class CustomFieldResponseFormatEnum(str, Enum):
    CURRENCY = "currency"
    IDENTIFIER = "identifier"
    PERCENTAGE = "percentage"
    CUSTOM = "custom"
    NONE = "none"

class CustomFieldResponseResourceSubtypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"

class CustomFieldResponseTypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"


@dataclass_json
@dataclasses.dataclass
class CustomFieldResponse:
    r"""CustomFieldResponse
    Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
    
    Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
    """
    
    created_by: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    custom_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_label') }})
    custom_label_position: Optional[CustomFieldResponseCustomLabelPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_label_position') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_value') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    enum_options: Optional[list[shared_enumoption.EnumOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_options') }})
    enum_value: Optional[CustomFieldResponseEnumValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_value') }})
    format: Optional[CustomFieldResponseFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    has_notifications_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_notifications_enabled') }})
    is_global_to_workspace: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_global_to_workspace') }})
    multi_enum_values: Optional[list[shared_enumoption.EnumOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multi_enum_values') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_value') }})
    precision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    resource_subtype: Optional[CustomFieldResponseResourceSubtypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    text_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_value') }})
    type: Optional[CustomFieldResponseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
