"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import createsequencestoreresponse as shared_createsequencestoreresponse
from ..shared import encryptiontype_enum as shared_encryptiontype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateSequenceStoreRequestBodySseConfig:
    r"""Server-side encryption (SSE) settings for a store."""
    
    key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('keyArn'), 'exclude': lambda f: f is None }})  
    type: Optional[shared_encryptiontype_enum.EncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateSequenceStoreRequestBody:
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""A name for the store."""  
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('clientToken'), 'exclude': lambda f: f is None }})
    r"""To ensure that requests don't run multiple times, specify a unique token for each request."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""A description for the store."""  
    sse_config: Optional[CreateSequenceStoreRequestBodySseConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sseConfig'), 'exclude': lambda f: f is None }})
    r"""Server-side encryption (SSE) settings for a store."""  
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tags'), 'exclude': lambda f: f is None }})
    r"""Tags for the store."""  
    

@dataclasses.dataclass
class CreateSequenceStoreRequest:
    
    request_body: CreateSequenceStoreRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class CreateSequenceStoreResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    create_sequence_store_response: Optional[shared_createsequencestoreresponse.CreateSequenceStoreResponse] = dataclasses.field(default=None)
    r"""Success"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    request_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    r"""RequestTimeoutException"""  
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ServiceQuotaExceededException"""  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    