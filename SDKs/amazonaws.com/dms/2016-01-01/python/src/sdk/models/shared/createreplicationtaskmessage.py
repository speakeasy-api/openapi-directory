import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import migrationtypevalue_enum as shared_migrationtypevalue_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateReplicationTaskMessage:
    r"""CreateReplicationTaskMessage
    <p/>
    """
    
    migration_type: shared_migrationtypevalue_enum.MigrationTypeValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationType') }})
    replication_instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    replication_task_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskIdentifier') }})
    source_endpoint_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEndpointArn') }})
    table_mappings: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableMappings') }})
    target_endpoint_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetEndpointArn') }})
    cdc_start_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartPosition') }})
    cdc_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cdc_stop_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStopPosition') }})
    replication_task_settings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskSettings') }})
    resource_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    task_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskData') }})
    
