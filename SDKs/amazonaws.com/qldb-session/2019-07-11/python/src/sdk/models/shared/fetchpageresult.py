import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iousage as shared_iousage
from ..shared import page as shared_page
from ..shared import timinginformation as shared_timinginformation


@dataclass_json
@dataclasses.dataclass
class FetchPageResult:
    r"""FetchPageResult
    Contains the page that was fetched.
    """
    
    consumed_i_os: Optional[shared_iousage.IoUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedIOs') }})
    page: Optional[shared_page.Page] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Page') }})
    timing_information: Optional[shared_timinginformation.TimingInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    
