import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VpcConfig:
    r"""VpcConfig
     Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. 
    """
    
    security_group_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnets: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    
