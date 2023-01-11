import dataclasses
from typing import Optional


@dataclasses.dataclass
class Endpoint:
    r"""Endpoint
    <p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
    """
    
    address: Optional[str] = dataclasses.field(default=None)
    hosted_zone_id: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    
