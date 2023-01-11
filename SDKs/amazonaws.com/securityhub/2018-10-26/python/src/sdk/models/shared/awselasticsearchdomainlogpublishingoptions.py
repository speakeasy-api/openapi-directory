import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awselasticsearchdomainlogpublishingoptionslogconfig as shared_awselasticsearchdomainlogpublishingoptionslogconfig


@dataclass_json
@dataclasses.dataclass
class AwsElasticsearchDomainLogPublishingOptions:
    r"""AwsElasticsearchDomainLogPublishingOptions
    configures the CloudWatch Logs to publish for the Elasticsearch domain.
    """
    
    audit_logs: Optional[shared_awselasticsearchdomainlogpublishingoptionslogconfig.AwsElasticsearchDomainLogPublishingOptionsLogConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuditLogs') }})
    index_slow_logs: Optional[shared_awselasticsearchdomainlogpublishingoptionslogconfig.AwsElasticsearchDomainLogPublishingOptionsLogConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexSlowLogs') }})
    search_slow_logs: Optional[shared_awselasticsearchdomainlogpublishingoptionslogconfig.AwsElasticsearchDomainLogPublishingOptionsLogConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchSlowLogs') }})
    
