import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ippermission as shared_ippermission
from ..shared import locationupdatestatus_enum as shared_locationupdatestatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeFleetPortSettingsOutput:
    r"""DescribeFleetPortSettingsOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    inbound_permissions: Optional[list[shared_ippermission.IPPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboundPermissions') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    update_status: Optional[shared_locationupdatestatus_enum.LocationUpdateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateStatus') }})
    
