import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketwebsiteconfigurationroutingrulecondition as shared_awss3bucketwebsiteconfigurationroutingrulecondition
from ..shared import awss3bucketwebsiteconfigurationroutingruleredirect as shared_awss3bucketwebsiteconfigurationroutingruleredirect


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketWebsiteConfigurationRoutingRule:
    r"""AwsS3BucketWebsiteConfigurationRoutingRule
    A rule for redirecting requests to the website.
    """
    
    condition: Optional[shared_awss3bucketwebsiteconfigurationroutingrulecondition.AwsS3BucketWebsiteConfigurationRoutingRuleCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    redirect: Optional[shared_awss3bucketwebsiteconfigurationroutingruleredirect.AwsS3BucketWebsiteConfigurationRoutingRuleRedirect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redirect') }})
    
