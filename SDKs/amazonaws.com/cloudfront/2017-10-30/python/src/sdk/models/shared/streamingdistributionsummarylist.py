import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from ..shared import aliases as shared_aliases
from ..shared import priceclass_enum as shared_priceclass_enum
from ..shared import s3origin as shared_s3origin
from ..shared import trustedsigners as shared_trustedsigners


@dataclasses.dataclass
class StreamingDistributionSummaryList:
    r"""StreamingDistributionSummaryList
     A summary of the information for an Amazon CloudFront streaming distribution.
    """
    
    arn: str = dataclasses.field()
    aliases: shared_aliases.Aliases = dataclasses.field()
    comment: str = dataclasses.field()
    domain_name: str = dataclasses.field()
    enabled: bool = dataclasses.field()
    id: str = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    price_class: shared_priceclass_enum.PriceClassEnum = dataclasses.field()
    s3_origin: shared_s3origin.S3Origin = dataclasses.field()
    status: str = dataclasses.field()
    trusted_signers: shared_trustedsigners.TrustedSigners = dataclasses.field()
    
