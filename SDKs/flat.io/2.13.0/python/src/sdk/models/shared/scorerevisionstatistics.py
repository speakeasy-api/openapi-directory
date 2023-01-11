import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScoreRevisionStatistics:
    r"""ScoreRevisionStatistics
    The statistics related to the score revision (additions and deletions)
    
    """
    
    additions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    deletions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletions') }})
    
