import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationinstance as shared_replicationinstance


@dataclass_json
@dataclasses.dataclass
class DescribeReplicationInstancesResponse:
    r"""DescribeReplicationInstancesResponse
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_instances: Optional[list[shared_replicationinstance.ReplicationInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstances') }})
    
