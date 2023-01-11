import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum(str, Enum):
    MYSQL_NATIVE_PASSWORD = "mysql_native_password"
    CACHING_SHA2_PASSWORD = "caching_sha2_password"


@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings:
    auth_plugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_plugin') }})
    
