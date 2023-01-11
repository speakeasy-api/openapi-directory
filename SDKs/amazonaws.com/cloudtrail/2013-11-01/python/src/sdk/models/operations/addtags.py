import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import addtagsrequest as shared_addtagsrequest

class AddTagsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_ADD_TAGS = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"


@dataclasses.dataclass
class AddTagsHeaders:
    x_amz_target: AddTagsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddTagsRequest:
    headers: AddTagsHeaders = dataclasses.field()
    request: shared_addtagsrequest.AddTagsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_tags_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cloud_trail_arn_invalid_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_tag_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_trail_name_exception: Optional[Any] = dataclasses.field(default=None)
    not_organization_master_account_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    resource_type_not_supported_exception: Optional[Any] = dataclasses.field(default=None)
    tags_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
