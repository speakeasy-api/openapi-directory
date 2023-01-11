import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequest:
    instance_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instancePort') }})
    load_balancer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    certificate_alternative_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAlternativeNames') }})
    certificate_domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDomainName') }})
    certificate_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    health_check_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckPath') }})
    ip_address_type: Optional[shared_ipaddresstype_enum.IPAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
