import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offering as shared_offering
from ..shared import offeringtransactiontype_enum as shared_offeringtransactiontype_enum


@dataclass_json
@dataclasses.dataclass
class OfferingStatus:
    effective_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    offering: Optional[shared_offering.Offering] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offering') }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    type: Optional[shared_offeringtransactiontype_enum.OfferingTransactionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
