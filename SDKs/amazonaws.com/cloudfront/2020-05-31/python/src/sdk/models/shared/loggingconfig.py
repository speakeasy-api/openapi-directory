import dataclasses



@dataclasses.dataclass
class LoggingConfig:
    r"""LoggingConfig
    A complex type that controls whether access logs are written for the distribution.
    """
    
    bucket: str = dataclasses.field()
    enabled: bool = dataclasses.field()
    include_cookies: bool = dataclasses.field()
    prefix: str = dataclasses.field()
    
