import dataclasses
from typing import Optional
from ..shared import networkinterfacelist as shared_networkinterfacelist


@dataclasses.dataclass
class VpcEndpoint:
    r"""VpcEndpoint
    The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
    """
    
    network_interfaces: Optional[list[shared_networkinterfacelist.NetworkInterfaceList]] = dataclasses.field(default=None)
    vpc_endpoint_id: Optional[str] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
