import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreatePortfolioInput:
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    provider_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderName') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
