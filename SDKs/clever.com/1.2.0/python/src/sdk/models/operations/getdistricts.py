import dataclasses
from typing import Optional
from ..shared import districtsresponse as shared_districtsresponse


@dataclasses.dataclass
class GetDistrictsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    districts_response: Optional[shared_districtsresponse.DistrictsResponse] = dataclasses.field(default=None)
    
