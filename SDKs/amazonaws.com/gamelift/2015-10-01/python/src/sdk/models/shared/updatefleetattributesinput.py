import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectionpolicy_enum as shared_protectionpolicy_enum
from ..shared import resourcecreationlimitpolicy as shared_resourcecreationlimitpolicy


@dataclass_json
@dataclasses.dataclass
class UpdateFleetAttributesInput:
    r"""UpdateFleetAttributesInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    metric_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricGroups') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    new_game_session_protection_policy: Optional[shared_protectionpolicy_enum.ProtectionPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewGameSessionProtectionPolicy') }})
    resource_creation_limit_policy: Optional[shared_resourcecreationlimitpolicy.ResourceCreationLimitPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCreationLimitPolicy') }})
    
