import dataclasses
from typing import Optional
from ..shared import genericresponse as shared_genericresponse
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class RevokeSubUserKeyRevokeSubUserKeyPutQueryParams:
    api_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    sub_user_key_uuid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'subUserKeyUUID', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RevokeSubUserKeyRevokeSubUserKeyPutRequest:
    query_params: RevokeSubUserKeyRevokeSubUserKeyPutQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RevokeSubUserKeyRevokeSubUserKeyPutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    generic_response: Optional[shared_genericresponse.GenericResponse] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
