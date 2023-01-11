import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timinginformation as shared_timinginformation


@dataclass_json
@dataclasses.dataclass
class EndSessionResult:
    r"""EndSessionResult
    Contains the details of the ended session.
    """
    
    timing_information: Optional[shared_timinginformation.TimingInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    
