import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchalarmaction as shared_cloudwatchalarmaction
from ..shared import cloudwatchlogsaction as shared_cloudwatchlogsaction
from ..shared import cloudwatchmetricaction as shared_cloudwatchmetricaction
from ..shared import dynamodbaction as shared_dynamodbaction
from ..shared import dynamodbv2action as shared_dynamodbv2action
from ..shared import elasticsearchaction as shared_elasticsearchaction
from ..shared import firehoseaction as shared_firehoseaction
from ..shared import httpaction as shared_httpaction
from ..shared import iotanalyticsaction as shared_iotanalyticsaction
from ..shared import ioteventsaction as shared_ioteventsaction
from ..shared import iotsitewiseaction as shared_iotsitewiseaction
from ..shared import kafkaaction as shared_kafkaaction
from ..shared import kinesisaction as shared_kinesisaction
from ..shared import lambdaaction as shared_lambdaaction
from ..shared import opensearchaction as shared_opensearchaction
from ..shared import republishaction as shared_republishaction
from ..shared import s3action as shared_s3action
from ..shared import salesforceaction as shared_salesforceaction
from ..shared import snsaction as shared_snsaction
from ..shared import sqsaction as shared_sqsaction
from ..shared import stepfunctionsaction as shared_stepfunctionsaction
from ..shared import timestreamaction as shared_timestreamaction


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    Describes the actions associated with a rule.
    """
    
    cloudwatch_alarm: Optional[shared_cloudwatchalarmaction.CloudwatchAlarmAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudwatchAlarm') }})
    cloudwatch_logs: Optional[shared_cloudwatchlogsaction.CloudwatchLogsAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudwatchLogs') }})
    cloudwatch_metric: Optional[shared_cloudwatchmetricaction.CloudwatchMetricAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudwatchMetric') }})
    dynamo_db: Optional[shared_dynamodbaction.DynamoDbAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamoDB') }})
    dynamo_d_bv2: Optional[shared_dynamodbv2action.DynamoDBv2Action] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamoDBv2') }})
    elasticsearch: Optional[shared_elasticsearchaction.ElasticsearchAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticsearch') }})
    firehose: Optional[shared_firehoseaction.FirehoseAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firehose') }})
    http: Optional[shared_httpaction.HTTPAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    iot_analytics: Optional[shared_iotanalyticsaction.IotAnalyticsAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotAnalytics') }})
    iot_events: Optional[shared_ioteventsaction.IotEventsAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotEvents') }})
    iot_site_wise: Optional[shared_iotsitewiseaction.IotSiteWiseAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWise') }})
    kafka: Optional[shared_kafkaaction.KafkaAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafka') }})
    kinesis: Optional[shared_kinesisaction.KinesisAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kinesis') }})
    lambda_: Optional[shared_lambdaaction.LambdaAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambda') }})
    open_search: Optional[shared_opensearchaction.OpenSearchAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openSearch') }})
    republish: Optional[shared_republishaction.RepublishAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('republish') }})
    s3: Optional[shared_s3action.S3Action] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    salesforce: Optional[shared_salesforceaction.SalesforceAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesforce') }})
    sns: Optional[shared_snsaction.SnsAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sns') }})
    sqs: Optional[shared_sqsaction.SqsAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqs') }})
    step_functions: Optional[shared_stepfunctionsaction.StepFunctionsAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepFunctions') }})
    timestream: Optional[shared_timestreamaction.TimestreamAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestream') }})
    
