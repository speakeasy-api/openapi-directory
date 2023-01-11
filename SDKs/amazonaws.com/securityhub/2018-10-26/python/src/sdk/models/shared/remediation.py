import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendation as shared_recommendation


@dataclass_json
@dataclasses.dataclass
class Remediation:
    r"""Remediation
    Details about the remediation steps for a finding.
    """
    
    recommendation: Optional[shared_recommendation.Recommendation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recommendation') }})
    
