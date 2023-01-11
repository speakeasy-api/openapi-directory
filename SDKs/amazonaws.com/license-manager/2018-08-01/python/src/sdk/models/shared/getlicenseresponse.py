import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import license as shared_license


@dataclass_json
@dataclasses.dataclass
class GetLicenseResponse:
    license: Optional[shared_license.License] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('License') }})
    
