import dataclasses
from typing import Optional
from ..shared import porter_large_file as shared_porter_large_file


@dataclasses.dataclass
class MigrationsGetLargeFilesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsGetLargeFilesRequest:
    path_params: MigrationsGetLargeFilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsGetLargeFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    porter_large_files: Optional[list[shared_porter_large_file.PorterLargeFile]] = dataclasses.field(default=None)
    
