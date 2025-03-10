"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import failedworkspacechangerequest as shared_failedworkspacechangerequest
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TerminateWorkspacesResult:
    r"""Success"""
    
    failed_requests: Optional[list[shared_failedworkspacechangerequest.FailedWorkspaceChangeRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FailedRequests'), 'exclude': lambda f: f is None }})  
    