import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipaddressassignment_enum as shared_ipaddressassignment_enum
from ..shared import physicalconnectortype_enum as shared_physicalconnectortype_enum


@dataclass_json
@dataclasses.dataclass
class PhysicalNetworkInterface:
    r"""PhysicalNetworkInterface
    The details about the physical network interface for the device.
    """
    
    default_gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGateway') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    ip_address_assignment: Optional[shared_ipaddressassignment_enum.IPAddressAssignmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressAssignment') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macAddress') }})
    netmask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netmask') }})
    physical_connector_type: Optional[shared_physicalconnectortype_enum.PhysicalConnectorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalConnectorType') }})
    physical_network_interface_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalNetworkInterfaceId') }})
    
