import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grantedlicense as shared_grantedlicense


@dataclass_json
@dataclasses.dataclass
class ListReceivedLicensesResponse:
    licenses: Optional[list[shared_grantedlicense.GrantedLicense]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Licenses') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
