import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetpropertyvalue as shared_assetpropertyvalue


@dataclass_json
@dataclasses.dataclass
class PutAssetPropertyValueEntry:
    r"""PutAssetPropertyValueEntry
    Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html\">BatchPutAssetPropertyValue</a> API operation.
    """
    
    entry_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryId') }})
    property_values: list[shared_assetpropertyvalue.AssetPropertyValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyValues') }})
    asset_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    property_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyAlias') }})
    property_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    
