"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import billbee_interfaces_billbeeapi_model_productimage as shared_billbee_interfaces_billbeeapi_model_productimage
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BillbeeInterfacesBillbeeAPIModelSoldProductInput:
    
    billbee_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BillbeeId'), 'exclude': lambda f: f is None }})
    r"""The Billbee internal id of the linked product"""  
    country_of_origin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CountryOfOrigin'), 'exclude': lambda f: f is None }})
    r"""The country where this article was made"""  
    ean: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EAN'), 'exclude': lambda f: f is None }})
    r"""The EAN / GTIN of this product"""  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Id'), 'exclude': lambda f: f is None }})
    r"""The id of this product in the external system"""  
    images: Optional[list[shared_billbee_interfaces_billbeeapi_model_productimage.BillbeeInterfacesBillbeeAPIModelProductImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Images'), 'exclude': lambda f: f is None }})
    r"""The images of this product"""  
    is_digital: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IsDigital'), 'exclude': lambda f: f is None }})
    r"""True if the product is a digital good (download etc.), false if not"""  
    old_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OldId'), 'exclude': lambda f: f is None }})
    r"""This is for migration scenarios when the internal id of a product changes
    I.E. Etsy when switching to the new inventory management, the ids for variants will change.
    """  
    platform_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PlatformData'), 'exclude': lambda f: f is None }})
    r"""Optional platform specific Data as serialized JSON Object for the product"""  
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SKU'), 'exclude': lambda f: f is None }})
    r"""The SKU of this product"""  
    taric_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TARICCode'), 'exclude': lambda f: f is None }})
    r"""The TARIC code"""  
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Title'), 'exclude': lambda f: f is None }})
    r"""The name of this product"""  
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Type'), 'exclude': lambda f: f is None }})
    r"""Indicates whether the article is 1 = normal or 2 = BOM"""  
    weight: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Weight'), 'exclude': lambda f: f is None }})
    r"""Weight of one item in gram"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BillbeeInterfacesBillbeeAPIModelSoldProduct:
    
    billbee_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BillbeeId'), 'exclude': lambda f: f is None }})
    r"""The Billbee internal id of the linked product"""  
    country_of_origin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CountryOfOrigin'), 'exclude': lambda f: f is None }})
    r"""The country where this article was made"""  
    ean: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EAN'), 'exclude': lambda f: f is None }})
    r"""The EAN / GTIN of this product"""  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Id'), 'exclude': lambda f: f is None }})
    r"""The id of this product in the external system"""  
    images: Optional[list[shared_billbee_interfaces_billbeeapi_model_productimage.BillbeeInterfacesBillbeeAPIModelProductImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Images'), 'exclude': lambda f: f is None }})
    r"""The images of this product"""  
    is_digital: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IsDigital'), 'exclude': lambda f: f is None }})
    r"""True if the product is a digital good (download etc.), false if not"""  
    old_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OldId'), 'exclude': lambda f: f is None }})
    r"""This is for migration scenarios when the internal id of a product changes
    I.E. Etsy when switching to the new inventory management, the ids for variants will change.
    """  
    platform_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PlatformData'), 'exclude': lambda f: f is None }})
    r"""Optional platform specific Data as serialized JSON Object for the product"""  
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SKU'), 'exclude': lambda f: f is None }})
    r"""The SKU of this product"""  
    sku_or_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SkuOrId'), 'exclude': lambda f: f is None }})
    r"""The SKU of this product or the id if the SKU is empty"""  
    taric_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TARICCode'), 'exclude': lambda f: f is None }})
    r"""The TARIC code"""  
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Title'), 'exclude': lambda f: f is None }})
    r"""The name of this product"""  
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Type'), 'exclude': lambda f: f is None }})
    r"""Indicates whether the article is 1 = normal or 2 = BOM"""  
    weight: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Weight'), 'exclude': lambda f: f is None }})
    r"""Weight of one item in gram"""  
    