import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import importationcustomcolumnlist as shared_importationcustomcolumnlist


@dataclasses.dataclass
class ImportationGetCustomColumnsPathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationGetCustomColumnsRequest:
    path_params: ImportationGetCustomColumnsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportationGetCustomColumnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    importation_custom_column_list: Optional[shared_importationcustomcolumnlist.ImportationCustomColumnList] = dataclasses.field(default=None)
    
