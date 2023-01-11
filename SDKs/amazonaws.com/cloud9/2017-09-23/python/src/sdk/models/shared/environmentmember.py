import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permissions_enum as shared_permissions_enum


@dataclass_json
@dataclasses.dataclass
class EnvironmentMember:
    r"""EnvironmentMember
    Information about an environment member for an Cloud9 development environment.
    """
    
    environment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    permissions: shared_permissions_enum.PermissionsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    user_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    last_access: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAccess'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
