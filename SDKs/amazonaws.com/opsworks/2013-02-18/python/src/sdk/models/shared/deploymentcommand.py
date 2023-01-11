import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentcommandname_enum as shared_deploymentcommandname_enum


@dataclass_json
@dataclasses.dataclass
class DeploymentCommand:
    r"""DeploymentCommand
    Used to specify a stack or deployment command.
    """
    
    name: shared_deploymentcommandname_enum.DeploymentCommandNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    args: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Args') }})
    
