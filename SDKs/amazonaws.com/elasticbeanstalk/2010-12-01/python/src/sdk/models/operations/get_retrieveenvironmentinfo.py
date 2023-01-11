import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRetrieveEnvironmentInfoActionEnum(str, Enum):
    RETRIEVE_ENVIRONMENT_INFO = "RetrieveEnvironmentInfo"

class GetRetrieveEnvironmentInfoInfoTypeEnum(str, Enum):
    TAIL = "tail"
    BUNDLE = "bundle"

class GetRetrieveEnvironmentInfoVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetRetrieveEnvironmentInfoQueryParams:
    action: GetRetrieveEnvironmentInfoActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    info_type: GetRetrieveEnvironmentInfoInfoTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'InfoType', 'style': 'form', 'explode': True }})
    version: GetRetrieveEnvironmentInfoVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentId', 'style': 'form', 'explode': True }})
    environment_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRetrieveEnvironmentInfoHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRetrieveEnvironmentInfoRequest:
    headers: GetRetrieveEnvironmentInfoHeaders = dataclasses.field()
    query_params: GetRetrieveEnvironmentInfoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRetrieveEnvironmentInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
