import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandsdetails as shared_awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandsdetails
from ..shared import awss3bucketbucketlifecycleconfigurationrulesfilterpredicatetagdetails as shared_awss3bucketbucketlifecycleconfigurationrulesfilterpredicatetagdetails


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
    The configuration for the filter.
    """
    
    operands: Optional[list[shared_awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandsdetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operands') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    tag: Optional[shared_awss3bucketbucketlifecycleconfigurationrulesfilterpredicatetagdetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
