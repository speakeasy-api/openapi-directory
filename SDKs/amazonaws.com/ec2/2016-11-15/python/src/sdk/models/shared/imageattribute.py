import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ImageAttributeBootMode:
    r"""ImageAttributeBootMode
    Describes a value for a resource attribute that is a String.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImageAttributeDescription:
    r"""ImageAttributeDescription
    A description for the AMI.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImageAttributeKernelID:
    r"""ImageAttributeKernelID
    The kernel ID.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImageAttributeRamdiskID:
    r"""ImageAttributeRamdiskID
    The RAM disk ID.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImageAttributeSriovNetSupport:
    r"""ImageAttributeSriovNetSupport
    Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImageAttribute:
    r"""ImageAttribute
    Describes an image attribute.
    """
    
    block_device_mappings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    boot_mode: Optional[ImageAttributeBootMode] = dataclasses.field(default=None)
    description: Optional[ImageAttributeDescription] = dataclasses.field(default=None)
    image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    kernel_id: Optional[ImageAttributeKernelID] = dataclasses.field(default=None)
    launch_permissions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    product_codes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ramdisk_id: Optional[ImageAttributeRamdiskID] = dataclasses.field(default=None)
    sriov_net_support: Optional[ImageAttributeSriovNetSupport] = dataclasses.field(default=None)
    
