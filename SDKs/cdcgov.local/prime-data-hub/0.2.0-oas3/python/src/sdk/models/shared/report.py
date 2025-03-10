"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import destination as shared_destination
from ..shared import detail as shared_detail
from ..shared import itemrouting as shared_itemrouting
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Report:
    r"""OK"""
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""the id for the report assigned by the Hub"""  
    destination_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('destinationCount'), 'exclude': lambda f: f is None }})
    r"""total destinations recieving the report(s)"""  
    destinations: Optional[list[shared_destination.Destination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('destinations'), 'exclude': lambda f: f is None }})
    r"""where the report is being sent to"""  
    error_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorCount'), 'exclude': lambda f: f is None }})
    r"""total errors found during initial validation.  There may be multiple errors per item."""  
    errors: Optional[list[shared_detail.Detail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errors'), 'exclude': lambda f: f is None }})
    r"""a list of errors in the report"""  
    report_item_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reportItemCount'), 'exclude': lambda f: f is None }})
    r"""total number of individual reports sent to the Hub (in a csv, the number of data lines sent)"""  
    routing: Optional[list[shared_itemrouting.ItemRouting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('routing'), 'exclude': lambda f: f is None }})
    r"""The receiver destination names for each item in the report. This is displayed when verbose=true is present on the query string."""  
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timestamp'), 'exclude': lambda f: f is None }})
    r"""the timestamp for this report submission"""  
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('topic'), 'exclude': lambda f: f is None }})
    r"""the topic configured for the client organization sender"""  
    warning_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('warningCount'), 'exclude': lambda f: f is None }})
    r"""total warnings found during initial validation.  There may be multiple warnings per item."""  
    warnings: Optional[list[shared_detail.Detail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('warnings'), 'exclude': lambda f: f is None }})
    r"""a list of warnings in the report"""  
    