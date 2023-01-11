import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samplingtargetdocument as shared_samplingtargetdocument
from ..shared import unprocessedstatistics as shared_unprocessedstatistics


@dataclass_json
@dataclasses.dataclass
class GetSamplingTargetsResult:
    last_rule_modification: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRuleModification'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sampling_target_documents: Optional[list[shared_samplingtargetdocument.SamplingTargetDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingTargetDocuments') }})
    unprocessed_statistics: Optional[list[shared_unprocessedstatistics.UnprocessedStatistics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedStatistics') }})
    
