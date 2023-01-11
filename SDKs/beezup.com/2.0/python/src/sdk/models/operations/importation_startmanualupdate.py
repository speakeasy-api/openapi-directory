import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import startmanualimportrequest as shared_startmanualimportrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import importalreadyinprogressresponse as shared_importalreadyinprogressresponse
from ..shared import links_importation_getimportationmonitoringlink as shared_links_importation_getimportationmonitoringlink


@dataclasses.dataclass
class ImportationStartManualUpdatePathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationStartManualUpdateRequest:
    path_params: ImportationStartManualUpdatePathParams = dataclasses.field()
    request: shared_startmanualimportrequest.StartManualImportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ImportationStartManualUpdateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    import_already_in_progress_response: Optional[shared_importalreadyinprogressresponse.ImportAlreadyInProgressResponse] = dataclasses.field(default=None)
    links_importation_get_importation_monitoring_link: Optional[shared_links_importation_getimportationmonitoringlink.LinksImportationGetImportationMonitoringLink] = dataclasses.field(default=None)
    
