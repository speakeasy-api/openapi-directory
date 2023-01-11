import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import filteroperator as shared_filteroperator


@dataclasses.dataclass
class GetChannelCatalogFilterOperatorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    filter_operators: Optional[list[shared_filteroperator.FilterOperator]] = dataclasses.field(default=None)
    
