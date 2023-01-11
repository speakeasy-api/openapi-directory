import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridvpcconfig as shared_testgridvpcconfig


@dataclass_json
@dataclasses.dataclass
class UpdateTestGridProjectRequest:
    project_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vpc_config: Optional[shared_testgridvpcconfig.TestGridVpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
