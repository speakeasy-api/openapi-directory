import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateDatasetGroupRequest:
    dataset_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetArns') }})
    dataset_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetGroupArn') }})
    
