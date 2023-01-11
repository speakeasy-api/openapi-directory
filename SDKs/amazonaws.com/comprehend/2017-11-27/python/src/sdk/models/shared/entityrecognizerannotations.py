import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EntityRecognizerAnnotations:
    r"""EntityRecognizerAnnotations
    Describes the annotations associated with a entity recognizer.
    """
    
    s3_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
