import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipaddressupdate as shared_ipaddressupdate


@dataclass_json
@dataclasses.dataclass
class AssociateResolverEndpointIPAddressRequest:
    ip_address: shared_ipaddressupdate.IPAddressUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    resolver_endpoint_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverEndpointId') }})
    
