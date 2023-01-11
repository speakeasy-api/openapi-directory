import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monetaryamount as shared_monetaryamount
from ..shared import offeringstatus as shared_offeringstatus


@dataclass_json
@dataclasses.dataclass
class OfferingTransaction:
    r"""OfferingTransaction
    Represents the metadata of an offering transaction.
    """
    
    cost: Optional[shared_monetaryamount.MonetaryAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    created_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    offering_promotion_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringPromotionId') }})
    offering_status: Optional[shared_offeringstatus.OfferingStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringStatus') }})
    transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
