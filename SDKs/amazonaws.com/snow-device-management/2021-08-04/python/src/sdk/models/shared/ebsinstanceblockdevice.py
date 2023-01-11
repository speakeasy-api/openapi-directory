import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachmentstatus_enum as shared_attachmentstatus_enum


@dataclass_json
@dataclasses.dataclass
class EbsInstanceBlockDevice:
    r"""EbsInstanceBlockDevice
    Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping.
    """
    
    attach_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delete_on_termination: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteOnTermination') }})
    status: Optional[shared_attachmentstatus_enum.AttachmentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    volume_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeId') }})
    
