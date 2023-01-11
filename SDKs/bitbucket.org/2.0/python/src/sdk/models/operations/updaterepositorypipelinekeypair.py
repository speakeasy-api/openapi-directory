import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class UpdateRepositoryPipelineKeyPairPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRepositoryPipelineKeyPairRequest:
    path_params: UpdateRepositoryPipelineKeyPairPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRepositoryPipelineKeyPairResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_ssh_key_pair: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
