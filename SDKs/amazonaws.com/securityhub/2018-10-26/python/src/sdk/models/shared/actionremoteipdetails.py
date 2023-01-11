import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import city as shared_city
from ..shared import country as shared_country
from ..shared import geolocation as shared_geolocation
from ..shared import iporganizationdetails as shared_iporganizationdetails


@dataclass_json
@dataclasses.dataclass
class ActionRemoteIPDetails:
    r"""ActionRemoteIPDetails
    For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action.
    """
    
    city: Optional[shared_city.City] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country: Optional[shared_country.Country] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    geo_location: Optional[shared_geolocation.GeoLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeoLocation') }})
    ip_address_v4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddressV4') }})
    organization: Optional[shared_iporganizationdetails.IPOrganizationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Organization') }})
    
