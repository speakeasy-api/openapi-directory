import dataclasses
from typing import Optional
from ..shared import maxagerule as shared_maxagerule
from ..shared import maxcountrule as shared_maxcountrule


@dataclasses.dataclass
class ApplicationVersionLifecycleConfig:
    r"""ApplicationVersionLifecycleConfig
    <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>
    """
    
    max_age_rule: Optional[shared_maxagerule.MaxAgeRule] = dataclasses.field(default=None)
    max_count_rule: Optional[shared_maxcountrule.MaxCountRule] = dataclasses.field(default=None)
    
