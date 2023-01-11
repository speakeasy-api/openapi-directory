import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsrecord as shared_dnsrecord


@dataclass_json
@dataclasses.dataclass
class DNSConfigChange:
    r"""DNSConfigChange
    A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.
    """
    
    dns_records: list[shared_dnsrecord.DNSRecord] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRecords') }})
    
