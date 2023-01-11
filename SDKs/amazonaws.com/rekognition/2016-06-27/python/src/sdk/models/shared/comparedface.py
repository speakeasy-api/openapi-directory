import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import boundingbox as shared_boundingbox
from ..shared import emotion as shared_emotion
from ..shared import landmark as shared_landmark
from ..shared import pose as shared_pose
from ..shared import imagequality as shared_imagequality
from ..shared import smile as shared_smile


@dataclass_json
@dataclasses.dataclass
class ComparedFace:
    r"""ComparedFace
    Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.
    """
    
    bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    emotions: Optional[list[shared_emotion.Emotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Emotions') }})
    landmarks: Optional[list[shared_landmark.Landmark]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Landmarks') }})
    pose: Optional[shared_pose.Pose] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pose') }})
    quality: Optional[shared_imagequality.ImageQuality] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quality') }})
    smile: Optional[shared_smile.Smile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Smile') }})
    
