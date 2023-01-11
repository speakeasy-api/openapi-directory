import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computetype_enum as shared_computetype_enum


@dataclass_json
@dataclasses.dataclass
class ResourceConfiguration:
    r"""ResourceConfiguration
    The configuration of the resource used to execute the <code>containerAction</code>.
    """
    
    compute_type: shared_computetype_enum.ComputeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeType') }})
    volume_size_in_gb: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeSizeInGB') }})
    
