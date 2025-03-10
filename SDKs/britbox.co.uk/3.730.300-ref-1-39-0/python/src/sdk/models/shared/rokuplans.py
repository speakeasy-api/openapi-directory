"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import rokuplanlistitem as shared_rokuplanlistitem
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RokuPlans:
    r"""Details of available Roku plans."""
    
    plans: list[shared_rokuplanlistitem.RokuPlanListItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('plans') }})
    r"""The list of available plans."""  
    terms_and_conditions: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('termsAndConditions') }})
    r"""Details of terms and conditions of the plan."""  
    