import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRemoveTagsFromResourceActionEnum(str, Enum):
    REMOVE_TAGS_FROM_RESOURCE = "RemoveTagsFromResource"

class GetRemoveTagsFromResourceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclasses.dataclass
class GetRemoveTagsFromResourceQueryParams:
    action: GetRemoveTagsFromResourceActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    resource_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ResourceName', 'style': 'form', 'explode': True }})
    tag_keys: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'TagKeys', 'style': 'form', 'explode': True }})
    version: GetRemoveTagsFromResourceVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRemoveTagsFromResourceHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRemoveTagsFromResourceRequest:
    headers: GetRemoveTagsFromResourceHeaders = dataclasses.field()
    query_params: GetRemoveTagsFromResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRemoveTagsFromResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
