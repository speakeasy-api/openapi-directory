"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import productattachmentapimodel as shared_productattachmentapimodel
from ..shared import productcouponapimodel as shared_productcouponapimodel
from ..shared import productdiscountapimodel as shared_productdiscountapimodel
from ..shared import productgatewayapimodel as shared_productgatewayapimodel
from ..shared import productitemapimodel as shared_productitemapimodel
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ProductCreateAPIModelStatusEnum(str, Enum):
    r"""Product availability status"""
    ACTIVE = 'Active'
    NOT_AVAILABLE = 'NotAvailable'
    INACTIVE = 'Inactive'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProductCreateAPIModel:
    
    after_payment_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AfterPaymentDescription'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'AfterPaymentDescription' }})
    r"""After payment description"""  
    attachments: Optional[list[shared_productattachmentapimodel.ProductAttachmentAPIModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Attachments'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'Attachments', 'json': True }})
    r"""List of product attachments"""  
    button_call_to_action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ButtonCallToAction'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'ButtonCallToAction' }})
    r"""Default button call to action
    Ex: Buy now, subscribe, ...
    """  
    coupons: Optional[list[shared_productcouponapimodel.ProductCouponAPIModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Coupons'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'Coupons', 'json': True }})
    r"""List of product coupons"""  
    currency_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CurrencyId'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'CurrencyId' }})
    r"""Foreign key Currency"""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'Description' }})
    r"""Product description"""  
    discounts: Optional[list[shared_productdiscountapimodel.ProductDiscountAPIModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Discounts'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'Discounts', 'json': True }})
    r"""List of product discounts"""  
    is_featured: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IsFeatured'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'IsFeatured' }})
    r"""Indicate that the product is set as featured"""  
    items: Optional[list[shared_productitemapimodel.ProductItemAPIModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Items'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'Items', 'json': True }})
    r"""List of product items"""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Name'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'Name' }})
    r"""Product alias"""  
    payment_gateways: Optional[list[shared_productgatewayapimodel.ProductGatewayAPIModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PaymentGateways'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'PaymentGateways', 'json': True }})
    r"""List of enabled payment gateways for this product"""  
    shipping_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ShippingAmount'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'ShippingAmount' }})
    r"""Cost for shipping the product"""  
    shipping_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ShippingDescription'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'ShippingDescription' }})
    r"""Client instructions for shipping"""  
    status: Optional[ProductCreateAPIModelStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Status'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'Status' }})
    r"""Product availability status"""  
    what_happens_next_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WhatHappensNextDescription'), 'exclude': lambda f: f is None }, 'form': { 'field_name': 'WhatHappensNextDescription' }})
    r"""What happens next description"""  
    