import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateConditionalForwarderRequest:
    r"""UpdateConditionalForwarderRequest
    Updates a conditional forwarder.
    """
    
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    dns_ip_addrs: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    remote_domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainName') }})
    
