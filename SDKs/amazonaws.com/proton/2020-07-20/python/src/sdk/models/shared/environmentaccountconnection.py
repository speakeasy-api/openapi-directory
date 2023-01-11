import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentaccountconnectionstatus_enum as shared_environmentaccountconnectionstatus_enum


@dataclass_json
@dataclasses.dataclass
class EnvironmentAccountConnection:
    r"""EnvironmentAccountConnection
    The environment account connection detail data.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    environment_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountId') }})
    environment_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentName') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_modified_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    management_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementAccountId') }})
    requested_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    status: shared_environmentaccountconnectionstatus_enum.EnvironmentAccountConnectionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
