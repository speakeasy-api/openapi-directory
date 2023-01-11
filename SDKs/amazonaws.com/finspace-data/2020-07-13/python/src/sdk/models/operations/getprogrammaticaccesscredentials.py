import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getprogrammaticaccesscredentialsresponse as shared_getprogrammaticaccesscredentialsresponse


@dataclasses.dataclass
class GetProgrammaticAccessCredentialsQueryParams:
    environment_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'environmentId', 'style': 'form', 'explode': True }})
    duration_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'durationInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProgrammaticAccessCredentialsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProgrammaticAccessCredentialsRequest:
    headers: GetProgrammaticAccessCredentialsHeaders = dataclasses.field()
    query_params: GetProgrammaticAccessCredentialsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProgrammaticAccessCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_programmatic_access_credentials_response: Optional[shared_getprogrammaticaccesscredentialsresponse.GetProgrammaticAccessCredentialsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
