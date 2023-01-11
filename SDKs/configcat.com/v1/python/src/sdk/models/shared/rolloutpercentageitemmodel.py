import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RolloutPercentageItemModel:
    percentage: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
