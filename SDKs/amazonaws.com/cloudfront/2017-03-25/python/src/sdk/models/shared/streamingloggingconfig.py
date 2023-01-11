import dataclasses



@dataclasses.dataclass
class StreamingLoggingConfig:
    r"""StreamingLoggingConfig
    A complex type that controls whether access logs are written for this streaming distribution.
    """
    
    bucket: str = dataclasses.field()
    enabled: bool = dataclasses.field()
    prefix: str = dataclasses.field()
    
