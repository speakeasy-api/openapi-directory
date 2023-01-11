import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateJobActionEnum(str, Enum):
    UPDATE_JOB = "UpdateJob"

class GetUpdateJobJobTypeEnum(str, Enum):
    IMPORT = "Import"
    EXPORT = "Export"

class GetUpdateJobOperationEnum(str, Enum):
    UPDATE_JOB = "UpdateJob"

class GetUpdateJobVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclasses.dataclass
class GetUpdateJobQueryParams:
    aws_access_key_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetUpdateJobActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'JobId', 'style': 'form', 'explode': True }})
    job_type: GetUpdateJobJobTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'JobType', 'style': 'form', 'explode': True }})
    manifest: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Manifest', 'style': 'form', 'explode': True }})
    operation: GetUpdateJobOperationEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    validate_only: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'ValidateOnly', 'style': 'form', 'explode': True }})
    version: GetUpdateJobVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdateJobRequest:
    query_params: GetUpdateJobQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdateJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
