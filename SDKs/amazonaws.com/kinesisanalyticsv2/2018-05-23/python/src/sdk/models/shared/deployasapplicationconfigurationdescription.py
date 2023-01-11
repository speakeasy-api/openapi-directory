import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3contentbaselocationdescription as shared_s3contentbaselocationdescription


@dataclass_json
@dataclasses.dataclass
class DeployAsApplicationConfigurationDescription:
    r"""DeployAsApplicationConfigurationDescription
    The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
    """
    
    s3_content_location_description: shared_s3contentbaselocationdescription.S3ContentBaseLocationDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocationDescription') }})
    
