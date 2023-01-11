import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operationstatus_enum as shared_operationstatus_enum
from ..shared import operationtype_enum as shared_operationtype_enum


@dataclass_json
@dataclasses.dataclass
class OperationSummary:
    r"""OperationSummary
    OperationSummary includes the following elements.
    """
    
    operation_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationId') }})
    status: shared_operationstatus_enum.OperationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    submitted_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmittedDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: shared_operationtype_enum.OperationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
