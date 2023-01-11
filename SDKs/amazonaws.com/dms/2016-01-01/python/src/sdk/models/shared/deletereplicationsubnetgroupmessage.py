import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteReplicationSubnetGroupMessage:
    r"""DeleteReplicationSubnetGroupMessage
    <p/>
    """
    
    replication_subnet_group_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupIdentifier') }})
    
