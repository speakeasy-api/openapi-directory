import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import tagresourcesinput as shared_tagresourcesinput
from ..shared import tagresourcesoutput as shared_tagresourcesoutput

class TagResourcesXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_TAG_RESOURCES = "ResourceGroupsTaggingAPI_20170126.TagResources"


@dataclasses.dataclass
class TagResourcesHeaders:
    x_amz_target: TagResourcesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TagResourcesRequest:
    headers: TagResourcesHeaders = dataclasses.field()
    request: shared_tagresourcesinput.TagResourcesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TagResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    tag_resources_output: Optional[shared_tagresourcesoutput.TagResourcesOutput] = dataclasses.field(default=None)
    throttled_exception: Optional[Any] = dataclasses.field(default=None)
    
