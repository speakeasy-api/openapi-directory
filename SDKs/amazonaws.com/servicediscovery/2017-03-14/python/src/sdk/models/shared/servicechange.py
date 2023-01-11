import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsconfigchange as shared_dnsconfigchange
from ..shared import healthcheckconfig as shared_healthcheckconfig


@dataclass_json
@dataclasses.dataclass
class ServiceChange:
    r"""ServiceChange
    A complex type that contains changes to an existing service.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dns_config: Optional[shared_dnsconfigchange.DNSConfigChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsConfig') }})
    health_check_config: Optional[shared_healthcheckconfig.HealthCheckConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfig') }})
    
