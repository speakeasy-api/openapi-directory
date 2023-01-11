import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import statuscall as shared_statuscall


@dataclasses.dataclass
class StatusCallAPIV1StatusCallGetQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StatusCallAPIV1StatusCallGetRequest:
    query_params: StatusCallAPIV1StatusCallGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StatusCallAPIV1StatusCallGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    status_call: Optional[shared_statuscall.StatusCall] = dataclasses.field(default=None)
    
