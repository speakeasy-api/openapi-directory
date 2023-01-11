import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreditCardInfo:
    card_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardNumber') }})
    card_verification_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardVerificationCode') }})
    expiration_month: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationMonth') }})
    expiration_year: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationYear') }})
    
