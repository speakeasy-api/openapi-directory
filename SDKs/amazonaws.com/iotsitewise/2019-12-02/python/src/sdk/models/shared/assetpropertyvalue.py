import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quality_enum as shared_quality_enum
from ..shared import timeinnanos as shared_timeinnanos
from ..shared import variant as shared_variant


@dataclass_json
@dataclasses.dataclass
class AssetPropertyValue:
    r"""AssetPropertyValue
    Contains asset property value information.
    """
    
    timestamp: shared_timeinnanos.TimeInNanos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: shared_variant.Variant = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    quality: Optional[shared_quality_enum.QualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    
