import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EntityRecognizerDocuments:
    r"""EntityRecognizerDocuments
    Describes the training documents submitted with an entity recognizer.
    """
    
    s3_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
