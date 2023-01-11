import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderablereplicationinstance as shared_orderablereplicationinstance


@dataclass_json
@dataclasses.dataclass
class DescribeOrderableReplicationInstancesResponse:
    r"""DescribeOrderableReplicationInstancesResponse
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    orderable_replication_instances: Optional[list[shared_orderablereplicationinstance.OrderableReplicationInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderableReplicationInstances') }})
    
