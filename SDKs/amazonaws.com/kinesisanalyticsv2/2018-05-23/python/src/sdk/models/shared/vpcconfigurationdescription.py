import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VpcConfigurationDescription:
    r"""VpcConfigurationDescription
    Describes the parameters of a VPC used by the application.
    """
    
    security_group_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_configuration_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationId') }})
    vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
