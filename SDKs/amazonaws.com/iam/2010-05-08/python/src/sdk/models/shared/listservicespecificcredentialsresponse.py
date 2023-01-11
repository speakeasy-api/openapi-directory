import dataclasses
from typing import Optional
from ..shared import servicespecificcredentialmetadata as shared_servicespecificcredentialmetadata


@dataclasses.dataclass
class ListServiceSpecificCredentialsResponse:
    service_specific_credentials: Optional[list[shared_servicespecificcredentialmetadata.ServiceSpecificCredentialMetadata]] = dataclasses.field(default=None)
    
