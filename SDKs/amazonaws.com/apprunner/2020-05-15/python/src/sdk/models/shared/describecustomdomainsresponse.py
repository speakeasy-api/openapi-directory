import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdomain as shared_customdomain


@dataclass_json
@dataclasses.dataclass
class DescribeCustomDomainsResponse:
    custom_domains: list[shared_customdomain.CustomDomain] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomains') }})
    dns_target: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DNSTarget') }})
    service_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
