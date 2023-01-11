import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pillardifference as shared_pillardifference


@dataclass_json
@dataclasses.dataclass
class VersionDifferences:
    r"""VersionDifferences
    The differences between the base and latest versions of the lens.
    """
    
    pillar_differences: Optional[list[shared_pillardifference.PillarDifference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarDifferences') }})
    
