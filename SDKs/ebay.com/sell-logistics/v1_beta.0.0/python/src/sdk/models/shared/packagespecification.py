import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensions as shared_dimensions
from ..shared import weight as shared_weight


@dataclass_json
@dataclasses.dataclass
class PackageSpecification:
    r"""PackageSpecification
    This complex type specifies the dimensions and weight of a package.
    """
    
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    weight: Optional[shared_weight.Weight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
