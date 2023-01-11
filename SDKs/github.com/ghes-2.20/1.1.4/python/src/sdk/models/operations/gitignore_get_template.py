import dataclasses
from typing import Optional
from ..shared import gitignore_template as shared_gitignore_template


@dataclasses.dataclass
class GitignoreGetTemplatePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GitignoreGetTemplateRequest:
    path_params: GitignoreGetTemplatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GitignoreGetTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    gitignore_template: Optional[shared_gitignore_template.GitignoreTemplate] = dataclasses.field(default=None)
    
