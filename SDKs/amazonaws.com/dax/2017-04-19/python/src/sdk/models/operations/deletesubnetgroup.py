import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletesubnetgrouprequest as shared_deletesubnetgrouprequest
from ..shared import deletesubnetgroupresponse as shared_deletesubnetgroupresponse

class DeleteSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_DAXV3_DELETE_SUBNET_GROUP = "AmazonDAXV3.DeleteSubnetGroup"


@dataclasses.dataclass
class DeleteSubnetGroupHeaders:
    x_amz_target: DeleteSubnetGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSubnetGroupRequest:
    headers: DeleteSubnetGroupHeaders = dataclasses.field()
    request: shared_deletesubnetgrouprequest.DeleteSubnetGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteSubnetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_subnet_group_response: Optional[shared_deletesubnetgroupresponse.DeleteSubnetGroupResponse] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    subnet_group_in_use_fault: Optional[Any] = dataclasses.field(default=None)
    subnet_group_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
