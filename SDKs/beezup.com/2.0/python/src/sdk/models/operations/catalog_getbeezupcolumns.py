import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import beezupcolumnconfiguration as shared_beezupcolumnconfiguration


@dataclasses.dataclass
class CatalogGetBeezUpColumnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    beez_up_column_configurations: Optional[list[shared_beezupcolumnconfiguration.BeezUpColumnConfiguration]] = dataclasses.field(default=None)
    
