package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlarmAction
 * Specifies one of the following actions to receive notifications when the alarm state changes.
**/
public class AlarmAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamoDB")
    public DynamoDbAction dynamoDB;
    public AlarmAction withDynamoDb(DynamoDbAction dynamoDB) {
        this.dynamoDB = dynamoDB;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamoDBv2")
    public DynamoDBv2Action dynamoDBv2;
    public AlarmAction withDynamoDBv2(DynamoDBv2Action dynamoDBv2) {
        this.dynamoDBv2 = dynamoDBv2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firehose")
    public FirehoseAction firehose;
    public AlarmAction withFirehose(FirehoseAction firehose) {
        this.firehose = firehose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotEvents")
    public IotEventsAction iotEvents;
    public AlarmAction withIotEvents(IotEventsAction iotEvents) {
        this.iotEvents = iotEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotSiteWise")
    public IotSiteWiseAction iotSiteWise;
    public AlarmAction withIotSiteWise(IotSiteWiseAction iotSiteWise) {
        this.iotSiteWise = iotSiteWise;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotTopicPublish")
    public IotTopicPublishAction iotTopicPublish;
    public AlarmAction withIotTopicPublish(IotTopicPublishAction iotTopicPublish) {
        this.iotTopicPublish = iotTopicPublish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambda")
    public LambdaAction lambda;
    public AlarmAction withLambda(LambdaAction lambda) {
        this.lambda = lambda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sns")
    public SnsTopicPublishAction sns;
    public AlarmAction withSns(SnsTopicPublishAction sns) {
        this.sns = sns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqs")
    public SqsAction sqs;
    public AlarmAction withSqs(SqsAction sqs) {
        this.sqs = sqs;
        return this;
    }
}