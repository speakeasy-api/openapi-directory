import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import import_ as shared_import_


@dataclasses.dataclass
class MigrationsGetImportStatusPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsGetImportStatusRequest:
    path_params: MigrationsGetImportStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsGetImportStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    import_: Optional[shared_import_.Import] = dataclasses.field(default=None)
    
