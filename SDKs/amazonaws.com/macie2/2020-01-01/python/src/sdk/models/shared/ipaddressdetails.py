import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipcity as shared_ipcity
from ..shared import ipcountry as shared_ipcountry
from ..shared import ipgeolocation as shared_ipgeolocation
from ..shared import ipowner as shared_ipowner


@dataclass_json
@dataclasses.dataclass
class IPAddressDetails:
    r"""IPAddressDetails
    Provides information about the IP address of the device that an entity used to perform an action on an affected resource.
    """
    
    ip_address_v4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressV4') }})
    ip_city: Optional[shared_ipcity.IPCity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCity') }})
    ip_country: Optional[shared_ipcountry.IPCountry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCountry') }})
    ip_geo_location: Optional[shared_ipgeolocation.IPGeoLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipGeoLocation') }})
    ip_owner: Optional[shared_ipowner.IPOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipOwner') }})
    
