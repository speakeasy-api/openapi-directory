import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cleartimeraction as shared_cleartimeraction
from ..shared import dynamodbaction as shared_dynamodbaction
from ..shared import dynamodbv2action as shared_dynamodbv2action
from ..shared import firehoseaction as shared_firehoseaction
from ..shared import ioteventsaction as shared_ioteventsaction
from ..shared import iotsitewiseaction as shared_iotsitewiseaction
from ..shared import iottopicpublishaction as shared_iottopicpublishaction
from ..shared import lambdaaction as shared_lambdaaction
from ..shared import resettimeraction as shared_resettimeraction
from ..shared import settimeraction as shared_settimeraction
from ..shared import setvariableaction as shared_setvariableaction
from ..shared import snstopicpublishaction as shared_snstopicpublishaction
from ..shared import sqsaction as shared_sqsaction


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    An action to be performed when the <code>condition</code> is TRUE.
    """
    
    clear_timer: Optional[shared_cleartimeraction.ClearTimerAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearTimer') }})
    dynamo_db: Optional[shared_dynamodbaction.DynamoDbAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamoDB') }})
    dynamo_d_bv2: Optional[shared_dynamodbv2action.DynamoDBv2Action] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamoDBv2') }})
    firehose: Optional[shared_firehoseaction.FirehoseAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firehose') }})
    iot_events: Optional[shared_ioteventsaction.IotEventsAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotEvents') }})
    iot_site_wise: Optional[shared_iotsitewiseaction.IotSiteWiseAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWise') }})
    iot_topic_publish: Optional[shared_iottopicpublishaction.IotTopicPublishAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotTopicPublish') }})
    lambda_: Optional[shared_lambdaaction.LambdaAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambda') }})
    reset_timer: Optional[shared_resettimeraction.ResetTimerAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetTimer') }})
    set_timer: Optional[shared_settimeraction.SetTimerAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setTimer') }})
    set_variable: Optional[shared_setvariableaction.SetVariableAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setVariable') }})
    sns: Optional[shared_snstopicpublishaction.SnsTopicPublishAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sns') }})
    sqs: Optional[shared_sqsaction.SqsAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqs') }})
    
