import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ListingSettingsNamingEnum(str, Enum):
    LISTING = "LISTING"
    LISTINGS = "LISTINGS"
    INTEGRATIONS = "INTEGRATIONS"
    APPS = "APPS"
    CONNECTORS = "CONNECTORS"
    DATASOURCES = "DATASOURCES"
    ADDONS = "ADDONS"
    PLUGINS = "PLUGINS"
    PARTNERS = "PARTNERS"
    CHANNELS = "CHANNELS"
    CONNECTIONS = "CONNECTIONS"
    EXTENSIONS = "EXTENSIONS"

class ListingSettingsSidebarPositionEnum(str, Enum):
    TOP = "TOP"
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    HIDDEN = "HIDDEN"


@dataclass_json
@dataclasses.dataclass
class ListingSettings:
    description_text_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_text_template') }})
    description_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_title') }})
    features_text_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features_text_template') }})
    features_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features_title') }})
    install_button_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('install_button_label') }})
    name_postfix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name_postfix') }})
    naming: Optional[ListingSettingsNamingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naming') }})
    native_integration_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('native_integration_link') }})
    pricing_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing_disabled') }})
    pricing_text_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing_text_template') }})
    pricing_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing_title') }})
    sidebar_position: Optional[ListingSettingsSidebarPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sidebar_position') }})
    
