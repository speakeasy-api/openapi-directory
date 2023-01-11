import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketwebsiteconfigurationredirectto as shared_awss3bucketwebsiteconfigurationredirectto
from ..shared import awss3bucketwebsiteconfigurationroutingrule as shared_awss3bucketwebsiteconfigurationroutingrule


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketWebsiteConfiguration:
    r"""AwsS3BucketWebsiteConfiguration
    Website parameters for the S3 bucket.
    """
    
    error_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDocument') }})
    index_document_suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexDocumentSuffix') }})
    redirect_all_requests_to: Optional[shared_awss3bucketwebsiteconfigurationredirectto.AwsS3BucketWebsiteConfigurationRedirectTo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectAllRequestsTo') }})
    routing_rules: Optional[list[shared_awss3bucketwebsiteconfigurationroutingrule.AwsS3BucketWebsiteConfigurationRoutingRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingRules') }})
    
