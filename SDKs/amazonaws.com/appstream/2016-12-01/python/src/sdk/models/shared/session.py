import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationtype_enum as shared_authenticationtype_enum
from ..shared import sessionconnectionstate_enum as shared_sessionconnectionstate_enum
from ..shared import networkaccessconfiguration as shared_networkaccessconfiguration
from ..shared import sessionstate_enum as shared_sessionstate_enum


@dataclass_json
@dataclasses.dataclass
class Session:
    r"""Session
    Describes a streaming session.
    """
    
    fleet_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetName') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    stack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackName') }})
    state: shared_sessionstate_enum.SessionStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    authentication_type: Optional[shared_authenticationtype_enum.AuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationType') }})
    connection_state: Optional[shared_sessionconnectionstate_enum.SessionConnectionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionState') }})
    max_expiration_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxExpirationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    network_access_configuration: Optional[shared_networkaccessconfiguration.NetworkAccessConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkAccessConfiguration') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
