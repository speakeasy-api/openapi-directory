import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import riskconfigurationtype as shared_riskconfigurationtype


@dataclass_json
@dataclasses.dataclass
class SetRiskConfigurationResponse:
    risk_configuration: shared_riskconfigurationtype.RiskConfigurationType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskConfiguration') }})
    
