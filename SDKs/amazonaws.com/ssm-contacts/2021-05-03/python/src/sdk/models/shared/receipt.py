import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import receipttype_enum as shared_receipttype_enum


@dataclass_json
@dataclasses.dataclass
class Receipt:
    r"""Receipt
    Records events during an engagement.
    """
    
    receipt_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    receipt_type: shared_receipttype_enum.ReceiptTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptType') }})
    contact_channel_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelArn') }})
    receipt_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptInfo') }})
    
