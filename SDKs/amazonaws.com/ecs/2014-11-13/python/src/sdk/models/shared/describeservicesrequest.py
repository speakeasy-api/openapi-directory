import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicefield_enum as shared_servicefield_enum


@dataclass_json
@dataclasses.dataclass
class DescribeServicesRequest:
    services: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    include: Optional[list[shared_servicefield_enum.ServiceFieldEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
