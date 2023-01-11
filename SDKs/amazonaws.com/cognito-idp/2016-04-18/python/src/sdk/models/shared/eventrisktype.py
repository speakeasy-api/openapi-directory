import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import riskdecisiontype_enum as shared_riskdecisiontype_enum
from ..shared import riskleveltype_enum as shared_riskleveltype_enum


@dataclass_json
@dataclasses.dataclass
class EventRiskType:
    r"""EventRiskType
    The event risk type.
    """
    
    compromised_credentials_detected: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompromisedCredentialsDetected') }})
    risk_decision: Optional[shared_riskdecisiontype_enum.RiskDecisionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskDecision') }})
    risk_level: Optional[shared_riskleveltype_enum.RiskLevelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskLevel') }})
    
