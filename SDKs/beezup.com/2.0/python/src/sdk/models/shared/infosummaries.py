import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorsummary as shared_errorsummary
from ..shared import infosummary as shared_infosummary
from ..shared import successsummary as shared_successsummary
from ..shared import warningsummary as shared_warningsummary


@dataclass_json
@dataclasses.dataclass
class InfoSummaries:
    errors: Optional[list[shared_errorsummary.ErrorSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    informations: Optional[list[shared_infosummary.InfoSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('informations') }})
    successes: Optional[list[shared_successsummary.SuccessSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successes') }})
    warnings: Optional[list[shared_warningsummary.WarningSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
