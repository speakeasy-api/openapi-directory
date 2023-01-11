import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import addtagstoresourcemessage as shared_addtagstoresourcemessage

class AddTagsToResourceXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_ADD_TAGS_TO_RESOURCE = "AmazonDMSv20160101.AddTagsToResource"


@dataclasses.dataclass
class AddTagsToResourceHeaders:
    x_amz_target: AddTagsToResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddTagsToResourceRequest:
    headers: AddTagsToResourceHeaders = dataclasses.field()
    request: shared_addtagstoresourcemessage.AddTagsToResourceMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddTagsToResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_tags_to_resource_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
