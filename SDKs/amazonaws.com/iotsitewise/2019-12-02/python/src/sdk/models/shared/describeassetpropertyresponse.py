import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import property as shared_property
from ..shared import compositemodelproperty as shared_compositemodelproperty


@dataclass_json
@dataclasses.dataclass
class DescribeAssetPropertyResponse:
    asset_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    asset_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    asset_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetName') }})
    asset_property: Optional[shared_property.Property] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetProperty') }})
    composite_model: Optional[shared_compositemodelproperty.CompositeModelProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeModel') }})
    
