import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DisassociateCustomDomainRequest:
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    service_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    
