import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutLexiconPathParams:
    lexicon_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'LexiconName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutLexiconHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutLexiconRequestBody:
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    

@dataclasses.dataclass
class PutLexiconRequest:
    headers: PutLexiconHeaders = dataclasses.field()
    path_params: PutLexiconPathParams = dataclasses.field()
    request: PutLexiconRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutLexiconResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_lexicon_exception: Optional[Any] = dataclasses.field(default=None)
    lexicon_size_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    max_lexeme_length_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    max_lexicons_number_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    put_lexicon_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_failure_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_pls_alphabet_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_pls_language_exception: Optional[Any] = dataclasses.field(default=None)
    
