import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grantstatus_enum as shared_grantstatus_enum
from ..shared import allowedoperation_enum as shared_allowedoperation_enum


@dataclass_json
@dataclasses.dataclass
class Grant:
    r"""Grant
    Describes a grant.
    """
    
    grant_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantArn') }})
    grant_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantName') }})
    grant_status: shared_grantstatus_enum.GrantStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantStatus') }})
    granted_operations: list[shared_allowedoperation_enum.AllowedOperationEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantedOperations') }})
    grantee_principal_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteePrincipalArn') }})
    home_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    license_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    parent_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentArn') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    
