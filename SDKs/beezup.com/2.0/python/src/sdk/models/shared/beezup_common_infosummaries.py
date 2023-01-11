import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_errorsummary as shared_beezup_common_errorsummary
from ..shared import beezup_common_infosummary as shared_beezup_common_infosummary
from ..shared import beezup_common_successsummary as shared_beezup_common_successsummary
from ..shared import beezup_common_warningsummary as shared_beezup_common_warningsummary


@dataclass_json
@dataclasses.dataclass
class BeezUpCommonInfoSummaries:
    errors: Optional[list[shared_beezup_common_errorsummary.BeezUpCommonErrorSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    informations: Optional[list[shared_beezup_common_infosummary.BeezUpCommonInfoSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('informations') }})
    successes: Optional[list[shared_beezup_common_successsummary.BeezUpCommonSuccessSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successes') }})
    warnings: Optional[list[shared_beezup_common_warningsummary.BeezUpCommonWarningSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
