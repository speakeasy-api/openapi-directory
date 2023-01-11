import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import importationtechnicalprogression as shared_importationtechnicalprogression


@dataclasses.dataclass
class ImportationTechnicalProgressionPathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationTechnicalProgressionRequest:
    path_params: ImportationTechnicalProgressionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportationTechnicalProgressionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    importation_technical_progression: Optional[shared_importationtechnicalprogression.ImportationTechnicalProgression] = dataclasses.field(default=None)
    
