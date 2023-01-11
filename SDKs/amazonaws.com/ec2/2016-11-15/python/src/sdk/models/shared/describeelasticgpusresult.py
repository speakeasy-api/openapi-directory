import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeElasticGpusResult:
    elastic_gpu_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    max_results: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
