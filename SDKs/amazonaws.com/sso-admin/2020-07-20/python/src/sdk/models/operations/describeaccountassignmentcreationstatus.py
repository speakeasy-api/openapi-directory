import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeaccountassignmentcreationstatusrequest as shared_describeaccountassignmentcreationstatusrequest
from ..shared import describeaccountassignmentcreationstatusresponse as shared_describeaccountassignmentcreationstatusresponse

class DescribeAccountAssignmentCreationStatusXAmzTargetEnum(str, Enum):
    SWB_EXTERNAL_SERVICE_DESCRIBE_ACCOUNT_ASSIGNMENT_CREATION_STATUS = "SWBExternalService.DescribeAccountAssignmentCreationStatus"


@dataclasses.dataclass
class DescribeAccountAssignmentCreationStatusHeaders:
    x_amz_target: DescribeAccountAssignmentCreationStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeAccountAssignmentCreationStatusRequest:
    headers: DescribeAccountAssignmentCreationStatusHeaders = dataclasses.field()
    request: shared_describeaccountassignmentcreationstatusrequest.DescribeAccountAssignmentCreationStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeAccountAssignmentCreationStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    describe_account_assignment_creation_status_response: Optional[shared_describeaccountassignmentcreationstatusresponse.DescribeAccountAssignmentCreationStatusResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
