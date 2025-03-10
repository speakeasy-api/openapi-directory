"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import datevariablerequest as shared_datevariablerequest
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProjectTemplateInstantiateProjectRequest:
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""The name of the new project."""  
    public: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('public') }})
    r"""Sets the project to public to its team."""  
    is_strict: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_strict'), 'exclude': lambda f: f is None }})
    r"""*Optional*. If set to `true`, the endpoint returns an \\"Unprocessable Entity\\" error if you fail to provide a calendar date value for any date variable. If set to `false`, a default date is used for each unfulfilled date variable (e.g., the current date is used as the Start Date of a project)."""  
    requested_dates: Optional[list[shared_datevariablerequest.DateVariableRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requested_dates'), 'exclude': lambda f: f is None }})
    r"""Array of mappings of date variables to calendar dates."""  
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('team'), 'exclude': lambda f: f is None }})
    r"""*Conditional*. Sets the team of the new project. If the project template exists in an _organization_, you must specify a value for `team` and not `workspace`."""  
    workspace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('workspace'), 'exclude': lambda f: f is None }})
    r"""*Conditional*. Sets the workspace of the new project. If the project template exists in a _workspace_, you must specify a value for `workspace` and not `team`."""  
    