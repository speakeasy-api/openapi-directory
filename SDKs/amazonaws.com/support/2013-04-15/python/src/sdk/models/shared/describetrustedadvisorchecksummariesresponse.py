"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import trustedadvisorchecksummary as shared_trustedadvisorchecksummary
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeTrustedAdvisorCheckSummariesResponse:
    r"""The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation."""
    
    summaries: list[shared_trustedadvisorchecksummary.TrustedAdvisorCheckSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('summaries') }})  
    