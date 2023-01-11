import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionTarget:
    r"""ActionTarget
    An <code>ActionTarget</code> object.
    """
    
    action_target_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionTargetArn') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
