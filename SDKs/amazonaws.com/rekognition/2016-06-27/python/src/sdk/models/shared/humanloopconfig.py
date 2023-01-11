import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import humanloopdataattributes as shared_humanloopdataattributes


@dataclass_json
@dataclasses.dataclass
class HumanLoopConfig:
    r"""HumanLoopConfig
    Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.
    """
    
    flow_definition_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionArn') }})
    human_loop_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopName') }})
    data_attributes: Optional[shared_humanloopdataattributes.HumanLoopDataAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAttributes') }})
    
