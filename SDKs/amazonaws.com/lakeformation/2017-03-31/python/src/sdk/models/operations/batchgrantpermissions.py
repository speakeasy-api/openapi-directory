import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgrantpermissionsrequest as shared_batchgrantpermissionsrequest
from ..shared import batchgrantpermissionsresponse as shared_batchgrantpermissionsresponse

class BatchGrantPermissionsXAmzTargetEnum(str, Enum):
    AWS_LAKE_FORMATION_BATCH_GRANT_PERMISSIONS = "AWSLakeFormation.BatchGrantPermissions"


@dataclasses.dataclass
class BatchGrantPermissionsHeaders:
    x_amz_target: BatchGrantPermissionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGrantPermissionsRequest:
    headers: BatchGrantPermissionsHeaders = dataclasses.field()
    request: shared_batchgrantpermissionsrequest.BatchGrantPermissionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGrantPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_grant_permissions_response: Optional[shared_batchgrantpermissionsresponse.BatchGrantPermissionsResponse] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    
