import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SetMerchantOrderInfoRequest:
    order_merchant_e_commerce_software_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantECommerceSoftwareName') }})
    order_merchant_e_commerce_software_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantECommerceSoftwareVersion') }})
    order_merchant_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantOrderId') }})
    
