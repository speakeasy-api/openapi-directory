import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ModelSettings:
    r"""ModelSettings
    The object used to call your custom language model to your transcription job.
    """
    
    language_model_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageModelName') }})
    
