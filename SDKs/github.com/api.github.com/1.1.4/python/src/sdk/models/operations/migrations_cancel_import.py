import dataclasses



@dataclasses.dataclass
class MigrationsCancelImportPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsCancelImportRequest:
    path_params: MigrationsCancelImportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsCancelImportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
