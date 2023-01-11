import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscloudfrontdistributionorigins3originconfig as shared_awscloudfrontdistributionorigins3originconfig


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionOriginItem:
    r"""AwsCloudFrontDistributionOriginItem
    A complex type that describes the S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.
    """
    
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    origin_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginPath') }})
    s3_origin_config: Optional[shared_awscloudfrontdistributionorigins3originconfig.AwsCloudFrontDistributionOriginS3OriginConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OriginConfig') }})
    
