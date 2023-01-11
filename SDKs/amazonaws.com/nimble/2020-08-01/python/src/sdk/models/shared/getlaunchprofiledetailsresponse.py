import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofile as shared_launchprofile
from ..shared import streamingimage as shared_streamingimage
from ..shared import studiocomponentsummary as shared_studiocomponentsummary


@dataclass_json
@dataclasses.dataclass
class GetLaunchProfileDetailsResponse:
    launch_profile: Optional[shared_launchprofile.LaunchProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfile') }})
    streaming_images: Optional[list[shared_streamingimage.StreamingImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingImages') }})
    studio_component_summaries: Optional[list[shared_studiocomponentsummary.StudioComponentSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentSummaries') }})
    
