import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyFpgaImageAttributeResultFpgaImageAttribute:
    r"""ModifyFpgaImageAttributeResultFpgaImageAttribute
    Information about the attribute.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fpga_image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    load_permissions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    product_codes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyFpgaImageAttributeResult:
    fpga_image_attribute: Optional[ModifyFpgaImageAttributeResultFpgaImageAttribute] = dataclasses.field(default=None)
    
