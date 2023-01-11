import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicetype_enum as shared_servicetype_enum


@dataclass_json
@dataclasses.dataclass
class GetDimensionKeyDetailsRequest:
    group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    group_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupIdentifier') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    service_type: shared_servicetype_enum.ServiceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceType') }})
    requested_dimensions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedDimensions') }})
    
