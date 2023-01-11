import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facesearchsettings as shared_facesearchsettings


@dataclass_json
@dataclasses.dataclass
class StreamProcessorSettings:
    r"""StreamProcessorSettings
    Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
    """
    
    face_search: Optional[shared_facesearchsettings.FaceSearchSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceSearch') }})
    
