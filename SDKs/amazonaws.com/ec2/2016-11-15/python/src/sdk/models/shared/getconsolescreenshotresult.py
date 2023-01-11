import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetConsoleScreenshotResult:
    image_data: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
