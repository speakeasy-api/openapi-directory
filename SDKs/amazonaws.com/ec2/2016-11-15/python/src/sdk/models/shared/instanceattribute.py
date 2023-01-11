import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class InstanceAttributeDisableAPITermination:
    r"""InstanceAttributeDisableAPITermination
    If the value is <code>true</code>, you can't terminate the instance through the Amazon EC2 console, CLI, or API; otherwise, you can.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeEbsOptimized:
    r"""InstanceAttributeEbsOptimized
    Indicates whether the instance is optimized for Amazon EBS I/O.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeEnaSupport:
    r"""InstanceAttributeEnaSupport
    Indicates whether enhanced networking with ENA is enabled.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeEnclaveOptions:
    r"""InstanceAttributeEnclaveOptions
    To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>; otherwise, set it to <code>false</code>.
    """
    
    enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeInstanceInitiatedShutdownBehavior:
    r"""InstanceAttributeInstanceInitiatedShutdownBehavior
    Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeInstanceType:
    r"""InstanceAttributeInstanceType
    The instance type.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeKernelID:
    r"""InstanceAttributeKernelID
    The kernel ID.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeRamdiskID:
    r"""InstanceAttributeRamdiskID
    The RAM disk ID.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeRootDeviceName:
    r"""InstanceAttributeRootDeviceName
    The device name of the root device volume (for example, <code>/dev/sda1</code>).
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeSourceDestCheck:
    r"""InstanceAttributeSourceDestCheck
    Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is <code>true</code>, source/destination checks are enabled; otherwise, they are disabled. The default value is <code>true</code>. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeSriovNetSupport:
    r"""InstanceAttributeSriovNetSupport
    Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttributeUserData:
    r"""InstanceAttributeUserData
    The user data.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InstanceAttribute:
    r"""InstanceAttribute
    Describes an instance attribute.
    """
    
    block_device_mappings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    disable_api_termination: Optional[InstanceAttributeDisableAPITermination] = dataclasses.field(default=None)
    ebs_optimized: Optional[InstanceAttributeEbsOptimized] = dataclasses.field(default=None)
    ena_support: Optional[InstanceAttributeEnaSupport] = dataclasses.field(default=None)
    enclave_options: Optional[InstanceAttributeEnclaveOptions] = dataclasses.field(default=None)
    groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_initiated_shutdown_behavior: Optional[InstanceAttributeInstanceInitiatedShutdownBehavior] = dataclasses.field(default=None)
    instance_type: Optional[InstanceAttributeInstanceType] = dataclasses.field(default=None)
    kernel_id: Optional[InstanceAttributeKernelID] = dataclasses.field(default=None)
    product_codes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ramdisk_id: Optional[InstanceAttributeRamdiskID] = dataclasses.field(default=None)
    root_device_name: Optional[InstanceAttributeRootDeviceName] = dataclasses.field(default=None)
    source_dest_check: Optional[InstanceAttributeSourceDestCheck] = dataclasses.field(default=None)
    sriov_net_support: Optional[InstanceAttributeSriovNetSupport] = dataclasses.field(default=None)
    user_data: Optional[InstanceAttributeUserData] = dataclasses.field(default=None)
    
