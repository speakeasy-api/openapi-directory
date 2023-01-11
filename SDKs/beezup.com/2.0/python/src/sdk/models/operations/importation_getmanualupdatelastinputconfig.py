import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import lastmanualimportinputconfiguration as shared_lastmanualimportinputconfiguration


@dataclasses.dataclass
class ImportationGetManualUpdateLastInputConfigPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationGetManualUpdateLastInputConfigRequest:
    path_params: ImportationGetManualUpdateLastInputConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportationGetManualUpdateLastInputConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    last_manual_import_input_configuration: Optional[shared_lastmanualimportinputconfiguration.LastManualImportInputConfiguration] = dataclasses.field(default=None)
    
