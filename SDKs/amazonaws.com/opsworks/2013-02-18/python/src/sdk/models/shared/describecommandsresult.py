import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import command as shared_command


@dataclass_json
@dataclasses.dataclass
class DescribeCommandsResult:
    r"""DescribeCommandsResult
    Contains the response to a <code>DescribeCommands</code> request.
    """
    
    commands: Optional[list[shared_command.Command]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Commands') }})
    
