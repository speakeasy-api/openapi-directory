import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionaliaspermission as shared_connectionaliaspermission


@dataclass_json
@dataclasses.dataclass
class UpdateConnectionAliasPermissionRequest:
    alias_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    connection_alias_permission: shared_connectionaliaspermission.ConnectionAliasPermission = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionAliasPermission') }})
    
