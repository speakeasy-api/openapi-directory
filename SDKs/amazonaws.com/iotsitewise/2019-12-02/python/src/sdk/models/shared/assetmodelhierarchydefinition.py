import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssetModelHierarchyDefinition:
    r"""AssetModelHierarchyDefinition
    Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.
    """
    
    child_asset_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childAssetModelId') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
