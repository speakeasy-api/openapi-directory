import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalabledimension_enum as shared_scalabledimension_enum
from ..shared import servicenamespace_enum as shared_servicenamespace_enum


@dataclass_json
@dataclasses.dataclass
class DescribeScalableTargetsRequest:
    service_namespace: shared_servicenamespace_enum.ServiceNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIds') }})
    scalable_dimension: Optional[shared_scalabledimension_enum.ScalableDimensionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    
