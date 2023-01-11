import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventresponse as shared_eventresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetEventsQueryParams:
    resource: str = dataclasses.field(metadata={'query_param': { 'field_name': 'resource', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    sync: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sync', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetEvents200ApplicationJSON:
    r"""GetEvents200ApplicationJSON
    The full record for all events that have occurred since the sync token was created.
    """
    
    data: Optional[list[shared_eventresponse.EventResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    sync: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sync') }})
    

@dataclasses.dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_events_200_application_json_object: Optional[GetEvents200ApplicationJSON] = dataclasses.field(default=None)
    
