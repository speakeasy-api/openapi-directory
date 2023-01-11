import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsrecord as shared_dnsrecord
from ..shared import routingpolicy_enum as shared_routingpolicy_enum


@dataclass_json
@dataclasses.dataclass
class DNSConfig:
    r"""DNSConfig
    A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.
    """
    
    dns_records: list[shared_dnsrecord.DNSRecord] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRecords') }})
    namespace_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamespaceId') }})
    routing_policy: Optional[shared_routingpolicy_enum.RoutingPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingPolicy') }})
    
