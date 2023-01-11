import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import gettagvaluesinput as shared_gettagvaluesinput
from ..shared import gettagvaluesoutput as shared_gettagvaluesoutput


@dataclasses.dataclass
class GetTagValuesQueryParams:
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PaginationToken', 'style': 'form', 'explode': True }})
    
class GetTagValuesXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_GET_TAG_VALUES = "ResourceGroupsTaggingAPI_20170126.GetTagValues"


@dataclasses.dataclass
class GetTagValuesHeaders:
    x_amz_target: GetTagValuesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagValuesRequest:
    headers: GetTagValuesHeaders = dataclasses.field()
    query_params: GetTagValuesQueryParams = dataclasses.field()
    request: shared_gettagvaluesinput.GetTagValuesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetTagValuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_tag_values_output: Optional[shared_gettagvaluesoutput.GetTagValuesOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    pagination_token_expired_exception: Optional[Any] = dataclasses.field(default=None)
    throttled_exception: Optional[Any] = dataclasses.field(default=None)
    
