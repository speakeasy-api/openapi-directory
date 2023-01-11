import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import principalpermissions as shared_principalpermissions
from ..shared import datalakeprincipal as shared_datalakeprincipal


@dataclass_json
@dataclasses.dataclass
class DataLakeSettings:
    r"""DataLakeSettings
    A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
    """
    
    create_database_default_permissions: Optional[list[shared_principalpermissions.PrincipalPermissions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDatabaseDefaultPermissions') }})
    create_table_default_permissions: Optional[list[shared_principalpermissions.PrincipalPermissions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTableDefaultPermissions') }})
    data_lake_admins: Optional[list[shared_datalakeprincipal.DataLakePrincipal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLakeAdmins') }})
    trusted_resource_owners: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustedResourceOwners') }})
    
