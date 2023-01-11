import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationscope_enum as shared_replicationscope_enum


@dataclass_json
@dataclasses.dataclass
class ConditionalForwarder:
    r"""ConditionalForwarder
    Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
    """
    
    dns_ip_addrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    remote_domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainName') }})
    replication_scope: Optional[shared_replicationscope_enum.ReplicationScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationScope') }})
    
