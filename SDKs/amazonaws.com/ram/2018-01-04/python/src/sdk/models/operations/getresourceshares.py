import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagfilter as shared_tagfilter
from ..shared import getresourcesharesresponse as shared_getresourcesharesresponse


@dataclasses.dataclass
class GetResourceSharesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResourceSharesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetResourceSharesRequestBodyResourceOwnerEnum(str, Enum):
    SELF = "SELF"
    OTHER_ACCOUNTS = "OTHER-ACCOUNTS"

class GetResourceSharesRequestBodyResourceShareStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    DELETED = "DELETED"


@dataclass_json
@dataclasses.dataclass
class GetResourceSharesRequestBody:
    resource_owner: GetResourceSharesRequestBodyResourceOwnerEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOwner') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    permission_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionArn') }})
    resource_share_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareArns') }})
    resource_share_status: Optional[GetResourceSharesRequestBodyResourceShareStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareStatus') }})
    tag_filters: Optional[list[shared_tagfilter.TagFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilters') }})
    

@dataclasses.dataclass
class GetResourceSharesRequest:
    headers: GetResourceSharesHeaders = dataclasses.field()
    query_params: GetResourceSharesQueryParams = dataclasses.field()
    request: GetResourceSharesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetResourceSharesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resource_shares_response: Optional[shared_getresourcesharesresponse.GetResourceSharesResponse] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    malformed_arn_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_exception: Optional[Any] = dataclasses.field(default=None)
    
