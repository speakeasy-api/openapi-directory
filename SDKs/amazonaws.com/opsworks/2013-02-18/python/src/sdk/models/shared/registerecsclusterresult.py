import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterEcsClusterResult:
    r"""RegisterEcsClusterResult
    Contains the response to a <code>RegisterEcsCluster</code> request.
    """
    
    ecs_cluster_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcsClusterArn') }})
    
