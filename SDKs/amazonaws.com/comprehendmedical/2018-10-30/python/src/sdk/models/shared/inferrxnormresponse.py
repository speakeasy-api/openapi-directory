import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rxnormentity as shared_rxnormentity


@dataclass_json
@dataclasses.dataclass
class InferRxNormResponse:
    entities: list[shared_rxnormentity.RxNormEntity] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entities') }})
    model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    
