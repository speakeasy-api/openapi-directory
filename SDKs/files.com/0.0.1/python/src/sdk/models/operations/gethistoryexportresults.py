import dataclasses
from typing import Optional
from ..shared import historyexportresultentity as shared_historyexportresultentity


@dataclasses.dataclass
class GetHistoryExportResultsQueryParams:
    history_export_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'history_export_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHistoryExportResultsRequest:
    query_params: GetHistoryExportResultsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHistoryExportResultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    history_export_result_entities: Optional[list[shared_historyexportresultentity.HistoryExportResultEntity]] = dataclasses.field(default=None)
    
