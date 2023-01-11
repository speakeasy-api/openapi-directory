import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowedoperation_enum as shared_allowedoperation_enum


@dataclass_json
@dataclasses.dataclass
class CreateGrantRequest:
    allowed_operations: list[shared_allowedoperation_enum.AllowedOperationEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOperations') }})
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    grant_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantName') }})
    home_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    license_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    principals: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principals') }})
    
