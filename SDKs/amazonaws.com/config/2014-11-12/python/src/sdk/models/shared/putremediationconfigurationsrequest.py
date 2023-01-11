import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationconfiguration as shared_remediationconfiguration


@dataclass_json
@dataclasses.dataclass
class PutRemediationConfigurationsRequest:
    remediation_configurations: list[shared_remediationconfiguration.RemediationConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationConfigurations') }})
    
