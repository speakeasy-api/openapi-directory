import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetFunction20200531PathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Name', 'style': 'simple', 'explode': False }})
    
class GetFunction20200531StageEnum(str, Enum):
    DEVELOPMENT = "DEVELOPMENT"
    LIVE = "LIVE"


@dataclasses.dataclass
class GetFunction20200531QueryParams:
    stage: Optional[GetFunction20200531StageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Stage', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFunction20200531Headers:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFunction20200531Request:
    headers: GetFunction20200531Headers = dataclasses.field()
    path_params: GetFunction20200531PathParams = dataclasses.field()
    query_params: GetFunction20200531QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFunction20200531Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
