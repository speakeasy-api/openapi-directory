import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetListofApproversForBatchPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetListofApproversForBatchBatchApproversApprovals:
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mobile_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileNumber') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListofApproversForBatchBatchApprovers:
    approvals: Optional[list[GetListofApproversForBatchBatchApproversApprovals]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvals') }})
    

@dataclasses.dataclass
class GetListofApproversForBatchRequest:
    path_params: GetListofApproversForBatchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListofApproversForBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_approvers: Optional[GetListofApproversForBatchBatchApprovers] = dataclasses.field(default=None)
    
