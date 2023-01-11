import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criticality_enum as shared_criticality_enum


@dataclass_json
@dataclasses.dataclass
class TrackingConfig:
    r"""TrackingConfig
    Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.
    """
    
    autotrack: shared_criticality_enum.CriticalityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autotrack') }})
    
