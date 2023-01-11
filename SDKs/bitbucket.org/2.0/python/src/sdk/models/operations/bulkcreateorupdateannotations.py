import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class BulkCreateOrUpdateAnnotationsPathParams:
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BulkCreateOrUpdateAnnotationsRequest:
    path_params: BulkCreateOrUpdateAnnotationsPathParams = dataclasses.field()
    request: list[dict[str, Any]] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BulkCreateOrUpdateAnnotationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report_annotations: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
