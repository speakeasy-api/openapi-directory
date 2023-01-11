import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extendedlicenses_enum as shared_extendedlicenses_enum


@dataclass_json
@dataclasses.dataclass
class AcquireAssetLicensesRequest:
    license_types: list[shared_extendedlicenses_enum.ExtendedLicensesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseTypes') }})
    use_team_credits: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseTeamCredits') }})
    
