import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VpcConfigurationUpdate:
    r"""VpcConfigurationUpdate
    Describes updates to the VPC configuration used by the application.
    """
    
    vpc_configuration_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationId') }})
    security_group_id_updates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIdUpdates') }})
    subnet_id_updates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIdUpdates') }})
    
