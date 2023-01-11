import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findmatchesparameters as shared_findmatchesparameters
from ..shared import transformtype_enum as shared_transformtype_enum


@dataclass_json
@dataclasses.dataclass
class TransformParameters:
    r"""TransformParameters
    The algorithm-specific parameters that are associated with the machine learning transform.
    """
    
    transform_type: shared_transformtype_enum.TransformTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformType') }})
    find_matches_parameters: Optional[shared_findmatchesparameters.FindMatchesParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindMatchesParameters') }})
    
