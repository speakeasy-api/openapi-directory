import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationaldatabaseparameter as shared_relationaldatabaseparameter


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseParametersResult:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    parameters: Optional[list[shared_relationaldatabaseparameter.RelationalDatabaseParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
