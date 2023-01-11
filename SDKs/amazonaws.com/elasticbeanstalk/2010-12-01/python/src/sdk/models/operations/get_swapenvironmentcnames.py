import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetSwapEnvironmentCnamEsActionEnum(str, Enum):
    SWAP_ENVIRONMENT_CNAM_ES = "SwapEnvironmentCNAMEs"

class GetSwapEnvironmentCnamEsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetSwapEnvironmentCnamEsQueryParams:
    action: GetSwapEnvironmentCnamEsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetSwapEnvironmentCnamEsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    destination_environment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DestinationEnvironmentId', 'style': 'form', 'explode': True }})
    destination_environment_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DestinationEnvironmentName', 'style': 'form', 'explode': True }})
    source_environment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourceEnvironmentId', 'style': 'form', 'explode': True }})
    source_environment_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourceEnvironmentName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSwapEnvironmentCnamEsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSwapEnvironmentCnamEsRequest:
    headers: GetSwapEnvironmentCnamEsHeaders = dataclasses.field()
    query_params: GetSwapEnvironmentCnamEsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSwapEnvironmentCnamEsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
