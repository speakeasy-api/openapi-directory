import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standardsstatus_enum as shared_standardsstatus_enum


@dataclass_json
@dataclasses.dataclass
class StandardsSubscription:
    r"""StandardsSubscription
    A resource that represents your subscription to a supported standard.
    """
    
    standards_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsArn') }})
    standards_input: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsInput') }})
    standards_status: shared_standardsstatus_enum.StandardsStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsStatus') }})
    standards_subscription_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsSubscriptionArn') }})
    
