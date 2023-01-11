import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import actionentity as shared_actionentity


@dataclasses.dataclass
class HistoryListForFilePathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class HistoryListForFileQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    display: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'display', 'style': 'form', 'explode': True }})
    end_at: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_at', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    start_at: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_at', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class HistoryListForFileRequest:
    path_params: HistoryListForFilePathParams = dataclasses.field()
    query_params: HistoryListForFileQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class HistoryListForFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_entities: Optional[list[shared_actionentity.ActionEntity]] = dataclasses.field(default=None)
    
