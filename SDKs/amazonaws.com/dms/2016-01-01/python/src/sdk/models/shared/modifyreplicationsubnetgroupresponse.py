import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationsubnetgroup as shared_replicationsubnetgroup


@dataclass_json
@dataclasses.dataclass
class ModifyReplicationSubnetGroupResponse:
    r"""ModifyReplicationSubnetGroupResponse
    <p/>
    """
    
    replication_subnet_group: Optional[shared_replicationsubnetgroup.ReplicationSubnetGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroup') }})
    
