import dataclasses
from typing import Optional
from ..shared import historyexportentity as shared_historyexportentity


@dataclasses.dataclass
class GetHistoryExportsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHistoryExportsIDRequest:
    path_params: GetHistoryExportsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHistoryExportsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    history_export_entity: Optional[shared_historyexportentity.HistoryExportEntity] = dataclasses.field(default=None)
    
