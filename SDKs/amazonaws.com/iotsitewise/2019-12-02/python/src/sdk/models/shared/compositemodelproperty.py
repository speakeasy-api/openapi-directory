import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import property as shared_property


@dataclass_json
@dataclasses.dataclass
class CompositeModelProperty:
    r"""CompositeModelProperty
    Contains information about a composite model property on an asset.
    """
    
    asset_property: shared_property.Property = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetProperty') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
