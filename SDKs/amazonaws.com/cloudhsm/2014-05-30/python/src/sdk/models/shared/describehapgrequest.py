import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeHapgRequest:
    r"""DescribeHapgRequest
    Contains the inputs for the <a>DescribeHapg</a> action.
    """
    
    hapg_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgArn') }})
    
