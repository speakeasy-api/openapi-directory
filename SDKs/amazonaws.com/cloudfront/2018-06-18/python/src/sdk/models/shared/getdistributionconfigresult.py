import dataclasses
from typing import Optional
from ..shared import distributionconfig as shared_distributionconfig


@dataclasses.dataclass
class GetDistributionConfigResult:
    r"""GetDistributionConfigResult
    The returned result of the corresponding request.
    """
    
    distribution_config: Optional[shared_distributionconfig.DistributionConfig] = dataclasses.field(default=None)
    
