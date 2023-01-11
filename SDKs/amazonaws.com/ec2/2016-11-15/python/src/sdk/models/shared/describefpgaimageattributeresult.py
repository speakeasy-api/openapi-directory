import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeFpgaImageAttributeResultFpgaImageAttribute:
    r"""DescribeFpgaImageAttributeResultFpgaImageAttribute
    Information about the attribute.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fpga_image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    load_permissions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    product_codes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeFpgaImageAttributeResult:
    fpga_image_attribute: Optional[DescribeFpgaImageAttributeResultFpgaImageAttribute] = dataclasses.field(default=None)
    
