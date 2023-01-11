import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResendValidationEmailRequest:
    certificate_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    validation_domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationDomain') }})
    
