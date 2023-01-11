package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * An action to be performed when the <code>condition</code> is TRUE.
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clearTimer")
    public ClearTimerAction clearTimer;
    public Action withClearTimer(ClearTimerAction clearTimer) {
        this.clearTimer = clearTimer;
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
    @JsonProperty("firehose")
    public FirehoseAction firehose;
    public Action withFirehose(FirehoseAction firehose) {
        this.firehose = firehose;
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
    @JsonProperty("iotTopicPublish")
    public IotTopicPublishAction iotTopicPublish;
    public Action withIotTopicPublish(IotTopicPublishAction iotTopicPublish) {
        this.iotTopicPublish = iotTopicPublish;
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
    @JsonProperty("resetTimer")
    public ResetTimerAction resetTimer;
    public Action withResetTimer(ResetTimerAction resetTimer) {
        this.resetTimer = resetTimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setTimer")
    public SetTimerAction setTimer;
    public Action withSetTimer(SetTimerAction setTimer) {
        this.setTimer = setTimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setVariable")
    public SetVariableAction setVariable;
    public Action withSetVariable(SetVariableAction setVariable) {
        this.setVariable = setVariable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sns")
    public SnsTopicPublishAction sns;
    public Action withSns(SnsTopicPublishAction sns) {
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
}