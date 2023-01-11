import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standardsprofile as shared_standardsprofile


@dataclass_json
@dataclasses.dataclass
class FindSellerStandardsProfilesResponse:
    r"""FindSellerStandardsProfilesResponse
    The response container for a list of seller profiles.
    """
    
    standards_profiles: Optional[list[shared_standardsprofile.StandardsProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardsProfiles') }})
    
