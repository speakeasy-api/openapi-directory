import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thirdpartyjobdata as shared_thirdpartyjobdata


@dataclass_json
@dataclasses.dataclass
class ThirdPartyJobDetails:
    r"""ThirdPartyJobDetails
    The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.
    """
    
    data: Optional[shared_thirdpartyjobdata.ThirdPartyJobData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    nonce: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    
