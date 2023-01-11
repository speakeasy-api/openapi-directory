import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleterelationaldatabasesnapshotrequest as shared_deleterelationaldatabasesnapshotrequest
from ..shared import deleterelationaldatabasesnapshotresult as shared_deleterelationaldatabasesnapshotresult

class DeleteRelationalDatabaseSnapshotXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_DELETE_RELATIONAL_DATABASE_SNAPSHOT = "Lightsail_20161128.DeleteRelationalDatabaseSnapshot"


@dataclasses.dataclass
class DeleteRelationalDatabaseSnapshotHeaders:
    x_amz_target: DeleteRelationalDatabaseSnapshotXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRelationalDatabaseSnapshotRequest:
    headers: DeleteRelationalDatabaseSnapshotHeaders = dataclasses.field()
    request: shared_deleterelationaldatabasesnapshotrequest.DeleteRelationalDatabaseSnapshotRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteRelationalDatabaseSnapshotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    account_setup_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    delete_relational_database_snapshot_result: Optional[shared_deleterelationaldatabasesnapshotresult.DeleteRelationalDatabaseSnapshotResult] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    operation_failure_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    unauthenticated_exception: Optional[Any] = dataclasses.field(default=None)
    
