import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitydescription as shared_entitydescription


@dataclass_json
@dataclasses.dataclass
class GetEntitiesResponse:
    descriptions: Optional[list[shared_entitydescription.EntityDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptions') }})
    
