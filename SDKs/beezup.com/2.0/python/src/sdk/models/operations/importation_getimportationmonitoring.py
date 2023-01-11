import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import importationmonitoring as shared_importationmonitoring


@dataclasses.dataclass
class ImportationGetImportationMonitoringPathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationGetImportationMonitoringRequest:
    path_params: ImportationGetImportationMonitoringPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportationGetImportationMonitoringResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    importation_monitoring: Optional[shared_importationmonitoring.ImportationMonitoring] = dataclasses.field(default=None)
    
