import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flowtemplatedescription as shared_flowtemplatedescription


@dataclass_json
@dataclasses.dataclass
class GetFlowTemplateResponse:
    description: Optional[shared_flowtemplatedescription.FlowTemplateDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
