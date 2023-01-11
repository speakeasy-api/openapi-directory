import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchRestrictions:
    r"""BatchRestrictions
    Specifies restrictions for the batch build.
    """
    
    compute_types_allowed: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeTypesAllowed') }})
    maximum_builds_allowed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumBuildsAllowed') }})
    
