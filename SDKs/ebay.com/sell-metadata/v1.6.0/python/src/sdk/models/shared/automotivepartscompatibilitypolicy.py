"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AutomotivePartsCompatibilityPolicy:
    
    category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('categoryId'), 'exclude': lambda f: f is None }})
    r"""The category ID to which the automotive-parts-compatibility policies apply."""  
    category_tree_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('categoryTreeId'), 'exclude': lambda f: f is None }})
    r"""A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    <br><br>A <i>category tree</i> is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique <b>categoryId</b> value. Within a category tree, the root node has no parent node and <i>leaf nodes</i> are nodes that have no child nodes."""  
    compatibility_based_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('compatibilityBasedOn'), 'exclude': lambda f: f is None }})
    r"""Indicates whether the category supports parts compatibility by either <code>ASSEMBLY</code> or by <code>SPECIFICATION</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:CompatibilityTypeEnum'>eBay API documentation</a>"""  
    compatible_vehicle_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('compatibleVehicleTypes'), 'exclude': lambda f: f is None }})
    r"""Indicates the compatibility classification of the part based on high-level vehicle types."""  
    max_number_of_compatible_vehicles: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maxNumberOfCompatibleVehicles'), 'exclude': lambda f: f is None }})
    r"""Specifies the maximum number of compatible vehicle-applications allowed per item."""  
    