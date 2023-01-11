import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mitigationactionparams as shared_mitigationactionparams


@dataclass_json
@dataclasses.dataclass
class MitigationAction:
    r"""MitigationAction
    Describes which changes should be applied as part of a mitigation action.
    """
    
    action_params: Optional[shared_mitigationactionparams.MitigationActionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionParams') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
