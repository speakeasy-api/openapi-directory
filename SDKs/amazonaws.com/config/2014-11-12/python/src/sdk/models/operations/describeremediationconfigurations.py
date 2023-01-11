import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import describeremediationconfigurationsrequest as shared_describeremediationconfigurationsrequest
from ..shared import describeremediationconfigurationsresponse as shared_describeremediationconfigurationsresponse

class DescribeRemediationConfigurationsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_REMEDIATION_CONFIGURATIONS = "StarlingDoveService.DescribeRemediationConfigurations"


@dataclasses.dataclass
class DescribeRemediationConfigurationsHeaders:
    x_amz_target: DescribeRemediationConfigurationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeRemediationConfigurationsRequest:
    headers: DescribeRemediationConfigurationsHeaders = dataclasses.field()
    request: shared_describeremediationconfigurationsrequest.DescribeRemediationConfigurationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeRemediationConfigurationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_remediation_configurations_response: Optional[shared_describeremediationconfigurationsresponse.DescribeRemediationConfigurationsResponse] = dataclasses.field(default=None)
    
