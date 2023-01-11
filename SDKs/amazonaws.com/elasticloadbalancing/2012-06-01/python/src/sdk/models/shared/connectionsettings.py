import dataclasses



@dataclasses.dataclass
class ConnectionSettings:
    r"""ConnectionSettings
    Information about the <code>ConnectionSettings</code> attribute.
    """
    
    idle_timeout: int = dataclasses.field()
    
