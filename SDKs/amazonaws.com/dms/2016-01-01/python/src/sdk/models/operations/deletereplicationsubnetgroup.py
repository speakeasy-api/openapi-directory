import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletereplicationsubnetgroupmessage as shared_deletereplicationsubnetgroupmessage

class DeleteReplicationSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DELETE_REPLICATION_SUBNET_GROUP = "AmazonDMSv20160101.DeleteReplicationSubnetGroup"


@dataclasses.dataclass
class DeleteReplicationSubnetGroupHeaders:
    x_amz_target: DeleteReplicationSubnetGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteReplicationSubnetGroupRequest:
    headers: DeleteReplicationSubnetGroupHeaders = dataclasses.field()
    request: shared_deletereplicationsubnetgroupmessage.DeleteReplicationSubnetGroupMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteReplicationSubnetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_replication_subnet_group_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    invalid_resource_state_fault: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
