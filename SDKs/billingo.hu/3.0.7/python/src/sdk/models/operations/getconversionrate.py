import dataclasses
from typing import Optional
from enum import Enum
from ..shared import currency_enum as shared_currency_enum
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import conversationrate as shared_conversationrate
from ..shared import servererrorresponse as shared_servererrorresponse
from ..shared import validationerrorresponse as shared_validationerrorresponse


@dataclasses.dataclass
class GetConversionRateQueryParams:
    from_: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConversionRateRequest:
    query_params: GetConversionRateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConversionRateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    conversation_rate: Optional[shared_conversationrate.ConversationRate] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    validation_error_response: Optional[shared_validationerrorresponse.ValidationErrorResponse] = dataclasses.field(default=None)
    
