import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeconfigurationrecordersrequest as shared_describeconfigurationrecordersrequest
from ..shared import describeconfigurationrecordersresponse as shared_describeconfigurationrecordersresponse

class DescribeConfigurationRecordersXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_RECORDERS = "StarlingDoveService.DescribeConfigurationRecorders"


@dataclasses.dataclass
class DescribeConfigurationRecordersHeaders:
    x_amz_target: DescribeConfigurationRecordersXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeConfigurationRecordersRequest:
    headers: DescribeConfigurationRecordersHeaders = dataclasses.field()
    request: shared_describeconfigurationrecordersrequest.DescribeConfigurationRecordersRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeConfigurationRecordersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_configuration_recorders_response: Optional[shared_describeconfigurationrecordersresponse.DescribeConfigurationRecordersResponse] = dataclasses.field(default=None)
    no_such_configuration_recorder_exception: Optional[Any] = dataclasses.field(default=None)
    
