import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import choiceanswer as shared_choiceanswer
from ..shared import choice as shared_choice
from ..shared import answerreason_enum as shared_answerreason_enum
from ..shared import risk_enum as shared_risk_enum


@dataclass_json
@dataclasses.dataclass
class Answer:
    r"""Answer
    An answer of the question.
    """
    
    choice_answers: Optional[list[shared_choiceanswer.ChoiceAnswer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChoiceAnswers') }})
    choices: Optional[list[shared_choice.Choice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Choices') }})
    helpful_resource_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HelpfulResourceUrl') }})
    improvement_plan_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImprovementPlanUrl') }})
    is_applicable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsApplicable') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    pillar_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarId') }})
    question_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionDescription') }})
    question_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionId') }})
    question_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionTitle') }})
    reason: Optional[shared_answerreason_enum.AnswerReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    risk: Optional[shared_risk_enum.RiskEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    selected_choices: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectedChoices') }})
    
