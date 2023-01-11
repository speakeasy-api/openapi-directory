import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateFpgaImageResult:
    fpga_image_global_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fpga_image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
