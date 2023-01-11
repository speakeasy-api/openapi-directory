import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import distribution as shared_distribution


@dataclasses.dataclass
class UpdateDistributionResult:
    r"""UpdateDistributionResult
    The returned result of the corresponding request.
    """
    
    distribution: Optional[shared_distribution.Distribution] = dataclasses.field(default=None)
    
