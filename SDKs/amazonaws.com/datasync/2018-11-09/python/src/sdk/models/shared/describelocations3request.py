import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeLocationS3Request:
    r"""DescribeLocationS3Request
    DescribeLocationS3Request
    """
    
    location_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    
