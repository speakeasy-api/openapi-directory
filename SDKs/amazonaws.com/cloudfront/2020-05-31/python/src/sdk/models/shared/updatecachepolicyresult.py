import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import cachepolicy as shared_cachepolicy


@dataclasses.dataclass
class UpdateCachePolicyResult:
    cache_policy: Optional[shared_cachepolicy.CachePolicy] = dataclasses.field(default=None)
    
