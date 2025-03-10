"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import standardscontrolassociationsummary as shared_standardscontrolassociationsummary
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListStandardsControlAssociationsResponse:
    r"""Success"""
    
    standards_control_association_summaries: list[shared_standardscontrolassociationsummary.StandardsControlAssociationSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StandardsControlAssociationSummaries') }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NextToken'), 'exclude': lambda f: f is None }})  
    