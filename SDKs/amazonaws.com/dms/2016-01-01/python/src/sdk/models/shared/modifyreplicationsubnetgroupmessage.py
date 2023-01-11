import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ModifyReplicationSubnetGroupMessage:
    r"""ModifyReplicationSubnetGroupMessage
    <p/>
    """
    
    replication_subnet_group_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupIdentifier') }})
    subnet_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    replication_subnet_group_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupDescription') }})
    
