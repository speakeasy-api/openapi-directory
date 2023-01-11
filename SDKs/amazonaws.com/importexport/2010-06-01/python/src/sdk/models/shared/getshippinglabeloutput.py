import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetShippingLabelOutput:
    shipping_label_url: Optional[str] = dataclasses.field(default=None)
    warning: Optional[str] = dataclasses.field(default=None)
    
