import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3bucketlogdestination as shared_s3bucketlogdestination


@dataclass_json
@dataclasses.dataclass
class AudioLogDestination:
    r"""AudioLogDestination
    The location of audio log files collected when conversation logging is enabled for a bot.
    """
    
    s3_bucket: shared_s3bucketlogdestination.S3BucketLogDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    
