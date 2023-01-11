import dataclasses
from ..shared import paths as shared_paths


@dataclasses.dataclass
class InvalidationBatch:
    r"""InvalidationBatch
    An invalidation batch.
    """
    
    caller_reference: str = dataclasses.field()
    paths: shared_paths.Paths = dataclasses.field()
    
