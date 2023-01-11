import dataclasses
from typing import Any
from ..shared import endpoint as shared_endpoint


@dataclasses.dataclass
class RealtimeLogConfig:
    r"""RealtimeLogConfig
    A real-time log configuration.
    """
    
    arn: str = dataclasses.field()
    end_points: list[shared_endpoint.EndPoint] = dataclasses.field()
    fields: list[dict[str, Any]] = dataclasses.field()
    name: str = dataclasses.field()
    sampling_rate: int = dataclasses.field()
    
