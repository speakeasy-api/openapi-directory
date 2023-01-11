import dataclasses
from typing import Optional
from ..shared import vpcendpointslist as shared_vpcendpointslist


@dataclasses.dataclass
class Endpoint:
    r"""Endpoint
    Describes a connection endpoint.
    """
    
    address: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    vpc_endpoints: Optional[list[shared_vpcendpointslist.VpcEndpointsList]] = dataclasses.field(default=None)
    
