import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentserviceexception as shared_documentserviceexception
from ..shared import uploaddocumentsresponse as shared_uploaddocumentsresponse

class UploadDocumentsFormatEnum(str, Enum):
    SDK = "sdk"


@dataclasses.dataclass
class UploadDocumentsQueryParams:
    format: UploadDocumentsFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    
class UploadDocumentsContentTypeEnum(str, Enum):
    APPLICATION_JSON = "application/json"
    APPLICATION_XML = "application/xml"


@dataclasses.dataclass
class UploadDocumentsHeaders:
    content_type: UploadDocumentsContentTypeEnum = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UploadDocumentsRequestBody:
    documents: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    

@dataclasses.dataclass
class UploadDocumentsRequest:
    headers: UploadDocumentsHeaders = dataclasses.field()
    query_params: UploadDocumentsQueryParams = dataclasses.field()
    request: UploadDocumentsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UploadDocumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_service_exception: Optional[shared_documentserviceexception.DocumentServiceException] = dataclasses.field(default=None)
    upload_documents_response: Optional[shared_uploaddocumentsresponse.UploadDocumentsResponse] = dataclasses.field(default=None)
    
