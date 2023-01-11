import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import setmerchantorderinfolistrequestitem as shared_setmerchantorderinfolistrequestitem


@dataclass_json
@dataclasses.dataclass
class SetMerchantOrderInfoListRequest:
    order_merchant_e_commerce_software_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantECommerceSoftwareName') }})
    order_merchant_e_commerce_software_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantECommerceSoftwareVersion') }})
    orders: list[shared_setmerchantorderinfolistrequestitem.SetMerchantOrderInfoListRequestItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    
