import dataclasses
from typing import Optional
from ..shared import resourcequota as shared_resourcequota


@dataclasses.dataclass
class ResourceQuotas:
    r"""ResourceQuotas
    A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.
    """
    
    application_quota: Optional[shared_resourcequota.ResourceQuota] = dataclasses.field(default=None)
    application_version_quota: Optional[shared_resourcequota.ResourceQuota] = dataclasses.field(default=None)
    configuration_template_quota: Optional[shared_resourcequota.ResourceQuota] = dataclasses.field(default=None)
    custom_platform_quota: Optional[shared_resourcequota.ResourceQuota] = dataclasses.field(default=None)
    environment_quota: Optional[shared_resourcequota.ResourceQuota] = dataclasses.field(default=None)
    
