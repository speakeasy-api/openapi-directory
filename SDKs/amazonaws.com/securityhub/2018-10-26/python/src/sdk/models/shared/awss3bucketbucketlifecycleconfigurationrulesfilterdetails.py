import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketbucketlifecycleconfigurationrulesfilterpredicatedetails as shared_awss3bucketbucketlifecycleconfigurationrulesfilterpredicatedetails


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails
    Identifies the objects that a rule applies to.
    """
    
    predicate: Optional[shared_awss3bucketbucketlifecycleconfigurationrulesfilterpredicatedetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predicate') }})
    
