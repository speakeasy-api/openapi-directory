import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awssecurityfindingidentifier as shared_awssecurityfindingidentifier
from ..shared import batchupdatefindingsunprocessedfinding as shared_batchupdatefindingsunprocessedfinding


@dataclass_json
@dataclasses.dataclass
class BatchUpdateFindingsResponse:
    processed_findings: list[shared_awssecurityfindingidentifier.AwsSecurityFindingIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessedFindings') }})
    unprocessed_findings: list[shared_batchupdatefindingsunprocessedfinding.BatchUpdateFindingsUnprocessedFinding] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedFindings') }})
    
