import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetpropertytimestamp as shared_assetpropertytimestamp
from ..shared import assetpropertyvariant as shared_assetpropertyvariant


@dataclass_json
@dataclasses.dataclass
class AssetPropertyValue:
    r"""AssetPropertyValue
    An asset property value entry containing the following information.
    """
    
    timestamp: shared_assetpropertytimestamp.AssetPropertyTimestamp = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: shared_assetpropertyvariant.AssetPropertyVariant = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    quality: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    
