import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cluster as shared_cluster
from ..shared import failure as shared_failure


@dataclass_json
@dataclasses.dataclass
class DescribeClustersResponse:
    clusters: Optional[list[shared_cluster.Cluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    failures: Optional[list[shared_failure.Failure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    
