import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import synchronousjobread as shared_synchronousjobread


@dataclass_json
@dataclasses.dataclass
class SourceDefinitionSpecificationRead:
    job_info: shared_synchronousjobread.SynchronousJobRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInfo') }})
    source_definition_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinitionId') }})
    connection_specification: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionSpecification') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationUrl') }})
    
