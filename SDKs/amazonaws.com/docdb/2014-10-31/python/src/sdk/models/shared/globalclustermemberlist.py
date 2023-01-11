import dataclasses
from typing import Optional


@dataclasses.dataclass
class GlobalClusterMemberList:
    r"""GlobalClusterMemberList
    A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters. 
    """
    
    db_cluster_arn: Optional[str] = dataclasses.field(default=None)
    is_writer: Optional[bool] = dataclasses.field(default=None)
    readers: Optional[list[str]] = dataclasses.field(default=None)
    
