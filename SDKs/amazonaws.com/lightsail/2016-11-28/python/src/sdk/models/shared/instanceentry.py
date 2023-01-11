import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portinfosourcetype_enum as shared_portinfosourcetype_enum


@dataclass_json
@dataclasses.dataclass
class InstanceEntry:
    r"""InstanceEntry
    Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.
    """
    
    availability_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    instance_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    port_info_source: shared_portinfosourcetype_enum.PortInfoSourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portInfoSource') }})
    source_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceName') }})
    user_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    
