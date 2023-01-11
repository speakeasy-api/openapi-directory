import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import describeoperatingsystemsresponse as shared_describeoperatingsystemsresponse

class DescribeOperatingSystemsXAmzTargetEnum(str, Enum):
    OPS_WORKS_20130218_DESCRIBE_OPERATING_SYSTEMS = "OpsWorks_20130218.DescribeOperatingSystems"


@dataclasses.dataclass
class DescribeOperatingSystemsHeaders:
    x_amz_target: DescribeOperatingSystemsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeOperatingSystemsRequest:
    headers: DescribeOperatingSystemsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class DescribeOperatingSystemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_operating_systems_response: Optional[shared_describeoperatingsystemsresponse.DescribeOperatingSystemsResponse] = dataclasses.field(default=None)
    
