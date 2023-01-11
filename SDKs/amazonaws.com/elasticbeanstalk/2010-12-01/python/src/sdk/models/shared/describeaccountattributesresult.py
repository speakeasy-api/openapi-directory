import dataclasses
from typing import Optional
from ..shared import resourcequotas as shared_resourcequotas


@dataclasses.dataclass
class DescribeAccountAttributesResult:
    resource_quotas: Optional[shared_resourcequotas.ResourceQuotas] = dataclasses.field(default=None)
    
