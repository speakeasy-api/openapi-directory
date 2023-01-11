import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiocodecoptions as shared_audiocodecoptions


@dataclass_json
@dataclasses.dataclass
class AudioParameters:
    r"""AudioParameters
    Parameters required for transcoding audio.
    """
    
    audio_packing_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioPackingMode') }})
    bit_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BitRate') }})
    channels: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Channels') }})
    codec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Codec') }})
    codec_options: Optional[shared_audiocodecoptions.AudioCodecOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodecOptions') }})
    sample_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleRate') }})
    
