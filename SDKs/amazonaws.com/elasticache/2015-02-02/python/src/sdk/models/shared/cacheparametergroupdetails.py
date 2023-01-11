import dataclasses
from typing import Optional
from ..shared import cachenodetypespecificparameterslist as shared_cachenodetypespecificparameterslist
from ..shared import parameterslist as shared_parameterslist


@dataclasses.dataclass
class CacheParameterGroupDetails:
    r"""CacheParameterGroupDetails
    Represents the output of a <code>DescribeCacheParameters</code> operation.
    """
    
    cache_node_type_specific_parameters: Optional[list[shared_cachenodetypespecificparameterslist.CacheNodeTypeSpecificParametersList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    parameters: Optional[list[shared_parameterslist.ParametersList]] = dataclasses.field(default=None)
    
