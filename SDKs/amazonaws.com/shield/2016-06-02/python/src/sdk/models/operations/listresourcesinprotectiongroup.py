import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listresourcesinprotectiongrouprequest as shared_listresourcesinprotectiongrouprequest
from ..shared import listresourcesinprotectiongroupresponse as shared_listresourcesinprotectiongroupresponse


@dataclasses.dataclass
class ListResourcesInProtectionGroupQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListResourcesInProtectionGroupXAmzTargetEnum(str, Enum):
    AWS_SHIELD_20160616_LIST_RESOURCES_IN_PROTECTION_GROUP = "AWSShield_20160616.ListResourcesInProtectionGroup"


@dataclasses.dataclass
class ListResourcesInProtectionGroupHeaders:
    x_amz_target: ListResourcesInProtectionGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListResourcesInProtectionGroupRequest:
    headers: ListResourcesInProtectionGroupHeaders = dataclasses.field()
    query_params: ListResourcesInProtectionGroupQueryParams = dataclasses.field()
    request: shared_listresourcesinprotectiongrouprequest.ListResourcesInProtectionGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListResourcesInProtectionGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pagination_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_resources_in_protection_group_response: Optional[shared_listresourcesinprotectiongroupresponse.ListResourcesInProtectionGroupResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
