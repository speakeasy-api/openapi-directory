import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum


@dataclasses.dataclass
class DNSRuleDescriptor:
    dns_rule_id: str = dataclasses.field()
    domain_name: str = dataclasses.field()
    ip_address: str = dataclasses.field()
    ip_address_type: shared_ipaddresstype_enum.IPAddressTypeEnum = dataclasses.field()
    ttl: Optional[int] = dataclasses.field(default=None)
    
