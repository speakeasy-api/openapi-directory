import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import synchronousjobread as shared_synchronousjobread
from ..shared import destinationsyncmode_enum as shared_destinationsyncmode_enum


@dataclass_json
@dataclasses.dataclass
class DestinationDefinitionSpecificationRead:
    destination_definition_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDefinitionId') }})
    job_info: shared_synchronousjobread.SynchronousJobRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInfo') }})
    connection_specification: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionSpecification') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationUrl') }})
    supported_destination_sync_modes: Optional[list[shared_destinationsyncmode_enum.DestinationSyncModeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedDestinationSyncModes') }})
    supports_dbt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsDbt') }})
    supports_normalization: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsNormalization') }})
    
