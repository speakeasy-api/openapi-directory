import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NotificationChannel:
    r"""NotificationChannel
    The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. 
    """
    
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    sns_topic_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SNSTopicArn') }})
    
