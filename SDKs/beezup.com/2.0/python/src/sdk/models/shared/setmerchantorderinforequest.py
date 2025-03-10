"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SetMerchantOrderInfoRequest:
    
    order_merchant_e_commerce_software_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('order_MerchantECommerceSoftwareName') }})
    r"""The e-commerce software name of the merchant"""  
    order_merchant_e_commerce_software_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('order_MerchantECommerceSoftwareVersion') }})
    r"""The e-commece software version of the merchant"""  
    order_merchant_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('order_MerchantOrderId') }})
    r"""The order merchant identifier"""  
    