import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kmsgrantconstraints as shared_kmsgrantconstraints
from ..shared import kmsgrantoperation_enum as shared_kmsgrantoperation_enum


@dataclass_json
@dataclasses.dataclass
class KmsGrantConfiguration:
    r"""KmsGrantConfiguration
    A proposed grant configuration for a KMS key. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html\">CreateGrant</a>.
    """
    
    grantee_principal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('granteePrincipal') }})
    issuing_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuingAccount') }})
    operations: list[shared_kmsgrantoperation_enum.KmsGrantOperationEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    constraints: Optional[shared_kmsgrantconstraints.KmsGrantConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    retiring_principal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retiringPrincipal') }})
    
