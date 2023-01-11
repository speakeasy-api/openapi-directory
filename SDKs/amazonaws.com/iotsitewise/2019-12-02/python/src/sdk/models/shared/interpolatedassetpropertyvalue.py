import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeinnanos as shared_timeinnanos
from ..shared import variant as shared_variant


@dataclass_json
@dataclasses.dataclass
class InterpolatedAssetPropertyValue:
    r"""InterpolatedAssetPropertyValue
    Contains information about an interpolated asset property value.
    """
    
    timestamp: shared_timeinnanos.TimeInNanos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: shared_variant.Variant = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
