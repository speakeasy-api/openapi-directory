import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeaccountassignmentdeletionstatusrequest as shared_describeaccountassignmentdeletionstatusrequest
from ..shared import describeaccountassignmentdeletionstatusresponse as shared_describeaccountassignmentdeletionstatusresponse

class DescribeAccountAssignmentDeletionStatusXAmzTargetEnum(str, Enum):
    SWB_EXTERNAL_SERVICE_DESCRIBE_ACCOUNT_ASSIGNMENT_DELETION_STATUS = "SWBExternalService.DescribeAccountAssignmentDeletionStatus"


@dataclasses.dataclass
class DescribeAccountAssignmentDeletionStatusHeaders:
    x_amz_target: DescribeAccountAssignmentDeletionStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeAccountAssignmentDeletionStatusRequest:
    headers: DescribeAccountAssignmentDeletionStatusHeaders = dataclasses.field()
    request: shared_describeaccountassignmentdeletionstatusrequest.DescribeAccountAssignmentDeletionStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeAccountAssignmentDeletionStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    describe_account_assignment_deletion_status_response: Optional[shared_describeaccountassignmentdeletionstatusresponse.DescribeAccountAssignmentDeletionStatusResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
