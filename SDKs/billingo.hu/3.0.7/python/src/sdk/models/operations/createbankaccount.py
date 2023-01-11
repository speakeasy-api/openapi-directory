import dataclasses
from typing import Optional
from ..shared import bankaccount as shared_bankaccount
from ..shared import bankaccount as shared_bankaccount
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import servererrorresponse as shared_servererrorresponse
from ..shared import validationerrorresponse as shared_validationerrorresponse


@dataclasses.dataclass
class CreateBankAccountRequest:
    request: shared_bankaccount.BankAccountInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBankAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_account: Optional[shared_bankaccount.BankAccount] = dataclasses.field(default=None)
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    validation_error_response: Optional[shared_validationerrorresponse.ValidationErrorResponse] = dataclasses.field(default=None)
    
