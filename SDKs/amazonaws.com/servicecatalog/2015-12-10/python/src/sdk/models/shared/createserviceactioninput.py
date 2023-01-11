import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceactiondefinitiontype_enum as shared_serviceactiondefinitiontype_enum


@dataclass_json
@dataclasses.dataclass
class CreateServiceActionInput:
    definition: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    definition_type: shared_serviceactiondefinitiontype_enum.ServiceActionDefinitionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefinitionType') }})
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
