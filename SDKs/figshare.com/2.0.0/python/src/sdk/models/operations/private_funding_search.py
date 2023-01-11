import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fundingsearch as shared_fundingsearch
from ..shared import errormessage as shared_errormessage
from ..shared import fundinginformation as shared_fundinginformation


@dataclasses.dataclass
class PrivateFundingSearchSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateFundingSearchRequest:
    security: PrivateFundingSearchSecurity = dataclasses.field()
    request: Optional[shared_fundingsearch.FundingSearch] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PrivateFundingSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    funding_informations: Optional[list[shared_fundinginformation.FundingInformation]] = dataclasses.field(default=None)
    
