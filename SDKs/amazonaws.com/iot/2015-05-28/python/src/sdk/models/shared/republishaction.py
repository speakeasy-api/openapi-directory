import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RepublishAction:
    r"""RepublishAction
    Describes an action to republish to another topic.
    """
    
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    qos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qos') }})
    
