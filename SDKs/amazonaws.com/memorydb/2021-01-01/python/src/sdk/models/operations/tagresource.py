import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import tagresourcerequest as shared_tagresourcerequest
from ..shared import tagresourceresponse as shared_tagresourceresponse

class TagResourceXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_TAG_RESOURCE = "AmazonMemoryDB.TagResource"


@dataclasses.dataclass
class TagResourceHeaders:
    x_amz_target: TagResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TagResourceRequest:
    headers: TagResourceHeaders = dataclasses.field()
    request: shared_tagresourcerequest.TagResourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TagResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    acl_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    cluster_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_arn_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_cluster_state_fault: Optional[Any] = dataclasses.field(default=None)
    parameter_group_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    snapshot_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    subnet_group_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = dataclasses.field(default=None)
    tag_resource_response: Optional[shared_tagresourceresponse.TagResourceResponse] = dataclasses.field(default=None)
    user_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
