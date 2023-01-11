import dataclasses
from typing import Any,Optional
from ..shared import getimportationproductsreportrequest as shared_getimportationproductsreportrequest


@dataclasses.dataclass
class ImportationGetProductsReportPathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationGetProductsReportRequest:
    path_params: ImportationGetProductsReportPathParams = dataclasses.field()
    request: shared_getimportationproductsreportrequest.GetImportationProductsReportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ImportationGetProductsReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_importation_products_report_response: Optional[Any] = dataclasses.field(default=None)
    
