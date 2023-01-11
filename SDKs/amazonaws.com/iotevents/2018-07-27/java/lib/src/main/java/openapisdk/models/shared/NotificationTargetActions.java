package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationTargetActions
 * Specifies an AWS Lambda function to manage alarm notifications. You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.
**/
public class NotificationTargetActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaAction")
    public LambdaAction lambdaAction;
    public NotificationTargetActions withLambdaAction(LambdaAction lambdaAction) {
        this.lambdaAction = lambdaAction;
        return this;
    }
}