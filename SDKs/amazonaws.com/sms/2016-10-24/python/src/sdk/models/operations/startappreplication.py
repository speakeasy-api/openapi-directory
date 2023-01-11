import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startappreplicationrequest as shared_startappreplicationrequest

class StartAppReplicationXAmzTargetEnum(str, Enum):
    AWS_SERVER_MIGRATION_SERVICE_V2016_10_24_START_APP_REPLICATION = "AWSServerMigrationService_V2016_10_24.StartAppReplication"


@dataclasses.dataclass
class StartAppReplicationHeaders:
    x_amz_target: StartAppReplicationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartAppReplicationRequest:
    headers: StartAppReplicationHeaders = dataclasses.field()
    request: shared_startappreplicationrequest.StartAppReplicationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartAppReplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_error: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    missing_required_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    start_app_replication_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unauthorized_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
