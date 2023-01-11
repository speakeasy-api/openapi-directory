import dataclasses
from typing import Optional
from ..shared import filemigrationentity as shared_filemigrationentity


@dataclasses.dataclass
class GetFileMigrationsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFileMigrationsIDRequest:
    path_params: GetFileMigrationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFileMigrationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_migration_entity: Optional[shared_filemigrationentity.FileMigrationEntity] = dataclasses.field(default=None)
    
