import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interpolatedassetpropertyvalue as shared_interpolatedassetpropertyvalue


@dataclass_json
@dataclasses.dataclass
class GetInterpolatedAssetPropertyValuesResponse:
    interpolated_asset_property_values: list[shared_interpolatedassetpropertyvalue.InterpolatedAssetPropertyValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpolatedAssetPropertyValues') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
