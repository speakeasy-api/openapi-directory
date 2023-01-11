import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsresponsetype_enum as shared_dnsresponsetype_enum


@dataclass_json
@dataclasses.dataclass
class DNSServiceDiscovery:
    r"""DNSServiceDiscovery
    An object that represents the DNS service discovery information for your virtual node.
    """
    
    hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    response_type: Optional[shared_dnsresponsetype_enum.DNSResponseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseType') }})
    
