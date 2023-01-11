import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetpropertyvalue as shared_assetpropertyvalue


@dataclass_json
@dataclasses.dataclass
class GetAssetPropertyValueResponse:
    property_value: Optional[shared_assetpropertyvalue.AssetPropertyValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyValue') }})
    
