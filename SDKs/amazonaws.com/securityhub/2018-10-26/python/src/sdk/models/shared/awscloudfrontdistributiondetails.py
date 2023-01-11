import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscloudfrontdistributioncachebehaviors as shared_awscloudfrontdistributioncachebehaviors
from ..shared import awscloudfrontdistributiondefaultcachebehavior as shared_awscloudfrontdistributiondefaultcachebehavior
from ..shared import awscloudfrontdistributionlogging as shared_awscloudfrontdistributionlogging
from ..shared import awscloudfrontdistributionorigingroups as shared_awscloudfrontdistributionorigingroups
from ..shared import awscloudfrontdistributionorigins as shared_awscloudfrontdistributionorigins


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionDetails:
    r"""AwsCloudFrontDistributionDetails
    A distribution configuration.
    """
    
    cache_behaviors: Optional[shared_awscloudfrontdistributioncachebehaviors.AwsCloudFrontDistributionCacheBehaviors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CacheBehaviors') }})
    default_cache_behavior: Optional[shared_awscloudfrontdistributiondefaultcachebehavior.AwsCloudFrontDistributionDefaultCacheBehavior] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultCacheBehavior') }})
    default_root_object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRootObject') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    e_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ETag') }})
    last_modified_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime') }})
    logging: Optional[shared_awscloudfrontdistributionlogging.AwsCloudFrontDistributionLogging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logging') }})
    origin_groups: Optional[shared_awscloudfrontdistributionorigingroups.AwsCloudFrontDistributionOriginGroups] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginGroups') }})
    origins: Optional[shared_awscloudfrontdistributionorigins.AwsCloudFrontDistributionOrigins] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Origins') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    web_acl_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebAclId') }})
    
