import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import activetrustedsigners as shared_activetrustedsigners
from ..shared import distributionconfig as shared_distributionconfig


@dataclasses.dataclass
class Distribution:
    r"""Distribution
    The distribution's information.
    """
    
    arn: str = dataclasses.field()
    active_trusted_signers: shared_activetrustedsigners.ActiveTrustedSigners = dataclasses.field()
    distribution_config: shared_distributionconfig.DistributionConfig = dataclasses.field()
    domain_name: str = dataclasses.field()
    id: str = dataclasses.field()
    in_progress_invalidation_batches: int = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    status: str = dataclasses.field()
    
