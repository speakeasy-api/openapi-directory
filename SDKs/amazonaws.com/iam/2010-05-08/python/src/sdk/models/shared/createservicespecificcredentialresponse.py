import dataclasses
from typing import Optional
from ..shared import servicespecificcredential as shared_servicespecificcredential


@dataclasses.dataclass
class CreateServiceSpecificCredentialResponse:
    service_specific_credential: Optional[shared_servicespecificcredential.ServiceSpecificCredential] = dataclasses.field(default=None)
    
