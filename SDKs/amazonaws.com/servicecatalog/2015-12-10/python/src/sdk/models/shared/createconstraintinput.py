import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateConstraintInput:
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    parameters: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    portfolio_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
