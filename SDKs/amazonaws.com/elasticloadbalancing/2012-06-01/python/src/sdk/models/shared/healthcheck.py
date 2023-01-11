import dataclasses



@dataclasses.dataclass
class HealthCheck:
    r"""HealthCheck
    Information about a health check.
    """
    
    healthy_threshold: int = dataclasses.field()
    interval: int = dataclasses.field()
    target: str = dataclasses.field()
    timeout: int = dataclasses.field()
    unhealthy_threshold: int = dataclasses.field()
    
