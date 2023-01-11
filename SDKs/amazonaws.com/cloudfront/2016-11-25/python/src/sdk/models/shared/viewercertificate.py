import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import minimumprotocolversion_enum as shared_minimumprotocolversion_enum
from ..shared import sslsupportmethod_enum as shared_sslsupportmethod_enum


@dataclasses.dataclass
class ViewerCertificate:
    r"""ViewerCertificate
    <p>A complex type that specifies the following:</p> <ul> <li> <p>Which SSL/TLS certificate to use when viewers request objects using HTTPS</p> </li> <li> <p>Whether you want CloudFront to use dedicated IP addresses or SNI when you're using alternate domain names in your object names</p> </li> <li> <p>The minimum protocol version that you want CloudFront to use when communicating with viewers</p> </li> </ul> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html\">Using an HTTPS Connection to Access Your Objects</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p>
    """
    
    acm_certificate_arn: Optional[str] = dataclasses.field(default=None)
    certificate: Optional[dict[str, Any]] = dataclasses.field(default=None)
    certificate_source: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cloud_front_default_certificate: Optional[bool] = dataclasses.field(default=None)
    iam_certificate_id: Optional[str] = dataclasses.field(default=None)
    minimum_protocol_version: Optional[shared_minimumprotocolversion_enum.MinimumProtocolVersionEnum] = dataclasses.field(default=None)
    ssl_support_method: Optional[shared_sslsupportmethod_enum.SslSupportMethodEnum] = dataclasses.field(default=None)
    
