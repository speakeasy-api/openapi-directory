import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssetCompositeModel:
    r"""AssetCompositeModel
    Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
