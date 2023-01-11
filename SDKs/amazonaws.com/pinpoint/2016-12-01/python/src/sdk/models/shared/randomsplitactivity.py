import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import randomsplitentry as shared_randomsplitentry


@dataclass_json
@dataclasses.dataclass
class RandomSplitActivity:
    r"""RandomSplitActivity
    Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.
    """
    
    branches: Optional[list[shared_randomsplitentry.RandomSplitEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Branches') }})
    
