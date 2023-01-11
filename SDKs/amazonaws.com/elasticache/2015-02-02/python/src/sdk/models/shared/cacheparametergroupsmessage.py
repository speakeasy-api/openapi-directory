import dataclasses
from typing import Optional
from ..shared import cacheparametergrouplist as shared_cacheparametergrouplist


@dataclasses.dataclass
class CacheParameterGroupsMessage:
    r"""CacheParameterGroupsMessage
    Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
    """
    
    cache_parameter_groups: Optional[list[shared_cacheparametergrouplist.CacheParameterGroupList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
