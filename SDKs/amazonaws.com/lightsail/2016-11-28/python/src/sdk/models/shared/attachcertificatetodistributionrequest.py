import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AttachCertificateToDistributionRequest:
    certificate_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    distribution_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionName') }})
    
