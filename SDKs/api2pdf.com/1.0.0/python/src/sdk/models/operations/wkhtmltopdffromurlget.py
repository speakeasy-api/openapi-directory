import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiresponsefailure as shared_apiresponsefailure
from ..shared import apiresponsesuccess as shared_apiresponsesuccess


@dataclasses.dataclass
class WkhtmltopdfFromURLGetQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    output: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class WkhtmltopdfFromURLGetSecurity:
    query_api_key: shared_security.SchemeQueryAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class WkhtmltopdfFromURLGetRequest:
    query_params: WkhtmltopdfFromURLGetQueryParams = dataclasses.field()
    security: WkhtmltopdfFromURLGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WkhtmltopdfFromURLGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response_failure: Optional[shared_apiresponsefailure.APIResponseFailure] = dataclasses.field(default=None)
    api_response_success: Optional[shared_apiresponsesuccess.APIResponseSuccess] = dataclasses.field(default=None)
    wkhtmltopdf_from_url_get_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
