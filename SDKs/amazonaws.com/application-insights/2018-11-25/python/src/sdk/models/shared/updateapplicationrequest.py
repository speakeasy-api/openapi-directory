import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateApplicationRequest:
    resource_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    cwe_monitor_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CWEMonitorEnabled') }})
    ops_center_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsCenterEnabled') }})
    ops_item_sns_topic_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsItemSNSTopicArn') }})
    remove_sns_topic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveSNSTopic') }})
    
