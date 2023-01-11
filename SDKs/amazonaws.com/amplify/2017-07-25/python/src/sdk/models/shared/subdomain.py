import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subdomainsetting as shared_subdomainsetting


@dataclass_json
@dataclasses.dataclass
class SubDomain:
    r"""SubDomain
     The subdomain for the domain association. 
    """
    
    dns_record: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsRecord') }})
    sub_domain_setting: shared_subdomainsetting.SubDomainSetting = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subDomainSetting') }})
    verified: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
