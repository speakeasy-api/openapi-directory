import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_infosummaries as shared_beezup_common_infosummaries
from ..shared import createcontractresponselinks as shared_createcontractresponselinks


@dataclass_json
@dataclasses.dataclass
class CreateContractResponse:
    info: Optional[shared_beezup_common_infosummaries.BeezUpCommonInfoSummaries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    links: Optional[shared_createcontractresponselinks.CreateContractResponseLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
