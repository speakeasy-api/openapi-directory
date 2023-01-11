package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * Describes the actions associated with a rule.
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudwatchAlarm")
    public CloudwatchAlarmAction cloudwatchAlarm;
    public Action withCloudwatchAlarm(CloudwatchAlarmAction cloudwatchAlarm) {
        this.cloudwatchAlarm = cloudwatchAlarm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudwatchLogs")
    public CloudwatchLogsAction cloudwatchLogs;
    public Action withCloudwatchLogs(CloudwatchLogsAction cloudwatchLogs) {
        this.cloudwatchLogs = cloudwatchLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudwatchMetric")
    public CloudwatchMetricAction cloudwatchMetric;
    public Action withCloudwatchMetric(CloudwatchMetricAction cloudwatchMetric) {
        this.cloudwatchMetric = cloudwatchMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamoDB")
    public DynamoDbAction dynamoDB;
    public Action withDynamoDb(DynamoDbAction dynamoDB) {
        this.dynamoDB = dynamoDB;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamoDBv2")
    public DynamoDBv2Action dynamoDBv2;
    public Action withDynamoDBv2(DynamoDBv2Action dynamoDBv2) {
        this.dynamoDBv2 = dynamoDBv2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elasticsearch")
    public ElasticsearchAction elasticsearch;
    public Action withElasticsearch(ElasticsearchAction elasticsearch) {
        this.elasticsearch = elasticsearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firehose")
    public FirehoseAction firehose;
    public Action withFirehose(FirehoseAction firehose) {
        this.firehose = firehose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public HttpAction http;
    public Action withHttp(HttpAction http) {
        this.http = http;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotAnalytics")
    public IotAnalyticsAction iotAnalytics;
    public Action withIotAnalytics(IotAnalyticsAction iotAnalytics) {
        this.iotAnalytics = iotAnalytics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotEvents")
    public IotEventsAction iotEvents;
    public Action withIotEvents(IotEventsAction iotEvents) {
        this.iotEvents = iotEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotSiteWise")
    public IotSiteWiseAction iotSiteWise;
    public Action withIotSiteWise(IotSiteWiseAction iotSiteWise) {
        this.iotSiteWise = iotSiteWise;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kafka")
    public KafkaAction kafka;
    public Action withKafka(KafkaAction kafka) {
        this.kafka = kafka;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kinesis")
    public KinesisAction kinesis;
    public Action withKinesis(KinesisAction kinesis) {
        this.kinesis = kinesis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambda")
    public LambdaAction lambda;
    public Action withLambda(LambdaAction lambda) {
        this.lambda = lambda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openSearch")
    public OpenSearchAction openSearch;
    public Action withOpenSearch(OpenSearchAction openSearch) {
        this.openSearch = openSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("republish")
    public RepublishAction republish;
    public Action withRepublish(RepublishAction republish) {
        this.republish = republish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3")
    public S3Action s3;
    public Action withS3(S3Action s3) {
        this.s3 = s3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesforce")
    public SalesforceAction salesforce;
    public Action withSalesforce(SalesforceAction salesforce) {
        this.salesforce = salesforce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sns")
    public SnsAction sns;
    public Action withSns(SnsAction sns) {
        this.sns = sns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqs")
    public SqsAction sqs;
    public Action withSqs(SqsAction sqs) {
        this.sqs = sqs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepFunctions")
    public StepFunctionsAction stepFunctions;
    public Action withStepFunctions(StepFunctionsAction stepFunctions) {
        this.stepFunctions = stepFunctions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestream")
    public TimestreamAction timestream;
    public Action withTimestream(TimestreamAction timestream) {
        this.timestream = timestream;
        return this;
    }
}