import dataclasses
from typing import Optional
from ..shared import genericresponse as shared_genericresponse
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class VinDecodeVinDecodeGetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    vin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    include_recall: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeRecall', 'style': 'form', 'explode': True }})
    pass_empty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'passEmpty', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VinDecodeVinDecodeGetRequest:
    query_params: VinDecodeVinDecodeGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VinDecodeVinDecodeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    generic_response: Optional[shared_genericresponse.GenericResponse] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
