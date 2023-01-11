import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtriggerdefinition as shared_eventtriggerdefinition


@dataclass_json
@dataclasses.dataclass
class LambdaResource:
    r"""LambdaResource
    Identifies 
    """
    
    event_triggers: Optional[list[shared_eventtriggerdefinition.EventTriggerDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTriggers') }})
    lambda_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaArn') }})
    
