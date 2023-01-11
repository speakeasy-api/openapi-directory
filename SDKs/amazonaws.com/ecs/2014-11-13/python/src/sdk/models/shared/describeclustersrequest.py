import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterfield_enum as shared_clusterfield_enum


@dataclass_json
@dataclasses.dataclass
class DescribeClustersRequest:
    clusters: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    include: Optional[list[shared_clusterfield_enum.ClusterFieldEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
