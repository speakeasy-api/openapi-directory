import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import toolchainsource as shared_toolchainsource


@dataclass_json
@dataclasses.dataclass
class Toolchain:
    r"""Toolchain
    The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.
    """
    
    source: shared_toolchainsource.ToolchainSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    stack_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackParameters') }})
    
