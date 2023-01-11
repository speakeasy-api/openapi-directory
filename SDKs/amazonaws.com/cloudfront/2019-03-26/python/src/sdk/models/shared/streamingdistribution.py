import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import activetrustedsigners as shared_activetrustedsigners
from ..shared import streamingdistributionconfig as shared_streamingdistributionconfig


@dataclasses.dataclass
class StreamingDistribution:
    r"""StreamingDistribution
    A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
    """
    
    arn: str = dataclasses.field()
    active_trusted_signers: shared_activetrustedsigners.ActiveTrustedSigners = dataclasses.field()
    domain_name: str = dataclasses.field()
    id: str = dataclasses.field()
    status: str = dataclasses.field()
    streaming_distribution_config: shared_streamingdistributionconfig.StreamingDistributionConfig = dataclasses.field()
    last_modified_time: Optional[datetime] = dataclasses.field(default=None)
    
