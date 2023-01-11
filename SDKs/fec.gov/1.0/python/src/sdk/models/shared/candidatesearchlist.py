import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import candidatesearch as shared_candidatesearch


@dataclass_json
@dataclasses.dataclass
class CandidateSearchList:
    results: Optional[list[shared_candidatesearch.CandidateSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
