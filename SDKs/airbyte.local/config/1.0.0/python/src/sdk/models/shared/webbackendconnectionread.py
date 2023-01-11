import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationread as shared_destinationread
from ..shared import jobstatus_enum as shared_jobstatus_enum
from ..shared import namespacedefinitiontype_enum as shared_namespacedefinitiontype_enum
from ..shared import operationread as shared_operationread
from ..shared import resourcerequirements as shared_resourcerequirements
from ..shared import connectionschedule as shared_connectionschedule
from ..shared import sourceread as shared_sourceread
from ..shared import connectionstatus_enum as shared_connectionstatus_enum
from ..shared import airbytecatalog as shared_airbytecatalog


@dataclass_json
@dataclasses.dataclass
class WebBackendConnectionRead:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    destination: shared_destinationread.DestinationRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationId') }})
    is_syncing: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSyncing') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: shared_sourceread.SourceRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    status: shared_connectionstatus_enum.ConnectionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sync_catalog: shared_airbytecatalog.AirbyteCatalog = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncCatalog') }})
    latest_sync_job_created_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestSyncJobCreatedAt') }})
    latest_sync_job_status: Optional[shared_jobstatus_enum.JobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestSyncJobStatus') }})
    namespace_definition: Optional[shared_namespacedefinitiontype_enum.NamespaceDefinitionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceDefinition') }})
    namespace_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceFormat') }})
    operation_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationIds') }})
    operations: Optional[list[shared_operationread.OperationRead]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    resource_requirements: Optional[shared_resourcerequirements.ResourceRequirements] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    schedule: Optional[shared_connectionschedule.ConnectionSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
