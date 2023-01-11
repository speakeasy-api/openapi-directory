import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcAttributeResultEnableDNSHostnames:
    r"""DescribeVpcAttributeResultEnableDNSHostnames
    Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is <code>true</code>, instances in the VPC get DNS hostnames; otherwise, they do not.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeVpcAttributeResultEnableDNSSupport:
    r"""DescribeVpcAttributeResultEnableDNSSupport
    Indicates whether DNS resolution is enabled for the VPC. If this attribute is <code>true</code>, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeVpcAttributeResult:
    enable_dns_hostnames: Optional[DescribeVpcAttributeResultEnableDNSHostnames] = dataclasses.field(default=None)
    enable_dns_support: Optional[DescribeVpcAttributeResultEnableDNSSupport] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
