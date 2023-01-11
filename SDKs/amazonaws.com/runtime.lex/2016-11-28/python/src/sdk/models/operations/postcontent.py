import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postcontentresponse as shared_postcontentresponse


@dataclasses.dataclass
class PostContentPathParams:
    bot_alias: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botAlias', 'style': 'simple', 'explode': False }})
    bot_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botName', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContentHeaders:
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_lex_active_contexts: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-lex-active-contexts', 'style': 'simple', 'explode': False }})
    x_amz_lex_request_attributes: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-lex-request-attributes', 'style': 'simple', 'explode': False }})
    x_amz_lex_session_attributes: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-lex-session-attributes', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostContentRequestBody:
    input_stream: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputStream') }})
    

@dataclasses.dataclass
class PostContentRequest:
    headers: PostContentHeaders = dataclasses.field()
    path_params: PostContentPathParams = dataclasses.field()
    request: PostContentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_gateway_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    dependency_failed_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    loop_detected_exception: Optional[Any] = dataclasses.field(default=None)
    not_acceptable_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    post_content_response: Optional[shared_postcontentresponse.PostContentResponse] = dataclasses.field(default=None)
    request_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_media_type_exception: Optional[Any] = dataclasses.field(default=None)
    
