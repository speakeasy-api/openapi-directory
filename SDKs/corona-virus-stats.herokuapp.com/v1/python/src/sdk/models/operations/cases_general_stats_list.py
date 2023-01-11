import dataclasses
from typing import Optional
from ..shared import generalstats as shared_generalstats


@dataclasses.dataclass
class CasesGeneralStatsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    general_stats: Optional[list[shared_generalstats.GeneralStats]] = dataclasses.field(default=None)
    
