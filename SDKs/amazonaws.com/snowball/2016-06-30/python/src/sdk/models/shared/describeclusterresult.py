import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clustermetadata as shared_clustermetadata


@dataclass_json
@dataclasses.dataclass
class DescribeClusterResult:
    cluster_metadata: Optional[shared_clustermetadata.ClusterMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterMetadata') }})
    
