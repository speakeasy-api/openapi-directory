import dataclasses
from typing import Optional
from ..shared import cachenodetypespecificparameterslist as shared_cachenodetypespecificparameterslist
from ..shared import parameterslist as shared_parameterslist


@dataclasses.dataclass
class EngineDefaults:
    r"""EngineDefaults
    Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
    """
    
    cache_node_type_specific_parameters: Optional[list[shared_cachenodetypespecificparameterslist.CacheNodeTypeSpecificParametersList]] = dataclasses.field(default=None)
    cache_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    parameters: Optional[list[shared_parameterslist.ParametersList]] = dataclasses.field(default=None)
    
