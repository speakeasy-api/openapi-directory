import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdomain as shared_customdomain


@dataclass_json
@dataclasses.dataclass
class AssociateCustomDomainResponse:
    custom_domain: shared_customdomain.CustomDomain = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomain') }})
    dns_target: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DNSTarget') }})
    service_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    
