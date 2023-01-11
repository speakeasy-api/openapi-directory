import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datastorepartitions as shared_datastorepartitions
from ..shared import fileformatconfiguration as shared_fileformatconfiguration
from ..shared import retentionperiod as shared_retentionperiod
from ..shared import datastorestatus_enum as shared_datastorestatus_enum
from ..shared import datastorestorage as shared_datastorestorage


@dataclass_json
@dataclasses.dataclass
class Datastore:
    r"""Datastore
    Information about a data store.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datastore_partitions: Optional[shared_datastorepartitions.DatastorePartitions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastorePartitions') }})
    file_format_configuration: Optional[shared_fileformatconfiguration.FileFormatConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormatConfiguration') }})
    last_message_arrival_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMessageArrivalTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    retention_period: Optional[shared_retentionperiod.RetentionPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPeriod') }})
    status: Optional[shared_datastorestatus_enum.DatastoreStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    storage: Optional[shared_datastorestorage.DatastoreStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage') }})
    
