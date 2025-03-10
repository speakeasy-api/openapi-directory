"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import compareoptions_enum as shared_compareoptions_enum
from ..shared import duplicateproductvaluestrategy_enum as shared_duplicateproductvaluestrategy_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DuplicateProductValueConfiguration:
    r"""Describe how you want to manage the duplication of the product value"""
    
    compare_options: shared_compareoptions_enum.CompareOptionsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('compareOptions') }})
    r"""Indicate how the product sku are compared for the duplication check."""  
    strategy: shared_duplicateproductvaluestrategy_enum.DuplicateProductValueStrategyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('strategy') }})
    r"""Indicate the duplicate product sku strategy."""  
    