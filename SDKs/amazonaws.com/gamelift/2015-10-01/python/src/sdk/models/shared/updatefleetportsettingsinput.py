import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ippermission as shared_ippermission


@dataclass_json
@dataclasses.dataclass
class UpdateFleetPortSettingsInput:
    r"""UpdateFleetPortSettingsInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    inbound_permission_authorizations: Optional[list[shared_ippermission.IPPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboundPermissionAuthorizations') }})
    inbound_permission_revocations: Optional[list[shared_ippermission.IPPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboundPermissionRevocations') }})
    
