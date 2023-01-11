import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changeorderlistrequestitem as shared_changeorderlistrequestitem


@dataclass_json
@dataclasses.dataclass
class ChangeOrderListRequest:
    r"""ChangeOrderListRequest
    Contains all change order operations you want to make.  (max 100 items per call)
    """
    
    change_orders: list[shared_changeorderlistrequestitem.ChangeOrderListRequestItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeOrders') }})
    
