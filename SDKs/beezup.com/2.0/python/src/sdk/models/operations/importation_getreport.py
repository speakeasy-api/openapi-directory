import dataclasses
from typing import Optional
from ..shared import getimportationreportresponse as shared_getimportationreportresponse


@dataclasses.dataclass
class ImportationGetReportPathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationGetReportRequest:
    path_params: ImportationGetReportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportationGetReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_importation_report_response: Optional[shared_getimportationreportresponse.GetImportationReportResponse] = dataclasses.field(default=None)
    
