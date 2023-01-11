import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import modifyreplicationinstancemessage as shared_modifyreplicationinstancemessage
from ..shared import modifyreplicationinstanceresponse as shared_modifyreplicationinstanceresponse

class ModifyReplicationInstanceXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_MODIFY_REPLICATION_INSTANCE = "AmazonDMSv20160101.ModifyReplicationInstance"


@dataclasses.dataclass
class ModifyReplicationInstanceHeaders:
    x_amz_target: ModifyReplicationInstanceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ModifyReplicationInstanceRequest:
    headers: ModifyReplicationInstanceHeaders = dataclasses.field()
    request: shared_modifyreplicationinstancemessage.ModifyReplicationInstanceMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ModifyReplicationInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_fault: Optional[Any] = dataclasses.field(default=None)
    insufficient_resource_capacity_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_state_fault: Optional[Any] = dataclasses.field(default=None)
    modify_replication_instance_response: Optional[shared_modifyreplicationinstanceresponse.ModifyReplicationInstanceResponse] = dataclasses.field(default=None)
    resource_already_exists_fault: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    storage_quota_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    upgrade_dependency_failure_fault: Optional[Any] = dataclasses.field(default=None)
    
