import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AppFlowConfig:
    r"""AppFlowConfig
    Details about an Amazon AppFlow flow datasource.
    """
    
    flow_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
