"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import remediationexecutionstatus as shared_remediationexecutionstatus
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeRemediationExecutionStatusResponse:
    r"""Success"""
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NextToken'), 'exclude': lambda f: f is None }})  
    remediation_execution_statuses: Optional[list[shared_remediationexecutionstatus.RemediationExecutionStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RemediationExecutionStatuses'), 'exclude': lambda f: f is None }})  
    