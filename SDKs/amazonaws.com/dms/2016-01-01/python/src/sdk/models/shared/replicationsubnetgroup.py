import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subnet as shared_subnet


@dataclass_json
@dataclasses.dataclass
class ReplicationSubnetGroup:
    r"""ReplicationSubnetGroup
    Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.
    """
    
    replication_subnet_group_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupDescription') }})
    replication_subnet_group_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupIdentifier') }})
    subnet_group_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroupStatus') }})
    subnets: Optional[list[shared_subnet.Subnet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
