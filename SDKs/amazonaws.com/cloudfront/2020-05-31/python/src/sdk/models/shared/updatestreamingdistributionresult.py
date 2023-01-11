import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import streamingdistribution as shared_streamingdistribution


@dataclasses.dataclass
class UpdateStreamingDistributionResult:
    r"""UpdateStreamingDistributionResult
    The returned result of the corresponding request.
    """
    
    streaming_distribution: Optional[shared_streamingdistribution.StreamingDistribution] = dataclasses.field(default=None)
    
