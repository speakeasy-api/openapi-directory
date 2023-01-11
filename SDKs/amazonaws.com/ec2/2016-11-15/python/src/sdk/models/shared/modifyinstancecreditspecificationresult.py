import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyInstanceCreditSpecificationResult:
    successful_instance_credit_specifications: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unsuccessful_instance_credit_specifications: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
