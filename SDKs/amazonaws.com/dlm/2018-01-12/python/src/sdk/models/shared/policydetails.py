import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action
from ..shared import eventsource as shared_eventsource
from ..shared import parameters as shared_parameters
from ..shared import policytypevalues_enum as shared_policytypevalues_enum
from ..shared import resourcelocationvalues_enum as shared_resourcelocationvalues_enum
from ..shared import resourcetypevalues_enum as shared_resourcetypevalues_enum
from ..shared import schedule as shared_schedule
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class PolicyDetails:
    r"""PolicyDetails
    Specifies the configuration of a lifecycle policy.
    """
    
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    event_source: Optional[shared_eventsource.EventSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    parameters: Optional[shared_parameters.Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    policy_type: Optional[shared_policytypevalues_enum.PolicyTypeValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    resource_locations: Optional[list[shared_resourcelocationvalues_enum.ResourceLocationValuesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLocations') }})
    resource_types: Optional[list[shared_resourcetypevalues_enum.ResourceTypeValuesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypes') }})
    schedules: Optional[list[shared_schedule.Schedule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedules') }})
    target_tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTags') }})
    
