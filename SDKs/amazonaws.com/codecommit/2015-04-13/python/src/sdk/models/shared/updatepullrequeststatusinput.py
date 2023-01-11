import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pullrequeststatusenum_enum as shared_pullrequeststatusenum_enum


@dataclass_json
@dataclasses.dataclass
class UpdatePullRequestStatusInput:
    pull_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    pull_request_status: shared_pullrequeststatusenum_enum.PullRequestStatusEnumEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestStatus') }})
    
