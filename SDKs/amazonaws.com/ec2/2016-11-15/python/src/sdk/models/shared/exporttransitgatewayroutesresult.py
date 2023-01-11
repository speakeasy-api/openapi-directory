import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ExportTransitGatewayRoutesResult:
    s3_location: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
