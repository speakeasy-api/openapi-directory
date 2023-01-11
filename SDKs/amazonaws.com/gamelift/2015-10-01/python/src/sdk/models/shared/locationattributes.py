import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationstate as shared_locationstate
from ..shared import fleetaction_enum as shared_fleetaction_enum
from ..shared import locationupdatestatus_enum as shared_locationupdatestatus_enum


@dataclass_json
@dataclasses.dataclass
class LocationAttributes:
    r"""LocationAttributes
    <p>Represents a location in a multi-location fleet.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetLocationAttributes</a> </p>
    """
    
    location_state: Optional[shared_locationstate.LocationState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationState') }})
    stopped_actions: Optional[list[shared_fleetaction_enum.FleetActionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppedActions') }})
    update_status: Optional[shared_locationupdatestatus_enum.LocationUpdateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateStatus') }})
    
