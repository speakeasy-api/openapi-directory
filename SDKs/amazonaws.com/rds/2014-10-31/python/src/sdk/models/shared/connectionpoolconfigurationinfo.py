import dataclasses
from typing import Optional


@dataclasses.dataclass
class ConnectionPoolConfigurationInfo:
    r"""ConnectionPoolConfigurationInfo
    Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.
    """
    
    connection_borrow_timeout: Optional[int] = dataclasses.field(default=None)
    init_query: Optional[str] = dataclasses.field(default=None)
    max_connections_percent: Optional[int] = dataclasses.field(default=None)
    max_idle_connections_percent: Optional[int] = dataclasses.field(default=None)
    session_pinning_filters: Optional[list[str]] = dataclasses.field(default=None)
    
