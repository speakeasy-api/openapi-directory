import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import icd10cmentity as shared_icd10cmentity


@dataclass_json
@dataclasses.dataclass
class InferIcd10CmResponse:
    entities: list[shared_icd10cmentity.Icd10CmEntity] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entities') }})
    model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    
