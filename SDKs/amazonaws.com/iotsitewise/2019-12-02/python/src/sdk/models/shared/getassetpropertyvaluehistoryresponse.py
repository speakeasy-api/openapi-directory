import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetpropertyvalue as shared_assetpropertyvalue


@dataclass_json
@dataclasses.dataclass
class GetAssetPropertyValueHistoryResponse:
    asset_property_value_history: list[shared_assetpropertyvalue.AssetPropertyValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetPropertyValueHistory') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
