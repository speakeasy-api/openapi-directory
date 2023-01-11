import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import soa as shared_soa


@dataclass_json
@dataclasses.dataclass
class DNSProperties:
    r"""DNSProperties
    A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
    """
    
    hosted_zone_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostedZoneId') }})
    soa: Optional[shared_soa.Soa] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SOA') }})
    
