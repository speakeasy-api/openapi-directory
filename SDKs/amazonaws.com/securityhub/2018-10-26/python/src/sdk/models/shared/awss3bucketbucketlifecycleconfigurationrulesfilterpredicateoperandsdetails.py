import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandstagdetails as shared_awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandstagdetails


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
    A value to use for the filter.
    """
    
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    tag: Optional[shared_awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandstagdetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
