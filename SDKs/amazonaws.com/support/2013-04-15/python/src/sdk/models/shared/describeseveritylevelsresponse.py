import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import severitylevel as shared_severitylevel


@dataclass_json
@dataclasses.dataclass
class DescribeSeverityLevelsResponse:
    r"""DescribeSeverityLevelsResponse
    The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.
    """
    
    severity_levels: Optional[list[shared_severitylevel.SeverityLevel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityLevels') }})
    
