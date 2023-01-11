import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class UpdateRepositoryPipelineKnownHostPathParams:
    known_host_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'known_host_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRepositoryPipelineKnownHostRequest:
    path_params: UpdateRepositoryPipelineKnownHostPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRepositoryPipelineKnownHostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_known_host: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
