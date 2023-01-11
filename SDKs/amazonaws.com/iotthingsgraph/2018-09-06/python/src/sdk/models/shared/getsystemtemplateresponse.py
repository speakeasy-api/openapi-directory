import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systemtemplatedescription as shared_systemtemplatedescription


@dataclass_json
@dataclasses.dataclass
class GetSystemTemplateResponse:
    description: Optional[shared_systemtemplatedescription.SystemTemplateDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
