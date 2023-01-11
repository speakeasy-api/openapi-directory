import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import code_scanning_analysis_tool as shared_code_scanning_analysis_tool


@dataclass_json
@dataclasses.dataclass
class CodeScanningAnalysis:
    analysis_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysis_key') }})
    commit_sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_sha') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletable') }})
    environment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ref: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    results_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results_count') }})
    rules_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules_count') }})
    sarif_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sarif_id') }})
    tool: shared_code_scanning_analysis_tool.CodeScanningAnalysisTool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tool') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
