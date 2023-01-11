import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import labvendorlocation as shared_labvendorlocation


@dataclasses.dataclass
class SublabsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SublabsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class SublabsList200ApplicationJSON:
    r"""SublabsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_labvendorlocation.LabVendorLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class SublabsListRequest:
    query_params: SublabsListQueryParams = dataclasses.field()
    security: SublabsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SublabsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sublabs_list_200_application_json_object: Optional[SublabsList200ApplicationJSON] = dataclasses.field(default=None)
    
