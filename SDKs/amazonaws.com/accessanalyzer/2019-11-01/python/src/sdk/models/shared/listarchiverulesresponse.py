import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import archiverulesummary as shared_archiverulesummary


@dataclass_json
@dataclasses.dataclass
class ListArchiveRulesResponse:
    r"""ListArchiveRulesResponse
    The response to the request.
    """
    
    archive_rules: list[shared_archiverulesummary.ArchiveRuleSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveRules') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
