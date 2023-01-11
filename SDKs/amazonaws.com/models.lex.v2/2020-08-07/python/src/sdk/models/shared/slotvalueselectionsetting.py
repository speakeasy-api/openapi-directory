import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slotvalueregexfilter as shared_slotvalueregexfilter
from ..shared import slotvalueresolutionstrategy_enum as shared_slotvalueresolutionstrategy_enum


@dataclass_json
@dataclasses.dataclass
class SlotValueSelectionSetting:
    r"""SlotValueSelectionSetting
    Contains settings used by Amazon Lex to select a slot value.
    """
    
    resolution_strategy: shared_slotvalueresolutionstrategy_enum.SlotValueResolutionStrategyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStrategy') }})
    regex_filter: Optional[shared_slotvalueregexfilter.SlotValueRegexFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexFilter') }})
    
