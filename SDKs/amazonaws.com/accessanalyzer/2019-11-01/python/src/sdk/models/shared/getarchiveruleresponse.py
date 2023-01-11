import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import archiverulesummary as shared_archiverulesummary


@dataclass_json
@dataclasses.dataclass
class GetArchiveRuleResponse:
    r"""GetArchiveRuleResponse
    The response to the request.
    """
    
    archive_rule: shared_archiverulesummary.ArchiveRuleSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveRule') }})
    
