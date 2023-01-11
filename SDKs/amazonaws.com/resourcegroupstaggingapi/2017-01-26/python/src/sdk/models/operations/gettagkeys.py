import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import gettagkeysinput as shared_gettagkeysinput
from ..shared import gettagkeysoutput as shared_gettagkeysoutput


@dataclasses.dataclass
class GetTagKeysQueryParams:
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PaginationToken', 'style': 'form', 'explode': True }})
    
class GetTagKeysXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_GET_TAG_KEYS = "ResourceGroupsTaggingAPI_20170126.GetTagKeys"


@dataclasses.dataclass
class GetTagKeysHeaders:
    x_amz_target: GetTagKeysXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagKeysRequest:
    headers: GetTagKeysHeaders = dataclasses.field()
    query_params: GetTagKeysQueryParams = dataclasses.field()
    request: shared_gettagkeysinput.GetTagKeysInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetTagKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_tag_keys_output: Optional[shared_gettagkeysoutput.GetTagKeysOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    pagination_token_expired_exception: Optional[Any] = dataclasses.field(default=None)
    throttled_exception: Optional[Any] = dataclasses.field(default=None)
    
