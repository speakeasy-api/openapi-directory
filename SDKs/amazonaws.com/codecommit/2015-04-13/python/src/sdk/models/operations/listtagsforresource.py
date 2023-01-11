import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listtagsforresourceinput as shared_listtagsforresourceinput
from ..shared import listtagsforresourceoutput as shared_listtagsforresourceoutput

class ListTagsForResourceXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_TAGS_FOR_RESOURCE = "CodeCommit_20150413.ListTagsForResource"


@dataclasses.dataclass
class ListTagsForResourceHeaders:
    x_amz_target: ListTagsForResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTagsForResourceRequest:
    headers: ListTagsForResourceHeaders = dataclasses.field()
    request: shared_listtagsforresourceinput.ListTagsForResourceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListTagsForResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_arn_exception: Optional[Any] = dataclasses.field(default=None)
    list_tags_for_resource_output: Optional[shared_listtagsforresourceoutput.ListTagsForResourceOutput] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    resource_arn_required_exception: Optional[Any] = dataclasses.field(default=None)
    
