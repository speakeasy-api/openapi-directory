import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerinstancefield_enum as shared_containerinstancefield_enum


@dataclass_json
@dataclasses.dataclass
class DescribeContainerInstancesRequest:
    container_instances: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstances') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    include: Optional[list[shared_containerinstancefield_enum.ContainerInstanceFieldEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
