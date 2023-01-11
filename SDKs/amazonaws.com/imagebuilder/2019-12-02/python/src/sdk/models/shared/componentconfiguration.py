import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import componentparameter as shared_componentparameter


@dataclass_json
@dataclasses.dataclass
class ComponentConfiguration:
    r"""ComponentConfiguration
     Configuration details of the component.
    """
    
    component_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentArn') }})
    parameters: Optional[list[shared_componentparameter.ComponentParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
