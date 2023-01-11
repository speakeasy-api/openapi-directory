import dataclasses
from typing import Optional
from enum import Enum

class GetCancelJobActionEnum(str, Enum):
    CANCEL_JOB = "CancelJob"

class GetCancelJobOperationEnum(str, Enum):
    CANCEL_JOB = "CancelJob"

class GetCancelJobVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclasses.dataclass
class GetCancelJobQueryParams:
    aws_access_key_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetCancelJobActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'JobId', 'style': 'form', 'explode': True }})
    operation: GetCancelJobOperationEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetCancelJobVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCancelJobRequest:
    query_params: GetCancelJobQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCancelJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
