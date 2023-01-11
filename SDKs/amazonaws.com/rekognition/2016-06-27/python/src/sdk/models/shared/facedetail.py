import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agerange as shared_agerange
from ..shared import beard as shared_beard
from ..shared import boundingbox as shared_boundingbox
from ..shared import emotion as shared_emotion
from ..shared import eyeglasses as shared_eyeglasses
from ..shared import eyeopen as shared_eyeopen
from ..shared import gender as shared_gender
from ..shared import landmark as shared_landmark
from ..shared import mouthopen as shared_mouthopen
from ..shared import mustache as shared_mustache
from ..shared import pose as shared_pose
from ..shared import imagequality as shared_imagequality
from ..shared import smile as shared_smile
from ..shared import sunglasses as shared_sunglasses


@dataclass_json
@dataclasses.dataclass
class FaceDetail:
    r"""FaceDetail
    <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
    """
    
    age_range: Optional[shared_agerange.AgeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgeRange') }})
    beard: Optional[shared_beard.Beard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beard') }})
    bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    emotions: Optional[list[shared_emotion.Emotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Emotions') }})
    eyeglasses: Optional[shared_eyeglasses.Eyeglasses] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Eyeglasses') }})
    eyes_open: Optional[shared_eyeopen.EyeOpen] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EyesOpen') }})
    gender: Optional[shared_gender.Gender] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    landmarks: Optional[list[shared_landmark.Landmark]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Landmarks') }})
    mouth_open: Optional[shared_mouthopen.MouthOpen] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MouthOpen') }})
    mustache: Optional[shared_mustache.Mustache] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mustache') }})
    pose: Optional[shared_pose.Pose] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pose') }})
    quality: Optional[shared_imagequality.ImageQuality] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quality') }})
    smile: Optional[shared_smile.Smile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Smile') }})
    sunglasses: Optional[shared_sunglasses.Sunglasses] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sunglasses') }})
    
