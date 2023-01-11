import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitylabel as shared_entitylabel


@dataclass_json
@dataclasses.dataclass
class ContainsPiiEntitiesResponse:
    labels: Optional[list[shared_entitylabel.EntityLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    
