import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import voicetemplateresponse as shared_voicetemplateresponse


@dataclass_json
@dataclasses.dataclass
class GetVoiceTemplateResponse:
    voice_template_response: shared_voicetemplateresponse.VoiceTemplateResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceTemplateResponse') }})
    
