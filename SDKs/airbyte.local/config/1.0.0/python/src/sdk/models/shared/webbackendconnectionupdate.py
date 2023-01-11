import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namespacedefinitiontype_enum as shared_namespacedefinitiontype_enum
from ..shared import webbackendoperationcreateorupdate as shared_webbackendoperationcreateorupdate
from ..shared import resourcerequirements as shared_resourcerequirements
from ..shared import connectionschedule as shared_connectionschedule
from ..shared import connectionstatus_enum as shared_connectionstatus_enum
from ..shared import airbytecatalog as shared_airbytecatalog


@dataclass_json
@dataclasses.dataclass
class WebBackendConnectionUpdate:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    status: shared_connectionstatus_enum.ConnectionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sync_catalog: shared_airbytecatalog.AirbyteCatalog = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncCatalog') }})
    namespace_definition: Optional[shared_namespacedefinitiontype_enum.NamespaceDefinitionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceDefinition') }})
    namespace_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceFormat') }})
    operation_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationIds') }})
    operations: Optional[list[shared_webbackendoperationcreateorupdate.WebBackendOperationCreateOrUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    resource_requirements: Optional[shared_resourcerequirements.ResourceRequirements] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    schedule: Optional[shared_connectionschedule.ConnectionSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    with_refreshed_catalog: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withRefreshedCatalog') }})
    
