import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerTLSCertificateRequest:
    certificate_domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDomainName') }})
    certificate_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    load_balancer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    certificate_alternative_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAlternativeNames') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
