import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import externalevaluation as shared_externalevaluation


@dataclass_json
@dataclasses.dataclass
class PutExternalEvaluationRequest:
    config_rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    external_evaluation: shared_externalevaluation.ExternalEvaluation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalEvaluation') }})
    
