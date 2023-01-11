import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pullrequeststatusenum_enum as shared_pullrequeststatusenum_enum


@dataclass_json
@dataclasses.dataclass
class PullRequestStatusChangedEventMetadata:
    r"""PullRequestStatusChangedEventMetadata
    Information about a change to the status of a pull request.
    """
    
    pull_request_status: Optional[shared_pullrequeststatusenum_enum.PullRequestStatusEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestStatus') }})
    
