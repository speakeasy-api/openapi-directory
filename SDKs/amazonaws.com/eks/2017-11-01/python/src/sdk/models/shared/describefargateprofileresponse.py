import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fargateprofile as shared_fargateprofile


@dataclass_json
@dataclasses.dataclass
class DescribeFargateProfileResponse:
    fargate_profile: Optional[shared_fargateprofile.FargateProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fargateProfile') }})
    
