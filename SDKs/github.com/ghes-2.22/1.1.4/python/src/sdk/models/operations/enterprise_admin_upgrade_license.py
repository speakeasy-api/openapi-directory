import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpgradeLicenseRequestBody:
    license: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpgradeLicenseRequest:
    request: Optional[EnterpriseAdminUpgradeLicenseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpgradeLicenseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
