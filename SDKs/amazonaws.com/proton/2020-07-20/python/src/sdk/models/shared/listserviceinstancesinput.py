"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import listserviceinstancesfilter as shared_listserviceinstancesfilter
from ..shared import listserviceinstancessortby_enum as shared_listserviceinstancessortby_enum
from ..shared import sortorder_enum as shared_sortorder_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListServiceInstancesInput:
    
    filters: Optional[list[shared_listserviceinstancesfilter.ListServiceInstancesFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('filters'), 'exclude': lambda f: f is None }})  
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maxResults'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextToken'), 'exclude': lambda f: f is None }})  
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('serviceName'), 'exclude': lambda f: f is None }})  
    sort_by: Optional[shared_listserviceinstancessortby_enum.ListServiceInstancesSortByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sortBy'), 'exclude': lambda f: f is None }})  
    sort_order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sortOrder'), 'exclude': lambda f: f is None }})  
    