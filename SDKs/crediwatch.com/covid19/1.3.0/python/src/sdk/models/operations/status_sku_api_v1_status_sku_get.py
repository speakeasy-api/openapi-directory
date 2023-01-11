import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import statuscall as shared_statuscall


@dataclasses.dataclass
class StatusSkuAPIV1StatusSkuGetQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StatusSkuAPIV1StatusSkuGetRequest:
    query_params: StatusSkuAPIV1StatusSkuGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StatusSkuAPIV1StatusSkuGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    status_call: Optional[shared_statuscall.StatusCall] = dataclasses.field(default=None)
    
