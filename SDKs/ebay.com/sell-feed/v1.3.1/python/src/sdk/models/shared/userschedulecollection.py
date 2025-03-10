"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import userscheduleresponse as shared_userscheduleresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UserScheduleCollection:
    r"""The type that defines the fields for a paginated result set of user schedules. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items."""
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('href'), 'exclude': lambda f: f is None }})
    r"""The path to the call URI that produced the current page of results."""  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('limit'), 'exclude': lambda f: f is None }})
    r"""The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of schedules to return per page, from the result set. A result set is the complete set of schedules returned by the method. <p> <span class=\\"tablenote\\"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.<p> <span class=\\"tablenote\\"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getSchedules</strong> calls to view all tasks matching the input criteria.</span></p></span></p>"""  
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('next'), 'exclude': lambda f: f is None }})
    r"""The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set."""  
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('offset'), 'exclude': lambda f: f is None }})
    r"""The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class=\\"tablenote\\"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>"""  
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('prev'), 'exclude': lambda f: f is None }})
    r"""The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set."""  
    schedules: Optional[list[shared_userscheduleresponse.UserScheduleResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('schedules'), 'exclude': lambda f: f is None }})
    r"""An array of the schedules on this page. An empty array is returned if the filter criteria excludes all tasks."""  
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total'), 'exclude': lambda f: f is None }})
    r"""The total number of schedules that match the input criteria."""  
    