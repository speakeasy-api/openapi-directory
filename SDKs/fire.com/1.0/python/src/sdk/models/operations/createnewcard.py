import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateNewCardNewCardAddressTypeEnum(str, Enum):
    HOME = "HOME"
    BUSINESS = "BUSINESS"


@dataclass_json
@dataclasses.dataclass
class CreateNewCardNewCard:
    accept_fees_and_charges: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptFeesAndCharges') }})
    address_type: Optional[CreateNewCardNewCardAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressType') }})
    card_pin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardPin') }})
    eur_ican: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eurIcan') }})
    gbp_ican: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbpIcan') }})
    user_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
class CreateNewCardNewCardResponseStatusEnum(str, Enum):
    CREATED_ACTIVE = "CREATED_ACTIVE"
    CREATED_INACTIVE = "CREATED_INACTIVE"


@dataclass_json
@dataclasses.dataclass
class CreateNewCardNewCardResponse:
    card_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardId') }})
    expiry_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    masked_pan: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskedPan') }})
    status: Optional[CreateNewCardNewCardResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class CreateNewCardRequest:
    request: CreateNewCardNewCard = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNewCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    new_card_response: Optional[CreateNewCardNewCardResponse] = dataclasses.field(default=None)
    
