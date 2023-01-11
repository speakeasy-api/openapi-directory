import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import license as shared_license


@dataclasses.dataclass
class LicensesGetPathParams:
    license: str = dataclasses.field(metadata={'path_param': { 'field_name': 'license', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LicensesGetRequest:
    path_params: LicensesGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LicensesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    license: Optional[shared_license.License] = dataclasses.field(default=None)
    
