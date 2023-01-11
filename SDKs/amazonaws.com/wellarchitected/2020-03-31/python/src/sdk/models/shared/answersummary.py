import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import choiceanswersummary as shared_choiceanswersummary
from ..shared import choice as shared_choice
from ..shared import answerreason_enum as shared_answerreason_enum
from ..shared import risk_enum as shared_risk_enum


@dataclass_json
@dataclasses.dataclass
class AnswerSummary:
    r"""AnswerSummary
    An answer summary of a lens review in a workload.
    """
    
    choice_answer_summaries: Optional[list[shared_choiceanswersummary.ChoiceAnswerSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChoiceAnswerSummaries') }})
    choices: Optional[list[shared_choice.Choice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Choices') }})
    is_applicable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsApplicable') }})
    pillar_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarId') }})
    question_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionId') }})
    question_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionTitle') }})
    reason: Optional[shared_answerreason_enum.AnswerReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    risk: Optional[shared_risk_enum.RiskEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    selected_choices: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectedChoices') }})
    
