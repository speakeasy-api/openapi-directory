import dataclasses
from typing import Optional
from ..shared import memodel as shared_memodel


@dataclasses.dataclass
class GetMeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    me_model: Optional[shared_memodel.MeModel] = dataclasses.field(default=None)
    
