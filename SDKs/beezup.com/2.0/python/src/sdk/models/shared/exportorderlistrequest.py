import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportorderlistformat_enum as shared_exportorderlistformat_enum
from ..shared import orderlistrequestwithoutpagination as shared_orderlistrequestwithoutpagination


@dataclass_json
@dataclasses.dataclass
class ExportOrderListRequest:
    r"""ExportOrderListRequest
    The message request to export order list. The store identifier is requested to regroup the exportations.
    """
    
    order_list_request_without_pagination: shared_orderlistrequestwithoutpagination.OrderListRequestWithoutPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderListRequestWithoutPagination') }})
    store_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeId') }})
    format: Optional[shared_exportorderlistformat_enum.ExportOrderListFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    
