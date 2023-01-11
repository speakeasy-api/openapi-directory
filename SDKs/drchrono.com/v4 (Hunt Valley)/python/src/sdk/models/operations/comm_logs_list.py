import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import phonecalllog as shared_phonecalllog


@dataclasses.dataclass
class CommLogsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CommLogsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CommLogsList200ApplicationJSON:
    r"""CommLogsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_phonecalllog.PhoneCallLog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class CommLogsListRequest:
    query_params: CommLogsListQueryParams = dataclasses.field()
    security: CommLogsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CommLogsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comm_logs_list_200_application_json_object: Optional[CommLogsList200ApplicationJSON] = dataclasses.field(default=None)
    
