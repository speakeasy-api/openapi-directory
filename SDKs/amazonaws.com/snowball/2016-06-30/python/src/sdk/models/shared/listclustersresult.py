import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterlistentry as shared_clusterlistentry


@dataclass_json
@dataclasses.dataclass
class ListClustersResult:
    cluster_list_entries: Optional[list[shared_clusterlistentry.ClusterListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterListEntries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
