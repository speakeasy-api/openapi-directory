import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getlexiconoutput as shared_getlexiconoutput


@dataclasses.dataclass
class GetLexiconPathParams:
    lexicon_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'LexiconName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLexiconHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLexiconRequest:
    headers: GetLexiconHeaders = dataclasses.field()
    path_params: GetLexiconPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLexiconResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_lexicon_output: Optional[shared_getlexiconoutput.GetLexiconOutput] = dataclasses.field(default=None)
    lexicon_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_failure_exception: Optional[Any] = dataclasses.field(default=None)
    
