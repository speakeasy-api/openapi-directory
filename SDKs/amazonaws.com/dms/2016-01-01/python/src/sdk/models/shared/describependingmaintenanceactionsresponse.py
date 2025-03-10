"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import resourcependingmaintenanceactions as shared_resourcependingmaintenanceactions
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribePendingMaintenanceActionsResponse:
    r"""<p/>"""
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Marker'), 'exclude': lambda f: f is None }})  
    pending_maintenance_actions: Optional[list[shared_resourcependingmaintenanceactions.ResourcePendingMaintenanceActions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PendingMaintenanceActions'), 'exclude': lambda f: f is None }})  
    