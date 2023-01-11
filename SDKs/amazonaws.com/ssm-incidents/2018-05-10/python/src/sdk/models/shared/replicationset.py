import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regioninfo as shared_regioninfo
from ..shared import replicationsetstatus_enum as shared_replicationsetstatus_enum


@dataclass_json
@dataclasses.dataclass
class ReplicationSet:
    r"""ReplicationSet
    The set of Regions that your Incident Manager data will be replicated to and the KMS key used to encrypt the data. 
    """
    
    created_by: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    created_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletion_protected: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletionProtected') }})
    last_modified_by: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedBy') }})
    last_modified_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    region_map: dict[str, shared_regioninfo.RegionInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionMap') }})
    status: shared_replicationsetstatus_enum.ReplicationSetStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
