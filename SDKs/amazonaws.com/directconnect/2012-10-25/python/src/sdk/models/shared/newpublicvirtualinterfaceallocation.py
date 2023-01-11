import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressfamily_enum as shared_addressfamily_enum
from ..shared import routefilterprefix as shared_routefilterprefix
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class NewPublicVirtualInterfaceAllocation:
    r"""NewPublicVirtualInterfaceAllocation
    Information about a public virtual interface to be provisioned on a connection.
    """
    
    asn: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    virtual_interface_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceName') }})
    vlan: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    address_family: Optional[shared_addressfamily_enum.AddressFamilyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressFamily') }})
    amazon_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonAddress') }})
    auth_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authKey') }})
    customer_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAddress') }})
    route_filter_prefixes: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeFilterPrefixes') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
