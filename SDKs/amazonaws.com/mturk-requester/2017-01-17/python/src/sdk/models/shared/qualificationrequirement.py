import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hitaccessactions_enum as shared_hitaccessactions_enum
from ..shared import comparator_enum as shared_comparator_enum
from ..shared import locale as shared_locale


@dataclass_json
@dataclasses.dataclass
class QualificationRequirement:
    r"""QualificationRequirement
     The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results. 
    """
    
    comparator: shared_comparator_enum.ComparatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comparator') }})
    qualification_type_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    actions_guarded: Optional[shared_hitaccessactions_enum.HitAccessActionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionsGuarded') }})
    integer_values: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerValues') }})
    locale_values: Optional[list[shared_locale.Locale]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocaleValues') }})
    required_to_preview: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredToPreview') }})
    
