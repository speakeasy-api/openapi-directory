import dataclasses
from typing import Optional
from ..shared import wkhtmltopdfhtmltopdfrequest as shared_wkhtmltopdfhtmltopdfrequest
from ..shared import apiresponsefailure as shared_apiresponsefailure
from ..shared import apiresponsesuccess as shared_apiresponsesuccess


@dataclasses.dataclass
class WkhtmltopdfFromHTMLPostRequest:
    request: Optional[shared_wkhtmltopdfhtmltopdfrequest.WkHTMLToPdfHTMLToPdfRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WkhtmltopdfFromHTMLPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response_failure: Optional[shared_apiresponsefailure.APIResponseFailure] = dataclasses.field(default=None)
    api_response_success: Optional[shared_apiresponsesuccess.APIResponseSuccess] = dataclasses.field(default=None)
    
