import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definitioninformation as shared_definitioninformation


@dataclass_json
@dataclasses.dataclass
class ListConnectorDefinitionsResponse:
    definitions: Optional[list[shared_definitioninformation.DefinitionInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definitions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
