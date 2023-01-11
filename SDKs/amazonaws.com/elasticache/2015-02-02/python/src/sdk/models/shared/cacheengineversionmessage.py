import dataclasses
from typing import Optional
from ..shared import cacheengineversionlist as shared_cacheengineversionlist


@dataclasses.dataclass
class CacheEngineVersionMessage:
    r"""CacheEngineVersionMessage
    Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
    """
    
    cache_engine_versions: Optional[list[shared_cacheengineversionlist.CacheEngineVersionList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
