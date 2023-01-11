import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import modifyreplicationsubnetgroupmessage as shared_modifyreplicationsubnetgroupmessage
from ..shared import modifyreplicationsubnetgroupresponse as shared_modifyreplicationsubnetgroupresponse

class ModifyReplicationSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_MODIFY_REPLICATION_SUBNET_GROUP = "AmazonDMSv20160101.ModifyReplicationSubnetGroup"


@dataclasses.dataclass
class ModifyReplicationSubnetGroupHeaders:
    x_amz_target: ModifyReplicationSubnetGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ModifyReplicationSubnetGroupRequest:
    headers: ModifyReplicationSubnetGroupHeaders = dataclasses.field()
    request: shared_modifyreplicationsubnetgroupmessage.ModifyReplicationSubnetGroupMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ModifyReplicationSubnetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_subnet: Optional[Any] = dataclasses.field(default=None)
    modify_replication_subnet_group_response: Optional[shared_modifyreplicationsubnetgroupresponse.ModifyReplicationSubnetGroupResponse] = dataclasses.field(default=None)
    replication_subnet_group_does_not_cover_enough_a_zs: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    resource_quota_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    subnet_already_in_use: Optional[Any] = dataclasses.field(default=None)
    
