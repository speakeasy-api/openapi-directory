import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsElasticsearchDomainDomainEndpointOptions:
    r"""AwsElasticsearchDomainDomainEndpointOptions
    Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
    """
    
    enforce_https: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnforceHTTPS') }})
    tls_security_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TLSSecurityPolicy') }})
    
