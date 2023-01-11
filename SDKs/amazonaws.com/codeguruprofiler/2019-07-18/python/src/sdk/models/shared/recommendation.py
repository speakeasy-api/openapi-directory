import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pattern as shared_pattern
from ..shared import match as shared_match


@dataclass_json
@dataclasses.dataclass
class Recommendation:
    r"""Recommendation
    A potential improvement that was found from analyzing the profiling data.
    """
    
    all_matches_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allMatchesCount') }})
    all_matches_sum: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allMatchesSum') }})
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pattern: shared_pattern.Pattern = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    top_matches: list[shared_match.Match] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topMatches') }})
    
