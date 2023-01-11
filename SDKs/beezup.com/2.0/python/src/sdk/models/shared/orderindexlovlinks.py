import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3


@dataclass_json
@dataclasses.dataclass
class OrderIndexLovLinks:
    r"""OrderIndexLovLinks
    Gives you all the LOV to get the translations realated to operation name, codes, property names and statuses.
    """
    
    order_change_business_operation_type: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderChangeBusinessOperationType') }})
    order_property: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderProperty') }})
    order_property_posted: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderPropertyPosted') }})
    order_state: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderState') }})
    
