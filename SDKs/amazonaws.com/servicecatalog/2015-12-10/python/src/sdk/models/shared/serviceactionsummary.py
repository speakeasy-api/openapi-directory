import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceactiondefinitiontype_enum as shared_serviceactiondefinitiontype_enum


@dataclass_json
@dataclasses.dataclass
class ServiceActionSummary:
    r"""ServiceActionSummary
    Detailed information about the self-service action.
    """
    
    definition_type: Optional[shared_serviceactiondefinitiontype_enum.ServiceActionDefinitionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefinitionType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
