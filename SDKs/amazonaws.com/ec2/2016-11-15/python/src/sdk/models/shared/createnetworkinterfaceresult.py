import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateNetworkInterfaceResultNetworkInterfaceAssociation:
    r"""CreateNetworkInterfaceResultNetworkInterfaceAssociation
    The association information for an Elastic IP address (IPv4) associated with the network interface.
    """
    
    allocation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    carrier_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    customer_owned_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ip_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    public_dns_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    public_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkInterfaceResultNetworkInterfaceAttachment:
    r"""CreateNetworkInterfaceResultNetworkInterfaceAttachment
    The network interface attachment.
    """
    
    attach_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    delete_on_termination: Optional[dict[str, Any]] = dataclasses.field(default=None)
    device_index: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_card_index: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkInterfaceResultNetworkInterface:
    r"""CreateNetworkInterfaceResultNetworkInterface
    Information about the network interface.
    """
    
    association: Optional[CreateNetworkInterfaceResultNetworkInterfaceAssociation] = dataclasses.field(default=None)
    attachment: Optional[CreateNetworkInterfaceResultNetworkInterfaceAttachment] = dataclasses.field(default=None)
    availability_zone: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    interface_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv4_prefixes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_addresses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_prefixes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    mac_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    outpost_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    private_dns_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    private_ip_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    private_ip_addresses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_managed: Optional[dict[str, Any]] = dataclasses.field(default=None)
    source_dest_check: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tag_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkInterfaceResult:
    r"""CreateNetworkInterfaceResult
    Contains the output of CreateNetworkInterface.
    """
    
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface: Optional[CreateNetworkInterfaceResultNetworkInterface] = dataclasses.field(default=None)
    
