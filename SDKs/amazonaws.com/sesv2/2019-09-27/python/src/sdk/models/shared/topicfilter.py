import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TopicFilter:
    r"""TopicFilter
    Used for filtering by a specific topic preference.
    """
    
    topic_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    use_default_if_preference_unavailable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseDefaultIfPreferenceUnavailable') }})
    
