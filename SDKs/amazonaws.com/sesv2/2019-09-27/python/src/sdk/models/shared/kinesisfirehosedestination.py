import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class KinesisFirehoseDestination:
    r"""KinesisFirehoseDestination
    An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
    """
    
    delivery_stream_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamArn') }})
    iam_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    
