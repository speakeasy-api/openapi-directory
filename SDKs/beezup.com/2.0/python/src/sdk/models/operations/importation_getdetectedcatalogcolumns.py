import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import detectedcatalogcolumnlist as shared_detectedcatalogcolumnlist


@dataclasses.dataclass
class ImportationGetDetectedCatalogColumnsPathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationGetDetectedCatalogColumnsRequest:
    path_params: ImportationGetDetectedCatalogColumnsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportationGetDetectedCatalogColumnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    detected_catalog_column_list: Optional[shared_detectedcatalogcolumnlist.DetectedCatalogColumnList] = dataclasses.field(default=None)
    
