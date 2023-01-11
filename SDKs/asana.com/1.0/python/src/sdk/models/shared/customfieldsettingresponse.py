import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact
from ..shared import enumoption as shared_enumoption

class CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum(str, Enum):
    PREFIX = "prefix"
    SUFFIX = "suffix"


@dataclass_json
@dataclasses.dataclass
class CustomFieldSettingResponseCustomFieldEnumValue:
    r"""CustomFieldSettingResponseCustomFieldEnumValue
    *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
    """
    
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class CustomFieldSettingResponseCustomFieldFormatEnum(str, Enum):
    CURRENCY = "currency"
    IDENTIFIER = "identifier"
    PERCENTAGE = "percentage"
    CUSTOM = "custom"
    NONE = "none"

class CustomFieldSettingResponseCustomFieldResourceSubtypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"

class CustomFieldSettingResponseCustomFieldTypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"


@dataclass_json
@dataclasses.dataclass
class CustomFieldSettingResponseCustomField:
    r"""CustomFieldSettingResponseCustomField
    The custom field that is applied to the `parent`.
    """
    
    created_by: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    custom_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_label') }})
    custom_label_position: Optional[CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_label_position') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_value') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    enum_options: Optional[list[shared_enumoption.EnumOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_options') }})
    enum_value: Optional[CustomFieldSettingResponseCustomFieldEnumValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_value') }})
    format: Optional[CustomFieldSettingResponseCustomFieldFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    has_notifications_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_notifications_enabled') }})
    is_global_to_workspace: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_global_to_workspace') }})
    multi_enum_values: Optional[list[shared_enumoption.EnumOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multi_enum_values') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_value') }})
    precision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    resource_subtype: Optional[CustomFieldSettingResponseCustomFieldResourceSubtypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    text_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_value') }})
    type: Optional[CustomFieldSettingResponseCustomFieldTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomFieldSettingResponseParent:
    r"""CustomFieldSettingResponseParent
    The parent to which the custom field is applied. This can be a project or portfolio and indicates that the tasks or projects that the parent contains may be given custom field values for this custom field.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomFieldSettingResponseProject:
    r"""CustomFieldSettingResponseProject
    *Deprecated: new integrations should prefer the `parent` field.* The id of the project that this custom field settings refers to.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomFieldSettingResponse:
    r"""CustomFieldSettingResponse
    Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
    """
    
    custom_field: Optional[CustomFieldSettingResponseCustomField] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    is_important: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_important') }})
    parent: Optional[CustomFieldSettingResponseParent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    project: Optional[CustomFieldSettingResponseProject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
