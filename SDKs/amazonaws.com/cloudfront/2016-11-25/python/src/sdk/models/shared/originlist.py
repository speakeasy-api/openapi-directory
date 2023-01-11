import dataclasses
from typing import Optional
from ..shared import customheaders as shared_customheaders
from ..shared import customoriginconfig as shared_customoriginconfig
from ..shared import s3originconfig as shared_s3originconfig


@dataclasses.dataclass
class OriginList:
    r"""OriginList
    <p>A complex type that describes the Amazon S3 bucket or the HTTP server (for example, a web server) from which CloudFront gets your files. You must create at least one origin.</p> <p>For the current limit on the number of origins that you can create for a distribution, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront\">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
    """
    
    domain_name: str = dataclasses.field()
    id: str = dataclasses.field()
    custom_headers: Optional[shared_customheaders.CustomHeaders] = dataclasses.field(default=None)
    custom_origin_config: Optional[shared_customoriginconfig.CustomOriginConfig] = dataclasses.field(default=None)
    origin_path: Optional[str] = dataclasses.field(default=None)
    s3_origin_config: Optional[shared_s3originconfig.S3OriginConfig] = dataclasses.field(default=None)
    
