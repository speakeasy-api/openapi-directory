import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeNetworkInterfaceAttributeResultAttachment:
    r"""DescribeNetworkInterfaceAttributeResultAttachment
    The attachment (if any) of the network interface.
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
class DescribeNetworkInterfaceAttributeResultDescription:
    r"""DescribeNetworkInterfaceAttributeResultDescription
    The description of the network interface.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeNetworkInterfaceAttributeResultSourceDestCheck:
    r"""DescribeNetworkInterfaceAttributeResultSourceDestCheck
    Indicates whether source/destination checking is enabled.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeNetworkInterfaceAttributeResult:
    r"""DescribeNetworkInterfaceAttributeResult
    Contains the output of DescribeNetworkInterfaceAttribute.
    """
    
    attachment: Optional[DescribeNetworkInterfaceAttributeResultAttachment] = dataclasses.field(default=None)
    description: Optional[DescribeNetworkInterfaceAttributeResultDescription] = dataclasses.field(default=None)
    groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    source_dest_check: Optional[DescribeNetworkInterfaceAttributeResultSourceDestCheck] = dataclasses.field(default=None)
    
