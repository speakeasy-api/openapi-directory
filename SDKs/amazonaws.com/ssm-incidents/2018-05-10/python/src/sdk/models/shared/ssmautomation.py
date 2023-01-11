import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ssmtargetaccount_enum as shared_ssmtargetaccount_enum


@dataclass_json
@dataclasses.dataclass
class SsmAutomation:
    r"""SsmAutomation
    Details about the Systems Manager automation document that will be used as a runbook during an incident.
    """
    
    document_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    document_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentVersion') }})
    parameters: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    target_account: Optional[shared_ssmtargetaccount_enum.SsmTargetAccountEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAccount') }})
    
