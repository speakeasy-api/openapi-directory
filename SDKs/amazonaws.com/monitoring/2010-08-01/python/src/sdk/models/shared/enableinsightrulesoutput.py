import dataclasses
from typing import Optional
from ..shared import partialfailure as shared_partialfailure


@dataclasses.dataclass
class EnableInsightRulesOutput:
    failures: Optional[list[shared_partialfailure.PartialFailure]] = dataclasses.field(default=None)
    
