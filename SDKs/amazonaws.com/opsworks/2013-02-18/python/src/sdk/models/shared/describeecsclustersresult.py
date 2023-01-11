import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ecscluster as shared_ecscluster


@dataclass_json
@dataclasses.dataclass
class DescribeEcsClustersResult:
    r"""DescribeEcsClustersResult
    Contains the response to a <code>DescribeEcsClusters</code> request.
    """
    
    ecs_clusters: Optional[list[shared_ecscluster.EcsCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcsClusters') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
