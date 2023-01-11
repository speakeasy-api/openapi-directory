import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionkeydetail as shared_dimensionkeydetail


@dataclass_json
@dataclasses.dataclass
class GetDimensionKeyDetailsResponse:
    dimensions: Optional[list[shared_dimensionkeydetail.DimensionKeyDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    
