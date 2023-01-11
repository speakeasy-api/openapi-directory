import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetpropertyvalue as shared_assetpropertyvalue


@dataclass_json
@dataclasses.dataclass
class PutAssetPropertyValueEntry:
    r"""PutAssetPropertyValueEntry
    An asset property value entry containing the following information.
    """
    
    property_values: list[shared_assetpropertyvalue.AssetPropertyValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyValues') }})
    asset_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    entry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryId') }})
    property_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyAlias') }})
    property_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    
