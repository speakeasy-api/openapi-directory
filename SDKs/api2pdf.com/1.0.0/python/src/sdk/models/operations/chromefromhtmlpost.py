import dataclasses
from typing import Optional
from ..shared import chromehtmltopdfrequest as shared_chromehtmltopdfrequest
from ..shared import apiresponsefailure as shared_apiresponsefailure
from ..shared import apiresponsesuccess as shared_apiresponsesuccess


@dataclasses.dataclass
class ChromeFromHTMLPostRequest:
    request: Optional[shared_chromehtmltopdfrequest.ChromeHTMLToPdfRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChromeFromHTMLPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response_failure: Optional[shared_apiresponsefailure.APIResponseFailure] = dataclasses.field(default=None)
    api_response_success: Optional[shared_apiresponsesuccess.APIResponseSuccess] = dataclasses.field(default=None)
    
