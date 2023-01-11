import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettingsAuthPluginEnum(str, Enum):
    MYSQL_NATIVE_PASSWORD = "mysql_native_password"
    CACHING_SHA2_PASSWORD = "caching_sha2_password"


@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings:
    auth_plugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettingsAuthPluginEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_plugin') }})
    
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsRoleEnum(str, Enum):
    PRIMARY = "primary"
    NORMAL = "normal"


@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsInput:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    mysql_settings: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql_settings') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    mysql_settings: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql_settings') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    role: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
