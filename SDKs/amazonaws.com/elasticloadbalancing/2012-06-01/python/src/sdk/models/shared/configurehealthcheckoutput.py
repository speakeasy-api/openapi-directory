import dataclasses
from typing import Optional
from ..shared import healthcheck as shared_healthcheck


@dataclasses.dataclass
class ConfigureHealthCheckOutput:
    r"""ConfigureHealthCheckOutput
    Contains the output of ConfigureHealthCheck.
    """
    
    health_check: Optional[shared_healthcheck.HealthCheck] = dataclasses.field(default=None)
    
