import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagemodel as shared_languagemodel


@dataclass_json
@dataclasses.dataclass
class ListLanguageModelsResponse:
    models: Optional[list[shared_languagemodel.LanguageModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Models') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
