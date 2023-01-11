import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import healthstatusfilter_enum as shared_healthstatusfilter_enum


@dataclass_json
@dataclasses.dataclass
class DiscoverInstancesRequest:
    namespace_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamespaceName') }})
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    health_status: Optional[shared_healthstatusfilter_enum.HealthStatusFilterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthStatus') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    optional_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptionalParameters') }})
    query_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryParameters') }})
    
