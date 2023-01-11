import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontype_enum as shared_actiontype_enum


@dataclass_json
@dataclasses.dataclass
class CreatePermissionRequest:
    actions: list[shared_actiontype_enum.ActionTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    certificate_authority_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    principal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    source_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccount') }})
    
