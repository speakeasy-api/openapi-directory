import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PublishFindingToSnsParams:
    r"""PublishFindingToSnsParams
    Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
    """
    
    topic_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicArn') }})
    
