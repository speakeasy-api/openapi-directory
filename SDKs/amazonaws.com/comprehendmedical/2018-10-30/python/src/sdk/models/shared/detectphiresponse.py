import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entity as shared_entity


@dataclass_json
@dataclasses.dataclass
class DetectPhiResponse:
    entities: list[shared_entity.Entity] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entities') }})
    model_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    
