import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsrdsdbsubnetgroupsubnet as shared_awsrdsdbsubnetgroupsubnet


@dataclass_json
@dataclasses.dataclass
class AwsRdsDbSubnetGroup:
    r"""AwsRdsDbSubnetGroup
    Information about the subnet group for the database instance.
    """
    
    db_subnet_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroupArn') }})
    db_subnet_group_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroupDescription') }})
    db_subnet_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroupName') }})
    subnet_group_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroupStatus') }})
    subnets: Optional[list[shared_awsrdsdbsubnetgroupsubnet.AwsRdsDbSubnetGroupSubnet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
