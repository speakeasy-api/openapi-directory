import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3contentbaselocation as shared_s3contentbaselocation


@dataclass_json
@dataclasses.dataclass
class DeployAsApplicationConfiguration:
    r"""DeployAsApplicationConfiguration
    The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state..
    """
    
    s3_content_location: shared_s3contentbaselocation.S3ContentBaseLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocation') }})
    
