import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResourceQuota:
    r"""ResourceQuota
    The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.
    """
    
    maximum: Optional[int] = dataclasses.field(default=None)
    
