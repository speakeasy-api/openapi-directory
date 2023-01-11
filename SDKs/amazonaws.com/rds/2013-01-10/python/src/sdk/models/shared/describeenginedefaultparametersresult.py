import dataclasses
from typing import Optional
from ..shared import enginedefaults as shared_enginedefaults


@dataclasses.dataclass
class DescribeEngineDefaultParametersResult:
    engine_defaults: Optional[shared_enginedefaults.EngineDefaults] = dataclasses.field(default=None)
    
