import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vulnerablecomponent as shared_vulnerablecomponent


@dataclass_json
@dataclasses.dataclass
class FirmwareRiskRiskSummary:
    client_tools_risk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_tools_risk') }})
    crypto_risk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crypto_risk') }})
    kernel_risk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernel_risk') }})
    net_services_risk: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_services_risk') }})
    

@dataclass_json
@dataclasses.dataclass
class FirmwareRisk:
    risk_summary: Optional[FirmwareRiskRiskSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('risk_summary') }})
    vulnerable_components: Optional[list[shared_vulnerablecomponent.VulnerableComponent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerable_components') }})
    
