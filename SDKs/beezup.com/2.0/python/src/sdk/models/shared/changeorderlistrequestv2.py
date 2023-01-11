import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changeorderlistrequestitemv2 as shared_changeorderlistrequestitemv2


@dataclass_json
@dataclasses.dataclass
class ChangeOrderListRequestV2:
    r"""ChangeOrderListRequestV2
    Contains all change order operations you want to make.  (max 100 items per call)
    """
    
    change_orders: list[shared_changeorderlistrequestitemv2.ChangeOrderListRequestItemV2] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeOrders') }})
    
