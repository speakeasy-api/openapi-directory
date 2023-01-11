import dataclasses
from typing import Optional
from enum import Enum

class GetV1VerificationResultFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetV1VerificationResultQueryParams:
    key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    otp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'otp', 'style': 'form', 'explode': True }})
    tran_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tran_id', 'style': 'form', 'explode': True }})
    format: Optional[GetV1VerificationResultFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV1VerificationResultRequest:
    query_params: GetV1VerificationResultQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV1VerificationResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_v1_verification_result_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
