import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionparameter as shared_actionparameter
from ..shared import actiontarget as shared_actiontarget


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    Describes an action. For more information, see <a href=\"https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html\">AWS FIS actions</a> in the <i>AWS Fault Injection Simulator User Guide</i>.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    parameters: Optional[dict[str, shared_actionparameter.ActionParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    targets: Optional[dict[str, shared_actiontarget.ActionTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    
