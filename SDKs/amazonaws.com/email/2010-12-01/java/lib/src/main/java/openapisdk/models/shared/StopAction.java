package openapisdk.models.shared;



/**
 * StopAction
 * <p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p>
**/
public class StopAction {
    public StopScopeEnum scope;
    public StopAction withScope(StopScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    public String topicArn;
    public StopAction withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
}