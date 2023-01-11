import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import links_importation_getimportationmonitoringlink as shared_links_importation_getimportationmonitoringlink


@dataclasses.dataclass
class AutoStartAutoImportPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AutoStartAutoImportRequest:
    path_params: AutoStartAutoImportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AutoStartAutoImportResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    links_importation_get_importation_monitoring_link: Optional[shared_links_importation_getimportationmonitoringlink.LinksImportationGetImportationMonitoringLink] = dataclasses.field(default=None)
    
