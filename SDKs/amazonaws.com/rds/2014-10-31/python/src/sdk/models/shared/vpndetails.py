import dataclasses
from typing import Optional


@dataclasses.dataclass
class VpnDetails:
    r"""VpnDetails
    <p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the Amazon Web Services website.</p> <p>For more information about RDS on VMware, see the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html\"> RDS on VMware User Guide.</a> </p>
    """
    
    vpn_gateway_ip: Optional[str] = dataclasses.field(default=None)
    vpn_id: Optional[str] = dataclasses.field(default=None)
    vpn_name: Optional[str] = dataclasses.field(default=None)
    vpn_psk: Optional[str] = dataclasses.field(default=None)
    vpn_state: Optional[str] = dataclasses.field(default=None)
    vpn_tunnel_originator_ip: Optional[str] = dataclasses.field(default=None)
    
